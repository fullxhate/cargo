
var swiper1 = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: 3,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
    on: {
        init: function () {
            var swiper = this;
            var images = swiper.el.querySelectorAll('img');
            var imagesLoaded = 0;

            function setImagesHeight() {
                var maxHeight = 0;
                swiper.slides.forEach(function (slide) {
                    var image = slide.querySelector('img');
                    if (image) {
                        var imageHeight = image.clientHeight;
                        if (imageHeight > maxHeight) {
                            maxHeight = imageHeight;
                        }
                    }
                });
                swiper.slides.forEach(function (slide) {
                    var image = slide.querySelector('img');
                    if (image) {
                        image.style.height = maxHeight + 'px';
                    }
                });
            }

            images.forEach(function (image) {
                if (image.complete) {
                    imagesLoaded++;
                    if (imagesLoaded === images.length) {
                        setImagesHeight();
                    }
                } else {
                    image.addEventListener('load', function () {
                        imagesLoaded++;
                        if (imagesLoaded === images.length) {
                            setImagesHeight();
                        }
                    });
                    image.addEventListener('error', function () {
                        imagesLoaded++;
                        if (imagesLoaded === images.length) {
                            setImagesHeight();
                        }
                    });
                }
            });
        }
    }
});

var swiper2 = new Swiper('.swiper-container-1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination-1',
        clickable: true,
        dynamicBullets: 3,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
    on: {
        init: function () {
            var swiper = this;
            var images = swiper.el.querySelectorAll('img');
            var imagesLoaded = 0;

            function setImagesHeight() {
                var maxHeight = 0;
                swiper.slides.forEach(function (slide) {
                    var image = slide.querySelector('img');
                    if (image) {
                        var imageHeight = image.clientHeight;
                        if (imageHeight > maxHeight) {
                            maxHeight = imageHeight;
                        }
                    }
                });
                swiper.slides.forEach(function (slide) {
                    var image = slide.querySelector('img');
                    if (image) {
                        image.style.height = maxHeight + 'px';
                    }
                });
            }

            images.forEach(function (image) {
                if (image.complete) {
                    imagesLoaded++;
                    if (imagesLoaded === images.length) {
                        setImagesHeight();
                    }
                } else {
                    image.addEventListener('load', function () {
                        imagesLoaded++;
                        if (imagesLoaded === images.length) {
                            setImagesHeight();
                        }
                    });
                    image.addEventListener('error', function () {
                        imagesLoaded++;
                        if (imagesLoaded === images.length) {
                            setImagesHeight();
                        }
                    });
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

document.addEventListener('DOMContentLoaded', function() {
    function toggleOverlay(overlayId) {
        var overlay = document.getElementById(overlayId);
        overlay.style.display = (overlay.style.display === 'flex' || overlay.style.display === 'block') ? 'none' : 'flex';
    }

    function closeOverlay(event) {
        var formOverlay = document.getElementById('formOverlay');
        var successOverlay = document.getElementById('successOverlay');

        // Закрываем оверлей
        formOverlay.style.display = 'none';
        successOverlay.style.display = 'none';

        // Отключаем реакцию на клики для элементов под оверлеем
        formOverlay.style.pointerEvents = 'none';
        successOverlay.style.pointerEvents = 'none';

        // Устанавливаем таймер для включения реакции на клики после небольшой задержки
        setTimeout(function() {
            formOverlay.style.pointerEvents = 'auto';
            successOverlay.style.pointerEvents = 'auto';
        }, 100);
    }

    function stopPropagation(event) {
        event.stopPropagation();
    }

    // Добавляем обработчики событий для закрытия оверлея при нажатии на кнопку и сам оверлей
    document.getElementById('closeForm').addEventListener('click', closeOverlay);
    document.getElementById('formOverlay').addEventListener('click', closeOverlay);
    document.getElementById('successOverlay').addEventListener('click', closeOverlay);

    // Предотвращаем распространение событий для элементов внутри оверлея
    document.querySelector('#formOverlay .form-container').addEventListener('touchstart', stopPropagation);
    document.querySelector('#successOverlay .success-message').addEventListener('touchstart', stopPropagation);

    // Обработчик отправки формы
    document.getElementById('transportForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвратить отправку формы для демонстрационных целей

        // Скрыть форму и оверлей формы
        document.getElementById('formOverlay').style.display = 'none';

        // Показать сообщение об успешной отправке
        document.getElementById('successOverlay').style.display = 'flex';

        // Скрыть сообщение об успешной отправке через 2 секунды
        setTimeout(function() {
            document.getElementById('successOverlay').style.display = 'none';
        }, 2000);
    });

    // Экспортируем функцию toggleOverlay в глобальную область видимости
    window.toggleOverlay = toggleOverlay;
});



$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
});


document.addEventListener("DOMContentLoaded", function() {
    var preloaderOverlay = document.getElementById('preloader-overlay');
    var preloader = document.getElementById('preloader');

    var delay = 1000;

    setTimeout(function() {
        preloaderOverlay.style.opacity = 0;
        preloader.style.opacity = 0;
        setTimeout(function() {
            preloaderOverlay.style.display = 'none';
            preloader.style.display = 'none';
        }, 500);
    }, delay);
});

flatpickr('#date', {
    dateFormat: 'Y-m-d', // Формат даты
});


var formOverlay = document.getElementById('formOverlay');
var bottomFix = document.getElementById('bottomFix');

function hideBottomFix() {
    bottomFix.style.transform = 'translateY(100%)';
}

function showBottomFix() {
    bottomFix.style.transform = 'translateY(0)';
}

// Функция для блокировки прокрутки
function toggleScrollLock() {
    document.body.classList.toggle('no-scroll');
}

// Прослушиваем изменение стиля display для оверлея
var observer = new MutationObserver(function(mutationsList, observer) {
    for(var mutation of mutationsList) {
        if (mutation.attributeName === 'style') {
            var displayStyle = formOverlay.style.display;
            if (displayStyle === 'flex') {
                hideBottomFix();
                toggleScrollLock(); // Блокируем прокрутку при открытии оверлея
            } else if (displayStyle === 'none') {
                showBottomFix();
                toggleScrollLock(); // Разблокируем прокрутку при закрытии оверлея
            }
        }
    }
});


observer.observe(formOverlay, { attributes: true });