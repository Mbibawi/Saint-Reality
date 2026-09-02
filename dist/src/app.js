"use strict";
const PHONE = '+30 693 4101 621';
const EMAIL = 'info@saint-realty.com';
const ADDRESS = 'Gamveta 12, Athens 106 77';
const Properties = [
    { status: 'FOR RENT', cat: 'Apartment', type: 'Commercial', title: 'Athens 90tm', price: '$ 5,235/mo', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 20 / Baths: 6 / Sq Ft: 10,450', image: 'assets/uploads/2022/10/img-06-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'Apartment', type: 'Residential', title: 'City Center Apartment', price: '$ 1,600/mo', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 1 / Sq Ft: 450', image: 'assets/uploads/2022/10/img-07-free-img.jpg', slug: '#' },
    { status: 'FOR SALE', cat: 'Apartment', type: 'Residential', title: 'Gorgeous Studio Apartment', price: '$ 89,500', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 1 / Baths: 1 / Sq Ft: 150', image: 'assets/uploads/2022/10/img-08-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'Apartment', type: 'Commercial', title: 'Luxury Family Apartment', price: '$ 1,300/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 2 / Sq Ft: 725', image: 'assets/uploads/2022/10/img-09-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'Apartment', type: 'Residential', title: 'Glamorous Apartment', price: '$ 1,235/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 3 / Baths: 2 / Sq Ft: 145', image: 'assets/uploads/2022/10/img-10-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'Apartment', type: 'Commercial', title: 'Athens 90tm', price: '$ 5,235/mo', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 20 / Baths: 6 / Sq Ft: 10,450', image: 'assets/uploads/2022/10/img-06-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'House', type: 'Commercial', title: 'Awesome Apartment', price: '$ 5,235/mo', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 20 / Baths: 6 / Sq Ft: 10,450', image: 'assets/uploads/2022/10/img-06-free-img.jpg', slug: '#' },
    { status: 'FOR SALE', cat: 'House', type: 'Commercial', title: 'Modern Apartment', price: '$ 151,000', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 10 / Baths: 4 / Sq Ft: 850', image: 'assets/uploads/2022/10/img-07-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'House', type: 'Residential', title: 'City Center Apartment', price: '$ 1,600/mo', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 1 / Sq Ft: 450', image: 'assets/uploads/2022/10/img-08-free-img.jpg', slug: '#' },
    { status: 'FOR SALE', cat: 'House', type: 'Residential', title: 'Gorgeous Studio Apartment', price: '$ 89,500', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 1 / Baths: 1 / Sq Ft: 150', image: 'assets/uploads/2022/10/img-09-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'House', type: 'Commercial', title: 'Luxury Family Apartment', price: '$ 1,300/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 2 / Sq Ft: 725', image: 'assets/uploads/2022/10/img-10-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'House', type: 'Residential', title: 'Glamorous Apartment', price: '$ 1,235/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 3 / Baths: 2 / Sq Ft: 145', image: 'assets/uploads/2022/10/img-06-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'Office', type: 'Commercial', title: 'Awesome Apartment', price: '$ 5,235/mo', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 20 / Baths: 6 / Sq Ft: 10,450', image: 'assets/uploads/2022/10/img-06-free-img.jpg', slug: '#' },
    { status: 'FOR SALE', cat: 'Office', type: 'Commercial', title: 'Modern Apartment', price: '$ 151,000', location: '123 Fifth Avenue, NY 10160', details: 'Offices: 10 / Baths: 4 / Sq Ft: 850', image: 'assets/uploads/2022/10/img-07-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'Office', type: 'Residential', title: 'City Center Apartment', price: '$ 1,600/mo', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 1 / Sq Ft: 450', image: 'assets/uploads/2022/10/img-08-free-img.jpg', slug: '#' },
    { status: 'FOR SALE', cat: 'Office', type: 'Residential', title: 'Gorgeous Studio Apartment', price: '$ 89,500', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 1 / Baths: 1 / Sq Ft: 150', image: 'assets/uploads/2022/10/img-09-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'Office', type: 'Commercial', title: 'Luxury Family Apartment', price: '$ 1,300/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 2 / Baths: 2 / Sq Ft: 725', image: 'assets/uploads/2022/10/img-10-free-img.jpg', slug: '#' },
    { status: 'FOR RENT', cat: 'Office', type: 'Residential', title: 'Glamorous Apartment', price: '$ 1,235/MO', location: '123 Fifth Avenue, NY 10160', details: 'Bedrooms: 3 / Baths: 2 / Sq Ft: 145', image: 'assets/uploads/2022/10/img-06-free-img.jpg', slug: '#' }
];
const FEATURED = [
    Properties.find(p => p.cat === 'House' && p.status === 'FOR SALE'),
    Properties.find(p => p.cat === 'Apartment' && p.status === 'FOR SALE'),
    Properties.find(p => p.cat === 'Apartment' && p.status === 'FOR RENT'),
    Properties.find(p => p.cat === 'Office')
].filter(p => p !== undefined);
function el(tag, cls, text, attrs, children) {
    const el = document.createElement(tag);
    if (cls) {
        if (Array.isArray(cls))
            el.classList.add(...cls);
        else
            el.classList.add(cls);
    }
    if (text)
        el.textContent = text;
    if (attrs)
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    if (children)
        children.forEach(c => el.appendChild(c));
    return el;
}
function iconPhone() {
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
class Router {
    constructor(outlet) {
        this.routes = new Map();
        this.outlet = outlet;
        window.addEventListener('popstate', () => this.render());
    }
    add(path, handler) {
        this.routes.set(path, handler);
    }
    navigate(path) {
        history.pushState({}, '', path);
        this.render();
        document.querySelectorAll('.nav a').forEach(a => {
            a.classList.toggle('act', a.pathname === path);
        });
    }
    render() {
        const path = window.location.pathname;
        const handler = this.routes.get(path) || this.routes.get('/');
        this.outlet.innerHTML = '';
        this.outlet.appendChild(handler());
        window.scrollTo(0, 0);
        document.querySelectorAll('.nav a').forEach(a => {
            a.classList.toggle('act', a.pathname === path);
        });
    }
}
function Header(router) {
    const hdr = el('header', 'hdr');
    const tbar = el('div', 'tbar');
    const tbarInner = el('div', ['w', 'f', 'jb', 'ai']);
    const phone = el('a', ['f', 'ai'], PHONE, { href: `tel:${PHONE.replace(/\s/g, '')}` });
    phone.prepend(iconPhone());
    const banner = el('a', '', '', { href: 'assets/uploads/2025/10/poster-nee-30-59-final.pdf', target: '_blank' });
    const bannerImg = el('img', '', '', { src: 'assets/uploads/2025/09/Untitled-1-300x45.jpg', alt: 'Promo banner', width: '300', height: '45' });
    banner.appendChild(bannerImg);
    tbarInner.append(phone, banner);
    tbar.appendChild(tbarInner);
    const main = el('div', ['w', 'f', 'jb', 'ai'], '', { style: 'padding:1rem' });
    const logo = el('a', 'logo', '', { href: '/' });
    const logoImg = el('img', '', '', { src: 'assets/uploads/2025/06/cropped-953288_OE60X31-300x275.png', alt: 'Logo Saint Realty & Consulting', width: '154', height: '141' });
    logo.appendChild(logoImg);
    logo.addEventListener('click', e => { e.preventDefault(); router.navigate('/'); });
    const nav = el('nav', 'nav');
    const links = [
        { t: 'Home', p: '/' },
        { t: 'About Us', p: '/about' },
        { t: 'Properties', p: '/properties' },
        { t: 'Agents', p: '/agents' },
        { t: 'FAQ', p: '/faq' },
        { t: 'Contact', p: '/contact' }
    ];
    links.forEach(l => {
        const a = el('a', window.location.pathname === l.p ? 'act' : '', l.t, { href: l.p });
        a.addEventListener('click', e => { e.preventDefault(); router.navigate(l.p); });
        nav.appendChild(a);
    });
    const mob = el('div', 'mob');
    for (let i = 0; i < 3; i++)
        mob.appendChild(el('span'));
    mob.addEventListener('click', () => nav.classList.toggle('act'));
    main.append(logo, nav, mob);
    hdr.append(tbar, main);
    return hdr;
}
function Footer() {
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
function PropertyCard(p, router) {
    const card = el('div', 'card');
    const img = el('img', 'ci', '', { src: p.image, alt: p.title });
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
function SectionTitle(prefix, title) {
    const wrap = el('div', ['ac', 'sec'], '', { style: 'paddingBottom:2rem' });
    wrap.appendChild(el('p', 'sub', prefix));
    wrap.appendChild(el('h2', 'tit', title));
    return wrap;
}
function HomePage(router) {
    const page = el('div');
    const hero = el('section', ['sec', 'hero'], '', { style: 'background:url(assets/uploads/2022/10/estate-living-room.jpg) center/cover no-repeat' });
    const heroInner = el('div', 'w');
    const heroBox = el('div', 'box', '', { style: 'maxWidth:600px;background:rgba(255,255,255,0.95);color:var(--t)' });
    const phoneBtn = el('a', ['btn', 'btn-p', 'f', 'ai'], PHONE, { href: `tel:${PHONE.replace(/\s/g, '')}`, style: 'marginBottom:1rem;width:fit-content' });
    phoneBtn.prepend(iconPhone());
    const h1 = el('h1', 'tit', 'House Your Dream', { style: 'color:var(--t)' });
    const cta = el('a', ['btn', 'btn-p'], 'Contact Us', { href: '/contact' });
    cta.addEventListener('click', e => { e.preventDefault(); router.navigate('/contact'); });
    heroBox.append(phoneBtn, h1, cta);
    heroInner.appendChild(heroBox);
    hero.appendChild(heroInner);
    const msg = el('section', ['sec', 'sec-alt']);
    const msgW = el('div', ['w', 'g'], '', { style: 'gridTemplateColumns:1fr 1fr;gap:2rem' });
    const msgInfo = el('div');
    msgInfo.appendChild(el('p', 'sub', 'Need Help?'));
    msgInfo.appendChild(el('h2', 'tit', 'Message Us'));
    const msgForm = el('form', 'fm');
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
    const feat = el('section', 'sec');
    const featW = el('div', 'w');
    featW.appendChild(SectionTitle('Featured Listings', 'Find Your Perfect Home'));
    const featGrid = el('div', 'cl');
    FEATURED.forEach(p => featGrid.appendChild(PropertyCard(p, router)));
    featW.appendChild(featGrid);
    feat.appendChild(featW);
    const about = el('section', ['sec', 'sec-alt']);
    const aboutW = el('div', ['w', 'g'], '', { style: 'gridTemplateColumns:1fr 1fr;gap:3rem;alignItems:center' });
    const aboutTxt = el('div');
    aboutTxt.appendChild(el('p', 'sub', 'WHO WE ARE'));
    aboutTxt.appendChild(el('h2', 'tit', 'About Us'));
    aboutTxt.appendChild(el('p', 'txt', 'At Saint Realty & Consulting, we believe real estate is about more than properties – it’s about people.'));
    aboutTxt.appendChild(el('p', 'txt', 'With personalized service, professionalism, and care, we guide you through every step of your real estate journey in Greece.'));
    const aboutBtn = el('a', ['btn', 'btn-o'], 'Learn More', { href: '/about' });
    aboutBtn.addEventListener('click', e => { e.preventDefault(); router.navigate('/about'); });
    aboutTxt.appendChild(aboutBtn);
    const aboutImg = el('img', '', '', { src: 'assets/uploads/2025/09/DSC_1325-2-e1759264917414-1024x923.jpg', alt: 'About Saint Realty', style: 'borderRadius:var(--ra)' });
    aboutW.append(aboutTxt, aboutImg);
    about.appendChild(aboutW);
    const look = el('section', 'sec');
    const lookW = el('div', 'w');
    lookW.appendChild(SectionTitle('We’re Here To Help You', 'What Are You Looking For?'));
    const lookGrid = el('div', 'cl');
    ['Apartments', 'Houses', 'Offices'].forEach(cat => {
        const card = el('div', ['card', 'ac'], '', { style: 'padding:2rem;cursor:pointer' });
        card.appendChild(el('h3', '', cat, { style: 'fontSize:1.5rem;marginBottom:.5rem' }));
        card.addEventListener('click', () => router.navigate('/properties'));
        lookGrid.appendChild(card);
    });
    lookW.appendChild(lookGrid);
    look.appendChild(lookW);
    const ctaSec = el('section', ['sec', 'sec-alt']);
    const ctaW = el('div', ['w', 'ac']);
    ctaW.appendChild(el('h2', 'tit', 'Let’s Find You Together The Place You Deserve'));
    ctaW.appendChild(el('p', 'txt', 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.'));
    const ctaPhone = el('a', ['btn', 'btn-p'], PHONE, { href: `tel:${PHONE.replace(/\s/g, '')}` });
    ctaW.appendChild(ctaPhone);
    ctaSec.appendChild(ctaW);
    page.append(hero, msg, feat, about, look, ctaSec);
    return page;
}
function AboutPage() {
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
    const img = el('img', '', '', { src: 'assets/uploads/2025/09/DSC_1325-2-e1759264917414-1024x923.jpg', alt: 'Team member', style: 'borderRadius:var(--ra)' });
    w2.append(txt, img);
    s2.appendChild(w2);
    page.appendChild(s2);
    const s3 = el('section', 'sec');
    const w3 = el('div', 'w');
    const grid = el('div', 'cl');
    const visions = [
        { t: 'Our Vision', d: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.' },
        { t: 'Our DREAM', d: 'Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.' }
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
function ContactPage() {
    const page = el('div');
    const s1 = el('section', 'sec');
    const w1 = el('div', 'w');
    w1.appendChild(SectionTitle('Contact Us', 'Get in Touch'));
    page.appendChild(s1).appendChild(w1);
    const s2 = el('section', ['sec', 'sec-alt']);
    const w2 = el('div', ['w', 'g'], '', { style: 'gridTemplateColumns:1fr 1fr;gap:3rem' });
    const formWrap = el('div');
    formWrap.appendChild(el('h4', '', 'Send us a message', { style: 'marginBottom:1rem' }));
    const form = el('form', 'fm');
    form.appendChild(el('input', 'inp', '', { type: 'text', placeholder: 'Your Name *', required: 'true' }));
    form.appendChild(el('input', 'inp', '', { type: 'email', placeholder: 'Your Email *', required: 'true' }));
    form.appendChild(el('textarea', ['inp', 'txta'], '', { placeholder: 'Your Message *', required: 'true' }));
    const btn = el('button', ['btn', 'btn-p'], 'Send');
    form.appendChild(btn);
    form.addEventListener('submit', e => { e.preventDefault(); alert('Message sent!'); form.reset(); });
    formWrap.appendChild(form);
    const info = el('div');
    info.appendChild(el('h4', '', 'Contact info', { style: 'marginBottom:1rem' }));
    info.appendChild(el('p', 'txt', 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));
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
function PropertiesPage(router) {
    const page = el('div');
    const s1 = el('section', 'sec');
    const w1 = el('div', 'w');
    w1.appendChild(SectionTitle('Find Your Perfect Home', 'Nice Apartments'));
    const g1 = el('div', 'cl');
    Properties.forEach(p => g1.appendChild(PropertyCard(p, router)));
    w1.appendChild(g1);
    s1.appendChild(w1);
    page.appendChild(s1);
    const s2 = el('section', ['sec', 'sec-alt']);
    const w2 = el('div', 'w');
    w2.appendChild(el('h2', ['tit', 'ac'], 'Attractive Houses', { style: 'marginBottom:2rem' }));
    const g2 = el('div', 'cl');
    Properties.filter(p => p.cat === 'House').forEach(p => g2.appendChild(PropertyCard(p, router)));
    w2.appendChild(g2);
    s2.appendChild(w2);
    page.appendChild(s2);
    const s3 = el('section', 'sec');
    const w3 = el('div', 'w');
    w3.appendChild(el('h2', ['tit', 'ac'], 'Best Offices', { style: 'marginBottom:2rem' }));
    const g3 = el('div', 'cl');
    Properties.filter(p => p.cat === 'Office').forEach(p => g3.appendChild(PropertyCard(p, router)));
    w3.appendChild(g3);
    s3.appendChild(w3);
    page.appendChild(s3);
    return page;
}
function AgentsPage() {
    const page = el('div');
    const sec = el('section', 'sec');
    const w = el('div', 'w');
    w.appendChild(SectionTitle('Our Team', 'Agents'));
    const grid = el('div', 'cl');
    const agents = [
        {
            name: 'Danielle Pena',
            resume: 'uis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accu  msan ipsum velit. Nam nec tellus a odio.',
            tel: '+1 910-626-85255',
            email: 'contact@info.com'
        },
        {
            name: 'Mark Obrien',
            resume: 'uis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accu  msan ipsum velit. Nam nec tellus a odio.',
            tel: '+1 910-626-85255',
            email: 'contact@info.com'
        },
        {
            name: 'Russell Douglas',
            resume: 'uis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accu  msan ipsum velit. Nam nec tellus a odio.',
            tel: '+1 910-626-85255',
            email: 'contact@info.com'
        },
        {
            name: 'Him/Her name',
            resume: 'uis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accu  msan ipsum velit. Nam nec tellus a odio.',
            tel: '+1 910-626-85255',
            email: 'contact@info.com'
        },
        {
            name: 'Him/Her name',
            resume: 'uis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accu  msan ipsum velit. Nam nec tellus a odio.',
            tel: '+1 910-626-85255',
            email: 'contact@info.com'
        },
        {
            name: 'Him/Her name',
            resume: 'uis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accu  msan ipsum velit. Nam nec tellus a odio.',
            tel: '+1 910-626-85255',
            email: 'contact@info.com'
        },
        {
            name: 'Him/Her name',
            resume: 'any',
            tel: '+1 910-626-85255',
            email: 'contact@info.com'
        },
    ];
    agents.forEach((agent, i) => {
        const card = el('div', ['card', 'ac'], '', { style: 'padding:2rem' });
        const img = el('img', '', '', { src: `assets/uploads/2022/10/estate-agent-${i + 1}.jpg`, alt: agent.name, style: 'width:120px;height:120px;borderRadius:50%;objectFit:cover;margin:0 auto 1rem' });
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
function FAQPage() {
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
function PropertyDetailPage(title, property) {
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
    btn.addEventListener('click', e => { e.preventDefault(); history.pushState({}, '', '/contact'); window.dispatchEvent(new PopStateEvent('popstate')); });
    info.appendChild(btn);
    w.append(img, info);
    sec.appendChild(w);
    page.appendChild(sec);
    return page;
}
(function start() {
    const app = document.getElementById('app');
    const router = new Router(el('div'));
    const layout = el('div');
    const main = el('main');
    layout.appendChild(Header(router));
    layout.appendChild(main);
    layout.appendChild(Footer());
    app.appendChild(layout);
    router.add('/', () => HomePage(router));
    router.add('/about', () => AboutPage());
    router.add('/contact', () => ContactPage());
    router.add('/properties', () => PropertiesPage(router));
    router.add('/agents', () => AgentsPage());
    router.add('/faq', () => FAQPage());
    router.add('/property/kavouri', () => PropertyDetailPage('Kavouri – Vouliagmeni', FEATURED[0]));
    router.add('/property/nea-smyrni', () => PropertyDetailPage('ATHENS – NEA SMYRNI', FEATURED[1]));
    main.appendChild(router['outlet']);
    router.render();
})();
//# sourceMappingURL=app.js.map