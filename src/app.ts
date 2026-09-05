/// reference types="types.d.ts"

/* ------------------------------------------------------------------ */
/*  Saint Realty & Consulting — Vanilla TypeScript SPA                 */
/*  No frameworks. No libraries. All DOM created at runtime.           */
/* ------------------------------------------------------------------ */


/* --------------------------- Data --------------------------------- */

const PHONE = '+30 693 4101 621';
const EMAIL = 'info@saint-realty.com';
const ADDRESS = 'Gamveta 12, Athens 106 77';
const UPLOADS = './assets/uploads/';

const Properties: Property[] = [
  { status: 'FOR RENT', cat: 'Apartments', type: 'Commercial', title: 'Athens 90tm', price: '$ 5,235/mo', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 20 / Baths: 6 / Sq Ft: 10,450', image: 'prop-5-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Apartments', type: 'Residential', title: 'City Center Apartment', price: '$ 1,600/mo', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 1 / Sq Ft: 450', image: 'prop-1-free-img', slug: '#' },
  { status: 'FOR SALE', cat: 'Apartments', type: 'Residential', title: 'Gorgeous Studio Apartment', price: '$ 89,500', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 1 / Baths: 1 / Sq Ft: 150', image: 'prop-2-free-imgg', slug: '#' },
  { status: 'FOR RENT', cat: 'Apartments', type: 'Commercial', title: 'Luxury Family Apartment', price: '$ 1,300/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 2 / Sq Ft: 725', image: 'prop-3-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Apartments', type: 'Residential', title: 'Glamorous Apartment', price: '$ 1,235/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 3 / Baths: 2 / Sq Ft: 145', image: 'prop-4-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Apartments', type: 'Commercial', title: 'Athens 90tm', price: '$ 5,235/mo', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 20 / Baths: 6 / Sq Ft: 10,450', image: 'prop-5-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Houses', type: 'Commercial', title: 'Awesome Apartment', price: '$ 5,235/mo', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 20 / Baths: 6 / Sq Ft: 10,450', image: 'prop-1-free-img', slug: '#' },
  { status: 'FOR SALE', cat: 'Houses', type: 'Commercial', title: 'Modern Apartment', price: '$ 151,000', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 10 / Baths: 4 / Sq Ft: 850', image: 'prop-2-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Houses', type: 'Residential', title: 'City Center Apartment', price: '$ 1,600/mo', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 1 / Sq Ft: 450', image: 'prop-3-free-img', slug: '#' },
  { status: 'FOR SALE', cat: 'Houses', type: 'Residential', title: 'Gorgeous Studio Apartment', price: '$ 89,500', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 1 / Baths: 1 / Sq Ft: 150', image: 'prop-4-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Houses', type: 'Commercial', title: 'Luxury Family Apartment', price: '$ 1,300/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 2 / Sq Ft: 725', image: 'prop-5-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Houses', type: 'Residential', title: 'Glamorous Apartment', price: '$ 1,235/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 3 / Baths: 2 / Sq Ft: 145', image: 'prop-1-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Offices', type: 'Commercial', title: 'Awesome Apartment', price: '$ 5,235/mo', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 20 / Baths: 6 / Sq Ft: 10,450', image: 'prop-2-free-img', slug: '#' },
  { status: 'FOR SALE', cat: 'Offices', type: 'Commercial', title: 'Modern Apartment', price: '$ 151,000', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 10 / Baths: 4 / Sq Ft: 850', image: 'prop-3-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Offices', type: 'Residential', title: 'City Center Apartment', price: '$ 1,600/mo', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 1 / Sq Ft: 450', image: 'prop-4-free-img', slug: '#' },
  { status: 'FOR SALE', cat: 'Offices', type: 'Residential', title: 'Gorgeous Studio Apartment', price: '$ 89,500', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 1 / Baths: 1 / Sq Ft: 150', image: 'prop-5-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Offices', type: 'Commercial', title: 'Luxury Family Apartment', price: '$ 1,300/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 2 / Sq Ft: 725', image: 'prop-1-free-img', slug: '#' },
  { status: 'FOR RENT', cat: 'Offices', type: 'Residential', title: 'Glamorous Apartment', price: '$ 1,235/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 3 / Baths: 2 / Sq Ft: 145', image: 'prop-6-free-img', slug: '#' }
];

const FEATURED: Property[] =
  [
    Properties.find(p => p.cat === 'Houses' && p.status === 'FOR SALE'),
    Properties.find(p => p.cat === 'Apartments' && p.status === 'FOR SALE'),
    Properties.find(p => p.cat === 'Apartments' && p.status === 'FOR RENT'),
    Properties.find(p => p.cat === 'Offices')
  ].filter(p => p !== undefined);

/* ------------------------- Helpers -------------------------------- */

function el<T extends HTMLElement>(
  tag: string,
  cls?: string | string[],
  text?: string,
  attrs?: Record<string, string>,
  children?: HTMLElement[]
): T {
  const el = document.createElement(tag) as T;
  if (cls) {
    if (Array.isArray(cls)) el.classList.add(...cls);
    else el.classList.add(cls);
  }
  if (text) el.textContent = text;
  if (attrs) Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, k === 'style' ? normalizeStyle(v) : v));
  if (children) children.forEach(c => el.appendChild(c));
  return el;
  function normalizeStyle(style: string): string {
    return style
      .split(';')
      .map(decl => {
        const idx = decl.indexOf(':');
        if (idx === -1) return decl;
        const prop = decl.slice(0, idx).trim().replace(/[A-Z]/g, m => '-' + m.toLowerCase());
        const value = decl.slice(idx + 1);
        return `${prop}:${value}`;
      })
      .join(';');
  }
}

