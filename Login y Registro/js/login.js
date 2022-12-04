const loginjs = document.getElementById('formulario-login');
const mail = document.getElementById('emailPlaceholder');
const password = document.getElementById('passwordPlaceholder');
const check = document.getElementById('recuerdame-check');

loginjs.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(mail.value);
    console.log(password.value);
});

check.addEventListener('submit', function(e){
    e.preventDefault();
        if(check.checked){
            console.log("Recuérdame");
        } else {
            console.log("No recordar");
        }
});
