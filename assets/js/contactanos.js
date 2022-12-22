document.getElementById("buttonModal").addEventListener("click",Captacion)
function Captacion(){ 
     let nombre=document.getElementById("nombre");
     let correo=document.getElementById("correo");
     let Mensaje=document.getElementById("Mensaje");
     console.log(nombre.value);
     console.log(correo.value);
     console.log(Mensaje.value);}