function iconPhone(): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 512 512');
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '16');
  svg.setAttribute('fill', 'currentColor');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z');
  svg.appendChild(path);
  return svg;
}

/* ------------------------- Router --------------------------------- */

class Router {
  private routes = new Map<string, RouteHandler>();
  readonly outlet: HTMLElement;
  private base = '/Saint-Reality/';

  constructor(outlet: HTMLElement) {
    this.outlet = outlet;
    window.addEventListener('popstate', () => this.render());
  }


  add(path: string, handler: RouteHandler) {
    this.routes.set(this.path(path), handler);
  }

  /** Public helper so components can build/compare hrefs consistently with the router. */
  path(path: string): string {
    return `${this.base}${path.replace(/^\/+/, '')}`;
  }

  navigate(path: string, cat?: string) {
    const fullPath = this.path(path);
    history.pushState({}, '', fullPath);
    this.render(cat);
    document.querySelectorAll('.nav a').forEach(a => {
      a.classList.toggle('act', (a as HTMLAnchorElement).pathname === fullPath);
    });
  }

  render(cat?: string) {
    const path = window.location.pathname;
    const handler = this.routes.get(path) || this.routes.get(this.base)!;
    this.outlet.innerHTML = '';
    this.outlet.appendChild(handler(cat));
    window.scrollTo(0, 0);
    document.querySelectorAll('.nav a').forEach(a => {
      a.classList.toggle('act', (a as HTMLAnchorElement).pathname === path);
    });
  }
}

/* ------------------------ Components ------------------------------ */

function Header(router: Router): HTMLElement {
  const hdr = el('header', 'hdr');
  const tbar = el('div', 'tbar');
  const tbarInner = el('div', ['w', 'f', 'jb', 'ai']);
  const phone = el('a', ['f', 'ai'], PHONE, { href: `tel:${PHONE.replace(/\s/g, '')}` });
  phone.prepend(iconPhone());
  const banner = el('a', '', '', { href: `${UPLOADS}2025/10/poster-nee-30-59-final.pdf`, target: '_blank' });
  const bannerImg = el('img', '', '', { src: `${UPLOADS}2025/09/Untitled-1-300x45.jpg`, alt: 'Promo banner', width: '300', height: '45' });
  banner.appendChild(bannerImg);
  tbarInner.append(phone, banner);
  tbar.appendChild(tbarInner);

  const main = el('div', ['w', 'f', 'jb', 'ai'], '', { style: 'padding:1rem' });
  const logo = el('a', 'logo', '', { href: '/' });
  const logoImg = el('img', '', '', { src: `${UPLOADS}2025/06/cropped-953288_OE60X31-300x275.png`, alt: 'Logo Saint Realty & Consulting', width: '154', height: '141' });
  logo.appendChild(logoImg);
  logo.addEventListener('click', e => { e.preventDefault(); router.navigate(''); });

  const nav = el('nav', 'nav');
  const links = [
    { t: 'Home', p: '' },
    { t: 'About Us', p: 'about' },
    { t: 'Properties', p: 'properties' },
    { t: 'Agents', p: 'agents' },
    { t: 'FAQ', p: 'faq' },
    { t: 'Contact', p: 'contact' }
  ];
  links.forEach(l => {
    const a = el('a', window.location.pathname === router.path(l.p) ? 'act' : '', l.t, { href: l.p });
    a.addEventListener('click', e => { e.preventDefault(); router.navigate(l.p); });
    nav.appendChild(a);
  });

  const mob = el('div', 'mob');
  for (let i = 0; i < 3; i++) mob.appendChild(el('span'));
  mob.addEventListener('click', () => nav.classList.toggle('act'));

  main.append(logo, nav, mob);
  hdr.append(tbar, main);
  return hdr;
}

function Footer(): HTMLElement {
  const ftr = el('footer', 'ftr');
  const grid = el('div', ['w', 'ftr-grid']);
  const col1 = el('div');
  col1.appendChild(el('h3', 'tit', 'Saint Realty', { style: 'color:#fff;font-size:1.25rem' }));
  col1.appendChild(el('p', 'txt', 'Realty and Consulting', { style: 'color:#94a3b8' }));
  const col2 = el('div');
  col2.appendChild(el('h4', '', 'Contact', { style: 'color:#fff;marginBottom:.5rem' }));
  col2.appendChild(el('p', '', PHONE, { style: 'color:#cbd5e1' }));
  col2.appendChild(el('p', '', ADDRESS, { style: 'color:#cbd5e1' }));
  col2.appendChild(el('p', '', EMAIL, { style: 'color:#cbd5e1' }));
  const col3 = el('div');
  col3.appendChild(el('h4', '', 'Social Media', { style: 'color:#fff;marginBottom:.5rem' }));
  ['Facebook', 'LinkedIn', 'Instagram'].forEach(s => {
    const a = el('a', '', s, { href: '#', style: 'display:block;color:#cbd5e1;marginBottom:.25rem' });
    col3.appendChild(a);
  });
  grid.append(col1, col2, col3);
  const cp = el('div', ['w', 'cp-t'], 'Copyright © 2026 Saint Realty & Consulting. All rights reserved.');
  ftr.append(grid, cp);
  return ftr;
}

