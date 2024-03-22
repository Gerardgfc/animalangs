document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    const instance = M.Carousel.init(elementosCarousel, {
        duration: 500,
        dist: -10,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
        noWrap: false,
        onCycleTo: function(activeItem) {
            const items = document.querySelectorAll('.carousel-item');
            items.forEach(item => {
                item.classList.remove('active');
            });
            activeItem.classList.add('active');
        }
    });

    // Función para avanzar al siguiente elemento del carrusel
    function avanzarCarrusel() {
        elementosCarousel.forEach(carousel => {
            const instance = M.Carousel.getInstance(carousel);
            instance.next();
        });
    }

    // Cambiar automáticamente cada 10 segundos
    setInterval(avanzarCarrusel, 10000);

    // Inmediatamente después de la inicialización, encuentra el elemento activo y añade la clase 'active'.
    elementosCarousel.forEach(carousel => {
        let activeItem = carousel.querySelector('.carousel-item.active');
        if (!activeItem) { // Si no hay un activo, toma el primero como predeterminado.
            activeItem = carousel.querySelector('.carousel-item');
            activeItem.classList.add('active');
        }
    });
});
