// ================== UPDATE YEAR ==================
document.getElementById('year')?.textContent = new Date().getFullYear();
['year-2','year-3','year-4','year-5'].forEach(id => {
  document.getElementById(id)?.textContent = new Date().getFullYear();
});

// ================== MOBILE NAV TOGGLE ==================
const toggle = document.getElementById('mobile-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    if (nav) nav.classList.toggle('show');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
  });
}

// ================== CONTACT FORM ==================
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    
    const captcha = document.getElementById('captcha')?.value?.toLowerCase().trim();
    if (!captcha || !/(black|black and white|black & white)/.test(captcha)) {
      alert('Please answer the anti-spam question correctly (hint: black)');
      return;
    }

    alert('Thanks! Your message was captured. Replace JS with a real form handler to send it.');
    form.reset();
  });
}

// ================== SMOOTH SCROLL ==================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});