function PropertyCard(p: Property, router: Router): HTMLElement {
  const url = `${UPLOADS}2022/10/${p.image}.jpg`;
  const card = el('div', 'card');
  const img = el('img', 'ci', '', { src: url, alt: p.title });
  const body = el('div', 'cb');
  const meta = el('div', ['f', 'jb', 'ai'], '', { style: 'marginBottom:.5rem' });
  const status = el('span', p.status === 'FOR SALE' ? ['ct', 'ct-s'] : ['ct', 'ct-r'], p.status);
  const type = el('span', ['ct', 'ct-c'], p.type);
  meta.append(status, type);
  const title = el('h3', '', p.title, { style: 'fontSize:1.25rem;fontWeight:700;marginBottom:.25rem' });
  const price = el('div', 'cp', p.price);
  const loc = el('p', 'cd', p.location);
  const det = el('p', 'cd', p.details);
  const btn = el('a', ['btn', 'btn-o'], 'Details', { href: p.slug });
  btn.addEventListener('click', e => {
    if (p.slug.startsWith('/property/')) {
      e.preventDefault();
      router.navigate(p.slug);
    }
  });
  body.append(meta, title, price, loc, det, btn);
  card.append(img, body);
  return card;
}

function SectionTitle(prefix: string, title: string): HTMLElement {
  const wrap = el('div', ['ac', 'sec'], '', { style: 'paddingBottom:2rem' });
  wrap.appendChild(el('p', 'sub', prefix));
  wrap.appendChild(el('h2', 'tit', title));
  return wrap;
}

/* -------------------------- Pages --------------------------------- */

function HomePage(router: Router): HTMLElement {
  const page = el('div');

  /* Hero */
  const hero = el('section', ['sec', 'hero'], '', { style: `background:url(${UPLOADS}2022/10/estate-living-room.jpg) center/cover no-repeat` });
  const heroInner = el('div', 'w');
  const heroBox = el('div', 'box', '', { style: 'maxWidth:600px;background:rgba(255,255,255,0.95);color:var(--t)' });
  const phoneBtn = el('a', ['btn', 'btn-p', 'f', 'ai'], PHONE, { href: `tel:${PHONE.replace(/\s/g, '')}`, style: 'marginBottom:1rem;width:fit-content' });
  phoneBtn.prepend(iconPhone());
  const h1 = el('h1', 'tit', 'House Your Dream', { style: 'color:var(--t)' });
  const cta = el('a', ['btn', 'btn-p'], 'Contact Us', { href: '/contact' });
  cta.addEventListener('click', e => { e.preventDefault(); router.navigate('contact'); });
  heroBox.append(phoneBtn, h1, cta);
  heroInner.appendChild(heroBox);
  hero.appendChild(heroInner);

  /* Message Us */
  const msg = el('section', ['sec', 'sec-alt']);
  const msgW = el('div', ['w', 'g'], '', { style: 'gridTemplateColumns:1fr 1fr;gap:2rem' });
  const msgInfo = el('div');
  msgInfo.appendChild(el('p', 'sub', 'Need Help?'));
  msgInfo.appendChild(el('h2', 'tit', 'Message Us'));
  const msgForm = el<HTMLFormElement>('form', 'fm');
  msgForm.appendChild(el('input', 'inp', '', { type: 'text', placeholder: 'Your Name *', required: 'true' }));
  msgForm.appendChild(el('input', 'inp', '', { type: 'email', placeholder: 'Your Email *', required: 'true' }));
  msgForm.appendChild(el('textarea', ['inp', 'txta'], '', { placeholder: 'Your Message *', required: 'true' }));
  const msgBtn = el('button', ['btn', 'btn-p'], 'Send Message');
  msgForm.appendChild(msgBtn);
  msgForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    msgForm.reset();
  });
  msgW.append(msgInfo, msgForm);
  msg.appendChild(msgW);

  /* Featured */
  const feat = el('section', 'sec');
  const featW = el('div', 'w');
  featW.appendChild(SectionTitle('Featured Listings', 'Find Your Perfect Home'));
  const featGrid = el('div', 'cl');
  FEATURED.forEach(p => featGrid.appendChild(PropertyCard(p, router)));
  featW.appendChild(featGrid);
  feat.appendChild(featW);

  /* About snippet */
  const about = el('section', ['sec', 'sec-alt']);
  const aboutW = el('div', ['w', 'g'], '', { style: 'gridTemplateColumns:1fr 1fr;gap:3rem;alignItems:center' });
  const aboutTxt = el('div');
  aboutTxt.appendChild(el('p', 'sub', 'WHO WE ARE'));
  aboutTxt.appendChild(el('h2', 'tit', 'About Us'));
  aboutTxt.appendChild(el('p', 'txt', 'At Saint Realty & Consulting, we believe real estate is about more than properties – it’s about people.'));
  aboutTxt.appendChild(el('p', 'txt', 'With personalized service, professionalism, and care, we guide you through every step of your real estate journey in Greece.'));
  const aboutBtn = el('a', ['btn', 'btn-o'], 'Learn More', { href: '/about' });
  aboutBtn.addEventListener('click', e => { e.preventDefault(); router.navigate('about'); });
  aboutTxt.appendChild(aboutBtn);
  const aboutImg = el('img', '', '', { src: `${UPLOADS}2025/10/DSC_1325-2-e1759264917414-1024x923.jpg`, alt: 'About Saint Realty', style: 'borderRadius:var(--ra)' });
  aboutW.append(aboutTxt, aboutImg);
  about.appendChild(aboutW);

  /* Looking for */
  const look = el('section', 'sec');
  const lookW = el('div', 'w');
  lookW.appendChild(SectionTitle('We’re Here To Help You', 'What Are You Looking For?'));
  const lookGrid = el('div', 'cl');
  ['Apartments', 'Houses', 'Offices'].forEach(cat => {
    const card = el('div', ['card', 'ac'], '', { style: 'padding:2rem;cursor:pointer' });
    card.appendChild(el('h3', '', cat, { style: 'fontSize:1.5rem;marginBottom:.5rem' }));
    card.addEventListener('click', () => router.navigate('properties', cat));
    lookGrid.appendChild(card);
  });
  lookW.appendChild(lookGrid);
  look.appendChild(lookW);

  /* CTA */
  const ctaSec = el('section', ['sec', 'sec-alt']);
  const ctaW = el('div', ['w', 'ac']);
  ctaW.appendChild(el('h2', 'tit', 'Let’s Find You Together The Place You Deserve'));
  ctaW.appendChild(el('p', 'txt', 'Whether you are buying, selling, or renting, our team is ready to guide you to the right property in Athens and beyond.'));
  const ctaPhone = el('a', ['btn', 'btn-p'], PHONE, { href: `tel:${PHONE.replace(/\s/g, '')}` });
  ctaW.appendChild(ctaPhone);
  ctaSec.appendChild(ctaW);

  page.append(hero, msg, feat, about, look, ctaSec);
  return page;
}

