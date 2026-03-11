// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Add reveal class to elements
const revealEls = document.querySelectorAll(
  '.about-content, .timeline-item, .skill-card, .edu-card, .contact-link, .about-stats'
);

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = `opacity 0.55s ease ${i * 0.07}s, transform 0.55s ease ${i * 0.07}s`;
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.06}s`;
  });
});

// Add visible class styles via JS
const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// ── ACTIVE NAV HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--teal)' : '';
  });
});

// ── PHOTO SWAP (for when user adds photo) ──
// If you add a photo file, replace the placeholder with:
// const wrap = document.querySelector('.hero-photo-placeholder');
// wrap.innerHTML = '<img src="your-photo.jpg" alt="Massimo Roco">';
