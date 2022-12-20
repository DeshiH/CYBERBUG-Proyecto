/* ==== Validación con Regex ==== */
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