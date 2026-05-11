/* ══════════════════════════════════════════════
   MAM Haustechnik — main.js
══════════════════════════════════════════════ */

/* ── NAV SCROLL ── */
const header   = document.querySelector('.site-header');
const navInner = document.querySelector('.nav-inner');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── MOBILE MENU ── */
const mobileToggle = document.querySelector('.nav-mobile-toggle');
const navCenter    = document.querySelector('.nav-center');

mobileToggle?.addEventListener('click', () => {
  const open = navCenter.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', open);
  const spans = mobileToggle.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

/* Close mobile menu when a link is clicked */
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navCenter?.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileToggle?.querySelectorAll('span').forEach(s => {
      s.style.transform = ''; s.style.opacity = '';
    });
  });
});

/* ── ACTIVE NAV LINK (IntersectionObserver) ── */
const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a');

const navIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      active?.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navIO.observe(s));

/* ── HERO SLIDER ── */
const heroBg = document.getElementById('heroBg');
const dots   = document.querySelectorAll('.hero-dots .dot');

// Figma CDN images for the 3 hero slides
const heroSlides = [
  "assets/6e9b151b-385c-4859-ae85-0b4816d2dd3d.jpg",
  "assets/3c6ad5fe-cbf2-42bb-aec3-d100d61d4cad.jpg",
  "assets/d9d9f7d7-95ce-4a41-827c-54c958855d2a.jpg",
];

let heroIdx = 0;

function setHeroSlide(idx) {
  heroIdx = ((idx % heroSlides.length) + heroSlides.length) % heroSlides.length;
  if (heroBg) {
    heroBg.style.backgroundImage = `url('${heroSlides[heroIdx]}')`;
  }
  dots.forEach((d, i) => d.classList.toggle('active', i === heroIdx));
}

// Initialise first slide
setHeroSlide(0);

// Dot clicks
dots.forEach((d, i) => d.addEventListener('click', () => setHeroSlide(i)));

// Arrow buttons
document.querySelector('.slider-prev')?.addEventListener('click', () => setHeroSlide(heroIdx - 1));
document.querySelector('.slider-next')?.addEventListener('click', () => setHeroSlide(heroIdx + 1));

// Auto-advance every 5 s, pause on hover
let heroTimer = setInterval(() => setHeroSlide(heroIdx + 1), 5000);
const heroSection = document.getElementById('hero');
heroSection?.addEventListener('mouseenter', () => clearInterval(heroTimer));
heroSection?.addEventListener('mouseleave', () => {
  heroTimer = setInterval(() => setHeroSlide(heroIdx + 1), 5000);
});

/* ── PROJECTS CAROUSEL — infinite loop ── */
const track = document.getElementById('projectsTrack');
const cprev = document.querySelector('.carousel-prev');
const cnext = document.querySelector('.carousel-next');

if (track) {
  const totalOrig = track.querySelectorAll('.project-item:not(.clone)').length; // 4

  /* Step width = offset distance between adjacent items.
     Reads from the live DOM so it works at any breakpoint. */
  const stepW = () => {
    const items = track.querySelectorAll('.project-item');
    if (items.length < 2) return items[0].offsetWidth + 128;
    return items[1].offsetLeft - items[0].offsetLeft;
  };

  const ANIM_MS = 420;
  let carIdx    = 0;
  let busy      = false;
  let isDragging = false;

  /* Teleport to idx with no animation (forced reflow prevents batching). */
  function snapInstant(idx) {
    carIdx = idx;
    track.style.transition = 'none';
    void track.offsetWidth;                    // flush pending style changes
    track.style.transform  = `translateX(-${carIdx * stepW()}px)`;
  }

  /* Animated step — arrow buttons or drag release. */
  function go(delta) {
    if (busy || isDragging) return;
    busy = true;

    if (delta < 0 && carIdx === 0) {
      /* Backward wrap: snap to clone[0] (looks like orig[0]),
         then animate one step back to orig[totalOrig-1]. */
      snapInstant(totalOrig);
      setTimeout(() => {
        carIdx = totalOrig - 1;
        track.style.transition = `transform ${ANIM_MS}ms cubic-bezier(0.25,0.46,0.45,0.94)`;
        track.style.transform  = `translateX(-${carIdx * stepW()}px)`;
        setTimeout(() => { busy = false; }, ANIM_MS + 20);
      }, 20);
      return;
    }

    carIdx += delta;
    track.style.transition = `transform ${ANIM_MS}ms cubic-bezier(0.25,0.46,0.45,0.94)`;
    track.style.transform  = `translateX(-${carIdx * stepW()}px)`;

    setTimeout(() => {
      if (carIdx >= totalOrig) snapInstant(carIdx - totalOrig); // landed on clone → snap to real
      busy = false;
    }, ANIM_MS + 20);
  }

  cprev?.addEventListener('click', () => go(-1));
  cnext?.addEventListener('click', () => go(+1));

  /* ── Drag / swipe — live visual feedback ── */
  let dragStartX = null;

  function onDragStart(x) {
    if (busy) return;
    isDragging  = true;
    dragStartX  = x;
    track.style.transition = 'none';
    track.style.cursor     = 'grabbing';
  }

  function onDragMove(x) {
    if (!isDragging) return;
    const offset = x - dragStartX;
    track.style.transform = `translateX(${-(carIdx * stepW()) + offset}px)`;
  }

  function onDragEnd(x) {
    if (!isDragging) return;
    isDragging = false;
    track.style.cursor = '';
    const dist = dragStartX - x;
    if (Math.abs(dist) > 60) {
      /* Far enough — commit the step. go() animates from current visual pos. */
      go(dist > 0 ? +1 : -1);
    } else {
      /* Too short — spring back smoothly. */
      track.style.transition = `transform ${ANIM_MS}ms cubic-bezier(0.25,0.46,0.45,0.94)`;
      track.style.transform  = `translateX(-${carIdx * stepW()}px)`;
    }
    dragStartX = null;
  }

  /* Mouse drag */
  track.addEventListener('mousedown',  e => { e.preventDefault(); onDragStart(e.clientX); });
  window.addEventListener('mousemove', e => onDragMove(e.clientX));
  window.addEventListener('mouseup',   e => onDragEnd(e.clientX));

  /* Touch drag */
  track.addEventListener('touchstart', e => onDragStart(e.touches[0].clientX),         { passive: true });
  track.addEventListener('touchmove',  e => onDragMove(e.touches[0].clientX),          { passive: true });
  track.addEventListener('touchend',   e => onDragEnd(e.changedTouches[0].clientX));

  /* Re-snap on resize so offsets stay correct */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => snapInstant(carIdx), 200);
  });
}

