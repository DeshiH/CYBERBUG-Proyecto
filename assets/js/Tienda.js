var categoriaMostrada = document.querySelector("#categoriaDisplay");
var buttonGrano = document.querySelector("#botonGrano");
var buttonPromociones = document.querySelector("#botonPromociones");
var buttonMolido = document.querySelector("#botonMolido");
var productoMolido = document.querySelector("#Molido1");
var DOMcatalogo = document.querySelector('.listaProductos');
var DOMitems = document.querySelector('#items');
var carritoBadge = document.querySelector('#iconoCarrito');
var DOMcarrito = document.querySelector('#carrito');
var DOMtotal = document.querySelector('#total');
var DOMtotalArticulos = document.querySelector('#totalArticulos');
var DOMbotonVaciar = document.querySelector('#vaciarButton');
var statusCarrito = document.querySelector('#statusCarrito');
var botonPagar = document.querySelector('#pagarButton');
var carrito = [];
var divisa = '$';
var contadorItems = 1;
var badge = document.createElement('span');
var miLocalStorage = window.localStorage;
badge.classList.add('position-absolute', 'top-0', 'start-100', 'translate-middle', 'badge', 'rounded-pill', 'bg-danger', 'carritoContador');

const baseDeDatos = [
        {
            id: 1,
            nombre: 'Yatzil Molido',
            precio: 149.99,
            precioAnterior: 149.99,
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
            precioAnterior: 149.99,
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
            precioAnterior: 149.99,
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
            precioAnterior: 149.99,
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
            precioAnterior: 149.99,
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
            precioAnterior: 129.99,
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
            precioAnterior: 129.99,
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
            precioAnterior: 129.99,
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
            precioAnterior: 129.99,
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
            precioAnterior: 129.99,
            promoStatus: false,
            origen: 'Origen: Chiapas.',
            sabor: 'Sabor: Suave, afrutado.',
            descripcion: '',
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
            origen: '',
            sabor: '',
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
            origen: '',
            sabor: '',
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
            origen: '',
            sabor: '',
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
            origen: '',
            sabor: '',
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
            origen: '',
            sabor: '',
            descripcion: 'Contiene 5 bolsas de 500g de cada uno de nuestros Cafés de Grano.',
            contenido: '',
            categoria:'Paquete',
            imagen: '../assets/img/promo5.jpg'
        },
];



function mostrarMolido() {
        categoriaMostrada.innerHTML = "MOLIDO";
        DOMitems.removeChild(DOMcatalogo);
        DOMcatalogo = document.createElement('div');
        DOMcatalogo.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'row-cols-lg-3', 'g-4', 'listaProductos');
        DOMitems.appendChild(DOMcatalogo);
        baseDeDatos.forEach(
            (producto) => {
            if (producto.categoria == 'Molido'){
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('col');
            // Tarjeta
            let miNodoCard = document.createElement('div');
            miNodoCard.classList.add('card', 'h-100');
            miNodoCard.setAttribute('id', producto.categoria + producto.id);
            // Imagen
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('card-img-top');
            miNodoImagen.setAttribute('src', producto.imagen);
            // Header Tarjeta
            let miNodoCardHeader = document.createElement('div');
            miNodoCardHeader.classList.add('card-header');
            // Titulo en header Tarjeta
            let miNodoTitulo = document.createElement('h5');
            miNodoTitulo.classList.add('font-weight-bold', 'productName');
            miNodoTitulo.textContent = producto.nombre;
            // Card-body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Lista en Card-Body
            let miNodoLista = document.createElement('ul');
            miNodoLista.classList.add('list-unstyled', 'mt-3', 'mb-4');
            // Items en lista de Card-Body
            let miNodoListaOrigen = document.createElement('li');
            miNodoListaOrigen.textContent = producto.origen;
            let miNodoListaSabor = document.createElement('li');
            miNodoListaSabor.textContent = producto.sabor;
            let miNodoListaContenido = document.createElement('li');
            miNodoListaContenido.textContent = producto.contenido;
            // Precio
            let miNodoPrecio = document.createElement('h1');
            miNodoPrecio.classList.add('pricing-card-title', 'precio');
            miNodoPrecio.textContent = '$';
            let miNodoSpan = document.createElement('span');
            miNodoSpan.textContent = producto.precio;
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('storeButton1', 'agregar-carrito');
            miNodoBoton.textContent = 'AÑADIR +';
            miNodoBoton.setAttribute('data-id', producto.id);
            miNodoBoton.addEventListener('click',  añadirProductoAlCarrito);
            miNodoBoton.addEventListener('click', contadorCarrito);
            

            // Insertamos
            DOMcatalogo.appendChild(miNodo);
            miNodo.appendChild(miNodoCard);
            miNodoCard.appendChild(miNodoImagen);
            miNodoCard.appendChild(miNodoCardHeader);
            miNodoCard.appendChild(miNodoCardBody);
            miNodoCardHeader.appendChild(miNodoTitulo);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoLista);
            miNodoCardBody.appendChild(miNodoBoton);   
            miNodoPrecio.appendChild(miNodoSpan);
            miNodoLista.appendChild(miNodoListaOrigen);
            miNodoLista.appendChild(miNodoListaSabor);
            miNodoLista.appendChild(miNodoListaContenido);

            console.log(producto.id);
        }
    });
        
}


