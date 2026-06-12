// ===== ICONS (Lucide-style inline SVG paths) =====
const ICONS = {
  'hard-hat': `<svg viewBox="0 0 24 24"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a2 2 0 0 1 4 0v5"/><path d="M4 15v-3a8 8 0 0 1 16 0v3"/></svg>`,
  'mountain': `<svg viewBox="0 0 24 24"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
  'wrench': `<svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  'zap': `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  'layers': `<svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  'truck': `<svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  'shield-check': `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  'star': `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  'users': `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  'leaf': `<svg viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  'mail': `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  'phone': `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38a2 2 0 0 1 1.95-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  'map-pin': `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  'clock': `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  'chevron-up': `<svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>`,
  'industry': `<svg viewBox="0 0 24 24"><path d="M2 20h20v2H2z"/><path d="M4 20V10l6-4v4l6-4v4l4-2v12"/></svg>`,
  'send': `<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`
};

function icon(name, cls = '') {
  const s = ICONS[name] || ICONS['star'];
  const el = document.createElement('span');
  el.innerHTML = s;
  const svg = el.firstElementChild;
  svg.setAttribute('class', cls);
  return svg;
}

// ===== LOAD CONTENT =====
async function loadContent() {
  return window.SITE_CONTENT;
}

// ===== BUILD NAV =====
function buildNav(data) {
  const logo = document.getElementById('nav-logo');
  logo.innerHTML = `
    <span class="logo-text">
      <span class="name">${data.company.name.toUpperCase()}</span>
      <span class="sub">${data.company.tagline.toUpperCase()}</span>
    </span>`;

  // If logo image exists, replace text with image
  const logoImg = new Image();
  logoImg.onload = () => {
    logo.innerHTML = '';
    logo.appendChild(logoImg);
  };
  logoImg.src = 'assets/logo.png';
  logoImg.alt = data.company.name;
  logoImg.style.height = '44px';

  const ul = document.getElementById('nav-links');
  ul.innerHTML = data.nav.map((item, i) =>
    `<li><a href="${item.href}" class="${i === data.nav.length - 1 ? 'nav-cta' : ''}">${item.label}</a></li>`
  ).join('');
}

// ===== BUILD HERO =====
function buildHero(data) {
  const { hero, about } = data;
  document.getElementById('hero-title').textContent = hero.title;
  document.getElementById('hero-subtitle').textContent = hero.subtitle;
  document.getElementById('hero-cta-primary').textContent = hero.cta_primary;
  document.getElementById('hero-cta-secondary').textContent = hero.cta_secondary;

  const statsGrid = document.getElementById('hero-stats');
  statsGrid.innerHTML = about.stats.map(s => `
    <div class="hero-stat">
      <div class="hero-stat-value">${s.value.replace('+', '<span>+</span>')}</div>
      <div class="hero-stat-label">${s.label}</div>
    </div>`).join('');
}

// ===== BUILD NOSOTROS =====
function buildAbout(data) {
  const { about } = data;
  document.getElementById('about-body').textContent = about.body;
  document.getElementById('about-mission-text').textContent = about.mission;
  document.getElementById('about-vision-text').textContent = about.vision;

  const valuesGrid = document.getElementById('values-grid');
  valuesGrid.innerHTML = about.values.map(v => {
    const card = document.createElement('div');
    card.className = 'value-card';
    const iconWrap = document.createElement('div');
    iconWrap.className = 'value-icon';
    iconWrap.appendChild(icon(v.icon));
    card.appendChild(iconWrap);
    card.innerHTML += `<h3>${v.title}</h3><p>${v.text}</p>`;
    card.prepend(iconWrap);
    return card.outerHTML;
  }).join('');

  // Fix: re-insert icons (outerHTML loses dom nodes)
  valuesGrid.querySelectorAll('.value-icon').forEach((wrap, i) => {
    wrap.innerHTML = '';
    wrap.appendChild(icon(about.values[i].icon));
  });

  // Stats bar
  const statsGrid = document.getElementById('stats-grid');
  statsGrid.innerHTML = about.stats.map(s => `
    <div class="stat-item">
      <div class="stat-value">${s.value.replace('+', '<em>+</em>')}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
}

