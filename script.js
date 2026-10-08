/* ============================================================
   HARMONI WEDDING — Bilingual Translation & Interactions
============================================================ */

// ===== TRANSLATIONS =====
const translations = {
  id: {
    "nav-home": "Home", "nav-about": "Tentang", "nav-services": "Layanan",
    "nav-gallery": "Galeri", "nav-testimonials": "Testimoni",
    "nav-blog": "Blog", "nav-contact": "Kontak",
    "hero-pre": "Wedding Organizer Profesional",
    "hero-tagline": "Mewujudkan Hari Impian Anda",
    "hero-sub": "Kami hadir untuk mengubah setiap momen pernikahan Anda menjadi kenangan indah yang abadi.",
    "btn-services": "Lihat Layanan", "btn-contact": "Hubungi Kami",
    "stat-1": "Pernikahan Sukses", "stat-2": "Tahun Pengalaman",
    "stat-3": "Vendor Partner", "stat-4": "Kepuasan Klien",
    "about-label": "Tentang Kami",
    "about-title": "Kami Percaya Setiap Cinta Layak Dirayakan dengan Sempurna",
    "about-p1": "Harmoni Wedding adalah wedding organizer profesional yang berdedikasi untuk mewujudkan pernikahan impian Anda. Dengan pengalaman lebih dari 10 tahun, kami telah membantu ratusan pasangan merayakan hari istimewa mereka.",
    "about-p2": "Tim kami terdiri dari para profesional berpengalaman yang penuh dedikasi — mulai dari wedding planner, dekorator, hingga koordinator acara — yang bekerja dengan sepenuh hati untuk memastikan setiap detail pernikahan Anda berjalan sempurna.",
    "badge-text": "Tahun<br/>Berpengalaman",
    "val-1-title": "Kualitas Premium", "val-1-desc": "Standar kualitas tertinggi di setiap detail",
    "val-2-title": "Dukungan Penuh", "val-2-desc": "Pendampingan penuh dari awal hingga akhir",
    "val-3-title": "Personal", "val-3-desc": "Disesuaikan dengan visi dan impian Anda",
    "about-cta": "Konsultasi Gratis",
    "svc-label": "Layanan Kami",
    "svc-title": "Semua yang Anda Butuhkan untuk Pernikahan Sempurna",
    "svc-sub": "Kami menyediakan layanan lengkap untuk memastikan hari istimewa Anda berjalan tanpa hambatan.",
    "svc-popular": "Paling Populer",
    "svc-1-title": "Full Package", "svc-1-desc": "Paket lengkap all-in-one mencakup semua aspek pernikahan dari awal hingga akhir. Anda tinggal datang dan menikmati hari bahagia Anda.",
    "svc-1-f1": "✓ Wedding Planning & Koordinasi", "svc-1-f2": "✓ Dekorasi & Floral Arrangement",
    "svc-1-f3": "✓ Katering & Kue Pengantin", "svc-1-f4": "✓ Dokumentasi Foto & Video",
    "svc-1-f5": "✓ Entertainment & MC", "svc-1-f6": "✓ Wedding Attire Coordination",
    "svc-cta": "Tanya Harga", "svc-cta-2": "Tanya Harga", "svc-cta-3": "Tanya Harga",
    "svc-cta-4": "Tanya Harga", "svc-cta-5": "Tanya Harga", "svc-cta-6": "Tanya Harga",
    "svc-2-title": "Dekorasi & Floral", "svc-2-desc": "Transformasikan venue pernikahan Anda menjadi taman bunga yang indah dan memukau.",
    "svc-2-f1": "✓ Backdrop & Altar Design", "svc-2-f2": "✓ Table Centerpiece",
    "svc-2-f3": "✓ Floral Arrangement", "svc-2-f4": "✓ Lighting & Ambiance",
    "svc-3-title": "Dokumentasi", "svc-3-desc": "Abadikan setiap momen berharga pernikahan Anda dengan fotografi dan videografi profesional berkualitas cinematic.",
    "svc-3-f1": "✓ Foto Prewedding", "svc-3-f2": "✓ Wedding Day Photography",
    "svc-3-f3": "✓ Cinematic Video", "svc-3-f4": "✓ Drone Coverage",
    "svc-4-title": "Catering", "svc-4-desc": "Hadirkan pengalaman kuliner terbaik untuk tamu undangan Anda.",
    "svc-4-f1": "✓ Menu Internasional & Lokal", "svc-4-f2": "✓ Wedding Cake",
    "svc-4-f3": "✓ Dessert Table", "svc-4-f4": "✓ Cocktail & Beverages",
    "svc-5-title": "Entertainment", "svc-5-desc": "Buat suasana pernikahan semakin meriah dan berkesan.",
    "svc-5-f1": "✓ Live Band / Musik", "svc-5-f2": "✓ MC Profesional",
    "svc-5-f3": "✓ Sound System", "svc-5-f4": "✓ Pertunjukan Seni",
    "svc-6-title": "Venue & Logistik", "svc-6-desc": "Kami membantu Anda menemukan dan menyiapkan venue impian.",
    "svc-6-f1": "✓ Venue Selection", "svc-6-f2": "✓ Transportasi",
    "svc-6-f3": "✓ Akomodasi Tamu", "svc-6-f4": "✓ Undangan Digital & Fisik",
    "gal-label": "Galeri", "gal-title": "Momen Indah yang Kami Ciptakan",
    "gal-sub": "Setiap gambar menceritakan kisah cinta yang unik dan tak terlupakan.",
    "filter-all": "Semua", "filter-indoor": "Indoor", "filter-outdoor": "Outdoor", "filter-reception": "Resepsi",
    "testi-label": "Testimoni", "testi-title": "Apa Kata Pasangan Bahagia Kami",
    "testi-sub": "Kepuasan Anda adalah kebanggaan kami.",
    "t1-text": "\"Harmoni Wedding benar-benar luar biasa! Mereka mengurus semua detail dengan sempurna. Hari pernikahan kami berjalan lancar tanpa hambatan sedikit pun.\"",
    "t2-text": "\"Dekorasinya sangat cantik melebihi ekspektasi kami! Tim Harmoni Wedding sangat profesional dan responsif. Setiap keinginan kami diperhatikan dengan detail.\"",
    "t3-text": "\"Kami memilih Full Package dan tidak menyesal sama sekali. Dari persiapan hingga hari H, semuanya terkoordinasi dengan baik.\"",
    "t4-text": "\"Foto dan video pernikahan kami sangat memukau. Tim dokumentasi Harmoni Wedding menangkap setiap momen dengan indah.\"",
    "blog-label": "Blog & Tips", "blog-title": "Inspirasi & Tips Pernikahan",
    "blog-sub": "Temukan inspirasi dan panduan pernikahan dari para ahli kami.",
    "blog-cat-1": "Tips Pernikahan", "blog-cat-2": "Dekorasi", "blog-cat-3": "Budget",
    "blog-1-title": "10 Tips Memilih Venue Pernikahan yang Sempurna",
    "blog-1-desc": "Memilih venue adalah salah satu keputusan terpenting. Berikut panduan lengkap untuk membantu Anda menemukan venue impian...",
    "blog-2-title": "Tren Dekorasi Pernikahan 2026",
    "blog-2-desc": "Dari botanical garden hingga industrial chic, temukan tren dekorasi pernikahan yang sedang hits tahun ini...",
    "blog-3-title": "Cara Mengatur Budget Pernikahan dengan Bijak",
    "blog-3-desc": "Pernikahan impian bukan harus mahal. Pelajari cara mengalokasikan budget dengan cerdas...",
    "blog-read-more": "Baca Selengkapnya →", "blog-read-more-2": "Baca Selengkapnya →", "blog-read-more-3": "Baca Selengkapnya →",
    "cta-title": "Siap Mewujudkan Pernikahan Impian Anda?",
    "cta-sub": "Konsultasikan rencana pernikahan Anda bersama kami secara gratis. Tim kami siap membantu.",
    "cta-btn": "Mulai Konsultasi Gratis",
    "con-label": "Hubungi Kami", "con-title": "Mari Wujudkan Pernikahan Impian Anda",
    "con-sub": "Isi formulir di bawah atau hubungi kami langsung. Konsultasi pertama gratis!",
    "con-addr-title": "Alamat", "con-phone-title": "Telepon / WhatsApp",
    "con-email-title": "Email", "con-hours-title": "Jam Operasional",
    "con-hours": "Senin — Sabtu: 09.00 — 18.00 WIB",
    "form-name": "Nama Lengkap", "form-partner": "Nama Pasangan",
    "form-phone": "Nomor WhatsApp", "form-email": "Email",
    "form-date": "Tanggal Pernikahan (Estimasi)", "form-service": "Layanan yang Diminati",
    "form-select-default": "-- Pilih Layanan --",
    "form-opt-1": "Full Package", "form-opt-2": "Dekorasi & Floral",
    "form-opt-3": "Dokumentasi", "form-opt-4": "Catering",
    "form-opt-5": "Entertainment", "form-opt-6": "Venue & Logistik",
    "form-message": "Pesan / Pertanyaan", "form-submit": "Kirim Pesan 💌",
    "footer-tagline": "Mewujudkan Hari Impian Anda",
    "footer-desc": "Harmoni Wedding — Wedding Organizer profesional yang berdedikasi menjadikan setiap pernikahan sebagai kenangan terindah.",
    "footer-nav-title": "Navigasi",
    "footer-nav-home": "Home", "footer-nav-about": "Tentang Kami",
    "footer-nav-services": "Layanan", "footer-nav-gallery": "Galeri",
    "footer-nav-blog": "Blog", "footer-nav-contact": "Kontak",
    "footer-svc-title": "Layanan",
    "footer-svc-1": "Full Package", "footer-svc-2": "Dekorasi & Floral",
    "footer-svc-3": "Dokumentasi", "footer-svc-4": "Catering",
    "footer-svc-5": "Entertainment", "footer-svc-6": "Venue & Logistik",
    "footer-con-title": "Kontak",
    "footer-copy": "© 2026 Harmoni Wedding. Hak cipta dilindungi.",
    "footer-made": "Dibuat dengan 💖 untuk setiap kisah cinta",
  },
  en: {
    "nav-home": "Home", "nav-about": "About", "nav-services": "Services",
    "nav-gallery": "Gallery", "nav-testimonials": "Testimonials",
    "nav-blog": "Blog", "nav-contact": "Contact",
    "hero-pre": "Professional Wedding Organizer",
    "hero-tagline": "Making Your Dream Day Come True",
    "hero-sub": "We are here to transform every wedding moment into a beautiful and timeless memory.",
    "btn-services": "Our Services", "btn-contact": "Contact Us",
    "stat-1": "Successful Weddings", "stat-2": "Years of Experience",
    "stat-3": "Vendor Partners", "stat-4": "Client Satisfaction",
    "about-label": "About Us",
    "about-title": "We Believe Every Love Deserves to Be Celebrated Perfectly",
    "about-p1": "Harmoni Wedding is a professional wedding organizer dedicated to bringing your dream wedding to life. With over 10 years of experience, we have helped hundreds of couples celebrate their special day.",
    "about-p2": "Our team consists of dedicated professionals — from wedding planners and decorators to event coordinators — who work wholeheartedly to ensure every detail of your wedding runs perfectly.",
    "badge-text": "Years of<br/>Excellence",
    "val-1-title": "Premium Quality", "val-1-desc": "Highest quality standards in every detail",
    "val-2-title": "Full Support", "val-2-desc": "Complete assistance from start to finish",
    "val-3-title": "Personalized", "val-3-desc": "Tailored to your vision and dreams",
    "about-cta": "Free Consultation",
    "svc-label": "Our Services",
    "svc-title": "Everything You Need for the Perfect Wedding",
    "svc-sub": "We provide complete services to ensure your special day goes without a hitch.",
    "svc-popular": "Most Popular",
    "svc-1-title": "Full Package", "svc-1-desc": "A complete all-in-one package covering all aspects of the wedding from start to finish. Just show up and enjoy your happy day.",
    "svc-1-f1": "✓ Wedding Planning & Coordination", "svc-1-f2": "✓ Decoration & Floral Arrangement",
    "svc-1-f3": "✓ Catering & Wedding Cake", "svc-1-f4": "✓ Photo & Video Documentation",
    "svc-1-f5": "✓ Entertainment & MC", "svc-1-f6": "✓ Wedding Attire Coordination",
    "svc-cta": "Inquire Price", "svc-cta-2": "Inquire Price", "svc-cta-3": "Inquire Price",
    "svc-cta-4": "Inquire Price", "svc-cta-5": "Inquire Price", "svc-cta-6": "Inquire Price",
    "svc-2-title": "Decoration & Floral", "svc-2-desc": "Transform your wedding venue into a beautiful and stunning flower garden.",
    "svc-2-f1": "✓ Backdrop & Altar Design", "svc-2-f2": "✓ Table Centerpiece",
    "svc-2-f3": "✓ Floral Arrangement", "svc-2-f4": "✓ Lighting & Ambiance",
    "svc-3-title": "Documentation", "svc-3-desc": "Capture every precious moment of your wedding with cinematic quality photography and videography.",
    "svc-3-f1": "✓ Prewedding Photos", "svc-3-f2": "✓ Wedding Day Photography",
    "svc-3-f3": "✓ Cinematic Video", "svc-3-f4": "✓ Drone Coverage",
    "svc-4-title": "Catering", "svc-4-desc": "Deliver the best culinary experience for your guests.",
    "svc-4-f1": "✓ International & Local Menu", "svc-4-f2": "✓ Wedding Cake",
    "svc-4-f3": "✓ Dessert Table", "svc-4-f4": "✓ Cocktail & Beverages",
    "svc-5-title": "Entertainment", "svc-5-desc": "Make the wedding atmosphere more festive and memorable.",
    "svc-5-f1": "✓ Live Band / Music", "svc-5-f2": "✓ Professional MC",
    "svc-5-f3": "✓ Sound System", "svc-5-f4": "✓ Art Performance",
    "svc-6-title": "Venue & Logistics", "svc-6-desc": "We help you find and prepare your dream venue.",
    "svc-6-f1": "✓ Venue Selection", "svc-6-f2": "✓ Transportation",
    "svc-6-f3": "✓ Guest Accommodation", "svc-6-f4": "✓ Digital & Physical Invitations",
    "gal-label": "Gallery", "gal-title": "Beautiful Moments We Create",
    "gal-sub": "Every photo tells a unique and unforgettable love story.",
    "filter-all": "All", "filter-indoor": "Indoor", "filter-outdoor": "Outdoor", "filter-reception": "Reception",
    "testi-label": "Testimonials", "testi-title": "What Our Happy Couples Say",
    "testi-sub": "Your satisfaction is our pride.",
    "t1-text": "\"Harmoni Wedding was absolutely amazing! They handled every detail perfectly. Our wedding day went smoothly without any hiccups. We are extremely grateful!\"",
    "t2-text": "\"The decoration was stunning beyond our expectations! The Harmoni Wedding team was very professional and responsive. Every wish was attended to in detail.\"",
    "t3-text": "\"We chose the Full Package and have absolutely no regrets. From preparation to the big day, everything was well coordinated. Our guests were very impressed!\"",
    "t4-text": "\"Our wedding photos and videos are breathtaking. The Harmoni Wedding documentation team captured every moment beautifully. Memories we'll treasure for life!\"",
    "blog-label": "Blog & Tips", "blog-title": "Wedding Inspiration & Tips",
    "blog-sub": "Discover wedding inspiration and guides from our experts.",
    "blog-cat-1": "Wedding Tips", "blog-cat-2": "Decoration", "blog-cat-3": "Budget",
    "blog-1-title": "10 Tips for Choosing the Perfect Wedding Venue",
    "blog-1-desc": "Choosing a venue is one of the most important decisions. Here's a complete guide to help you find your dream venue...",
    "blog-2-title": "Wedding Decoration Trends 2026",
    "blog-2-desc": "From botanical gardens to industrial chic, discover the hottest wedding decoration trends this year...",
    "blog-3-title": "How to Manage Your Wedding Budget Wisely",
    "blog-3-desc": "A dream wedding doesn't have to be expensive. Learn how to allocate your budget smartly...",
    "blog-read-more": "Read More →", "blog-read-more-2": "Read More →", "blog-read-more-3": "Read More →",
    "cta-title": "Ready to Make Your Dream Wedding Come True?",
    "cta-sub": "Consult your wedding plans with us for free. Our team is ready to help you.",
    "cta-btn": "Start Free Consultation",
    "con-label": "Contact Us", "con-title": "Let's Make Your Dream Wedding Happen",
    "con-sub": "Fill out the form below or contact us directly. First consultation is free!",
    "con-addr-title": "Address", "con-phone-title": "Phone / WhatsApp",
    "con-email-title": "Email", "con-hours-title": "Operating Hours",
    "con-hours": "Monday — Saturday: 09.00 — 18.00 WIB",
    "form-name": "Full Name", "form-partner": "Partner's Name",
    "form-phone": "WhatsApp Number", "form-email": "Email",
    "form-date": "Wedding Date (Estimated)", "form-service": "Service of Interest",
    "form-select-default": "-- Select Service --",
    "form-opt-1": "Full Package", "form-opt-2": "Decoration & Floral",
    "form-opt-3": "Documentation", "form-opt-4": "Catering",
    "form-opt-5": "Entertainment", "form-opt-6": "Venue & Logistics",
    "form-message": "Message / Question", "form-submit": "Send Message 💌",
    "footer-tagline": "Making Your Dream Day Come True",
    "footer-desc": "Harmoni Wedding — A professional wedding organizer dedicated to making every wedding the most beautiful memory of your life.",
    "footer-nav-title": "Navigation",
    "footer-nav-home": "Home", "footer-nav-about": "About Us",
    "footer-nav-services": "Services", "footer-nav-gallery": "Gallery",
    "footer-nav-blog": "Blog", "footer-nav-contact": "Contact",
    "footer-svc-title": "Services",
    "footer-svc-1": "Full Package", "footer-svc-2": "Decoration & Floral",
    "footer-svc-3": "Documentation", "footer-svc-4": "Catering",
    "footer-svc-5": "Entertainment", "footer-svc-6": "Venue & Logistics",
    "footer-con-title": "Contact",
    "footer-copy": "© 2026 Harmoni Wedding. All rights reserved.",
    "footer-made": "Made with 💖 for every love story",
  }
};

