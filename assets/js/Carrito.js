/**Array */
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Yatzil Molido',
        precio: 149.99,
        precioPromo: 129.99,
        promoStatus: false,
        origen: 'Origen: Chiapas.',
        sabor: 'Sabor: Intenso-suave.',
        contenido: 'Contenido: 500g.',
        categoria:'Molido',
        imagen: '../assets/img/yatzilmolidov.jpg'
    },
    {
        id: 2,
        nombre: 'Imox Molido',
        precio: 149.99,
        precioPromo: 149.00,
        promoStatus: false,
        origen: 'Origen: Tabasco.',
        sabor: 'Sabor: Intenso-medio.',
        contenido: 'Contenido: 500g.',
        categoria:'Molido',
        imagen: '../assets/img/imoxmolidov.jpg'
    },
    {
        id: 3,
        nombre: 'Yaxkin Molido',
        precio: 149.99,
        precioPromo: 129.00,
        promoStatus: false,
        origen: 'Origen: Veracruz.',
        sabor: 'Sabor: Intenso-fuerte.',
        contenido: 'Contenido: 500g.',
        categoria:'Molido',
        imagen: '../assets/img/yaxkinmolidov.jpg'
    },
    {
        id: 4,
        nombre: 'Amaité Molido',
        precio: 149.99,
        precioPromo: 149.00,
        promoStatus: false,
        origen: 'Origen: Tabasco.',
        sabor: 'Sabor: Suave, chocolate.',
        contenido: 'Contenido: 500g.',
        categoria:'Molido',
        imagen: '../assets/img/Amaite-molido.jpg'
    },
    {
        id: 5,
        nombre: 'Ixchel Molido',
        precio: 149.99,
        precioPromo: 149.00,
        promoStatus: false,
        origen: 'Origen: Chiapas.',
        sabor: 'Sabor: Suave, afrutado.',
        contenido: 'Contenido: 500g.',
        categoria:'Molido',
        imagen: '../assets/img/ixchelmolidov.jpg'
    },
    {
        id: 6,
        nombre: 'Yatzil Grano',
        precio: 129.99,
        precioPromo: 129.99,
        promoStatus: false,
        origen: 'Origen: Chiapas.',
        sabor: 'Sabor: Intenso-suave.',
        contenido: 'Contenido: 500g.',
        categoria:'Grano',
        imagen: '../assets/img/yatzilgranov.jpg'
    },
    {
        id: 7,
        nombre: 'Imox Grano',
        precio: 129.99,
        precioPromo: 99.99,
        promoStatus: false,
        origen: 'Origen: Tabasco.',
        sabor: 'Sabor: Intenso-medio.',
        contenido: 'Contenido: 500g.',
        categoria:'Grano',
        imagen: '../assets/img/imoxgranov.jpg'
    },
    {
        id: 8,
        nombre: 'Yaxkin Grano',
        precio: 129.99,
        precioPromo: 129.99,
        promoStatus: false,
        origen: 'Origen: Veracruz.',
        sabor: 'Sabor: Intenso-fuerte.',
        contenido: 'Contenido: 500g.',
        categoria:'Grano',
        imagen: '../assets/img/yaxkingranov.jpg'
    },
    {
        id: 9,
        nombre: 'Amaité Grano',
        precio: 129.99,
        precioPromo: 99.99,
        promoStatus: false,
        origen: 'Origen: Tabasco.',
        sabor: 'Sabor: Suave, chocolate.',
        contenido: 'Contenido: 500g.',
        categoria:'Grano',
        imagen: '../assets/img/amaitegranov.jpg'
    },
    {
        id: 10,
        nombre: 'Ixchel Grano',
        precio: 129.99,
        precioPromo: 129.99,
        promoStatus: false,
        origen: 'Origen: Chiapas.',
        sabor: 'Sabor: Suave, afrutado.',
        contenido: 'Contenido: 500g.',
        categoria:'Grano',
        imagen: '../assets/img/Ixchel-grano.jpg'
    },
    {
        id: 11,
        nombre: 'Doble Intenso',
        precio: 279.99,
        precioAnterior: 299.98,
        promoStatus: true,
        origen: 'Origen: Chiapas.',
        descripcion: 'Contiene 2 Yaxkin Molido de 500g cada uno.',
        contenido: '',
        categoria:'Paquete',
        imagen: '../assets/img/promo1.jpg'
    },
    {
        id: 12,
        nombre: 'Mujer Coffee Kode',
        precio: 249.99,
        precioAnterior: 279.98,
        promoStatus: true,
        origen: 'Origen: Tabasco.',
        descripcion: 'Contiene 1 Ixchel Molido y 1 de Grano de 500g cada uno.                        ',
        contenido: '',
        categoria:'Paquete',
        imagen: '../assets/img/promo2.jpg'
    },
    {
        id: 13,
        nombre: 'Coffee Kode Plus',
        precio: 349.99,
        precioAnterior: 389.97,
        promoStatus: true,
        origen: 'Origen: Veracruz.',
        descripcion: 'Contiene Amaité, Yatzil y Yaxkin de Grano de 500g.',
        contenido: '',
        categoria:'Paquete',
        imagen: '../assets/img/promo3.jpg'
    },
    {
        id: 14,
        nombre: 'Koffee Code Premium',
        precio: 399.99,
        precioAnterior: 449.97,
        promoStatus: true,
        origen: 'Origen: Tabasco.',
        descripcion:'Contiene Amaité, Yatzil y Yaxkin Molido de 500g.',
        contenido: '',
        categoria:'Paquete',
        imagen: '../assets/img/promo4.jpg'
    },
    {
        id: 15,
        nombre: 'Coffee Kode Ultimate',
        precio: 549.99,
        precioAnterior: 649.95,
        promoStatus: true,
        origen: 'Origen: Chiapas.',
        descripcion: 'Contiene 5 bolsas de 500g de cada uno de nuestros Cafés de Grano.',
        contenido: '',
        categoria:'Paquete',
        imagen: '../assets/img/promo5.jpg'
    },
];
var miLocalStorage = window.localStorage;
var carrito = [];/**Carrito vacio */
var resumencarrito = document.querySelector("#resumencarrito");
var totalPago = document.querySelector ("#totalnet");
var botonPagar = document.querySelector("#botonPagar");

