/* =============================================
   PIXEL & CO. — main.js
   ============================================= */

// Mobile menu toggle
const hamburger = document.querySelector('.pc-nav-hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
}

// Close mobile menu on resize back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 620 && mobileMenu) {
    mobileMenu.classList.remove('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }
});
