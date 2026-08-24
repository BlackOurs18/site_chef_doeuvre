/* Mobile navigation — hamburger drawer combining page links and in-page section jumps */
(function () {
  const hdr = document.querySelector('.hdr');
  if (!hdr) return;

  const root = document.documentElement;
  const nav = hdr.querySelector('.nav');
  const sections = Array.from(document.querySelectorAll('main [data-nav][id]'));

  /* ── Header height exposed to CSS (anchor offsets, drawer padding) ──
     Measured after the burger is in place and again once webfonts settle,
     otherwise every anchor lands a few pixels under the header. */
  let lastH = 0;

  function setHdrH() {
    const h = hdr.offsetHeight;
    if (h === lastH) return;
    lastH = h;
    root.style.setProperty('--hdr-h', h + 'px');
    // Let the report strip re-measure its own offsets against the new height
    window.dispatchEvent(new Event('resize'));
  }

  window.addEventListener('resize', setHdrH, { passive: true });

  /* ── Burger button ── */
  const burger = document.createElement('button');
  burger.type = 'button';
  burger.className = 'burger';
  burger.id = 'burger';
  burger.setAttribute('aria-label', 'Ouvrir le menu');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'mnav');
  burger.innerHTML = '<span class="burger__box" aria-hidden="true"><span></span><span></span><span></span></span>';
  hdr.appendChild(burger);

  setHdrH();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setHdrH);
  if (window.ResizeObserver) new ResizeObserver(setHdrH).observe(hdr);

  /* ── Drawer ── */
  const panel = document.createElement('div');
  panel.className = 'mnav';
  panel.id = 'mnav';
  panel.setAttribute('aria-hidden', 'true');
  panel.setAttribute('aria-labelledby', 'burger');

  const inner = document.createElement('div');
  inner.className = 'mnav__inner';
  panel.appendChild(inner);
  document.body.appendChild(panel);

  function addGroup(title) {
    const g = document.createElement('nav');
    g.className = 'mnav__group';
    g.setAttribute('aria-label', title);
    const h = document.createElement('p');
    h.className = 'mnav__grouptitle';
    h.textContent = title;
    g.appendChild(h);
    const list = document.createElement('ul');
    list.className = 'mnav__list';
    g.appendChild(list);
    inner.appendChild(g);
    return list;
  }

  /* ── Group 1: sections of the current page ── */
  const secLinks = [];
  if (sections.length > 1) {
    const list = addGroup('Sur cette page');
    sections.forEach(function (sec, i) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'mnav__sec';
      a.href = '#' + sec.id;
      a.innerHTML =
        '<span class="mnav__num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="mnav__lbl"></span>' +
        '<span class="mnav__hash" aria-hidden="true">#</span>';
      a.querySelector('.mnav__lbl').textContent = sec.dataset.nav;
      li.appendChild(a);
      list.appendChild(li);
      secLinks.push(a);
    });
  }

  /* ── Group 2: site pages, mirrored from the desktop nav ── */
  const here = (location.pathname.split('/').pop() || 'index.html');

  function pageItem(href, label, cls) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = cls;
    a.href = href;
    a.textContent = label;
    const file = href.split('#')[0].split('/').pop();
    if (file && file === here) a.setAttribute('aria-current', 'page');
    li.appendChild(a);
    return li;
  }

  // On the home page the top-level nav points at sections already listed above,
  // so those entries become plain captions instead of duplicate links.
  const listedIds = sections.map(function (s) { return s.id; });

  function isRedundant(href) {
    return href.charAt(0) === '#' && listedIds.indexOf(href.slice(1)) !== -1;
  }

  function caption(label) {
    const li = document.createElement('li');
    li.className = 'mnav__cap';
    li.textContent = label;
    return li;
  }

  if (nav) {
    const list = addGroup('Navigation');
    Array.from(nav.children).forEach(function (child) {
      if (child.matches('a')) {
        const href = child.getAttribute('href');
        if (isRedundant(href)) return;
        list.appendChild(pageItem(href, child.textContent.trim(), 'mnav__page'));
        return;
      }
      if (!child.matches('.nav__item')) return;

      const parent = child.querySelector('.nav__parent');
      const subs = Array.from(child.querySelectorAll('.nav__drop a'));

      if (parent) {
        const href = parent.getAttribute('href');
        const label = parent.textContent.replace('▾', '').trim();
        if (!isRedundant(href)) list.appendChild(pageItem(href, label, 'mnav__page'));
        else if (subs.length) list.appendChild(caption(label));
      }

      subs.forEach(function (a) {
        list.appendChild(pageItem(a.getAttribute('href'), a.textContent.trim(), 'mnav__sub'));
      });
    });

    const legal = document.querySelector('.foot-bot a[href*="mentions"]');
    if (legal) list.appendChild(pageItem(legal.getAttribute('href'), legal.textContent.trim(), 'mnav__page'));
  }

  /* ── "#" permalink on every main section ── */
  sections.forEach(function (sec) {
    const host = sec.querySelector('.sec-eyebrow') ||
                 sec.querySelector('.sec-title') ||
                 sec.querySelector('.mission-detail__title');
    if (!host || host.querySelector('.sec-hash')) return;
    const a = document.createElement('a');
    a.className = 'sec-hash';
    a.href = '#' + sec.id;
    a.textContent = '#';
    a.setAttribute('aria-label', 'Lien vers la section ' + sec.dataset.nav);
    host.appendChild(a);
  });

  /* ── Flag tables that actually overflow so the scroll hint stays honest ── */
  const wraps = Array.from(document.querySelectorAll('.rpt-table-wrap'));

  function flagScrollables() {
    wraps.forEach(function (w) {
      w.classList.toggle('is-scrollable', w.scrollWidth > w.clientWidth + 2);
    });
  }

  if (wraps.length) {
    flagScrollables();
    window.addEventListener('resize', flagScrollables, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(flagScrollables);
  }

  /* ── Anchor targets must not drift ──
     .reveal blocks sit 40px lower until they animate in. Jumping to one would
     land 40px off, so the target is settled into its final position first. */
  function settleReveals(el) {
    const list = [];
    if (el.classList.contains('reveal')) list.push(el);
    el.querySelectorAll('.reveal').forEach(function (r) { list.push(r); });
    list.forEach(function (r) {
      if (r.classList.contains('in')) return;
      r.style.transition = 'none';
      r.classList.add('in');
      void r.offsetWidth;
      r.style.transition = '';
    });
  }

  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) settleReveals(target);
  }, true);

  if (location.hash.length > 1) {
    const deep = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (deep) {
      settleReveals(deep);
      window.addEventListener('load', function () {
        deep.scrollIntoView();
      });
    }
  }

  /* ── Open / close ── */
  let isOpen = false;

  function setOpen(v) {
    if (v === isOpen) return;
    isOpen = v;
    root.classList.toggle('nav-open', v);
    panel.classList.toggle('is-open', v);
    burger.classList.toggle('is-open', v);
    burger.setAttribute('aria-expanded', String(v));
    burger.setAttribute('aria-label', v ? 'Fermer le menu' : 'Ouvrir le menu');
    panel.setAttribute('aria-hidden', String(!v));
    if (v) {
      hdr.classList.remove('hdr--hidden');
      syncActive();
      const first = panel.querySelector('a');
      if (first) first.focus({ preventScroll: true });
    } else {
      burger.focus({ preventScroll: true });
    }
  }

  burger.addEventListener('click', function () { setOpen(!isOpen); });

  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }

    // Keep keyboard focus inside the drawer while it covers the page
    if (e.key !== 'Tab') return;
    const focusables = [burger].concat(Array.from(panel.querySelectorAll('a[href]')));
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (isOpen && window.innerWidth > 1024) setOpen(false);
  }, { passive: true });

  /* ── Which section are we in ── */
  function syncActive() {
    if (!secLinks.length) return;
    const offset = hdr.offsetHeight + 24;
    let idx = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top - offset <= 0) idx = i;
    }
    secLinks.forEach(function (a, i) {
      a.classList.toggle('is-current', i === idx);
      if (i === idx) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  let ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { syncActive(); ticking = false; });
  }, { passive: true });

  syncActive();
})();
