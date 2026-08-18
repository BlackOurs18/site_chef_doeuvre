/* Report section navigation — sticky strip built from [data-nav] sections */
(function () {
  const sections = Array.from(document.querySelectorAll('main section[data-nav][id]'));
  if (sections.length < 2) return;

  const hdr = document.querySelector('.hdr');

  // Build the strip
  const nav = document.createElement('nav');
  nav.className = 'rptnav';
  nav.setAttribute('aria-label', 'Sections du rapport');

  const scroller = document.createElement('div');
  scroller.className = 'rptnav__scroll';

  const inner = document.createElement('div');
  inner.className = 'rptnav__inner';

  const links = sections.map(function (sec, i) {
    const a = document.createElement('a');
    a.className = 'rptnav__link';
    a.href = '#' + sec.id;
    a.innerHTML =
      '<span class="rptnav__num">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<span class="rptnav__lbl">' + sec.dataset.nav + '</span>';
    inner.appendChild(a);
    return a;
  });

  scroller.appendChild(inner);
  nav.appendChild(scroller);

  const prog = document.createElement('div');
  prog.className = 'rptnav__prog';
  const progBar = document.createElement('span');
  prog.appendChild(progBar);
  nav.appendChild(prog);

  document.body.appendChild(nav);

  // Offsets: strip sits right under the header, sections keep clear of both
  function measure() {
    const hdrH = hdr ? hdr.offsetHeight : 0;
    const navH = nav.offsetHeight;
    document.documentElement.style.setProperty('--hdr-h', hdrH + 'px');
    document.documentElement.style.setProperty('--rptnav-h', navH + 'px');
    sections.forEach(function (s) { s.style.scrollMarginTop = (hdrH + navH + 16) + 'px'; });
    return hdrH + navH + 24;
  }
  let spyOffset = measure();
  window.addEventListener('resize', function () { spyOffset = measure(); }, { passive: true });

  // Keep the active pill in view inside the horizontal scroller
  function centerActive(a) {
    if (scroller.scrollWidth <= scroller.clientWidth + 4) return;
    const target = a.offsetLeft - (scroller.clientWidth - a.offsetWidth) / 2;
    scroller.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }

  let current = -1;
  let ticking = false;

  function update() {
    const y = window.scrollY;

    // Show the strip only once the hero is behind us
    nav.classList.toggle('is-on', y > sections[0].offsetTop - spyOffset - 200);
    // Follow the header's hide-on-scroll-down behaviour
    nav.classList.toggle('rptnav--up', !!hdr && hdr.classList.contains('hdr--hidden'));

    // Read progress across the report body
    const start = sections[0].offsetTop;
    const last = sections[sections.length - 1];
    const end = last.offsetTop + last.offsetHeight - window.innerHeight;
    const p = end > start ? Math.min(1, Math.max(0, (y - start) / (end - start))) : 0;
    progBar.style.transform = 'scaleX(' + p + ')';

    // Active section = last one whose top has passed the offset
    let idx = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top - spyOffset <= 0) idx = i;
    }
    if (idx !== current) {
      if (current > -1) {
        links[current].classList.remove('is-current');
        links[current].removeAttribute('aria-current');
      }
      links[idx].classList.add('is-current');
      links[idx].setAttribute('aria-current', 'true');
      current = idx;
      centerActive(links[idx]);
    }

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });

  update();
})();
