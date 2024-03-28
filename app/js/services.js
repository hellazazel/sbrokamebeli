function activateAnimationOnScroll() {
    var servicesWrapper = document.getElementById('servicesWrapper');
    var items = servicesWrapper.querySelectorAll('.services__item');

    function checkScroll() {
        var rect = servicesWrapper.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            items.forEach(function(item, index) {
                item.style.animation = `slideFromLeft 2s ease forwards ${index * 1}s`;
            });
        }
    }
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
}

activateAnimationOnScroll();