function mostrarResumenCarrito() {
    // Vaciamos el HTML
    resumencarrito.textContent = '';
       // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
        // ¿Coincide las id? Solo puede existir un caso
        return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        var numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);

        // Creamos el nodo enlistar el producto en cuerpo del modal      
        const miDivprincipal = document.createElement('div');
        miDivprincipal.classList.add('container', 'text-center', 'p-2');
        const miDiv2 = document.createElement('div');
        miDiv2.classList.add('row');
        const miDiv3 = document.createElement('div');
        miDiv3.classList.add('col-4');
        const miimg1 = document.createElement('img');
        miimg1.classList.add('img');
        miimg1.setAttribute('src', miItem[0].imagen);
        miimg1.setAttribute('width', '150px');
        const miP = document.createElement('p');
        miP.innerHTML = `${miItem[0].nombre} ${miItem[0].contenido}`;
        const miDiv4 = document.createElement('div');
        miDiv4.classList.add('col-3');
        miDiv4.textContent = `$${miItem[0].precio}`;
        const miDiv5 = document.createElement('div');
        miDiv5.classList.add('col-3');
        const botonMas = document.createElement ('button');
        botonMas.classList.add('btn', 'btn-primary', 'btn-sm', 'botonAumentar');
        botonMas.innerHTML = '+';
        botonMas.setAttribute('data-item', miItem[0].id);
        botonMas.addEventListener('click', añadirProductoAlCarrito);
        const spanPrecio = document.createElement('span');
        spanPrecio.innerHTML = `    ${numeroUnidadesItem}    `;
        const botonMenos = document.createElement ('button');
        botonMenos.classList.add('btn', 'btn-primary', 'btn-rs', 'botonDisminuir');
        botonMenos.innerHTML = '-';
        botonMenos.setAttribute('data-item', miItem[0].id);
        botonMenos.addEventListener('click', quitarProductoDelCarrito);
        const miDiv6 = document.createElement('div');
        miDiv6.classList.add('container');
        const miDiv7 = document.createElement('div');
        miDiv7.classList.add('col-2');
        const subTotal = (numeroUnidadesItem * miItem[0].precio).toFixed(2);
        miDiv7.textContent = "$ " + subTotal;
        const mibr = document.createElement ('br');
        const mihr = document.createElement ('hr');
        // Mezclamos nodos
        resumencarrito.appendChild(miDivprincipal);
        miDivprincipal.appendChild (miDiv2);
        miDiv2.appendChild (miDiv3);
        miDiv3.appendChild (miimg1);
        miDiv3.appendChild (miP);
        miDiv2.appendChild (miDiv4);
        miDiv4.appendChild (spanPrecio);
        miDiv2.appendChild (miDiv5);
        miDiv5.appendChild (miDiv6);
        miDiv6.appendChild (botonMas);
        miDiv6.appendChild (spanPrecio);
        miDiv6.appendChild (botonMenos);
        miDiv2.appendChild (miDiv7);
       resumencarrito.appendChild (mibr);
       resumencarrito.appendChild (mihr);
       resumencarrito.appendChild (mibr);

       
    });

    totalPago.textContent = "$ " + calcularTotal(); 
    if (carrito.length <= 0){
        var invitacion = document.createElement("img");
        var invitacion2 = document.createElement("h4");
        var invitacion3 = document.createElement("h4");
        var invitacion4 = document.createElement("br");
        invitacion.setAttribute("src", "../assets/img/vacio.png");
        invitacion.classList.add("img-fluid");
        resumencarrito.appendChild(invitacion);
        invitacion2.innerHTML = "Carrito Vacío";
        invitacion3.innerHTML = "Visita nuestra tienda para agregar productos.";
        resumencarrito.appendChild(invitacion2);
        resumencarrito.appendChild(invitacion3);
        resumencarrito.appendChild(invitacion4);
        resumencarrito.appendChild(invitacion4);

        botonPagar.innerHTML = "Visitar Tienda";
        botonPagar.addEventListener("click", visitarTienda);
       


    }
}
  
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

function añadirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    carrito.push(parseInt (evento.target.getAttribute('data-item')));
   
    // Actualizamos el carrito 
    mostrarResumenCarrito();
    guardarCarritoEnLocalStorage();
   
}

function quitarProductoDelCarrito(evento) {
    var productoAQuitar = carrito.findIndex(item => item === parseInt(evento.target.getAttribute('data-item')));
     carrito.splice(productoAQuitar, 1);
           
    // Actualizamos el carrito 
    mostrarResumenCarrito();
    guardarCarritoEnLocalStorage();
}

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('Se guardó carrito en el local storage.');
}


/**Jala lo que ya existia en el carrito */
function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        console.log('Se cargó carrito del local storage.');
    }
}

function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    mostrarResumenCarrito();
    localStorage.clear();
    console.log('Se eliminó carrito del local storage.');
}

function visitarTienda(){
    window.location.href="https://deshih.github.io/CYBERBUG-Proyecto/html/Tienda.html";
}

// funciones que se disparan al correr la pagina

cargarCarritoDeLocalStorage();
mostrarResumenCarrito();


/* Dando funcionalidad a mis botones de aumentar y diminuir porductos para sumar y restar la cant de productos seleccionados */
//Declaro variables para que se modifiquen en mi front, linkeadas por id a mi HTML

// var botonAumentar = document.querySelector("#Aumentar");
// var botonDisminuir = document.querySelector("#Disminuir");
// var cantProductos1 = document.querySelector("#productos1");
// var valorproductos1 = 3;
// function Aumentar1(){
//     valorproductos1++; //La cantidad de productos aumenta de 1 en 1
//     cantProductos1.innerHTML = valorproductos1;  //Con innerHTML pongo el valor de los productos en el front  
//     botonDisminuir.disabled = valorproductos1 == 0 ? true : false;
// }
// botonAumentar.addEventListener("click", Aumentar1);
// function Disminuir1(){
//     valorproductos1--;
//     cantProductos1.innerHTML = valorproductos1;
//     botonDisminuir.disabled = valorproductos1 == 0 ? true : false;
// }
// botonDisminuir.addEventListener("click", Disminuir1);
 
// var botonAumentar2 = document.querySelector("#Aumentar2");
// var botonDisminuir2 = document.querySelector("#Disminuir2");
// var cantProductos2 = document.querySelector("#productos2");
// var valorproductos2 = 3;
// function Aumentar2(){
//     valorproductos2++; //La cantidad de productos aumenta de 1 en 1
//     cantProductos2.innerHTML = valorproductos2;  //Con innerHTML pongo el valor de los productos en el front  
//     botonDisminuir2.disabled = valorproductos2 == 0 ? true : false;
// }
// botonAumentar2.addEventListener("click", Aumentar2);
// function Disminuir2(){
//     valorproductos2--;
//     cantProductos2.innerHTML = valorproductos2;
//     botonDisminuir2.disabled = valorproductos2 == 0 ? true : false;
// }
// botonDisminuir2.addEventListener("click", Disminuir2);

// var botonAumentar3 = document.querySelector("#Aumentar3");
// var botonDisminuir3 = document.querySelector("#Disminuir3");
// var cantProductos3 = document.querySelector("#productos3");
// var valorproductos3 = 3;
// function Aumentar3(){
//     valorproductos3++; //La cantidad de productos aumenta de 1 en 1
//     cantProductos3.innerHTML = valorproductos3;  //Con innerHTML pongo el valor de los productos en el front 
    
//     botonDisminuir3.disabled = valorproductos3 == 0 ? true : false;
   
// }
// botonAumentar3.addEventListener("click", Aumentar3);
// function Disminuir3(){
//     valorproductos3--;
//     cantProductos3.innerHTML = valorproductos3;
//     botonDisminuir3.disabled = valorproductos3 == 0 ? true : false;
// }
// botonDisminuir3.addEventListener("click", Disminuir3);
/* Terminan mis terceros botones*/


/* Agregar función para que se modifique el sub-total y el total de la cuenta al dar click en botones suma y disminuir */



/* Agregar función para que el icono de carrito de compras notifique los productos agregados o restados*/



/* Agregar funcion para que el botón de pagar te lleve a la página de metodos de pagos*/



/* Agregar funcion para que el botón de añadir en promos haga que se agregue tu producto a la tabla, sume y disminuya sub-total y total*/
