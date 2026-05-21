// Hide header on scroll down, show on scroll up
(function () {
  const hdr = document.querySelector('.hdr');
  if (!hdr) return;
  let lastY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        const y = window.scrollY;
        if (y > lastY && y > 80) {
          hdr.classList.add('hdr--hidden');
        } else {
          hdr.classList.remove('hdr--hidden');
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

// Scroll reveal
const obs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Skill bars — reset on exit, animate on enter from any direction
const skillsRoot = document.getElementById('skills');
if (skillsRoot) {
  const fills = skillsRoot.querySelectorAll('.skill__bar-fill');
  let timers = [];
  new IntersectionObserver(es => es.forEach(e => {
    timers.forEach(clearTimeout);
    timers = [];
    if (e.isIntersecting) {
      fills.forEach((f, i) => {
        timers.push(setTimeout(() => f.style.width = f.dataset.val + '%', i * 80));
      });
    } else {
      fills.forEach(f => f.style.width = '0');
    }
  }), { threshold: 0.25 }).observe(skillsRoot);
}

// Philosophy word-by-word scroll reveal
const philo = document.getElementById('philo');
if (philo) {
  const words = philo.querySelectorAll('.word');
  function lightWords() {
    const r = philo.getBoundingClientRect();
    const winH = window.innerHeight;
    const start = winH * 0.95;
    const end = winH * 0.4;
    const progress = Math.min(1, Math.max(0, (start - r.top) / (start - end)));
    const lit = Math.floor(progress * words.length);
    words.forEach((w, i) => w.classList.toggle('lit', i < lit));
  }
  window.addEventListener('scroll', lightWords, { passive: true });
  lightWords();
}

// Missions hover — 0.5s hold before reverse
document.querySelectorAll('.miss__row').forEach(row => {
  let leaveTimer = null;
  row.addEventListener('mouseenter', () => {
    clearTimeout(leaveTimer);
    row.classList.remove('is-leaving');
    row.classList.add('is-active');
  });
  row.addEventListener('mouseleave', () => {
    clearTimeout(leaveTimer);
    row.classList.remove('is-active');
    row.classList.add('is-leaving');
    leaveTimer = setTimeout(() => row.classList.remove('is-leaving'), 1100);
  });
});

// Live clock
const clock = document.getElementById('clock');
function updateClock() {
  const t = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  clock.textContent = t + ' · BOURGES';
}
setInterval(updateClock, 1000);
updateClock();