// ===== BUILD SERVICIOS =====
function buildServices(data) {
  const { services } = data;
  document.getElementById('services-subtitle').textContent = services.subtitle;

  const grid = document.getElementById('services-grid');
  grid.innerHTML = '';
  services.items.forEach(s => {
    const card = document.createElement('div');
    card.className = 'service-card';
    const iconWrap = document.createElement('div');
    iconWrap.className = 'service-icon';
    iconWrap.appendChild(icon(s.icon));
    card.appendChild(iconWrap);
    const h3 = document.createElement('h3');
    h3.textContent = s.title;
    const p = document.createElement('p');
    p.textContent = s.description;
    card.appendChild(h3);
    card.appendChild(p);
    grid.appendChild(card);
  });
}

// ===== BUILD CLIENTES =====
function buildClients(data) {
  const grid = document.getElementById('clients-grid');
  if (!grid) return;
  const items = data.clients && data.clients.items ? data.clients.items : [];
  if (items.length === 0) {
    grid.innerHTML = '<p class="clients-placeholder">Logos de clientes próximamente.</p>';
    return;
  }
  grid.innerHTML = items.map(c => `
    <div class="client-card">
      ${c.logo
        ? `<img src="${c.logo}" alt="${c.name}">`
        : `<span class="client-name">${c.name}</span>`}
    </div>`).join('');
}

// ===== BUILD PROYECTOS =====
function buildProjects(data) {
  const { projects } = data;
  document.getElementById('projects-subtitle').textContent = projects.subtitle;

  const grid = document.getElementById('projects-grid');
  grid.innerHTML = projects.items.map(p => `
    <div class="project-card">
      <div class="project-img">
        <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'">
        <span class="project-badge">${p.category}</span>
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
    </div>`).join('');
}

// ===== BUILD CONTACTO =====
function buildContact(data) {
  const { contact } = data;
  const items = document.getElementById('contact-items');
  const contactData = [
    { icon: 'mail', label: 'Email', value: `<a href="mailto:${contact.email}">${contact.email}</a>` },
    { icon: 'phone', label: 'Teléfono', value: `<a href="tel:${contact.phone.replace(/\s/g,'')}">${contact.phone}</a>` },
    { icon: 'map-pin', label: 'Dirección', value: `${contact.address}<br>${contact.city}` },
    { icon: 'clock', label: 'Horario', value: contact.schedule }
  ];

  items.innerHTML = '';
  contactData.forEach(ci => {
    const item = document.createElement('div');
    item.className = 'contact-item';
    const iconWrap = document.createElement('div');
    iconWrap.className = 'contact-item-icon';
    iconWrap.appendChild(icon(ci.icon));
    const body = document.createElement('div');
    body.className = 'contact-item-body';
    body.innerHTML = `<strong>${ci.label}</strong><span>${ci.value}</span>`;
    item.appendChild(iconWrap);
    item.appendChild(body);
    items.appendChild(item);
  });
}

// ===== BUILD FOOTER =====
function buildFooter(data) {
  const { company, nav, contact, services, footer } = data;
  document.getElementById('footer-brand-name').textContent = company.name.toUpperCase();
  document.getElementById('footer-brand-sub').textContent = company.tagline.toUpperCase();
  document.getElementById('footer-tagline').textContent = footer.tagline;
  document.getElementById('footer-legal').textContent = footer.legal;

  const navLinks = document.getElementById('footer-nav');
  navLinks.innerHTML = nav.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('');

  const serviceLinks = document.getElementById('footer-services');
  serviceLinks.innerHTML = services.items.map(s => `<li><a href="#servicios">${s.title}</a></li>`).join('');
}

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Active section
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });

  // Close nav on link click
  links.forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ===== SCROLL TOP =====
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== CONTACT FORM =====
function initForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.disabled = true;
    btn.textContent = 'Enviando...';

    // Simulate send (replace with real endpoint)
    await new Promise(r => setTimeout(r, 1200));

    form.style.display = 'none';
    success.style.display = 'block';
  });
}

// ===== ANIMATE ON SCROLL =====
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .value-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ===== INIT =====
async function init() {
  const data = await loadContent();
  buildNav(data);
  buildHero(data);
  buildAbout(data);
  buildServices(data);
  buildProjects(data);
  buildClients(data);
  buildContact(data);
  buildFooter(data);
  initNavbar();
  initScrollTop();
  initForm();
  initAnimations();
}

document.addEventListener('DOMContentLoaded', init);
