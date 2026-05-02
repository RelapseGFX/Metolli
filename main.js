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
  "https://www.figma.com/api/mcp/asset/6e9b151b-385c-4859-ae85-0b4816d2dd3d",
  "https://www.figma.com/api/mcp/asset/3c6ad5fe-cbf2-42bb-aec3-d100d61d4cad",
  "https://www.figma.com/api/mcp/asset/d9d9f7d7-95ce-4a41-827c-54c958855d2a",
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
form?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type=submit]');
  const orig = btn.textContent;
  btn.textContent = 'Sent ✓';
  btn.disabled    = true;
  btn.style.background = '#16a34a';
  setTimeout(() => {
    btn.textContent      = orig;
    btn.disabled         = false;
    btn.style.background = '';
    form.reset();
  }, 3500);
});

/* ── INJECT ACTIVE NAV STYLE ── */
const navStyle = document.createElement('style');
navStyle.textContent = `.nav-links a.active { color: var(--blue); font-weight: 500; }`;
document.head.appendChild(navStyle);
