// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    console.log('Menu Toggle Element:', menuToggle);
    console.log('Nav Links Element:', navLinks);

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            console.log('Menu Toggle Clicked');
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-links') && !event.target.closest('.menu-toggle')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });

        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            });
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });
    } else {
        console.error('Menu toggle or nav links elements not found');
    }
});