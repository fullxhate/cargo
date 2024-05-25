
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000, // Задержка между автоматической прокруткой в миллисекундах
        disableOnInteraction: false, // Отключение автопрокрутки при взаимодействии пользователя с слайдером
    },
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
    on: {
        init: function () {
            var slides = this.slides;

            // Найти максимальную высоту изображений в слайдах
            var maxHeight = 0;
            slides.forEach(function (slide) {
                var image = slide.querySelector('img');
                if (image) {
                    var imageHeight = image.clientHeight; // Высота изображения
                    if (imageHeight > maxHeight) {
                        maxHeight = imageHeight;
                    }
                }
            });

            // Установить максимальную высоту для всех изображений в слайдах
            slides.forEach(function (slide) {
                var image = slide.querySelector('img');
                if (image) {
                    image.style.height = maxHeight + 'px';
                }
            });
        }
    }
});





document.querySelector('.header-link__order').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('formOverlay').style.display = 'flex';
});

document.getElementById('phone').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

window.onclick = function(event) {
    var formOverlay = document.getElementById('formOverlay');
    var successOverlay = document.getElementById('successOverlay');
    if (event.target == formOverlay) {
        formOverlay.style.display = 'none';
    }
    if (event.target == successOverlay) {
        successOverlay.style.display = 'none';
    }
}

document.getElementById('transportForm').addEventListener('submit', function(event) {
    // Показываем сообщение об успешной отправке через 3 секунды
    setTimeout(function() {
        document.getElementById('successOverlay').style.display = 'flex';
    }, 1000);

    // Скрыть сообщение через 3 секунды после показа
    setTimeout(function() {
        document.getElementById('successOverlay').style.display = 'none';
    }, 4000);
});



$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
});


document.addEventListener("DOMContentLoaded", function() {
    // Находим элементы прелоадера и оверлея
    var preloaderOverlay = document.querySelector('.preloader-overlay');
    var preloader = document.querySelector('.preloader');

    // Задаем задержку в миллисекундах (1.5 секунды)
    var delay = 1500;

    // Устанавливаем таймер для исчезновения прелоадера
    setTimeout(function() {
        // Применяем анимацию для плавного исчезновения
        preloaderOverlay.style.transition = 'opacity 0.5s ease';
        preloader.style.transition = 'opacity 0.5s ease';

        // Исчезновение прелоадера
        preloaderOverlay.style.opacity = 0;
        preloader.style.opacity = 0;

        // После завершения анимации скрываем прелоадер
        setTimeout(function() {
            preloaderOverlay.style.display = 'none';
            preloader.style.display = 'none';
        }, 500); // 0.5 секунды для анимации
    }, delay);
});
