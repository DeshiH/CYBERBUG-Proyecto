/* ==== Validación con Regex ==== */
var nombre = document.getElementById('nombre').value;
var apellido = document.getElementById('apellido').value;

function validarNombre(nombre) {
    let regex = /^[a-zA-Z]+$/;
    if (regex.test(nombre)) {
        return true;
    } else {
        alert("Su nombre no puede contener caracteres especiales");
        return false;
    }
}

function validarApellido(apellido) {
    let regex = /^[a-zA-Z]+$/;
    if (regex.test(apellido)) {
        return true;
    } else {
        alert("Su apellido no puede contener caracteres especiales");
        return false;
    }
}

///////////// FECHA DE NACIMIENTO //////////////

/////* ==== Secuencia numérica en la etiqueta select de HTML ==== *//////
    // Obtenemos el elemento select
    var select = document.getElementById("day");

    // Recorremos los números del 1 al 31
    for (var i = 1; i <= 31; i++) {
    // Creamos una opción para cada número
    var option = document.createElement("option");
    option.value = i;
    option.text = i.toString().padStart(2, "0");

    // Añadimos la opción al elemento select
    select.add(option);
    }

/////* ==== Secuencia de meses en la etiqueta select de HTML ==== */////
    // Obtenemos el elemento select
    var select = document.getElementById("month");

    // Creamos un array con los nombres de los meses
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Recorremos el array de meses
    for (var i = 0; i < months.length; i++) {
    // Creamos una opción para cada mes
        var option = document.createElement("option");
        option.value = i + 1; // El valor será el índice del mes + 1
        option.text = months[i];

    // Añadimos la opción al elemento select
        select.add(option);
    }

/////* ==== Secuencia de años en la etiqueta select de HTML ==== */////
    // Obtenemos el elemento select
    var select = document.getElementById("year");

    // Obtenemos el año actual
    var currentYear = (new Date()).getFullYear();

    // Recorremos los años desde el año actual hasta el año actual - 100
    for (var i = currentYear; i >= currentYear - 80; i--) {
    // Creamos una opción para cada año
    var option = document.createElement("option");
    option.value = i;
    option.text = i;

    // Añadimos la opción al elemento select
    select.add(option);
    }

/////* ==== Validación con Regex ==== */////
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var passwordConfirm = document.getElementById('passwordConfirm').value;

    function validarEmail(email) {
        let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (regex.test(email)) {
            return true;
        } else {
            alert("Escriba correctamente su correo electrónico");
            return false;
        }
    }

    function validarPassword(password) {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;
        if (regex.test(password)) {
            return true;
        } else {
            alert("La contraseña debe tener al menos 8 caracteres");
            return false;
        }
    }

    function validarConfirmPassword(password, passwordConfirm) {
        if (password === passwordConfirm) {
            return true;
        } else {
            alert("Las contraseñas no coinciden");
            return false;
        }
    }