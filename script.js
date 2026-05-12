/* script.js — Sonrident | Ortodoncia y Estética Dental León */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initStickyHeader();
  initSmoothScroll();
  initPageReveal();
  initScrollAnimations();
  initStaggerGrids();
  initCounters();
  initWhatsAppFloat();
});

/* ============================================================
   initNav — Navegación mobile
   ============================================================ */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  if (!toggle) return;

  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav--open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    document.body.classList.toggle('nav--open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  document.addEventListener('click', (e) => {
    if (
      document.body.classList.contains('nav--open') &&
      !e.target.closest('.nav') &&
      !e.target.closest('.nav__menu')
    ) {
      close();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav--open')) {
      close();
      toggle.focus();
    }
  });

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', close);
  });
}

/* ============================================================
   initStickyHeader — Header con cambio de estilo al scroll
   ============================================================ */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ============================================================
   initSmoothScroll — Scroll suave a anchors
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.querySelector('.header')?.offsetHeight ?? 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   initPageReveal — Animación de entrada en hero (page load)
   ============================================================ */
function initPageReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = [
    '.hero__badge',
    '.hero__title',
    '.hero__subtitle',
    '.hero__offer',
    '.hero__actions',
    '.hero__trust',
    '.hero__microcopy',
  ];

  targets.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.65s ease ${i * 120}ms, transform 0.65s ease ${i * 120}ms`;
  });

  const heroImage = document.querySelector('.hero__image');
  if (heroImage) {
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateX(30px)';
    heroImage.style.transition = 'opacity 0.8s ease 300ms, transform 0.8s ease 300ms';
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      targets.forEach((selector) => {
        const el = document.querySelector(selector);
        if (!el) return;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
      if (heroImage) {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
      }
    });
  });
}

/* ============================================================
   initScrollAnimations — Animaciones al hacer scroll
   ============================================================ */
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animate]').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = el.dataset.delay ?? 0;
        setTimeout(() => el.classList.add('is-visible'), Number(delay));
        observer.unobserve(el);
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

  // Secciones con data-animate en sus títulos y elementos clave
  const sectionHeaders = document.querySelectorAll(
    '.section__header, .feature-block, .process__step, .contact__map, .contact__info, .cta-final'
  );

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        sectionObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08 }
  );

  sectionHeaders.forEach((el) => {
    if (!el.classList.contains('is-visible')) {
      sectionObserver.observe(el);
    }
  });
}

/* ============================================================
   initStaggerGrids — Stagger automático para grids de cards
   ============================================================ */
function initStaggerGrids() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const grids = document.querySelectorAll('.services__grid, .stats__grid');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const grid = entry.target;
        [...grid.children].forEach((child, i) => {
          const delay = i * 90;
          child.style.transitionDelay = `${delay}ms`;
          setTimeout(() => {
            child.classList.add('is-visible');
          }, delay);
        });
        observer.unobserve(grid);
      });
    },
    { threshold: 0.05 }
  );

  grids.forEach((grid) => {
    [...grid.children].forEach((child) => {
      child.setAttribute('data-stagger', '');
    });
    observer.observe(grid);
  });
}

/* ============================================================
   initCounters — Contadores animados con data-animate-number
   ============================================================ */
function initCounters() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const counters = document.querySelectorAll('[data-animate-number]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const rawText = el.textContent;

        // Extraer número, prefijo y sufijo
        const numMatch = rawText.match(/[\d,]+\.?\d*/);
        if (!numMatch) return;

        const numStr = numMatch[0].replace(/,/g, '');
        const target = parseFloat(numStr);
        const prefix = rawText.slice(0, rawText.indexOf(numMatch[0]));
        const suffix = rawText.slice(rawText.indexOf(numMatch[0]) + numMatch[0].length);
        const useComma = target >= 1000;

        const duration = 1800;
        const startTime = performance.now();

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(ease * target);
          const formatted = useComma ? current.toLocaleString('es-MX') : String(current);
          el.textContent = prefix + formatted + suffix;

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            const finalFormatted = useComma ? target.toLocaleString('es-MX') : String(target);
            el.textContent = prefix + finalFormatted + suffix;
          }
        };

        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* ============================================================
   initWhatsAppFloat — Botón flotante de WhatsApp
   ============================================================ */
function initWhatsAppFloat() {
  // Crear botón flotante si no existe en el HTML
  if (document.querySelector('.whatsapp-float')) return;

  const waUrl =
    'https://wa.me/524773128890?text=Hola%2C%20me%20interesa%20agendar%20mi%20consulta%20de%20diagn%C3%B3stico%20gratuita';

  const btn = document.createElement('a');
  btn.href = waUrl;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.className = 'whatsapp-float';
  btn.setAttribute('aria-label', 'Agendar cita por WhatsApp');
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  `;

  // Estilos inline mínimos para el botón flotante
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: '9000',
    width: '58px',
    height: '58px',
    borderRadius: '50%',
    background: '#25D366',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.45)',
    transition: 'transform 250ms ease, box-shadow 250ms ease',
    willChange: 'transform',
  });

  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.1) translateY(-2px)';
    btn.style.boxShadow = '0 8px 28px rgba(37, 211, 102, 0.55)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
    btn.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.45)';
  });

  // Mostrar solo al bajar un poco
  btn.style.opacity = '0';
  btn.style.pointerEvents = 'none';
  btn.style.transition = 'opacity 350ms ease, transform 250ms ease, box-shadow 250ms ease';

  document.body.appendChild(btn);

  const toggleFloat = () => {
    const visible = window.scrollY > 200;
    btn.style.opacity = visible ? '1' : '0';
    btn.style.pointerEvents = visible ? 'auto' : 'none';
  };

  window.addEventListener('scroll', toggleFloat, { passive: true });
  toggleFloat();
}