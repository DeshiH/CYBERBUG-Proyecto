document.getElementById("button_normal").addEventListener("click",info)
function info(){ 
     let nombre=document.getElementById("inputRecibe");
     let direcGuardada=document.getElementById("direcGuardada");
     let calle_num=document.getElementById("calle_num");
     let colonia = document.getElementById("colonia");
     let telefono=document.getElementById("telefono");
     let ciudad=document.getElementById("Ciudad");
     let estado = document.getElementById("inputState");
     let codigo_postal = document.getElementById("CP");
    
     console.log(nombre.value);
     console.log(direcGuardada.value);
     console.log(calle_num.value);
     console.log(colonia.value);
     console.log(telefono.value);
     console.log(ciudad.value);
     console.log(estado.value);
     console.log(codigo_postal.value);
    }