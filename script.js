// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Navigation scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Close mobile menu on link click
links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
  });
});

// Active nav link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  const scrollY = window.scrollY + 200;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector('.nav-links a[href="#' + id + '"]');
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// Scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll(
  '.section-content, .expertise-card, .board-card, .writing-card, .highlight-quote, .contact-inner, .timeline-item, .education-item'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Speaker Bio Modal
const modal = document.getElementById('speaker-modal');
const viewBioBtn = document.getElementById('view-speaker-bio');
const closeModalBtn = document.getElementById('close-modal');
const copyBioBtn = document.getElementById('copy-bio');
const downloadBioBtn = document.getElementById('download-bio');
let focusedElementBeforeModal;

function showModal() {
  focusedElementBeforeModal = document.activeElement;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => closeModalBtn.focus(), 100);
}

function hideModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  if (focusedElementBeforeModal) focusedElementBeforeModal.focus();
}

if (viewBioBtn) viewBioBtn.addEventListener('click', showModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', hideModal);

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
    hideModal();
  }
});

// Focus trap within modal
if (modal) {
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

// Copy bio to clipboard
if (copyBioBtn) {
  copyBioBtn.addEventListener('click', () => {
    const bioText = document.getElementById('speaker-bio-text').innerText;
    const btnText = copyBioBtn.querySelector('span') || copyBioBtn;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(bioText).then(() => {
        const original = btnText.textContent;
        btnText.textContent = 'Copied!';
        setTimeout(() => { btnText.textContent = original; }, 2000);
      }).catch(() => fallbackCopy(bioText, btnText));
    } else {
      fallbackCopy(bioText, btnText);
    }
  });
}

function fallbackCopy(text, btnText) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    const original = btnText.textContent;
    btnText.textContent = 'Copied!';
    setTimeout(() => { btnText.textContent = original; }, 2000);
  } catch (err) {
    console.error('Copy failed:', err);
  }
  document.body.removeChild(textarea);
}

// Download bio as text file
if (downloadBioBtn) {
  downloadBioBtn.addEventListener('click', () => {
    const bioText = document.getElementById('speaker-bio-text').innerText;
    const blob = new Blob([bioText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'John_Engates_Speaker_Bio.txt';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}