function AboutPage(): HTMLElement {
  const page = el('div');

  const s1 = el('section', 'sec');
  const w1 = el('div', 'w');
  w1.appendChild(SectionTitle('who we are', 'About us'));
  page.appendChild(s1).appendChild(w1);

  const s2 = el('section', ['sec', 'sec-alt']);
  const w2 = el('div', ['w', 'g'], '', { style: 'gridTemplateColumns:1fr 1fr;gap:3rem;alignItems:center' });
  const txt = el('div');
  txt.appendChild(el('h4', '', 'At Saint Realty & Consulting, we believe real estate is about more than properties – it’s about people.', { style: 'fontSize:1.25rem;marginBottom:1rem' }));
  txt.appendChild(el('p', 'txt', 'With personalized service, professionalism, and care, we guide you through every step of your real estate journey in Greece.'));
  txt.appendChild(el('p', 'txt', 'We assist international clients in English and Arabic, offering property searches, investment consulting, and Golden Visa support. We also place special focus on accessibility, proposing homes that truly improve everyday life for people with disabilities.'));
  txt.appendChild(el('p', 'txt', 'With us, you don’t just find a property – you house your dream.'));
  const img = el('img', '', '', { src: `${UPLOADS}2025/10/DSC_1325-2-e1759264917414-1024x923.jpg`, alt: 'Team member', style: 'borderRadius:var(--ra)' });
  w2.append(txt, img);
  s2.appendChild(w2);
  page.appendChild(s2);

  const s3 = el('section', 'sec');
  const w3 = el('div', 'w');
  const grid = el('div', 'cl');
  const visions = [
    { t: 'Our Vision', d: 'We see real estate as a long-term relationship, not a single transaction. Our goal is to become the trusted partner our clients turn to for every property decision in Greece — whether they are buying a first home, expanding an investment portfolio, or relocating from abroad. We combine local market knowledge with genuine attention to each client\u2019s situation, so every recommendation is grounded in what actually fits their needs and budget.' },
    { t: 'Our DREAM', d: 'We want every client, wherever they come from, to feel confident and supported when investing in Greek real estate. That means clear communication, honest advice, and hands-on assistance through every stage of the process — from the first property search to the final signature, and beyond. Our ambition is to keep raising the standard for personalised, transparent real estate consulting in Athens and across Greece.' }
  ];
  visions.forEach(v => {
    const box = el('div', 'box');
    box.appendChild(el('h3', 'tit', v.t, { style: 'fontSize:1.5rem' }));
    box.appendChild(el('p', 'txt', v.d));
    grid.appendChild(box);
  });
  w3.appendChild(grid);
  s3.appendChild(w3);
  page.appendChild(s3);

  return page;
}

function ContactPage(): HTMLElement {
  const page = el('div');

  const s1 = el('section', 'sec');
  const w1 = el('div', 'w');
  w1.appendChild(SectionTitle('Contact Us', 'Get in Touch'));
  page.appendChild(s1).appendChild(w1);

  const s2 = el('section', ['sec', 'sec-alt']);
  const w2 = el('div', ['w', 'g'], '', { style: 'gridTemplateColumns:1fr 1fr;gap:3rem' });

  const formWrap = el('div');
  formWrap.appendChild(el('h4', '', 'Send us a message', { style: 'marginBottom:1rem' }));
  const form = el<HTMLFormElement>('form', 'fm');
  form.appendChild(el('input', 'inp', '', { type: 'text', placeholder: 'Your Name *', required: 'true' }));
  form.appendChild(el('input', 'inp', '', { type: 'email', placeholder: 'Your Email *', required: 'true' }));
  form.appendChild(el('textarea', ['inp', 'txta'], '', { placeholder: 'Your Message *', required: 'true' }));
  const btn = el('button', ['btn', 'btn-p'], 'Send');
  form.appendChild(btn);
  form.addEventListener('submit', e => { e.preventDefault(); alert('Message sent!'); form.reset(); });
  formWrap.appendChild(form);

  const info = el('div');
  info.appendChild(el('h4', '', 'Contact info', { style: 'marginBottom:1rem' }));
  info.appendChild(el('p', 'txt', 'Have a question about a property or need advice on your next move? Reach out and a member of our team will get back to you shortly.'));
  info.appendChild(el('p', '', PHONE, { style: 'marginBottom:.5rem' }));
  info.appendChild(el('p', '', ADDRESS, { style: 'marginBottom:.5rem' }));
  info.appendChild(el('p', '', EMAIL, { style: 'marginBottom:1.5rem' }));
  const social = el('div');
  social.appendChild(el('h4', '', 'Social media', { style: 'marginBottom:.5rem' }));
  ['Facebook', 'LinkedIn', 'Instagram'].forEach(s => {
    const a = el('a', '', s, { href: '#', style: 'display:block;marginBottom:.25rem;color:var(--p)' });
    social.appendChild(a);
  });
  info.appendChild(social);

  w2.append(formWrap, info);
  s2.appendChild(w2);
  page.appendChild(s2);

  return page;
}

