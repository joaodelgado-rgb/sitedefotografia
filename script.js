// ===== Danilo Fotografia - Script Estático =====
(function () {
    'use strict';

    // Ano atual no footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // ===== Menu Mobile =====
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });

        // Fechar menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
            });
        });
    }

    // ===== Header - Ativo no scroll =====
    const header = document.querySelector('.header');

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Highlight do link ativo baseado na seção visível
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 120;

        sections.forEach(function (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (scrollPos >= top && scrollPos < bottom) {
                const id = section.getAttribute('id');
                document.querySelectorAll('.nav-links a').forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ===== Hero Slideshow =====
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(function (slide, i) {
            slide.classList.toggle('active', i === index);
        });
    }

    setInterval(function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    // ===== Galeria (dados de exemplo) =====
    const portfolioImages = [
        {
            title: 'Casamento Campo',
            category: 'Casamentos',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80'
        },
        {
            title: 'Retrato Urbano',
            category: 'Retratos',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80'
        },
        {
            title: 'Fashion Editorial',
            category: 'Fashion',
            image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80'
        },
        {
            title: 'Evento Corporativo',
            category: 'Eventos',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80'
        },
        {
            title: 'Paisagem Natural',
            category: 'Paisagens',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80'
        },
        {
            title: 'Casamento Igreja',
            category: 'Casamentos',
            image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80'
        }
    ];

    const gallery = document.getElementById('gallery');

    if (gallery) {
        portfolioImages.forEach(function (item, index) {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.innerHTML =
                '<img src="' + item.image + '" alt="' + item.title + '" loading="lazy" />' +
                '<div class="gallery-item-overlay">' +
                '<div><span>' + item.category + '</span><h3>' + item.title + '</h3></div>' +
                '</div>';
            div.addEventListener('click', function () {
                openLightbox(item.image, item.title, item.category);
            });
            gallery.appendChild(div);
        });
    }

    // ===== Lightbox =====
    function openLightbox(src, title, category) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML =
            '<button class="lightbox-close" aria-label="Fechar">&times;</button>' +
            '<img src="' + src + '" alt="' + title + '" />' +
            '<div class="lightbox-caption"><h3>' + title + '</h3><span>' + category + '</span></div>';

        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        const close = function () {
            document.body.removeChild(lightbox);
            document.body.style.overflow = '';
        };

        lightbox.querySelector('.lightbox-close').addEventListener('click', close);
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) close();
        });
        document.addEventListener('keydown', function handler(e) {
            if (e.key === 'Escape') {
                close();
                document.removeEventListener('keydown', handler);
            }
        });
    }

    // ===== Formulário de Contato =====
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = contactForm.querySelector('input[name="name"]').value.trim();
            const email = contactForm.querySelector('input[name="email"]').value.trim();
            const message = contactForm.querySelector('textarea[name="message"]').value.trim();

            if (!name || !email || !message) {
                feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                feedback.className = 'form-feedback error';
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                feedback.textContent = 'Por favor, informe um email válido.';
                feedback.className = 'form-feedback error';
                return;
            }

            feedback.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
            feedback.className = 'form-feedback success';
            contactForm.reset();

            setTimeout(function () {
                feedback.className = 'form-feedback';
            }, 5000);
        });
    }
})();

