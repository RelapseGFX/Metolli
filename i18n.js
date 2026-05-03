/* ══════════════════════════════════════════════
   i18n.js — EN / DE language switcher
   MAM Haustechnik
══════════════════════════════════════════════ */

/* ─── Translation dictionary ─── */
const T = {
  en: {
    /* NAV */
    'nav.services'        : 'Services',
    'nav.projects'        : 'Projects',
    'nav.about'           : 'About us',
    'nav.team'            : 'Our team',
    'nav.reviews'         : 'Reviews',
    'nav.contact'         : 'Contact',
    /* HERO */
    'hero.title'          : 'Heating, Plumbing, and <br/>Solar Technology in Bretten',
    'hero.subtitle'       : 'Over two decades of experience in plumbing',
    'hero.cta1'           : 'Call now',
    'hero.cta2'           : 'Request Service',
    /* SERVICES */
    'svc.badge'           : 'Services',
    'svc.title'           : 'Our <span class="text-blue">Plumbing</span> Services',
    'svc.heating'         : 'Heating technology',
    'svc.sanitary'        : 'Sanitary engineering',
    'svc.solar'           : 'Solar technology',
    'svc.renewable'       : 'Renewable energy',
    'svc.bathroom'        : 'Bathroom renovation',
    'svc.aircon'          : 'Air conditioning',
    'svc.chimney'         : 'Chimney renovation',
    'svc.stoves'          : 'Construction of stoves',
    'svc.desc'            : 'It all begins with an idea. Maybe you want to launch a business.',
    'svc.link'            : 'Order a service',
    /* PROJECTS */
    'proj.badge'          : 'Projects',
    'proj.title'          : 'Our Projects',
    /* CTA BLUE */
    'cta.title'           : 'Ready to Build Your Vision?',
    'cta.desc'            : 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world.',
    'cta.btn'             : 'Call Now',
    /* ABOUT */
    'about.badge'         : 'About Us',
    'about.title'         : 'Plumbing you can trust<br/><span class="text-blue">when it matters most</span>',
    'about.stat'          : 'Emergency Service',
    'about.p1'            : 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.',
    'about.p2'            : "Don't worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what's going to separate this one from the rest. If you read the words back and don't hear your own voice in your head, that's a good sign you still have more work to do.",
    /* WHY CHOOSE US */
    'why.badge'           : 'Why Choose Us',
    'why.title'           : 'Why <span class="text-blue">Choose Us</span>',
    'why.main.title'      : 'Why<br/>Choose Us',
    'why.main.desc'       : 'It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more.',
    'why.main.btn'        : 'Call Now',
    'why.feat1.title'     : '10 years of experience',
    'why.feat1.desc'      : 'Whether interior or exterior work, we offer professional work at a fair price.',
    'why.feat2.title'     : 'Reliable cost estimates',
    'why.feat2.desc'      : "With us, you won't experience any unpleasant surprises.",
    'why.feat3.title'     : 'Flexible appointment selection',
    'why.feat3.desc'      : 'Tell us when you have time – we will work entirely around your wishes.',
    'why.feat4.title'     : 'Great value on every customer',
    'why.feat4.desc'      : 'We place great value on every customer, no matter the order size.',
    /* HOW IT WORKS */
    'how.badge'           : 'How it works',
    'how.title'           : 'Plumbing you can trust<br><span class="text-blue">when it matters most</span>',
    'how.row1.title'      : 'Contact Us',
    'how.row1.desc'       : "Call or submit a request online since we're available 24/7 to help.",
    'how.row2.title'      : 'Inspection & Diagnosis',
    'how.row2.desc'       : 'We assess the issue, explain the problem, and provide upfront pricing.',
    'how.row3.title'      : 'Fast & Reliable Repair',
    'how.row3.desc'       : 'We fix the issue quickly and well done, ensuring long-lasting results.',
    /* TESTIMONIALS */
    'rev.badge'           : 'Testimonials',
    'rev.title'           : 'What Our Clients Say',
    'rev1.title'          : 'Quick Fix When I Needed It',
    'rev1.text'           : "Had a leak late in the day and didn't expect anyone to come out, but they did. Found the issue fast and fixed it quickly. Really appreciated the quick response.",
    'rev1.more'           : 'Read more',
    'rev2.title'          : 'Very Straightforward Service',
    'rev2.text'           : 'No upselling – just a clear explanation and a fair price. Everything was done as promised. Really easy to work with.',
    'rev2.more'           : 'Read more',
    'rev3.title'          : 'Great Work Overall',
    'rev3.text'           : "Everything's been working perfectly since the repair. Solid job and clearly experienced team.",
    'rev3.more'           : 'Read more',
    'rev4.title'          : 'Super Easy to Deal With',
    'rev4.text'           : 'Easy to book, arrived on time, and worked efficiently. Left everything clean. Would use again.',
    'rev4.more'           : 'Read more',
    /* LOCATION */
    'loc.badge'           : 'Location',
    'loc.title'           : 'Our <span class="text-blue">Service Area</span>',
    /* CTA STRIP */
    'strip.title'         : 'Ready to Build<br/>Your Vision?',
    'strip.desc'          : 'It all begins with an idea. Maybe you want to launch a business.',
    'strip.btn'           : 'Call Now',
    /* FAQ */
    'faq.badge'           : 'FAQ',
    'faq.title'           : 'Frequently<br/>Asked Questions',
    'faq.q1'              : 'What areas do you service?',
    'faq.a1'              : 'We serve Bretten and surrounding areas within a 60 km radius, including Karlsruhe, Pforzheim, Bruchsal, Ettlingen, and Heilbronn.',
    'faq.q2'              : 'Do you offer emergency plumbing services?',
    'faq.a2'              : "Yes! We are available 24/7 for emergency plumbing services. Call us anytime and we'll respond promptly.",
    'faq.q3'              : 'How quickly can you respond to a service call?',
    'faq.a3'              : 'For emergencies, we aim to arrive within 1–2 hours. For scheduled appointments, same-day service is often available.',
    'faq.q4'              : 'Do you provide free estimates?',
    'faq.a4'              : 'Yes, we provide free, upfront estimates before any work begins. No hidden fees, no surprises.',
    'faq.q5'              : 'What types of plumbing services do you provide?',
    'faq.a5'              : 'We offer heating technology, sanitary engineering, solar technology, renewable energy, bathroom renovations, air conditioning, chimney renovation, and construction of stoves.',
    /* CONTACT */
    'con.badge'           : 'Contact',
    'con.title'           : 'Get In Touch',
    'con.phone'           : '<strong>Phone:</strong> <a href="tel:+491785086146">+49 178 5086146</a>',
    'con.email'           : '<strong>Email:</strong> <a href="mailto:info@mam-haustechnik.de">info@mam-haustechnik.de</a>',
    'con.address'         : '<strong>Address:</strong> Wannenweg 6, 75015 Bretten',
    'con.hours'           : '<strong>Hours:</strong> 24/7 Emergency Service',
    'form.name.label'     : 'Full Name',
    'form.name.ph'        : 'John Doe',
    'form.email.label'    : 'Email Address',
    'form.email.ph'       : 'john@example.com',
    'form.phone.label'    : 'Phone Number',
    'form.phone.ph'       : '178 5086146',
    'form.service.label'  : 'Service Type',
    'form.service.ph'     : 'Select a service',
    'form.opt.heating'    : 'Heating technology',
    'form.opt.sanitary'   : 'Sanitary engineering',
    'form.opt.solar'      : 'Solar technology',
    'form.opt.renewable'  : 'Renewable energy',
    'form.opt.bathroom'   : 'Bathroom renovation',
    'form.opt.aircon'     : 'Air conditioning',
    'form.opt.chimney'    : 'Chimney renovation',
    'form.opt.stoves'     : 'Construction of stoves',
    'form.msg.label'      : 'Message',
    'form.msg.ph'         : 'Describe your issue...',
    'form.privacy'        : "By clicking 'Submit', you agree to our <a href=\"#\">Privacy Policy</a>",
    'form.submit'         : 'Submit',
    /* MODAL */
    'modal.badge'         : 'Order a Service',
    'modal.title'         : 'Request a Service',
    'modal.subtitle'      : "Fill in your details and we'll get back to you within 24 hours.",
    'modal.name.label'    : 'Full Name',
    'modal.email.label'   : 'Email Address',
    'modal.phone.label'   : 'Phone Number',
    'modal.service.label' : 'Service Type',
    'modal.service.ph'    : 'Select a service',
    'modal.msg.label'     : 'Message',
    'modal.msg.ph'        : 'Describe your issue...',
    'modal.submit'        : 'Send Request',
    /* FOOTER */
    'footer.hq'           : 'Headquarters',
    'footer.map'          : 'Map & Directions',
    'footer.col2'         : 'Learn',
    'footer.plumbing'     : 'Plumbing',
    'footer.drain'        : 'Drain and Sewer',
    'footer.reviews'      : 'Reviews',
    'footer.area'         : 'Service Area',
    'footer.about'        : 'About',
    'footer.col3'         : 'Contact',
    'footer.start'        : 'Get Started',
    'footer.appt'         : 'Appointments often available<br/>same day.',
    'footer.col4'         : 'Connect',
    'footer.copy'         : '© 2024 MAM – All rights reserved.',
    'footer.made'         : 'Made with ♥ by <strong><a href="https://prishtinawebdesign.com/" target="_blank" rel="noopener">Web Prishtina</a></strong>',
  },

  de: {
    /* NAV */
    'nav.services'        : 'Dienstleistungen',
    'nav.projects'        : 'Projekte',
    'nav.about'           : 'Über uns',
    'nav.team'            : 'Unser Team',
    'nav.reviews'         : 'Bewertungen',
    'nav.contact'         : 'Kontakt',
    /* HERO */
    'hero.title'          : 'Heizung Sanitär<br/>Solartechnik Bretten',
    'hero.subtitle'       : 'Über zwei Jahrzehnte Erfahrung in der Sanitärtechnik',
    'hero.cta1'           : 'Jetzt anrufen',
    'hero.cta2'           : 'Service anfragen',
    /* SERVICES */
    'svc.badge'           : 'Dienstleistungen',
    'svc.title'           : 'Unsere <span class="text-blue">Sanitär</span>-Leistungen',
    'svc.heating'         : 'Heiztechnik',
    'svc.sanitary'        : 'Sanitärtechnik',
    'svc.solar'           : 'Solartechnik',
    'svc.renewable'       : 'Erneuerbare Energien',
    'svc.bathroom'        : 'Badsanierung',
    'svc.aircon'          : 'Klimaanlagen',
    'svc.chimney'         : 'Kaminsanierung',
    'svc.stoves'          : 'Ofenbau',
    'svc.desc'            : 'Es beginnt alles mit einer Idee. Vielleicht möchten Sie ein Unternehmen gründen.',
    'svc.link'            : 'Jetzt bestellen',
    /* PROJECTS */
    'proj.badge'          : 'Projekte',
    'proj.title'          : 'Unsere Projekte',
    /* CTA BLUE */
    'cta.title'           : 'Bereit, Ihre Vision zu verwirklichen?',
    'cta.desc'            : 'Es beginnt alles mit einer Idee. Vielleicht möchten Sie ein Unternehmen gründen. Vielleicht möchten Sie ein Hobby in etwas Größeres verwandeln. Oder Sie haben ein kreatives Projekt zu teilen.',
    'cta.btn'             : 'Jetzt anrufen',
    /* ABOUT */
    'about.badge'         : 'Über uns',
    'about.title'         : 'Sanitärinstallationen, denen Sie vertrauen können<br/><span class="text-blue">wenn es darauf ankommt</span>',
    'about.stat'          : 'Notfalldienst',
    'about.p1'            : 'Es beginnt alles mit einer Idee. Vielleicht möchten Sie ein Unternehmen gründen. Vielleicht möchten Sie ein Hobby in etwas Größeres verwandeln. Wie auch immer – die Art, wie Sie Ihre Geschichte online erzählen, macht den Unterschied.',
    'about.p2'            : 'Machen Sie sich keine Sorgen, professionell zu klingen. Klingen Sie wie Sie selbst. Es gibt über 1,5 Milliarden Websites, aber Ihre Geschichte wird diese von den anderen abheben.',
    /* WHY CHOOSE US */
    'why.badge'           : 'Warum wir',
    'why.title'           : 'Warum <span class="text-blue">uns wählen</span>',
    'why.main.title'      : 'Warum<br/>uns wählen',
    'why.main.desc'       : 'Es beginnt alles mit einer Idee. Vielleicht möchten Sie ein Unternehmen gründen. Vielleicht möchten Sie ein Hobby in etwas Größeres verwandeln.',
    'why.main.btn'        : 'Jetzt anrufen',
    'why.feat1.title'     : '10 Jahre Erfahrung',
    'why.feat1.desc'      : 'Ob Innen- oder Außenarbeiten – wir bieten professionelle Arbeit zu einem fairen Preis.',
    'why.feat2.title'     : 'Zuverlässige Kostenschätzungen',
    'why.feat2.desc'      : 'Bei uns erleben Sie keine unangenehmen Überraschungen.',
    'why.feat3.title'     : 'Flexible Terminvereinbarung',
    'why.feat3.desc'      : 'Sagen Sie uns, wann Sie Zeit haben – wir richten uns ganz nach Ihren Wünschen.',
    'why.feat4.title'     : 'Höchste Wertschätzung für jeden Kunden',
    'why.feat4.desc'      : 'Wir legen großen Wert auf jeden Kunden, unabhängig von der Auftragsgröße.',
    /* HOW IT WORKS */
    'how.badge'           : 'So funktioniert es',
    'how.title'           : 'Sanitärinstallationen, denen Sie vertrauen können<br><span class="text-blue">wenn es darauf ankommt</span>',
    'how.row1.title'      : 'Kontaktieren Sie uns',
    'how.row1.desc'       : 'Rufen Sie an oder senden Sie eine Anfrage online – wir sind rund um die Uhr erreichbar.',
    'how.row2.title'      : 'Inspektion & Diagnose',
    'how.row2.desc'       : 'Wir bewerten das Problem, erklären es und nennen Ihnen den Preis im Voraus.',
    'how.row3.title'      : 'Schnelle & zuverlässige Reparatur',
    'how.row3.desc'       : 'Wir beheben das Problem schnell und gründlich für langanhaltende Ergebnisse.',
    /* TESTIMONIALS */
    'rev.badge'           : 'Referenzen',
    'rev.title'           : 'Was unsere Kunden sagen',
    'rev1.title'          : 'Schnelle Lösung, als ich sie brauchte',
    'rev1.text'           : 'Hatte spät am Tag einen Wasserschaden und rechnete nicht damit – aber sie kamen. Das Problem wurde schnell gefunden und behoben. Sehr empfehlenswert.',
    'rev1.more'           : 'Mehr lesen',
    'rev2.title'          : 'Sehr unkomplizierter Service',
    'rev2.text'           : 'Kein Upselling – nur eine klare Erklärung und ein fairer Preis. Alles wurde wie versprochen erledigt. Sehr angenehm.',
    'rev2.more'           : 'Mehr lesen',
    'rev3.title'          : 'Insgesamt tolle Arbeit',
    'rev3.text'           : 'Seit der Reparatur läuft alles einwandfrei. Solide Arbeit und eindeutig erfahrenes Team.',
    'rev3.more'           : 'Mehr lesen',
    'rev4.title'          : 'Sehr angenehm im Umgang',
    'rev4.text'           : 'Einfach zu buchen, pünktlich erschienen und effizient gearbeitet. Alles sauber hinterlassen. Gerne wieder.',
    'rev4.more'           : 'Mehr lesen',
    /* LOCATION */
    'loc.badge'           : 'Standort',
    'loc.title'           : 'Unser <span class="text-blue">Servicegebiet</span>',
    /* CTA STRIP */
    'strip.title'         : 'Bereit, Ihre<br/>Vision zu verwirklichen?',
    'strip.desc'          : 'Es beginnt alles mit einer Idee. Vielleicht möchten Sie ein Unternehmen gründen.',
    'strip.btn'           : 'Jetzt anrufen',
    /* FAQ */
    'faq.badge'           : 'FAQ',
    'faq.title'           : 'Häufig gestellte<br/>Fragen',
    'faq.q1'              : 'Welche Gebiete bedienen Sie?',
    'faq.a1'              : 'Wir bedienen Bretten und die umliegenden Gebiete im Umkreis von 60 km, einschließlich Karlsruhe, Pforzheim, Bruchsal, Ettlingen und Heilbronn.',
    'faq.q2'              : 'Bieten Sie Notfall-Sanitärservice an?',
    'faq.a2'              : 'Ja! Wir sind rund um die Uhr für Notfall-Sanitärleistungen verfügbar. Rufen Sie uns jederzeit an und wir reagieren umgehend.',
    'faq.q3'              : 'Wie schnell können Sie auf einen Serviceanruf reagieren?',
    'faq.a3'              : 'Bei Notfällen streben wir an, innerhalb von 1–2 Stunden zu erscheinen. Bei geplanten Terminen ist oft noch am selben Tag ein Einsatz möglich.',
    'faq.q4'              : 'Bieten Sie kostenlose Kostenvoranschläge an?',
    'faq.a4'              : 'Ja, wir erstellen kostenlose und transparente Kostenvoranschläge, bevor mit der Arbeit begonnen wird. Keine versteckten Gebühren.',
    'faq.q5'              : 'Welche Sanitärdienstleistungen bieten Sie an?',
    'faq.a5'              : 'Wir bieten Heiztechnik, Sanitärtechnik, Solartechnik, erneuerbare Energien, Badsanierung, Klimaanlagen, Kaminsanierung und Ofenbau an.',
    /* CONTACT */
    'con.badge'           : 'Kontakt',
    'con.title'           : 'Kontakt aufnehmen',
    'con.phone'           : '<strong>Telefon:</strong> <a href="tel:+491785086146">+49 178 5086146</a>',
    'con.email'           : '<strong>E-Mail:</strong> <a href="mailto:info@mam-haustechnik.de">info@mam-haustechnik.de</a>',
    'con.address'         : '<strong>Adresse:</strong> Wannenweg 6, 75015 Bretten',
    'con.hours'           : '<strong>Öffnungszeiten:</strong> 24/7 Notfalldienst',
    'form.name.label'     : 'Vollständiger Name',
    'form.name.ph'        : 'Max Mustermann',
    'form.email.label'    : 'E-Mail-Adresse',
    'form.email.ph'       : 'max@beispiel.de',
    'form.phone.label'    : 'Telefonnummer',
    'form.phone.ph'       : '178 5086146',
    'form.service.label'  : 'Dienstleistungsart',
    'form.service.ph'     : 'Dienstleistung wählen',
    'form.opt.heating'    : 'Heiztechnik',
    'form.opt.sanitary'   : 'Sanitärtechnik',
    'form.opt.solar'      : 'Solartechnik',
    'form.opt.renewable'  : 'Erneuerbare Energien',
    'form.opt.bathroom'   : 'Badsanierung',
    'form.opt.aircon'     : 'Klimaanlagen',
    'form.opt.chimney'    : 'Kaminsanierung',
    'form.opt.stoves'     : 'Ofenbau',
    'form.msg.label'      : 'Nachricht',
    'form.msg.ph'         : 'Beschreiben Sie Ihr Anliegen...',
    'form.privacy'        : 'Mit dem Klick auf „Absenden" stimmen Sie unserer <a href="#">Datenschutzerklärung</a> zu.',
    'form.submit'         : 'Absenden',
    /* MODAL */
    'modal.badge'         : 'Service anfragen',
    'modal.title'         : 'Service anfragen',
    'modal.subtitle'      : 'Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden.',
    'modal.name.label'    : 'Vollständiger Name',
    'modal.email.label'   : 'E-Mail-Adresse',
    'modal.phone.label'   : 'Telefonnummer',
    'modal.service.label' : 'Serviceart',
    'modal.service.ph'    : 'Bitte wählen',
    'modal.msg.label'     : 'Nachricht',
    'modal.msg.ph'        : 'Beschreiben Sie Ihr Anliegen...',
    'modal.submit'        : 'Anfrage senden',
    /* FOOTER */
    'footer.hq'           : 'Hauptsitz',
    'footer.map'          : 'Karte & Wegbeschreibung',
    'footer.col2'         : 'Informationen',
    'footer.plumbing'     : 'Sanitär',
    'footer.drain'        : 'Abfluss und Kanalisation',
    'footer.reviews'      : 'Bewertungen',
    'footer.area'         : 'Servicegebiet',
    'footer.about'        : 'Über uns',
    'footer.col3'         : 'Kontakt',
    'footer.start'        : 'Jetzt starten',
    'footer.appt'         : 'Termine oft noch am<br/>selben Tag verfügbar.',
    'footer.col4'         : 'Verbinden',
    'footer.copy'         : '© 2024 MAM – Alle Rechte vorbehalten.',
    'footer.made'         : 'Mit ♥ gemacht von <strong><a href="https://prishtinawebdesign.com/" target="_blank" rel="noopener">Web Prishtina</a></strong>',
  }
};

