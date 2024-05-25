

document.addEventListener('DOMContentLoaded', function () {
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
        breakpoints: {
            600: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        }
    });
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