/* ── HOW IT WORKS — floating image on row hover ── */
(function () {
  const rowsEl   = document.getElementById('howRows');
  const floatEl  = document.getElementById('howFloatImg');
  const imgEl    = document.getElementById('howFloatImgEl');
  if (!rowsEl || !floatEl || !imgEl) return;

  const FLOAT_H = 240; // matches CSS height

  document.querySelectorAll('.how-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
      const src = row.dataset.img;
      if (!src) return;

      // swap image src only when it changes to avoid a flicker
      if (imgEl.src !== src) imgEl.src = src;

      // vertically centre the float image on the hovered row
      const rowRect      = row.getBoundingClientRect();
      const containerRect = rowsEl.getBoundingClientRect();
      const centreY      = rowRect.top - containerRect.top + rowRect.height / 2;
      floatEl.style.top  = `${centreY - FLOAT_H / 2}px`;

      floatEl.classList.add('visible');
    });

    row.addEventListener('mouseleave', () => {
      floatEl.classList.remove('visible');
    });
  });
})();

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll(
  '.service-card, .project-item:not(.clone), .why-feat-card, .review-card, ' +
  '.faq-item, .about-stat-badge, .how-row, .logo-box'
);

// Stagger siblings for grid sections
['.services-grid', '.reviews-grid', '.why-features-grid', '.logos-grid'].forEach(sel => {
  document.querySelectorAll(`${sel} > *`).forEach((el, i) => {
    el.style.transitionDelay = `${i * 55}ms`;
  });
});

const revealIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      revealIO.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });

revealEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  revealIO.observe(el);
});

/* ── CONTACT FORM ── */
const form = document.querySelector('.contact-form');

/* Bilingual validation messages */
function cfMsg(key) {
  const lang = localStorage.getItem('mam-lang') || 'de';
  const m = {
    de: {
      required   : 'Dieses Feld ist ein Pflichtfeld.',
      email      : 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      phone      : 'Bitte geben Sie eine gültige Telefonnummer ein.',
      msgMin     : 'Die Nachricht muss mindestens 10 Zeichen lang sein.',
      service    : 'Bitte wählen Sie eine Serviceart aus.',
      privacy    : 'Bitte stimmen Sie der Datenschutzerklärung zu.',
    },
    en: {
      required   : 'This field is required.',
      email      : 'Please enter a valid email address.',
      phone      : 'Please enter a valid phone number.',
      msgMin     : 'Message must be at least 10 characters.',
      service    : 'Please select a service type.',
      privacy    : 'Please accept the privacy policy to continue.',
    },
  };
  return (m[lang] || m.de)[key];
}

