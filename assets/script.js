// Sticky header (clase is-scrolled en el <header>)
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  const setMenu = (open) => {
    navLinks.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', open);
    navToggle.textContent = open ? '×' : '☰';
  };
  navToggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) setMenu(false);
  });
}

// Form -> mailto handler
const form = document.querySelector('form[data-mailto]');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lines = [];
    const get = (k) => (data.get(k) || '').toString().trim();

    lines.push(`Nombre: ${get('nombre')}`);
    lines.push(`Email: ${get('email')}`);
    if (get('telefono')) lines.push(`Teléfono: ${get('telefono')}`);
    lines.push(`Ciudad: ${get('ciudad')}`);
    lines.push('');
    lines.push(`Formato: ${get('formato')}`);
    if (get('plazo')) lines.push(`Plazo deseado: ${get('plazo')}`);
    lines.push('');
    lines.push('Sobre el encargo:');
    lines.push(get('mensaje') || '(sin texto)');
    lines.push('');
    lines.push('---');
    lines.push('Adjunto en este mismo email 1-5 fotografías de referencia.');

    const subject = encodeURIComponent(`Encargo retrato — ${get('nombre') || 'sin nombre'}`);
    const body = encodeURIComponent(lines.join('\n'));
    const url = `mailto:hola@elhoma.art?subject=${subject}&body=${body}`;

    window.location.href = url;
    setTimeout(() => { window.location.href = 'gracias.html'; }, 800);
  });
}
