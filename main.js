// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.getElementById('mobile-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', ()=>{
  nav.classList.toggle('show');
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !expanded);
});