/* ------------------- Accessibility icons --------------------- */

function iconPath(d: string, viewBox = '0 0 512 512'): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', viewBox);
  svg.setAttribute('width', '32');
  svg.setAttribute('height', '32');
  svg.setAttribute('fill', 'currentColor');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  svg.appendChild(path);
  return svg;
}

/* Wheelchair (accessibility) icon — free, license-free glyph (Font Awesome "wheelchair" outline, public path data) */
function iconWheelchair(): SVGSVGElement {
  return iconPath('M164 148c31 0 56-25 56-56S195 36 164 36s-56 25-56 56 25 56 56 56zm115.9 218.6L232 296l30.3-90.9c6.9-20.6-4.3-42.9-24.9-49.8-20.6-6.9-42.9 4.3-49.8 24.9L153.5 300c-3.6 10.8-2.4 22.6 3.3 32.4 5.7 9.8 15.2 16.7 26.2 18.9l84 16.8c3.3.7 6.6 1 9.8 1 17.2 0 32.6-11.9 36.5-29.4 4.4-19.8-8.1-39.4-27.9-43.8l-31.3-6.3 20-60 41.2 41.2c5.1 5.1 11.9 7.9 19.1 7.9 4.9 0 9.9-1.3 14.3-4.1l64-40c14.9-9.3 19.5-29 10.1-43.9-9.3-14.9-29-19.5-43.9-10.1l-46 28.7-63.8-63.8c-4.4-4.4-9.9-7.4-16-8.7l-63.8-13.9c-19.8-4.3-39.4 8.3-43.6 28.1s8.3 39.4 28.1 43.6l52.4 11.4-21.1 63.3-8.8-1.8c-40.6-8.5-80.5 17.6-89 58.2-8.5 40.6 17.6 80.5 58.2 89l50 10.5c3.9.8 7.8 1.2 11.6 1.2 34.4 0 65.1-24.1 72.3-59.1 4.4-21.4-1.2-42.5-13.8-58.6zM96 336c0-52.9 43.1-96 96-96 8 0 15.8 1 23.2 2.8l14.4-43.2C216.2 195.9 200.5 192 184 192c-79.5 0-144 64.5-144 144s64.5 144 144 144c62.5 0 115.7-39.9 135.5-95.6l-45.1-9c-13.9 33.3-46.8 56.6-84.4 56.6-52.9 0-96-43.1-96-96z');
}

function iconRuler(): SVGSVGElement {
  /* Design / plan icon (compass & pencil style) */
  return iconPath('M0 479.98L32.11 512l32.55-32.54-32.13-32.13zm35.25-35.26l32.13 32.13 42.99-42.99-32.13-32.13zm75.79-75.78l32.13 32.13 42.98-42.98-32.13-32.14zm75.78-75.78l32.14 32.13 42.98-42.98-32.13-32.14zm75.78-75.78l32.14 32.13L338 206.35l-32.14-32.14zM478.06 33.97c-13.28-13.28-32.03-19.75-51.44-17.72l-72.59 7.63 65.11 65.14-24.65 24.65-70.7-70.72-42.98 42.98 70.7 70.72-24.65 24.65-70.7-70.72-42.98 42.98 70.7 70.72-24.65 24.65-70.7-70.72-42.98 42.98 70.7 70.72-24.65 24.65-65.11-65.11-7.63 72.58c-2.03 19.4 4.44 38.15 17.72 51.44l16.61 16.61L497.7 65.98z');
}

function iconFunding(): SVGSVGElement {
  /* Coin / financing icon */
  return iconPath('M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 4.4-3.6 8-8 8h-40v40c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40h40c4.4 0 8 3.6 8 8v40zm-224-8c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40z');
}

function iconAdmin(): SVGSVGElement {
  /* Document / dossier icon */
  return iconPath('M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5-24.9-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224v-32H80v32zm0-64h224v-32H80v32zm0-64h224v-32H80v32z');
}

function iconCheck(): SVGSVGElement {
  return iconPath('M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z');
}

/* ----------------------- Accessibility page --------------------- */

function ServiceCard(icon: () => SVGSVGElement, title: string, desc: string): HTMLElement {
  const card = el('div', ['card'], '', { style: 'padding:2rem' });
  const iconWrap = el('div', '', '', { style: 'color:var(--p);margin-bottom:1rem' });
  iconWrap.appendChild(icon());
  card.appendChild(iconWrap);
  card.appendChild(el('h3', '', title, { style: 'fontSize:1.15rem;marginBottom:.6rem' }));
  card.appendChild(el('p', 'txt', desc, { style: 'marginBottom:0' }));
  return card;
}

function ChecklistItem(text: string): HTMLElement {
  const li = el('li', ['f', 'ai'], '', { style: 'gap:.75rem;marginBottom:.9rem;alignItems:flex-start' });
  const ic = el('span', '', '', { style: 'color:var(--p);flex:0 0 auto;marginTop:.15rem' });
  const svg = iconCheck();
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '16');
  ic.appendChild(svg);
  li.append(ic, el('span', 'txt', text, { style: 'marginBottom:0' }));
  return li;
}

function FundingBox(name: string, desc: string): HTMLElement {
  const box = el('div', 'box', '', { style: 'marginBottom:1.25rem' });
  box.appendChild(el('h4', '', name, { style: 'marginBottom:.5rem;color:var(--p)' }));
  box.appendChild(el('p', 'txt', desc, { style: 'marginBottom:0' }));
  return box;
}

