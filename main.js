// ===== UPDATE YEAR =====
const yearElement = document.getElementById('year-7');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ===== MOBILE NAV TOGGLE =====
const toggle = document.getElementById('mobile-toggle');
const nav = document.querySelector('.main-nav');

// Initialize nav max-height for smooth animation
nav.style.maxHeight = "0";

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');

  if (nav.classList.contains('show')) {
    // Open nav smoothly
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    // Close nav smoothly
    nav.style.maxHeight = "0";
  }

  // Update ARIA attribute
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
});

// ===== CLOSE NAV WHEN CLICKING OUTSIDE =====
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('show')) {
    nav.classList.remove('show');
    nav.style.maxHeight = "0";
    toggle.setAttribute('aria-expanded', "false");
  }
});

// ===== OPTIONAL: CLOSE NAV ON LINK CLICK (MOBILE) =====
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
      nav.classList.remove('show');
      nav.style.maxHeight = "0";
      toggle.setAttribute('aria-expanded', "false");
    }
  });
});
