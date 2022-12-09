// // Validar la fecha de nacimiento al enviar el formulario
// var form = document.getElementById("formulario-registrarse");
// form.onsubmit = function (event) {
//     // Prevenir el envío del formulario
//     event.preventDefault();

//     // Obtener el valor del campo de fecha de nacimiento
//     var dob = document.getElementById("dob").value;

//     // Validar que la fecha de nacimiento tenga el formato correcto (dd/mm/yyyy)
//     var dobRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
//     if (dobRegex.test(dob)) {
//         // Si el formato es correcto, validar que la fecha sea válida
//         var dobParts = dob.split("/");
//         var day = parseInt(dobParts[0]);
//         var month = parseInt(dobParts[1]);
//         var year = parseInt(dobParts[2]);
//         var date = new Date(year, month - 1, day);

//         if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
//             // Si la fecha es válida, mostrar un mensaje de éxito
//             alert("Fecha de nacimiento válida!");
//         } else {
//             // Si la fecha no es válida, mostrar un mensaje de error
//             alert("Por favor ingrese una fecha de nacimiento válida (en formato dd/mm/yyyy).");
//         }
//     } else {
//         // Si el formato no es correcto, mostrar un mensaje de error
//         alert("Por favor ingrese una fecha de nacimiento válida (en formato dd/mm/yyyy).");
//     }
// };