// ===== STATE =====
let currentLang = 'id';
let testiCurrent = 0;
const testiTotal = 4;
let testiPerView = window.innerWidth <= 768 ? 1 : 2;

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initLangToggle();
  initGalleryFilter();
  initTestiSlider();
  initScrollReveal();
  initBackToTop();
  initContactForm();
  initActiveNav();
  applyTranslation('id');
});

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== HAMBURGER =====
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('open');
    links.classList.remove('open');
  }));
}

// ===== LANGUAGE TOGGLE =====
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    btn.textContent = currentLang === 'id' ? '🌐 EN' : '🌐 ID';
    document.documentElement.lang = currentLang;
    applyTranslation(currentLang);
  });
}

function applyTranslation(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-id]').forEach(el => {
    const key = el.getAttribute('data-id');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
}

// ===== GALLERY FILTER =====
function initGalleryFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.cat === filter;
        item.style.display = show ? '' : 'none';
        if (show) { item.style.animation = 'fadeUp 0.4s ease forwards'; }
      });
    });
  });
}

// ===== TESTIMONIAL SLIDER =====
function initTestiSlider() {
  const track = document.getElementById('testiTrack');
  const dots = document.querySelectorAll('.dot');
  const prev = document.getElementById('testiPrev');
  const next = document.getElementById('testiNext');

  function updatePerView() {
    testiPerView = window.innerWidth <= 768 ? 1 : 2;
  }
  window.addEventListener('resize', () => { updatePerView(); goTo(0); });

  function goTo(index) {
    const maxIndex = testiTotal - testiPerView;
    testiCurrent = Math.max(0, Math.min(index, maxIndex));
    const cardWidth = track.children[0].offsetWidth + 24;
    track.style.transform = `translateX(-${testiCurrent * cardWidth}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === testiCurrent));
  }

  prev.addEventListener('click', () => goTo(testiCurrent - 1));
  next.addEventListener('click', () => goTo(testiCurrent + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  // Auto-play
  setInterval(() => {
    const maxIndex = testiTotal - testiPerView;
    goTo(testiCurrent >= maxIndex ? 0 : testiCurrent + 1);
  }, 5000);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const sections = document.querySelectorAll('.section-header, .about-grid, .service-card, .gallery-item, .testi-card, .blog-card, .contact-grid, .stat-item');
  sections.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  sections.forEach(el => observer.observe(el));
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== ACTIVE NAV =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '✓ Pesan Terkirim!';
    btn.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = currentLang === 'id' ? 'Kirim Pesan 💌' : 'Send Message 💌';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3500);
  });
}
