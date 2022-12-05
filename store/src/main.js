var categoriaMostrada = document.querySelector("#categoriaDisplay");
var buttonGrano = document.querySelector("#botonGrano");
var buttonPromociones = document.querySelector("#botonPromociones");
var buttonMolido = document.querySelector("#botonMolido");
var productoMolido = document.querySelector("#Molido1");

function mostrarMolido(){
    categoriaMostrada.innerHTML = "MOLIDO";
}

function mostrarGrano(){
    categoriaMostrada.innerHTML = "GRANO";
}

function mostrarPromociones(){
    categoriaMostrada.innerHTML = "PROMOCIONES";
}



buttonMolido.addEventListener("click", mostrarMolido);
buttonGrano.addEventListener("click", mostrarGrano);
buttonPromociones.addEventListener("click", mostrarPromociones);
