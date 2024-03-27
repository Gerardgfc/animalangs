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
    function actualizarTexto(id, texto) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerText = texto;
        }
    }

    actualizarTexto('inicio', data.inicio);
    actualizarTexto('idiomas', data.idiomas);
    actualizarTexto('aleman', data.aleman);
    actualizarTexto('chino', data.chino);
    actualizarTexto('frances', data.frances);
    actualizarTexto('ingles', data.ingles);
    actualizarTexto('italiano', data.italiano);
    actualizarTexto('portugues', data.portugues);
    actualizarTexto('acerca_de', data.acerca_de);
    actualizarTexto('cursos_gratuitos', data.cursos_gratuitos);
    actualizarTexto('que_idioma', data.que_idioma);
    actualizarTexto('frances_titulo', data.frances_titulo);
    actualizarTexto('aleman_titulo', data.aleman_titulo);
    actualizarTexto('ingles_titulo', data.ingles_titulo);
    actualizarTexto('italiano_titulo', data.italiano_titulo);
    actualizarTexto('portugues_titulo', data.portugues_titulo);
    actualizarTexto('frances_link', data.frances_link);
    actualizarTexto('aleman_link', data.aleman_link);
    actualizarTexto('ingles_link', data.ingles_link);
    actualizarTexto('italiano_link', data.italiano_link);
    actualizarTexto('portugues_link', data.portugues_link);

    actualizarTexto('titulo_animalang', data.titulo_animalang);
    actualizarTexto('descripcion_animalang', data.descripcion_animalang);
    actualizarTexto('ensenanza_personalizada_titulo', data.ensenanza_personalizada_titulo);
    actualizarTexto('ensenanza_personalizada', data.ensenanza_personalizada);
    actualizarTexto('metodo_divertido_titulo', data.metodo_divertido_titulo);
    actualizarTexto('metodo_divertido', data.metodo_divertido);
    actualizarTexto('metodo_economico_titulo', data.metodo_economico_titulo);
    actualizarTexto('metodo_economico', data.metodo_economico);
    actualizarTexto('nuestro_metodo_titulo', data.nuestro_metodo_titulo);
    actualizarTexto('nuestro_metodo', data.nuestro_metodo);
}



// Escuchar el evento de cambio en el selector de idioma
document.getElementById('selector-idioma').addEventListener('change', function() {
    const idiomaSeleccionado = this.value;
    cargarIdioma(idiomaSeleccionado);
});


// Cargar el idioma predeterminado
cargarIdioma('es');