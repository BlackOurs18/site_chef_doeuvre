const cur = document.getElementById('cur');
const lbl = cur.querySelector('.cur__lbl');
let mx = 0, my = 0, cx = 0, cy = 0;

window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function readLerp() {
  return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--energy-cursor-lerp')) || 0.18;
}

function tick() {
  const k = readLerp();
  cx += (mx - cx) * k;
  cy += (my - cy) * k;
  cur.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
  requestAnimationFrame(tick);
}
tick();

document.querySelectorAll('[data-cursor="lg"]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.classList.add('cur--lg');
    lbl.textContent = el.dataset.cursorLbl || 'View';
  });
  el.addEventListener('mouseleave', () => cur.classList.remove('cur--lg'));
});