/* ─── Bindings: [selector, type, key]
   type  't' = textContent
         'h' = innerHTML
         'p' = placeholder attribute          ─── */
const BINDINGS = [
  /* NAV */
  ['.nav-links a[href="#services"]',            't', 'nav.services'],
  ['.nav-links a[href="#projects"]',            't', 'nav.projects'],
  ['.nav-links a[href="#about"]',               't', 'nav.about'],
  ['.nav-links a[href="#team"]',                't', 'nav.team'],
  ['.nav-links a[href="#reviews"]',             't', 'nav.reviews'],
  ['.nav-links a[href="#contact"]',             't', 'nav.contact'],

  /* HERO */
  ['#hero .hero-title',                         'h', 'hero.title'],
  ['#hero .hero-subtitle',                      't', 'hero.subtitle'],
  ['#hero .btn-outline',                        't', 'hero.cta1'],
  ['#hero .btn-ghost',                          't', 'hero.cta2'],

  /* SERVICES */
  ['#services .section-badge span',             't', 'svc.badge'],
  ['#services .section-title',                  'h', 'svc.title'],
  ['.service-card:nth-child(1) .svc-body h3',   't', 'svc.heating'],
  ['.service-card:nth-child(2) .svc-body h3',   't', 'svc.sanitary'],
  ['.service-card:nth-child(3) .svc-body h3',   't', 'svc.solar'],
  ['.service-card:nth-child(4) .svc-body h3',   't', 'svc.renewable'],
  ['.service-card:nth-child(5) .svc-body h3',   't', 'svc.bathroom'],
  ['.service-card:nth-child(6) .svc-body h3',   't', 'svc.aircon'],
  ['.service-card:nth-child(7) .svc-body h3',   't', 'svc.chimney'],
  ['.service-card:nth-child(8) .svc-body h3',   't', 'svc.stoves'],
  ['.service-card:nth-child(1) .svc-body p',    't', 'svc.desc'],
  ['.service-card:nth-child(2) .svc-body p',    't', 'svc.desc'],
  ['.service-card:nth-child(3) .svc-body p',    't', 'svc.desc'],
  ['.service-card:nth-child(4) .svc-body p',    't', 'svc.desc'],
  ['.service-card:nth-child(5) .svc-body p',    't', 'svc.desc'],
  ['.service-card:nth-child(6) .svc-body p',    't', 'svc.desc'],
  ['.service-card:nth-child(7) .svc-body p',    't', 'svc.desc'],
  ['.service-card:nth-child(8) .svc-body p',    't', 'svc.desc'],
  ['.service-card:nth-child(1) .svc-link',      't', 'svc.link'],
  ['.service-card:nth-child(2) .svc-link',      't', 'svc.link'],
  ['.service-card:nth-child(3) .svc-link',      't', 'svc.link'],
  ['.service-card:nth-child(4) .svc-link',      't', 'svc.link'],
  ['.service-card:nth-child(5) .svc-link',      't', 'svc.link'],
  ['.service-card:nth-child(6) .svc-link',      't', 'svc.link'],
  ['.service-card:nth-child(7) .svc-link',      't', 'svc.link'],
  ['.service-card:nth-child(8) .svc-link',      't', 'svc.link'],

  /* PROJECTS */
  ['#projects .section-badge span',             't', 'proj.badge'],
  ['#projects .section-title',                  't', 'proj.title'],

  /* CTA BLUE */
  ['.cta-blue-body h2',                         't', 'cta.title'],
  ['.cta-blue-body p',                          't', 'cta.desc'],
  ['.cta-silver-btn',                           't', 'cta.btn'],

  /* ABOUT */
  ['#about .section-badge span',                't', 'about.badge'],
  ['#about .section-title',                     'h', 'about.title'],
  ['#about .stat-service',                      't', 'about.stat'],
  ['#about .about-left p:nth-of-type(1)',        't', 'about.p1'],
  ['#about .about-left p:nth-of-type(2)',        't', 'about.p2'],

  /* WHY CHOOSE US */
  ['.why-section .section-badge span',          't', 'why.badge'],
  ['.why-section .section-title',               'h', 'why.title'],
  ['.why-main-title',                           'h', 'why.main.title'],
  ['.why-main-desc',                            't', 'why.main.desc'],
  ['.why-main-card .btn-primary',               't', 'why.main.btn'],
  ['.why-feat-card:nth-child(1) h4',            't', 'why.feat1.title'],
  ['.why-feat-card:nth-child(1) p',             't', 'why.feat1.desc'],
  ['.why-feat-card:nth-child(2) h4',            't', 'why.feat2.title'],
  ['.why-feat-card:nth-child(2) p',             't', 'why.feat2.desc'],
  ['.why-feat-card:nth-child(3) h4',            't', 'why.feat3.title'],
  ['.why-feat-card:nth-child(3) p',             't', 'why.feat3.desc'],
  ['.why-feat-card:nth-child(4) h4',            't', 'why.feat4.title'],
  ['.why-feat-card:nth-child(4) p',             't', 'why.feat4.desc'],

  /* HOW IT WORKS */
  ['#how .section-badge span',                  't', 'how.badge'],
  ['#how .section-title',                       'h', 'how.title'],
  ['.how-row:nth-child(2) .how-row-body h4',    't', 'how.row1.title'],
  ['.how-row:nth-child(2) .how-row-body p',     't', 'how.row1.desc'],
  ['.how-row:nth-child(3) .how-row-body h4',    't', 'how.row2.title'],
  ['.how-row:nth-child(3) .how-row-body p',     't', 'how.row2.desc'],
  ['.how-row:nth-child(4) .how-row-body h4',    't', 'how.row3.title'],
  ['.how-row:nth-child(4) .how-row-body p',     't', 'how.row3.desc'],

  /* TESTIMONIALS */
  ['#reviews .section-badge span',              't', 'rev.badge'],
  ['#reviews .section-title',                   't', 'rev.title'],
  ['.review-card:nth-child(1) .review-title',   't', 'rev1.title'],
  ['.review-card:nth-child(1) .review-top > p', 't', 'rev1.text'],
  ['.review-card:nth-child(1) .review-more',    't', 'rev1.more'],
  ['.review-card:nth-child(2) .review-title',   't', 'rev2.title'],
  ['.review-card:nth-child(2) .review-top > p', 't', 'rev2.text'],
  ['.review-card:nth-child(2) .review-more',    't', 'rev2.more'],
  ['.review-card:nth-child(3) .review-title',   't', 'rev3.title'],
  ['.review-card:nth-child(3) .review-top > p', 't', 'rev3.text'],
  ['.review-card:nth-child(3) .review-more',    't', 'rev3.more'],
  ['.review-card:nth-child(4) .review-title',   't', 'rev4.title'],
  ['.review-card:nth-child(4) .review-top > p', 't', 'rev4.text'],
  ['.review-card:nth-child(4) .review-more',    't', 'rev4.more'],

  /* LOCATION */
  ['.map-pre-header .section-badge span',       't', 'loc.badge'],
  ['.map-pre-header .section-title',            'h', 'loc.title'],

  /* CTA STRIP */
  ['.cta-strip-left h3',                        'h', 'strip.title'],
  ['.cta-strip-left p',                         't', 'strip.desc'],
  ['.cta-strip-left .btn-white-pill',           't', 'strip.btn'],

  /* FAQ */
  ['#faq .section-badge span',                  't', 'faq.badge'],
  ['#faq .section-title',                       'h', 'faq.title'],
  ['.faq-item:nth-child(1) summary',            't', 'faq.q1'],
  ['.faq-item:nth-child(1) p',                  't', 'faq.a1'],
  ['.faq-item:nth-child(2) summary',            't', 'faq.q2'],
  ['.faq-item:nth-child(2) p',                  't', 'faq.a2'],
  ['.faq-item:nth-child(3) summary',            't', 'faq.q3'],
  ['.faq-item:nth-child(3) p',                  't', 'faq.a3'],
  ['.faq-item:nth-child(4) summary',            't', 'faq.q4'],
  ['.faq-item:nth-child(4) p',                  't', 'faq.a4'],
  ['.faq-item:nth-child(5) summary',            't', 'faq.q5'],
  ['.faq-item:nth-child(5) p',                  't', 'faq.a5'],

  /* CONTACT */
  ['#contact .section-badge span',              't', 'con.badge'],
  ['#contact .section-title',                   't', 'con.title'],
  ['#cd-phone',                                 'h', 'con.phone'],
  ['#cd-email',                                 'h', 'con.email'],
  ['#cd-address',                               'h', 'con.address'],
  ['#cd-hours',                                 'h', 'con.hours'],

  /* FORM */
  ['label[for="cf-name"]',                      't', 'form.name.label'],
  ['#cf-name',                                  'p', 'form.name.ph'],
  ['label[for="cf-email"]',                     't', 'form.email.label'],
  ['#cf-email',                                 'p', 'form.email.ph'],
  ['#cf-phone-label',                           't', 'form.phone.label'],
  ['#cf-phone-input',                           'p', 'form.phone.ph'],
  ['label[for="cf-service"]',                   't', 'form.service.label'],
  ['#cf-service option:nth-child(1)',            't', 'form.service.ph'],
  ['#cf-service option:nth-child(2)',            't', 'form.opt.heating'],
  ['#cf-service option:nth-child(3)',            't', 'form.opt.sanitary'],
  ['#cf-service option:nth-child(4)',            't', 'form.opt.solar'],
  ['#cf-service option:nth-child(5)',            't', 'form.opt.renewable'],
  ['#cf-service option:nth-child(6)',            't', 'form.opt.bathroom'],
  ['#cf-service option:nth-child(7)',            't', 'form.opt.aircon'],
  ['#cf-service option:nth-child(8)',            't', 'form.opt.chimney'],
  ['#cf-service option:nth-child(9)',            't', 'form.opt.stoves'],
  ['label[for="cf-message"]',                   't', 'form.msg.label'],
  ['#cf-message',                               'p', 'form.msg.ph'],
  ['#cf-privacy-text',                          'h', 'form.privacy'],
  ['.contact-form button[type="submit"]',       't', 'form.submit'],

  /* MODAL */
  ['#modal-badge-text',                         't', 'modal.badge'],
  ['#modalTitle',                               't', 'modal.title'],
  ['#modal-subtitle',                           't', 'modal.subtitle'],
  ['#mf-name-label',                            't', 'modal.name.label'],
  ['#mf-name',                                  'p', 'form.name.ph'],
  ['#mf-email-label',                           't', 'modal.email.label'],
  ['#mf-email',                                 'p', 'form.email.ph'],
  ['#mf-phone-label',                           't', 'modal.phone.label'],
  ['#mf-phone',                                 'p', 'form.phone.ph'],
  ['#mf-service-label',                         't', 'modal.service.label'],
  ['#mf-service option:nth-child(1)',           't', 'modal.service.ph'],
  ['#mf-service option:nth-child(2)',           't', 'form.opt.heating'],
  ['#mf-service option:nth-child(3)',           't', 'form.opt.sanitary'],
  ['#mf-service option:nth-child(4)',           't', 'form.opt.solar'],
  ['#mf-service option:nth-child(5)',           't', 'form.opt.renewable'],
  ['#mf-service option:nth-child(6)',           't', 'form.opt.bathroom'],
  ['#mf-service option:nth-child(7)',           't', 'form.opt.aircon'],
  ['#mf-service option:nth-child(8)',           't', 'form.opt.chimney'],
  ['#mf-service option:nth-child(9)',           't', 'form.opt.stoves'],
  ['#mf-message-label',                         't', 'modal.msg.label'],
  ['#mf-message',                               'p', 'modal.msg.ph'],
  ['#modal-submit',                             't', 'modal.submit'],

  /* FOOTER */
  ['.footer-brand-col .footer-col-heading',     't', 'footer.hq'],
  ['.footer-brand-col .footer-map-link',        't', 'footer.map'],
  ['.footer-col:nth-child(2) .footer-col-heading', 't', 'footer.col2'],
  ['.footer-col:nth-child(2) li:nth-child(1) a','t', 'footer.plumbing'],
  ['.footer-col:nth-child(2) li:nth-child(2) a','t', 'footer.drain'],
  ['.footer-col:nth-child(2) li:nth-child(3) a','t', 'footer.reviews'],
  ['.footer-col:nth-child(2) li:nth-child(4) a','t', 'footer.area'],
  ['.footer-col:nth-child(2) li:nth-child(5) a','t', 'footer.about'],
  ['.footer-col:nth-child(3) .footer-col-heading', 't', 'footer.col3'],
  ['.footer-col:nth-child(3) li:nth-child(1) a','t', 'footer.start'],
  ['.footer-appointment p',                     'h', 'footer.appt'],
  ['.footer-col:nth-child(4) .footer-col-heading', 't', 'footer.col4'],
  ['#footer-made-text',                         'h', 'footer.made'],
  ['.footer-bar-copy',                          't', 'footer.copy'],
];

