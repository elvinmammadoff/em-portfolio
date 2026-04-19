/* ============================================================
   nav.js — Navigation scroll effect & mobile toggle
   ============================================================ */

export function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (!nav) return;

  // Scrolled state
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile toggle (basic show/hide)
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.style.display === 'flex';
      links.style.display = isOpen ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'rgba(8,8,8,0.97)';
      links.style.padding = '2rem';
      links.style.gap = '1.5rem';
      links.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
    });
  }
}
