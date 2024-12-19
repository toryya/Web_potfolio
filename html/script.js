// Добавить интерактивности меню, обработать события наведения мыши на конкретные пункты с использованием CSS либо JS

(function() {
    const startTime = performance.now();

    window.addEventListener('load', function() {
        const endTime = performance.now();
        const loadTime = (endTime - startTime).toFixed(2);
        const loadStatsElement = document.getElementById('load-stats');
        if (loadStatsElement) {
            loadStatsElement.textContent = `Страница загружена за ${loadTime} мс`;
        } else {
            console.error('Элемент с id "load-stats" не найден.');
        }

        // Настройка пунктов меню
        const currentPath = window.location.pathname.split('/').pop();
        console.log('Текущий путь:', currentPath);
        const navLinks = document.querySelectorAll('.header__nav-link');
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            console.log('Путь ссылки:', linkPath);
            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
    });
})();


// Настройка слайдера
new Swiper('.swiper-container', {

    spaceBetween: 40,
    centeredSlides: true,

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});