/* Validate a single field — returns true if valid */
function cfValidate(field) {
  const wrapper  = field.closest('.form-field') || field.closest('.form-checkbox');
  const errorEl  = wrapper?.querySelector('.field-error');
  let   valid    = true;
  let   msg      = '';

  if (field.type === 'checkbox') {
    if (!field.checked) { valid = false; msg = cfMsg('privacy'); }

  } else if (!field.value.trim()) {
    valid = false;
    msg   = field.name === 'service' ? cfMsg('service') : cfMsg('required');

  } else if (field.type === 'email') {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(field.value)) {
      valid = false; msg = cfMsg('email');
    }

  } else if (field.name === 'phone') {
    if (!/^[\d\s\-()+]{6,}$/.test(field.value.trim())) {
      valid = false; msg = cfMsg('phone');
    }

  } else if (field.name === 'message' && field.value.trim().length < 10) {
    valid = false; msg = cfMsg('msgMin');
  }

  wrapper?.classList.toggle('has-error', !valid);
  if (errorEl) errorEl.textContent = msg;
  return valid;
}

form?.addEventListener('submit', e => {
  e.preventDefault();

  /* Validate every interactive field */
  const fields = [...form.querySelectorAll('input, select, textarea')];
  const allOk  = fields.map(cfValidate).every(Boolean);

  if (!allOk) {
    form.querySelector('.has-error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const btn  = form.querySelector('button[type=submit]');
  const orig = btn.textContent;
  btn.disabled = true;

  /* POST to Netlify Forms */
  fetch('/', {
    method  : 'POST',
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
    body    : new URLSearchParams(new FormData(form)).toString(),
  })
  .then(() => {
    btn.textContent      = 'Sent ✓';
    btn.style.background = '#16a34a';
    setTimeout(() => {
      btn.textContent      = orig;
      btn.disabled         = false;
      btn.style.background = '';
      form.reset();
      form.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));
    }, 3500);
  })
  .catch(() => {
    const lang = localStorage.getItem('mam-lang') || 'de';
    btn.textContent      = lang === 'de' ? 'Fehler – bitte erneut versuchen' : 'Error – please try again';
    btn.style.background = '#dc2626';
    setTimeout(() => {
      btn.textContent      = orig;
      btn.disabled         = false;
      btn.style.background = '';
    }, 3500);
  });
});

/* Live feedback: re-validate on blur, and clear error as soon as field becomes valid */
form?.querySelectorAll('input, select, textarea').forEach(field => {
  field.addEventListener('blur',   () => cfValidate(field));
  field.addEventListener('input',  () => {
    if (field.closest('.form-field')?.classList.contains('has-error') ||
        field.closest('.form-checkbox')?.classList.contains('has-error')) {
      cfValidate(field);
    }
  });
  field.addEventListener('change', () => cfValidate(field));
});

/* ── INJECT ACTIVE NAV STYLE ── */
const navStyle = document.createElement('style');
navStyle.textContent = `.nav-links a.active { color: var(--blue); font-weight: 500; }`;
document.head.appendChild(navStyle);

/* ── SERVICES VIEW ALL TOGGLE ── */
const viewAllBtn  = document.getElementById('viewAllBtn');
const extraCards  = document.querySelectorAll('.svc-extra');

viewAllBtn?.addEventListener('click', () => {
  const isExpanded = viewAllBtn.classList.toggle('expanded');
  document.querySelector('.services-section')?.classList.toggle('expanded', isExpanded);
  viewAllBtn.textContent = isExpanded ? 'Show Less' : 'View all Services';
});

/* ── REVIEW READ MORE TOGGLE ── */
document.querySelectorAll('.review-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.review-card');
    const isExpanded = card.classList.toggle('expanded');
    btn.textContent = isExpanded ? 'Show less' : 'Read more';
  });
});

/* ── ORDER SERVICE MODAL ── */
const orderModal  = document.getElementById('orderModal');
const modalClose  = document.getElementById('modalClose');

function openModal() {
  orderModal?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  orderModal?.classList.remove('active');
  document.body.style.overflow = '';
}

/* Open on every "Order a service" link and hero "Request Service" button */
document.querySelectorAll('.svc-link, .open-modal').forEach(link => {
  link.addEventListener('click', e => { e.preventDefault(); openModal(); });
});

modalClose?.addEventListener('click', closeModal);

/* Close on backdrop click */
orderModal?.addEventListener('click', e => {
  if (e.target === orderModal) closeModal();
});

/* Close on Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* Modal form submit — posts to Netlify Forms */
const modalForm = document.querySelector('.modal-form');
modalForm?.addEventListener('submit', e => {
  e.preventDefault();
  const btn  = modalForm.querySelector('button[type=submit]');
  const orig = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled    = true;

  fetch('/', {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    new URLSearchParams(new FormData(modalForm)).toString()
  })
    .then(() => {
      btn.textContent      = 'Sent ✓';
      btn.style.background = '#16a34a';
      setTimeout(() => {
        btn.textContent      = orig;
        btn.disabled         = false;
        btn.style.background = '';
        modalForm.reset();
        closeModal();
      }, 2000);
    })
    .catch(() => {
      btn.textContent = 'Error — try again';
      btn.disabled    = false;
      setTimeout(() => { btn.textContent = orig; }, 3000);
    });
});
