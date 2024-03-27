document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');

    // Inicializar el carousel
    const instances = M.Carousel.init(elementosCarousel, {
        duration: 500,
        dist: -10,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
        noWrap: false,
        onCycleTo: function(activeItem) {
            const items = document.querySelectorAll('.carousel-item');
            items.forEach(item => item.classList.remove('active'));
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

    // Cambiar automáticamente cada 25 segundos
    setInterval(avanzarCarrusel, 25000);

});