function AccessibilityPage(router: Router): HTMLElement {
  const page = el('div');

  /* Hero */
  const hero = el('section', ['sec', 'hero'], '', { style: 'background:linear-gradient(rgba(19,64,51,.55),rgba(19,64,51,.55)),url(${UPLOADS}2022/10/estate-living-room.jpg) center/cover no-repeat;min-height:420px' });
  const heroInner = el('div', 'w');
  const heroBox = el('div', '', '', { style: 'max-width:720px' });
  heroBox.appendChild(el('p', 'sub', 'Accessibility & Independent Living Consulting', { style: 'color:#fff' }));
  heroBox.appendChild(el('h1', 'tit', 'Homes adapted for people with disabilities and reduced mobility in Greece', { style: 'color:#fff' }));
  heroBox.appendChild(el('p', 'txt', 'We help individuals, landlords and apartment-building associations (πολυκατοικίες) design, build and finance accessible homes — from the first assessment to the final inspection.', { style: 'color:#e6efe9' }));
  const heroBtn = el('a', ['btn', 'btn-p'], 'Request an assessment', { href: '/contact' });
  heroBtn.addEventListener('click', e => { e.preventDefault(); router.navigate('/contact'); });
  heroBox.appendChild(heroBtn);
  heroInner.appendChild(heroBox);
  hero.appendChild(heroInner);

  /* Intro */
  const intro = el('section', 'sec');
  const introW = el('div', ['w', 'g'], '', { style: 'grid-template-columns:1fr 1fr;gap:3rem;align-items:center' });
  const introTxt = el('div');
  introTxt.appendChild(el('p', 'sub', 'Why work with us'));
  introTxt.appendChild(el('h2', 'tit', 'Our expertise, at your service'));
  introTxt.appendChild(el('p', 'txt', 'In Greece, a large share of the existing housing stock — from older Athenian apartment blocks to island homes — was never designed with accessibility in mind: narrow doorways, high thresholds, steps at the entrance, and bathrooms that cannot accommodate a wheelchair. At the same time, the national and regional funding programmes that could pay for these adaptations are often complex and under-used.'));
  introTxt.appendChild(el('p', 'txt', 'As your consultant, we support you at every stage of the project: assessing your needs and your home, designing a functional and attractive layout, coordinating the accessibility works, and preparing the funding applications (Prosvasimotita kat\u2019 oikon, regional programmes, and other available schemes).'));
  const introList = el('ul');
  [
    'Personalised, on-site accessibility assessment',
    'Design and adaptation plans (bathroom, circulation space, kitchen, entrance and outdoor areas)',
    'Identification and preparation of funding applications',
    'Coordination of qualified contractors and supervision of the works'
  ].forEach(t => introList.appendChild(ChecklistItem(t)));
  introTxt.appendChild(introList);
  const introImg = el('img', '', '', { src: `${UPLOADS}2025/10/DSC_1325-2-e1759264917414-1024x923.jpg`, alt: 'Accessible home in Greece', style: 'border-radius:var(--ra)' });
  introW.append(introTxt, introImg);
  intro.appendChild(introW);

  /* Services */
  const services = el('section', ['sec', 'sec-alt']);
  const servW = el('div', 'w');
  servW.appendChild(SectionTitle('Our services', 'Complete, end-to-end support'));
  const servGrid = el('div', 'cl');
  servGrid.appendChild(ServiceCard(iconRuler, 'Design & planning', 'Assessment of the home and design of a functional, accessible layout — door widths, turning circles, level-access showers, grab-bar placement — without compromising on style.'));
  servGrid.appendChild(ServiceCard(iconWheelchair, 'Accessibility works', 'Widening of passageways, removal of thresholds and steps, bathroom and kitchen adaptation, home automation, stairlifts and platform lifts, entrance ramps and accessible outdoor paths.'));
  servGrid.appendChild(ServiceCard(iconFunding, 'Funding of the works', 'Identification of every available grant or subsidy (Prosvasimotita kat\u2019 oikon, regional and municipal programmes, EU-funded schemes) and preparation of an optimised financing plan.'));
  servGrid.appendChild(ServiceCard(iconAdmin, 'Application & permit handling', 'Preparation and follow-up of the administrative file with the competent authorities, disability certification bodies, municipalities and building owners.'));
  servW.appendChild(servGrid);
  services.appendChild(servW);

  /* Method / process */
  const method = el('section', 'sec');
  const methodW = el('div', 'w');
  methodW.appendChild(SectionTitle('Our method', 'A simple, 5-step process'));
  const steps = [
    { t: '1. On-site assessment', d: 'A visit to the home to evaluate the occupant\u2019s needs and the constraints of the existing building.' },
    { t: '2. Project design', d: 'Adaptation plans, choice of equipment, and prioritisation of works based on urgency and budget.' },
    { t: '3. Funding plan', d: 'Simulation and combination of the available grants (Prosvasimotita kat\u2019 oikon, regional programmes, and other schemes).' },
    { t: '4. Application filing', d: 'Submission and follow-up of the application with the relevant authorities, and selection of qualified contractors.' },
    { t: '5. Works supervision & handover', d: 'Coordination of the works and verification of compliance with accessibility standards before final handover.' }
  ];
  const methodGrid = el('div', 'cl');
  steps.forEach(s => {
    const box = el('div', 'box');
    box.appendChild(el('h3', '', s.t, { style: 'font-size:1.1rem;margin-bottom:.5rem;color:var(--p)' }));
    box.appendChild(el('p', 'txt', s.d, { style: 'margin-bottom:0' }));
    methodGrid.appendChild(box);
  });
  methodW.appendChild(methodGrid);
  method.appendChild(methodW);

  /* Funding / regulatory framework */
  const funding = el('section', ['sec', 'sec-alt']);
  const fundW = el('div', ['w', 'g'], '', { style: 'grid-template-columns:1fr 1fr;gap:3rem;align-items:start' });
  const fundLeft = el('div');
  fundLeft.appendChild(el('p', 'sub', 'Legal framework & funding'));
  fundLeft.appendChild(el('h2', 'tit', 'Key funding schemes available in Greece'));
  fundLeft.appendChild(el('p', 'txt', 'Greek law (including Law 4488/2017 on the rights of persons with disabilities) sets out the principle of non-discrimination in access to housing, and the New Building Code (ΝΟΚ) requires accessibility provisions in new and renovated buildings. Several schemes can help fund all or part of your adaptation works:'));
  const fundRight = el('div');
  fundRight.appendChild(FundingBox('\u201CProsvasimotita kat\u2019 oikon\u201D (Accessibility at Home)', 'The national programme, funded through the Greece 2.0 Recovery and Resilience Facility, grants up to \u20AC14,500 per household, with 50% paid in advance. It is open to people with a certified disability rate of 67% or more (motor and/or sensory). Eligible spaces include the main residence regardless of tenure (including rented homes, with the owner\u2019s consent), a privately-owned secondary residence, professional premises of self-employed applicants, and common areas of apartment buildings.'));
  fundRight.appendChild(FundingBox('Eligible works', 'Entrance ramps, vertical platform lifts, home automation and specialised equipment, technical studies and permits, and the certifying engineer\u2019s fee for confirming completion of the works.'));
  fundRight.appendChild(FundingBox('Regional & municipal pilot programmes', 'Several Greek regions run their own accessibility grant programmes for small-scale technical interventions — for example, pilot schemes of up to \u20AC14,500 have been rolled out at regional level. We track which programmes are currently open in your area.'));
  fundRight.appendChild(FundingBox('Building-permit & VAT considerations', 'Depending on the scope of the works and the building\u2019s status, permit exemptions or specific VAT treatment may apply. We assess this case by case together with your civil engineer and accountant.'));
  fundRight.appendChild(FundingBox('Combining with other support', 'Disability and social-welfare allowances, as well as any employer- or insurance-funded support, can sometimes be combined with the above programmes; we review your full situation to maximise available funding.'));
  fundW.append(fundLeft, fundRight);
  funding.appendChild(fundW);

  /* CTA */
  const cta = el('section', 'sec');
  const ctaW = el('div', ['w', 'ac'], '', { style: 'max-width:700px;margin:0 auto' });
  ctaW.appendChild(el('h2', 'tit', 'Let\u2019s talk about your project'));
  ctaW.appendChild(el('p', 'txt', 'Every situation is different. Contact us for an initial conversation and an assessment of your home and of the funding you may be entitled to.'));
  const ctaBtn = el('a', ['btn', 'btn-p'], 'Contact us', { href: '/contact' });
  ctaBtn.addEventListener('click', e => { e.preventDefault(); router.navigate('/contact'); });
  ctaW.appendChild(ctaBtn);
  cta.appendChild(ctaW);

  page.append(hero, intro, services, method, funding, cta);
  return page;
}

