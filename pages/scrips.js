// Función para cargar el archivo JSON del idioma seleccionado
function cargarIdioma(idioma) {
    fetch(`../locales/${idioma}.json`)
        .then(response => response.json())
        .then(data => {
            // Actualizar los textos en la página con las traducciones cargadas
            actualizarTraducciones(data);
        })
        .catch(error => console.error('Error cargando el idioma:', error));
}

// Función para actualizar las traducciones en la página
function actualizarTraducciones(data) {
    document.getElementById('inicio').innerText = data.inicio;
    document.getElementById('idiomas').innerText = data.idiomas;
    document.getElementById('aleman').innerText = data.aleman;
    document.getElementById('chino').innerText = data.chino;
    document.getElementById('italiano').innerText = data.italiano;
    document.getElementById('frances').innerText = data.frances;
    document.getElementById('ingles').innerText = data.ingles;
    document.getElementById('portugues').innerText = data.portugues;
    document.getElementById('acerca_de').innerText = data.acerca_de;
    document.getElementById('cursos_gratuitos').innerText = data.cursos_gratuitos;
    document.getElementById('que_idioma').innerText = data.que_idioma;
    document.getElementById('frances_titulo').innerText = data.frances_titulo;
    document.getElementById('aleman_titulo').innerText = data.aleman_titulo;
    document.getElementById('ingles_titulo').innerText = data.ingles_titulo;
    document.getElementById('italiano_titulo').innerText = data.italiano_titulo;
    document.getElementById('portugues_titulo').innerText = data.portugues_titulo;
    document.getElementById('frances_link').innerText = data.frances_link;
    document.getElementById('aleman_link').innerText = data.aleman_link;
    document.getElementById('ingles_link').innerText = data.ingles_link;
    document.getElementById('italiano_link').innerText = data.italiano_link;
    document.getElementById('portugues_link').innerText = data.portugues_link;
}


// Escuchar el evento de cambio en el selector de idioma
document.getElementById('selector-idioma').addEventListener('change', function() {
    const idiomaSeleccionado = this.value;
    cargarIdioma(idiomaSeleccionado);
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

// Cargar el idioma predeterminado
cargarIdioma('es');