/* ─── Apply translations ─── */
function applyLang(lang) {
  const dict = T[lang];
  if (!dict) return;

  BINDINGS.forEach(([sel, type, key]) => {
    const val = dict[key];
    if (val === undefined) return;
    const el = document.querySelector(sel);
    if (!el) return;
    if      (type === 't') el.textContent  = val;
    else if (type === 'h') el.innerHTML    = val;
    else if (type === 'p') el.placeholder  = val;
  });

  /* Update <html lang> attribute */
  document.documentElement.lang = lang;

  /* Update page title */
  document.title = lang === 'de'
    ? 'Metolli SHK – Heizung Sanitär Solartechnik Bretten'
    : 'Metolli SHK – Heating Plumbing Solar Technology Bretten';

  /* Persist choice */
  localStorage.setItem('mam-lang', lang);

  /* Update switcher buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
  });
}

/* ─── Build switcher UI ─── */
function buildSwitcher() {
  const sw = document.createElement('div');
  sw.className = 'lang-switcher';
  sw.setAttribute('role', 'group');
  sw.setAttribute('aria-label', 'Language / Sprache');

  ['DE', 'EN'].forEach(code => {
    const btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.dataset.lang = code.toLowerCase();
    btn.textContent = code;
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', () => applyLang(code.toLowerCase()));
    sw.appendChild(btn);
  });

  /* Place inside footer bar, after the existing left/right items */
  const footerBar = document.querySelector('.footer-bar-inner');
  if (footerBar) footerBar.appendChild(sw);
  else document.body.appendChild(sw);
}

/* ─── Init ─── */
buildSwitcher();
const saved = localStorage.getItem('mam-lang') || 'de';
applyLang(saved);
