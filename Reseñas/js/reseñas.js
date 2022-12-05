const datosFormulario = document.getElementById('form-resenhas');
const titulo = document.getElementById('inputReseñas1');
const comentario = document.getElementById('inputReseñas2');

datosFormulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(titulo.value);
    console.log(comentario.value);
});