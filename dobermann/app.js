// app.js - funcionalidad: nav móvil, lightbox, quick reserve (open Google Calendar), formulario (fetch a server/send.php), pequeñas animaciones

document.addEventListener('DOMContentLoaded', () => {
  // año en footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Nav toggle (accesible)
  const navToggle = document.getElementById('navToggle');
  const mainMenu = document.getElementById('mainMenu');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainMenu.classList.toggle('show');
  });

  // Abrir/Cerrar Menu Movil
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  /* LIGHTBOX */
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lbClose = document.querySelector('.lightbox-close');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let currentIndex = 0;

  const imgs = galleryItems.map((btn) => btn.querySelector('img').src);
  galleryItems.forEach(btn => {
    btn.addEventListener('click', () => {
      currentIndex = Number(btn.dataset.index);
      openLightbox(currentIndex);
    });
  });

  function openLightbox(i){
    lightboxImg.src = imgs[i];
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
  prevBtn.addEventListener('click', () => { currentIndex = (currentIndex-1+imgs.length)%imgs.length; openLightbox(currentIndex); });
  nextBtn.addEventListener('click', () => { currentIndex = (currentIndex+1)%imgs.length; openLightbox(currentIndex); });
  document.addEventListener('keydown', (e) => {
    if(lightbox.getAttribute('aria-hidden') === 'false') {
      if(e.key === 'Escape') closeLightbox();
      if(e.key === 'ArrowLeft') prevBtn.click();
      if(e.key === 'ArrowRight') nextBtn.click();
    }
  });

  /* QUICK RESERVE -> Abre ventana de creación evento Google Calendar (TEMPLATE) */
  function toGoogleCalendarURL({title, details, startISO, endISO, location}){
    const fmt = (iso) => iso.replace(/[-:]/g,'').split('.')[0] + 'Z';
    const url = new URL('https://calendar.google.com/calendar/render');
    url.searchParams.set('action','TEMPLATE');
    url.searchParams.set('text', title);
    url.searchParams.set('details', details);
    url.searchParams.set('dates', `${fmt(startISO)}/${fmt(endISO)}`);
    if(location) url.searchParams.set('location', location);
    return url.toString();
  }

  const openGCBtn = document.getElementById('openGCLink');
  openGCBtn.addEventListener('click', () => {
    const name = document.getElementById('resName').value.trim();
    const svc = document.getElementById('resService').value;
    const dt = document.getElementById('resDate').value;
    if(!name || !dt){ alert('Por favor indica tu nombre y fecha/hora'); return; }
    const start = new Date(dt);
    const durations = { "Corte clásico":30, "Corte premium":45, "Afeitado a navaja":30 };
    const dur = durations[svc] || 30;
    const end = new Date(start.getTime() + dur*60000);
    const url = toGoogleCalendarURL({
      title: `${svc} — ${name}`,
      details: `Reserva solicitada en Barbería Áurea\nServicio: ${svc}\nCliente: ${name}`,
      startISO: start.toISOString(),
      endISO: end.toISOString(),
      location: 'Calle Ejemplo 12, Ciudad'
    });
    window.open(url, '_blank');
  });

  /* CONTACT FORM - fetch a server/send.php con honeypot */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const hp = contactForm.querySelector('input[name="website"]');
    if(hp && hp.value){ formStatus.textContent = 'Error: spam detectado.'; return; }

    const action = contactForm.action;
    const data = new FormData(contactForm);
    formStatus.textContent = 'Enviando...';

    try {
      const resp = await fetch(action, { method: 'POST', body: data });
      if(resp.ok){
        formStatus.textContent = 'Mensaje enviado. Gracias — te contestaremos pronto.';
        contactForm.reset();
      } else {
        let text = await resp.text();
        formStatus.textContent = text || 'No se pudo enviar. Revisa la configuración.';
      }
    } catch(err){
      console.error(err);
      formStatus.textContent = 'Error al enviar. Puedes contactar a info@tudominio.com';
    }
  });

  /* Simple fade-in on scroll */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) e.target.classList.add('inview');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section, .service-card, .team-card, .gallery-item').forEach(el => io.observe(el));
});
