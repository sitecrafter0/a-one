// Set current year
document.getElementById('year')?.textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.getElementById('mobile-toggle');
const nav = document.querySelector('.main-nav');

if(toggle && nav){
  toggle.addEventListener('click', ()=>{
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('mobile-open');
  });

  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 900){
      nav.classList.remove('mobile-open');
      toggle.setAttribute('aria-expanded','false');
    }
  });
}

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const el = document.querySelector(a.getAttribute('href'));
    if(el) el.scrollIntoView({behavior:'smooth'});
  });
});
// Mobile nav toggle
const toggleBtn = document.getElementById('mobile-toggle');
const menu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggleBtn.setAttribute('aria-expanded', menu.classList.contains('active'));
});

// Auto year in footer
document.getElementById('year').textContent = new Date().getFullYear();