function mostrarGrano(){
    categoriaMostrada.innerHTML = "GRANO";
            DOMitems.removeChild(DOMcatalogo);
        DOMcatalogo = document.createElement('div');
        DOMcatalogo.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'row-cols-lg-3', 'g-4', 'listaProductos');
        DOMitems.appendChild(DOMcatalogo);
        baseDeDatos.forEach(
            (producto) => {
            if (producto.categoria == 'Grano'){
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('col');
            // Tarjeta
            let miNodoCard = document.createElement('div');
            miNodoCard.classList.add('card', 'h-100');
            miNodoCard.setAttribute('id', producto.categoria + producto.id);
            // Imagen
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('card-img-top');
            miNodoImagen.setAttribute('src', producto.imagen);
            // Header Tarjeta
            let miNodoCardHeader = document.createElement('div');
            miNodoCardHeader.classList.add('card-header');
            // Titulo en header Tarjeta
            let miNodoTitulo = document.createElement('h5');
            miNodoTitulo.classList.add('font-weight-bold', 'productName');
            miNodoTitulo.textContent = producto.nombre;
            // Card-body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Lista en Card-Body
            let miNodoLista = document.createElement('ul');
            miNodoLista.classList.add('list-unstyled', 'mt-3', 'mb-4');
            // Items en lista de Card-Body
            let miNodoListaOrigen = document.createElement('li');
            miNodoListaOrigen.textContent = producto.origen;
            let miNodoListaSabor = document.createElement('li');
            miNodoListaSabor.textContent = producto.sabor;
            let miNodoListaContenido = document.createElement('li');
            miNodoListaContenido.textContent = producto.contenido;
            // Precio
            let miNodoPrecio = document.createElement('h1');
            miNodoPrecio.classList.add('pricing-card-title', 'precio');
            miNodoPrecio.textContent = '$';
            let miNodoSpan = document.createElement('span');
            miNodoSpan.textContent = producto.precio;
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('storeButton1', 'agregar-carrito');
            miNodoBoton.textContent = 'AÑADIR +';
            miNodoBoton.setAttribute('data-id', producto.id);
            miNodoBoton.addEventListener('click', añadirProductoAlCarrito);
            miNodoBoton.addEventListener('click', contadorCarrito);

            // Insertamos
            DOMcatalogo.appendChild(miNodo);
            miNodo.appendChild(miNodoCard);
            miNodoCard.appendChild(miNodoImagen);
            miNodoCard.appendChild(miNodoCardHeader);
            miNodoCard.appendChild(miNodoCardBody);
            miNodoCardHeader.appendChild(miNodoTitulo);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoLista);
            miNodoCardBody.appendChild(miNodoBoton);   
            miNodoPrecio.appendChild(miNodoSpan);
            miNodoLista.appendChild(miNodoListaOrigen);
            miNodoLista.appendChild(miNodoListaSabor);
            miNodoLista.appendChild(miNodoListaContenido);

            console.log(producto.id);
        }
    });
        
}

function mostrarPromociones(){
    categoriaMostrada.innerHTML = "PROMOCIONES";
        DOMitems.removeChild(DOMcatalogo);
        DOMcatalogo = document.createElement('div');
        DOMcatalogo.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'row-cols-lg-3', 'g-4', 'listaProductos');
        DOMitems.appendChild(DOMcatalogo);
        baseDeDatos.forEach(
            (producto) => {
            if (producto.promoStatus == true){
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('col');
            // Tarjeta
            let miNodoCard = document.createElement('div');
            miNodoCard.classList.add('card', 'h-100');
            miNodoCard.setAttribute('id', producto.categoria + producto.id);
            // Imagen
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('card-img-top');
            miNodoImagen.setAttribute('src', producto.imagen);
            // Header Tarjeta
            let miNodoCardHeader = document.createElement('div');
            miNodoCardHeader.classList.add('card-header');
            // Titulo en header Tarjeta
            let miNodoTitulo = document.createElement('h5');
            miNodoTitulo.classList.add('font-weight-bold', 'productName');
            miNodoTitulo.textContent = producto.nombre;
            // Card-body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Lista en Card-Body
            let miNodoLista = document.createElement('ul');
            miNodoLista.classList.add('list-unstyled', 'mt-3', 'mb-4');
            // Items en lista de Card-Body
            let miNodoListaPrecioAnterior = document.createElement('li');
            miNodoListaPrecioAnterior.textContent = producto.precioAnterior;
            miNodoListaPrecioAnterior.classList.add('precioAnterior');
            let miNodoListaDescripcion = document.createElement('li');
            miNodoListaDescripcion.textContent = producto.descripcion;
            let miNodoListaContenido = document.createElement('li');
            miNodoListaContenido.textContent = producto.contenido;
            // Precio
            let miNodoPrecio = document.createElement('h1');
            miNodoPrecio.classList.add('pricing-card-title', 'precio');
            miNodoPrecio.textContent = '$';
            let miNodoSpan = document.createElement('span');
            miNodoSpan.textContent = producto.precio;
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('storeButton1', 'agregar-carrito');
            miNodoBoton.textContent = 'AÑADIR +';
            miNodoBoton.setAttribute('data-id', producto.id);
            miNodoBoton.addEventListener('click',  añadirProductoAlCarrito);
            miNodoBoton.addEventListener('click', contadorCarrito);
           

            // Insertamos
            DOMcatalogo.appendChild(miNodo);
            miNodo.appendChild(miNodoCard);
            miNodoCard.appendChild(miNodoImagen);
            miNodoCard.appendChild(miNodoCardHeader);
            miNodoCard.appendChild(miNodoCardBody);
            miNodoCardHeader.appendChild(miNodoTitulo);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoLista);
            miNodoCardBody.appendChild(miNodoBoton);   
            miNodoPrecio.appendChild(miNodoSpan);
            miNodoLista.appendChild(miNodoListaPrecioAnterior);
            miNodoLista.appendChild(miNodoListaDescripcion);
            miNodoLista.appendChild(miNodoListaContenido);

            console.log(producto.id);
        }
    });
        
}



