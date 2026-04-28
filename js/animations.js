// Scroll reveal
const obs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Skill bars
const skillsRoot = document.getElementById('skills');
const sObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {
    skillsRoot.querySelectorAll('.skill__bar-fill').forEach((f, i) => {
      setTimeout(() => f.style.width = f.dataset.val + '%', i * 80);
    });
    sObs.disconnect();
  }
}), { threshold: 0.25 });
if (skillsRoot) sObs.observe(skillsRoot);

// Philosophy word-by-word scroll reveal
const philo = document.getElementById('philo');
if (philo) {
  const words = philo.querySelectorAll('.word');
  function lightWords() {
    const r = philo.getBoundingClientRect();
    const winH = window.innerHeight;
    const start = winH * 0.95;
    const end = -winH * 0.5;
    const progress = Math.min(1, Math.max(0, (start - r.top) / (start - end)));
    const lit = Math.floor(progress * words.length);
    words.forEach((w, i) => w.classList.toggle('lit', i < lit));
  }
  window.addEventListener('scroll', lightWords, { passive: true });
  lightWords();
}

// Live clock
const clock = document.getElementById('clock');
function updateClock() {
  const t = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  clock.textContent = t + ' · BOURGES';
}
setInterval(updateClock, 1000);
updateClock();
