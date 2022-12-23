const loginjs = document.getElementById('formulario-registrarse');
const mailRegistrarse = document.getElementById('emailPlaceholder1');
const passwordRegistrarse = document.getElementById('passwordPlaceholder1');
const passwordConfirmar = document.getElementById('passwordPlaceholder2');


loginjs.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(mailRegistrarse.value);
    console.log(passwordRegistrarse.value);
    console.log(passwordConfirmar.value);{
        if(passwordRegistrarse.value == passwordConfirmar.value){
            console.log('Coindice el password');
        } else {
            console.log('No coincide el password');
        }
    }

});