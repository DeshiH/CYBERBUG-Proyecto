const check = document.getElementById('recuerdame-check');

check.addEventListener('submit', function(e){
    e.preventDefault();
        if(check.checked){
            console.log("Recuérdame");
        } else {
            console.log("No recordar");
        }
});

//////////* REGEX //////////////*
var email = document.getElementById('emailPlaceholder').value;
var password = document.getElementById('passwordPlaceholder').value;

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
    var regex = /^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;
    if (regex.test(password)) {
        return true;
    } else {
        alert("La contraseña debe tener al menos 8 caracteres");
        return false;
    }
}