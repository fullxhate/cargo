
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

            // Function to set image height after all images are loaded
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

            // Wait for all images to be loaded
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

window.addEventListener('click', function(event) {
    var formOverlay = document.getElementById('formOverlay');
    var successOverlay = document.getElementById('successOverlay');
    if (event.target == formOverlay) {
        formOverlay.style.display = 'none';
    }
    if (event.target == successOverlay) {
        successOverlay.style.display = 'none';
    }
});

window.addEventListener('touchstart', function(event) {
    var formOverlay = document.getElementById('formOverlay');
    var successOverlay = document.getElementById('successOverlay');
    if (event.target == formOverlay) {
        formOverlay.style.display = 'none';
    }
    if (event.target == successOverlay) {
        successOverlay.style.display = 'none';
    }
});

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