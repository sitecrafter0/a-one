// Update footer year
document.getElementById('year')?.textContent = new Date().getFullYear();

// Mobile navigation toggle
const toggle = document.getElementById('mobile-toggle');
const nav = document.querySelector('.main-nav');
if(toggle && nav){
  toggle.addEventListener('click',()=>{
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? 'none' : 'flex';
  });
}

// Smooth scroll anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});