// FUNCION PARA CONTADOR DEL CARRITO
function contadorCarrito(){
    carritoBadge.appendChild(badge);
    carritoBadge.removeChild(badge);
    badge = document.createElement('span');
    badge.classList.add('position-absolute', 'start-100', 'translate-middle', 'badge', 'rounded-pill', 'bg-success', 'carritoContador');
    badge.textContent = carrito.length;
    carritoBadge.appendChild(badge); 
    if (carrito.length == 0){
        carritoBadge.removeChild(badge);
    }
}


function añadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(parseInt(evento.target.getAttribute('data-id')));
    console.log('Se añadió el producto con el id: ', evento.target.getAttribute('data-id'));
    // Actualizamos el carrito 
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        
    });
    Toast.fire({
        icon: 'success',
        titleText: '¡Producto agregado con éxito!',
        background: '#4c7661',
        color: '#FFFFFF'
    })

}

function mostrarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
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
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo enlistar el producto en cuerpo del modal      
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        const miRow = document.createElement('div');
        miRow.classList.add('row', 'align-items-center', 'justify-content-evenly');
        const miCol1 = document.createElement('div');
        miCol1.classList.add('col', 'align-items-center', 'columna1');
        miCol1.textContent = `${numeroUnidadesItem}x`;
        const miCol2 = document.createElement('div');
        miCol2.classList.add('col','align-items-center', 'columna2');
        const miImagen = document.createElement('img');
        miImagen.setAttribute('src', miItem[0].imagen);
        miImagen.setAttribute('width', '60px');
        const miCol3 = document.createElement('div');
        miCol3.classList.add('col','align-items-center', 'columna3');
        miCol3.textContent = `${miItem[0].nombre}`;
        const miCol4 = document.createElement('div');
        miCol4.classList.add('col','align-items-center', 'columna4');
        miCol4.textContent = `${divisa}${miItem[0].precio}`;
        const miCol5 = document.createElement('div');
        miCol5.classList.add('col','align-items-center', 'columna5');
        
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-success', 'quitarButton');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miRow);
        miRow.appendChild(miCol1);
        miRow.appendChild(miCol2);
        miRow.appendChild(miCol3);
        miRow.appendChild(miCol4);
        miRow.appendChild(miCol5);
        miCol5.appendChild(miBoton);
        miCol2.appendChild(miImagen);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
    DOMtotalArticulos.innerHTML = carrito.length;
    statusCarrito.innerHTML = carrito.length == 0 ? "Tu carrito está vacío." : "Resumen:";
}

function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = parseInt(evento.target.dataset.item);
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    mostrarCarrito();
    contadorCarrito();
    guardarCarritoEnLocalStorage();

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

function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    mostrarCarrito();
    contadorCarrito();
    localStorage.clear();
    console.log('Se eliminó carrito del local storage.');
}

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('Se guardó carrito en el local storage.');
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        console.log('Se cargó carrito del local storage.');
    }
}

function irAPagar(){
    window.location.href="https://deshih.github.io/CYBERBUG-Proyecto/html/Carrito1.html";
}

// 
cargarCarritoDeLocalStorage();
mostrarCarrito();
contadorCarrito();
mostrarMolido();


// EVENTOS DE BOTONES DE CATEGORIAS
buttonMolido.addEventListener("click", mostrarMolido);
buttonGrano.addEventListener("click", mostrarGrano);
buttonPromociones.addEventListener("click", mostrarPromociones);
DOMbotonVaciar.addEventListener('click', vaciarCarrito);
botonPagar.addEventListener('click', irAPagar);