const span = document.querySelector('#hyphen');

window.addEventListener('resize', function () {
    if (window.innerWidth < 480.98 && window.innerWidth > 320) {
        span.textContent = '-';
    } else {
        span.textContent = ' ';
    }
});
