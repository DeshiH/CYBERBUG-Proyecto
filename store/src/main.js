var categoriaMostrada = document.querySelector("#categoriaDisplay");
var buttonGrano = document.querySelector("#botonGrano");
var buttonPromociones = document.querySelector("#botonPromociones");
var buttonMolido = document.querySelector("#botonMolido");
var productoMolido = document.querySelector("#Molido1");
var DOMcatalogo = document.querySelector('.listaProductos');
var DOMitems = document.querySelector('#items');
var carritoBadge = document.querySelector('#iconoCarrito');
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
            imagen: '/src/yatzilmolidov.jpg'
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
            imagen: '/src/imoxmolidov.jpg'
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
            imagen: '/src/yaxkinmolidov.jpg'
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
            imagen: '/src/amaitemolidov.jpg'
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
            imagen: '/src/ixchelmolidov.jpg'
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
            imagen: '/src/yatzilgranov.jpg'
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
            imagen: '/src/imoxgranov.jpg'
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
            imagen: '/src/yaxkingranov.jpg'
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
            imagen: '/src/amaitegranov.jpg'
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
            imagen: '/src/ixchelgranov.jpg'
        },
        {
            id: 11,
            nombre: 'Doblemente Intenso',
            precio: 299.98,
            precioPromo: 279.99,
            promoStatus: true,
            origen: 'Origen: Chiapas.',
            sabor: 'Contiene 2 Yaxkin Molido de 500g cada uno.',
            contenido: '',
            categoria:'Paquete',
            imagen: '/src/promo1.jpg'
        },
        {
            id: 12,
            nombre: 'Mujer Coffee Kode',
            precio: 279.98,
            precioPromo: 249.99,
            promoStatus: true,
            origen: 'Origen: Tabasco.',
            sabor: 'Contiene 1 Ixchel Molido y 1 de Grano de 500g cada uno.                        ',
            contenido: '',
            categoria:'Paquete',
            imagen: '/src/promo2.jpg'
        },
        {
            id: 13,
            nombre: 'Coffee Kode Plus',
            precio: 389.97,
            precioPromo: 349.99,
            promoStatus: true,
            origen: 'Origen: Veracruz.',
            sabor: 'Contiene Amaité, Yatzil y Yaxkin de Grano de 500g.',
            contenido: '',
            categoria:'Paquete',
            imagen: '/src/promo3.jpg'
        },
        {
            id: 14,
            nombre: 'Koffee Code Premium',
            precio: 449.97,
            precioPromo: 399.99,
            promoStatus: true,
            origen: 'Origen: Tabasco.',
            sabor: 'Contiene Amaité, Yatzil y Yaxkin Molido de 500g.',
            contenido: '',
            categoria:'Paquete',
            imagen: '/src/promo4.jpg'
        },
        {
            id: 15,
            nombre: 'Coffee Kode Ultimate',
            precio: 649.95,
            precioPromo: 549.99,
            promoStatus: true,
            origen: 'Origen: Chiapas.',
            sabor: 'Contiene 5 bolsas de 500g de cada uno de nuestros Cafés de Grano.',
            contenido: '',
            categoria:'Paquete',
            imagen: '/src/promo5.jpg'
        },
];



function mostrarMolido() {
        categoriaMostrada.innerHTML = "MOLIDO";
        DOMitems.removeChild(DOMcatalogo);
        DOMcatalogo = document.createElement('div');
        DOMcatalogo.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'row-cols-lg-4', 'g-4', 'listaProductos');
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
            miNodoBoton.addEventListener('click', agregarCarrito);

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

            console.log(producto.id+producto.categoria);
        }
    });
        
}


function mostrarGrano(){
    categoriaMostrada.innerHTML = "GRANO";
            DOMitems.removeChild(DOMcatalogo);
        DOMcatalogo = document.createElement('div');
        DOMcatalogo.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'row-cols-lg-4', 'g-4', 'listaProductos');
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
            miNodoBoton.addEventListener('click', agregarCarrito);

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

            console.log(producto.id+producto.categoria);
        }
    });
        
}

function mostrarPromociones(){
    categoriaMostrada.innerHTML = "PROMOCIONES";
        DOMitems.removeChild(DOMcatalogo);
        DOMcatalogo = document.createElement('div');
        DOMcatalogo.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'row-cols-lg-4', 'g-4', 'listaProductos');
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
            miNodoListaPrecioAnterior.textContent = producto.precio;
            miNodoListaPrecioAnterior.classList.add('precioAnterior');
            let miNodoListaSabor = document.createElement('li');
            miNodoListaSabor.textContent = producto.sabor;
            let miNodoListaContenido = document.createElement('li');
            miNodoListaContenido.textContent = producto.contenido;
            // Precio
            let miNodoPrecio = document.createElement('h1');
            miNodoPrecio.classList.add('pricing-card-title', 'precio');
            miNodoPrecio.textContent = '$';
            let miNodoSpan = document.createElement('span');
            miNodoSpan.textContent = producto.precioPromo;
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('storeButton1', 'agregar-carrito');
            miNodoBoton.textContent = 'AÑADIR +';
            miNodoBoton.setAttribute('data-id', producto.id);
            miNodoBoton.addEventListener('click', agregarCarrito);

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
            miNodoLista.appendChild(miNodoListaSabor);
            miNodoLista.appendChild(miNodoListaContenido);

            console.log(producto.id+producto.categoria);
        }
    });
        
}

let badge = document.createElement('span');
badge.classList.add('position-absolute', 'top-0', 'start-100', 'translate-middle', 'badge', 'rounded-pill', 'bg-danger', 'carritoContador');


function agregarCarrito(){
    carritoBadge.appendChild(badge);
    carritoBadge.removeChild(badge);
    badge = document.createElement('span');
    badge.classList.add('position-absolute', 'top-0', 'start-100', 'translate-middle', 'badge', 'rounded-pill', 'bg-danger', 'carritoContador');
    badge.textContent = contadorItems;
    carritoBadge.appendChild(badge);
    contadorItems++; 
}
var contadorItems = 1;
mostrarMolido();

buttonMolido.addEventListener("click", mostrarMolido);
buttonGrano.addEventListener("click", mostrarGrano);
buttonPromociones.addEventListener("click", mostrarPromociones);
