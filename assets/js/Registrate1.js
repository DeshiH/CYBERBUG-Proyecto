/* ==== Validación con Regex ==== */
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');

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
    var selectDia = document.getElementById("day");

    // Recorremos los números del 1 al 31
    for (var i = 1; i <= 31; i++) {
    // Creamos una opción para cada número
    var option1 = document.createElement("option");
    option1.value = i;
    option1.text = i.toString().padStart(2, "0");

    // Añadimos la opción al elemento select
    selectDia.add(option1);

    }



/////* ==== Secuencia de meses en la etiqueta select de HTML ==== */////
    // Obtenemos el elemento select
    var selectMes = document.getElementById("month");

    // Creamos un array con los nombres de los meses
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Recorremos el array de meses
    for (var i = 0; i < months.length; i++) {
    // Creamos una opción para cada mes
        var option2 = document.createElement("option");
        option2.value = i + 1; // El valor será el índice del mes + 1
        option2.text = months[i];

    // Añadimos la opción al elemento select
        selectMes.add(option2);
    }

/////* ==== Secuencia de años en la etiqueta select de HTML ==== */////
    // Obtenemos el elemento select
    var selectAño = document.getElementById("year");

    // Obtenemos el año actual
    var currentYear = (new Date()).getFullYear();

    // Recorremos los años desde el año actual hasta el año actual - 100
    for (var i = currentYear; i >= currentYear - 80; i--) {
    // Creamos una opción para cada año
    var option3 = document.createElement("option");
    option3.value = i;
    option3.text = i;

    // Añadimos la opción al elemento select
    selectAño.add(option3);
    }

/////* ==== Validación con Regex ==== */////
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passwordConfirm = document.getElementById('passwordConfirm');

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
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden.',
                confirmButtonColor: '#344E41',
              });
            return false;
        }
    }

   
    var botonContinuar = document.getElementById('botonContinuar');
  
    botonContinuar.addEventListener('click', registrarUsuario);

  

    function crearJSON() {
        var usuario = {
            firstname: nombre.value,
            lastname: apellido.value,
            birthdate: selectDia.value + "/" + selectMes.value + "/" + selectAño.value ,
            username: email.value,
            password: password.value
            }

        console.log(usuario);
        return usuario;
    }

  
    function registrarUsuario(){
        let formulario = document.getElementById('formulario-registrarse');
        var usuario = crearJSON();

        if (validarConfirmPassword(usuario.password, passwordConfirm.value) == true){
            fetch ('https://apicoffeekode-production.up.railway.app/api/CoffeeKode/users/', { // La direccion que creamos en JAVA
    method: 'POST', // el método que  voy a utilizar
    headers: {
        'Content-type': 'application/json' // El tipo de contenido que usamos es JSON
    },

    body: JSON.stringify(usuario) // El cuerpo de mi solicitud debe cambiarse a string, para que el servidor lo puedad leer.

    })
    .then((response) => response.text()) //Esta es la respuesta que nos da el servidor, es este caso la recibo como un texto. Lo hacemos asi por si en algun momento quiero mostrar ese texto en pantall (innerHTML o textContent).
    .then((usuario) => { //esta promesa es para poder mostrar si la conexion al servidor fue exitosa
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Usuario registrado exitosamente.',
            confirmButtonColor: '#344E41',
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.href="https://deshih.github.io/CYBERBUG-Proyecto/html/Login.html"
            }
          });
    })
    .catch((error) =>{  //Esta promesa es por si el servidor no responde. En este caso, mostramos un mensaje de error
        console.log("Error al enviar los datos al servidor.", error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal.',
          }); //Mostramos un mensaje de alerta en la pagina
    });

    formulario.reset();
        }
    }