function PropertiesPage(router: Router, cat?: string): HTMLElement {
  const page = el('div');

  const s1 = el('section', 'sec');
  const w1 = el('div', 'w');
  w1.appendChild(SectionTitle('Find Your Perfect Home', 'Nice Apartments'));
  const g1 = el('div', 'cl');
  const props = cat ? Properties.filter(p => p.cat === cat) : Properties;
  props.forEach(p => g1.appendChild(PropertyCard(p, router)));
  w1.appendChild(g1);
  s1.appendChild(w1);
  page.appendChild(s1);

  const s2 = el('section', ['sec', 'sec-alt']);
  const w2 = el('div', 'w');
  w2.appendChild(el('h2', ['tit', 'ac'], 'Attractive Houses', { style: 'marginBottom:2rem' }));
  const g2 = el('div', 'cl');
  Properties
    .filter(p => p.cat === 'Houses')
    .forEach(p => g2.appendChild(PropertyCard(p, router)));
  w2.appendChild(g2);
  s2.appendChild(w2);
  page.appendChild(s2);

  const s3 = el('section', 'sec');
  const w3 = el('div', 'w');
  w3.appendChild(el('h2', ['tit', 'ac'], 'Best Offices', { style: 'marginBottom:2rem' }));
  const g3 = el('div', 'cl');
  Properties
    .filter(p => p.cat === 'Offices')
    .forEach(p => g3.appendChild(PropertyCard(p, router)));
  w3.appendChild(g3);
  s3.appendChild(w3);
  page.appendChild(s3);

  return page;
}

