
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
        // Проверяем, что клик произошел именно на оверлее, а не на его содержимом
        if (event.target === event.currentTarget) {
            var formOverlay = document.getElementById('formOverlay');
            var successOverlay = document.getElementById('successOverlay');

            // Закрываем оверлей
            formOverlay.style.display = 'none';
            successOverlay.style.display = 'none';
        }
    }

    // Добавляем обработчики событий для закрытия оверлея при нажатии на кнопку и сам оверлей
    document.getElementById('closeForm').addEventListener('click', function(event) {
        closeOverlay(event);
    });

    document.getElementById('formOverlay').addEventListener('click', function(event) {
        closeOverlay(event);
    });

    document.getElementById('successOverlay').addEventListener('click', function(event) {
        closeOverlay(event);
    });

    // Предотвращаем распространение событий для элементов внутри оверлея
    document.querySelector('#formOverlay .form-container').addEventListener('click', function(event) {
        event.stopPropagation();
    });

    document.querySelector('#successOverlay .success-message').addEventListener('click', function(event) {
        event.stopPropagation();
    });

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


const btn = document.querySelector("#btn");
const item = document.querySelectorAll(".menu__item");

let showCard = (event) => {
    btn.classList.toggle("is-rotate");
    for (var i = 0; i < item.length; i++) {
        item[i].classList.toggle(`item-${i}`);
    }
}

btn.addEventListener("click", showCard);



document.addEventListener('DOMContentLoaded', function() {
    const bottomFix = document.querySelector('.bottom-fix');
    const textElement = document.querySelector('.text');
    let isVisible = false;

    function checkVisibility() {
        const textRect = textElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (textRect.top <= windowHeight && textRect.bottom >= 0) {
            if (!isVisible) {
                isVisible = true;
                bottomFix.classList.add('visible');
            }
        } else {
            if (isVisible) {
                isVisible = false;
                bottomFix.classList.remove('visible');
            }
        }
    }

    window.addEventListener('scroll', function() {
        requestAnimationFrame(checkVisibility);
    });
});