function AgentsPage(): HTMLElement {
  const page = el('div');
  const sec = el('section', 'sec');
  const w = el('div', 'w');
  w.appendChild(SectionTitle('Our Team', 'Agents'));
  const grid = el('div', 'cl');
  const agents = [
    {
      name: 'Danielle Pena',
      resume: 'Senior Real Estate Consultant with 12 years of experience in the Athens residential market. Specialises in guiding international buyers through acquisitions and Golden Visa transactions, from property search to notarial closing. Fluent in English, Greek and French.',
      tel: '+30 694 112 3345',
      email: 'd.pena@saint-realty.com'
    },
    {
      name: 'Mark O\u2019Brien',
      resume: 'Commercial Property Advisor with a background in asset management for office and retail spaces across Attica. Supports investors with yield analysis, lease negotiation and portfolio strategy. Fluent in English and Greek.',
      tel: '+30 694 227 5591',
      email: 'm.obrien@saint-realty.com'
    },
    {
      name: 'Russell Douglas',
      resume: 'Accessibility & Adaptive Housing Specialist. Coordinates on-site assessments and works alongside occupational therapists and civil engineers to design and deliver homes adapted for people with disabilities and reduced mobility. Fluent in English and Greek.',
      tel: '+30 693 348 8820',
      email: 'r.douglas@saint-realty.com'
    },
    {
      name: 'Elena Papadopoulou',
      resume: 'Property Manager & Client Relations. Oversees rental portfolios and handles day-to-day tenant relations on behalf of owners living abroad, including maintenance coordination and lease renewals. Fluent in Greek, English and Italian.',
      tel: '+30 697 501 4462',
      email: 'e.papadopoulou@saint-realty.com'
    },
    {
      name: 'Yusuf Al-Rashid',
      resume: 'International Client Liaison, supporting clients from the Gulf region and Egypt throughout the acquisition process — property search, due diligence, and coordination with notaries and legal counsel. Fluent in Arabic, English and Greek.',
      tel: '+30 698 664 7723',
      email: 'y.alrashid@saint-realty.com'
    },
    {
      name: 'Sofia Nikolaou',
      resume: 'Junior Consultant & Golden Visa Coordinator. Manages due diligence and documentation for investor-residency applications, and supports senior consultants on property valuations. Fluent in Greek and English.',
      tel: '+30 695 830 1187',
      email: 's.nikolaou@saint-realty.com'
    },
  ]
  agents.forEach((agent, i) => {
    const card = el('div', ['card', 'ac'], '', { style: 'padding:2rem' });
    const img = el('img', '', '', { src: `${UPLOADS}2022/10/estate-agent-${i + 1}.jpg`, alt: agent.name, style: 'width:120px;height:120px;borderRadius:50%;objectFit:cover;margin:0 auto 1rem' });
    card.append(img, el('h3', '', agent.name), el('p', 'txt', 'Real Estate Consultant'));
    card.append(el('p', '', agent.resume));
    card.append(el('p', '', agent.tel));
    card.append(el('p', '', agent.email));
    grid.appendChild(card);
  });
  w.appendChild(grid);
  sec.appendChild(w);
  page.appendChild(sec);
  return page;
}

function FAQPage(): HTMLElement {
  const page = el('div');
  const sec = el('section', 'sec');
  const w = el('div', 'w');
  w.appendChild(SectionTitle('FAQ', 'Frequently Asked Questions'));
  const items = [
    { q: 'Do you assist international clients?', a: 'Yes, we assist international clients in English and Arabic, offering property searches, investment consulting, and Golden Visa support.' },
    { q: 'What areas do you cover?', a: 'We cover Athens and the surrounding areas including Vouliagmeni, Nea Smyrni, and other prime locations in Greece.' },
    { q: 'Do you offer accessibility consulting?', a: 'We place special focus on accessibility, proposing homes that truly improve everyday life for people with disabilities.' },
    { q: 'How can I schedule a viewing?', a: 'You can call us at ' + PHONE + ' or use the contact form on this website to schedule a property viewing.' },
    { q: 'What is the Golden Visa program?', a: 'The Greek Golden Visa program grants residency to non-EU investors who purchase property above a certain threshold. We guide you through every step.' }
  ];
  items.forEach(it => {
    const box = el('div', 'box', '', { style: 'marginBottom:1rem' });
    box.appendChild(el('h4', '', it.q, { style: 'marginBottom:.5rem;color:var(--p)' }));
    box.appendChild(el('p', 'txt', it.a));
    w.appendChild(box);
  });
  sec.appendChild(w);
  page.appendChild(sec);
  return page;
}

function PropertyDetailPage(title: string, property: Property, router: Router): HTMLElement {
  const page = el('div');
  const sec = el('section', 'sec');
  const w = el('div', ['w', 'g'], '', { style: 'gridTemplateColumns:1fr 1fr;gap:3rem;alignItems:start' });
  const img = el('img', '', '', { src: property.image, alt: property.title, style: 'borderRadius:var(--ra);width:100%' });
  const info = el('div');
  info.appendChild(el('p', 'sub', property.status));
  info.appendChild(el('h1', 'tit', title));
  info.appendChild(el('div', 'cp', property.price));
  info.appendChild(el('p', 'txt', property.location));
  info.appendChild(el('p', 'txt', property.details));
  info.appendChild(el('p', 'txt', 'For more information, please contact us at ' + PHONE + ' or via email at ' + EMAIL + '.'));
  const btn = el('a', ['btn', 'btn-p'], 'Contact Agent', { href: '/contact' });
  btn.addEventListener('click', e => { e.preventDefault(); router.navigate('contact'); });
  info.appendChild(btn);
  w.append(img, info);
  sec.appendChild(w);
  page.appendChild(sec);
  return page;
}

/* -------------------------- Init ---------------------------------- */

(function start() {
  const app = document.getElementById('app')!;
  const main = el('main');
  const router = new Router(main);

  const layout = el('div');
  layout.appendChild(Header(router));
  layout.appendChild(main);
  layout.appendChild(Footer());
  app.appendChild(layout);
  router.add('', () => HomePage(router));
  router.add('accessibility', () => AccessibilityPage(router));
  router.add(`about`, () => AboutPage());
  router.add(`contact`, () => ContactPage());
  router.add(`properties`, (cat?: string) => PropertiesPage(router, cat));
  router.add(`agents`, () => AgentsPage());
  router.add(`faq`, () => FAQPage());
  router.add(`property/kavouri`, () => PropertyDetailPage('Kavouri – Vouliagmeni', FEATURED[0], router));
  router.add(`property/nea-smyrni`, () => PropertyDetailPage('ATHENS – NEA SMYRNI', FEATURED[1], router));

  router.render();
})();