// Variables
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let carritoHtml = document.querySelector(".offcanvas-body");
let carritoFooter = document.querySelector(".offcanvas-footer")
const total = carrito.reduce((acc, el) => acc + el.valor * el.unidades, 0);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones 
const save = () => {
    localStorage.setItem("carrito" , JSON.stringify(carrito));
}

const restar = () => {
    const productId = carrito.find((p) => p.id);

    productId.unidades--
    save();
    ventanaCarrito();
}

const sumar = () => {
    const productId = carrito.find((p) => p.id);
    
    productId.unidades++
    save();
    ventanaCarrito();
}

const eliminarProducto = () => {
    const foundId = carrito.find((e) => e.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    save();
}

const agregarCarritoJordan = (id) => {
    const productoJordan = allProducts[0].jordan.find((j) => j.id === id);

    if (productoJordan && !carrito.some((i) => i.id === id)) {
        const agregado = document.getElementById(`agregar-${id}`);
        agregado.innerHTML = "Agregado";
        agregado.disabled = true;
        carrito.push(productoJordan)
        save();
    }
}

const agregarCarritoUnder = (id) => {
    const productoUnder = underArmour.find((u) => u.id === id);

    if (productoUnder && !carrito.some((i) => i.id === id)) {
        const agregado = document.getElementById(`agregar-${id}`);
        agregado.innerHTML = "Agregado";
        agregado.disabled = true;
        carrito.push(productoUnder);
        save();
    }
}

const agregarCarritoPuma = (id) => {
    const productoPuma = puma.find((p) => p.id === id);

    if (productoPuma && !carrito.some((i) => i.id === id)) {
        const agregado = document.getElementById(`agregar-${id}`);
        agregado.innerHTML = "Agregado";
        agregado.disabled = true;
        carrito.push(productoPuma);
        save();
    }
}

const agregarCarritoNike = (id) => {
    const productoNike = nike.find((n) => n.id === id);

    if (productoNike && !carrito.some((i) => i.id === id)) {
        const agregado = document.getElementById(`agregar-${id}`);
        agregado.innerHTML = "Agregado";
        agregado.disabled = true;
        carrito.push(productoNike);
        save();
    }
}

const agregarCarritoAdidas = (id) => {
    const productoAdidas = adidas.find((a) => a.id === id);

    if (productoAdidas && !carrito.some((i) => i.id === id)) {
        const agregado = document.getElementById(`agregar-${id}`);
        agregado.innerHTML = "Agregado";
        agregado.disabled = true;
        carrito.push(productoAdidas);
        save();
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Arrays
const allProducts = [
    {
        jordan: [
            {
            
                id: "j1",
                url: "images/jordan black lisas.jpg",
                modelo: "Airjordan",
                color: "Black",
                valor: 48,
                unidades: 1,
                talla: 34
            },
            {
                id: "j2",
                url: "images/jordan black white.jpg",
                modelo: "Airjordan",
                color: "White",
                valor: 53,
                unidades: 1,
                talla: 34
            },
            {
                id: "j3",
                url: "images/jordan white lisas.jpg",
                modelo: "Airjordan Retro",
                color: "White",
                valor: 45,
                unidades: 1,
                talla: 34
            },
            {
                id: "j4",
                url: "images/jordan white.jpg" ,
                modelo: "Airjordan Retro",
                color: "Black",
                valor: 55,
                unidades: 1,
                talla: 34
            },
            {
                id: "j5",
                url: "images/jordan grey.jpg",
                modelo: "Retro",
                color: "Grey",
                valor: 48,
                unidades: 1,
                talla: 34
            },
            {
                id: "j6",
                url: "images/jordan orange.jpg",
                modelo: "Retro",
                color: "Orange",
                valor: 53,
                unidades: 1,
                talla: 34
            },
            {
                id: "j7",
                url: "images/jordan black.jpg",
                modelo: "Retro",
                color: "Black with Red",
                valor: 45,
                unidades: 1,
                talla: 34
            },
            {
                id: "j8",
                url: "images/jordan blue.jpg",
                modelo: "Retro",
                color: "Blue",
                valor: 55,
                unidades: 1,
                talla: 34
            }
        ],
    
        underArmour: [
            {
                id: "u1",
                url: "images/Under Armour verde.jpeg",
                modelo: "Running",
                color: "Green",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "u2",
                url: "images/Under armour rojos.jpeg",
                modelo: "Running",
                color: "Red",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "u3",
                url: "images/under armour multicolor.jpeg",
                modelo: "Running",
                color: "Multicolor",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "u4",
                url: "images/under armour black white.jpeg",
                modelo: "Running",
                color: "Black",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "u5",
                url: "images/under armour black.jpeg",
                modelo: "Classic",
                color: "Black",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "u6",
                url: "images/under armour blue.jpeg",
                modelo: "Classic",
                color: "Blue",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "u7",
                url: "images/under armour pink.jpeg",
                modelo: "Classic",
                color: "Pink",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "u8",
                url: "images/under armour red.jpeg",
                modelo: "Under",
                color: "Orange",
                valor: 35,
                unidades: 1,
                talla: 34
            }
        ],
    
        puma: [
            {
                id: "p1",
                url: "images/puma black green.jpg",
                modelo: "Running",
                color: "Black with Green",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "p2",
                url: "images/puma black.jpg",
                modelo: "Running",
                color: "Black",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "p3",
                url: "images/puma blue.jpg",
                modelo: "Running",
                color: "Blue",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "p4",
                url: "images/puma coral.jpg",
                modelo: "Running",
                color: "Pink",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "p5",
                url: "images/puma grey.jpg",
                modelo: "Rider",
                color: "Grey",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "p6",
                url: "images/puma multicolor.jpg",
                modelo: "Rider",
                color: "Multicolor",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "p7",
                url: "images/puma white pink.jpg",
                modelo: "Rider",
                color: "White",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "p8",
                url: "images/puma negro.jpg",
                modelo: "Rider",
                color: "Black",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "p9",
                url: "images/puma orange.jpg",
                modelo: "Training",
                color: "Orange",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "p10",
                url: "images/puma pink.jpg",
                modelo: "Training",
                color: "Pink",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "p11",
                url: "images/puma purple.jpg",
                modelo: "Training",
                color: "Purple",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "p12",
                url: "images/puma rosita.jpg",
                modelo: "Training",
                color: "Light Pink",
                valor: 35,
                unidades: 1,
                talla: 34
            }
        ],
    
        nike: [
            {
                id: "n1",
                url: "images/nike bicolor.webp",
                modelo: "Infinity Run",
                color: "Coral",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n2",
                url: "images/nike black white.webp",
                modelo: "Infinity Run",
                color: "Black",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "n3",
                url: "images/nike black red.webp",
                modelo: "Infinity Run",
                color: "Black with Red",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n4",
                url: "images/nike blue.webp",
                modelo: "Infinity Run",
                color: "Blue",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n5",
                url: "images/nike bordo.webp",
                modelo: "Dunk Low",
                color: "Brown",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n6",
                url: "images/nike green.webp",
                modelo: "Dunk Low",
                color: "Green",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "n7",
                url: "images/nike grey.webp",
                modelo: "Dunk Low",
                color: "Grey",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n8",
                url: "images/nike gris claro.webp",
                modelo: "Dunk Low",
                color: "Sky Blue",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n9",
                url: "images/nike moradito.webp",
                modelo: "Infinity Training",
                color: "Light Purple",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n10",
                url: "images/nike morado.webp",
                modelo: "Infinity Training",
                color: "Purple",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "n11",
                url: "images/nike red.webp",
                modelo: "Infinity Training",
                color: "Red",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n12",
                url: "images/nike purple.webp",
                modelo: "Infinity Training",
                color: "Dark Purple",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n13",
                url: "images/nike rosa.webp",
                modelo: "Air Presto",
                color: "Pink",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n14",
                url: "images/nike tricolor.webp",
                modelo: "Air Presto",
                color: "White with Blue",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "n15",
                url: "images/nike white orange.webp",
                modelo: "Air Presto",
                color: "White",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "n16",
                url: "images/nike white pink.webp",
                modelo: "Air Presto",
                color: "Grey",
                valor: 35,
                unidades: 1,
                talla: 34
            }
        ],
    
        adidas: [
            {
                id: "a1",
                url: "images/adidas azul claro.avif",
                modelo: "Duramo SL",
                color: "Sky Blue",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a2",
                url: "images/adidas azul.avif",
                modelo: "Duramo SL",
                color: "BLue",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "a3",
                url: "images/adidas bicolor.avif",
                modelo: "Duramo SL",
                color: "Orange",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a4",
                url: "images/adidas black.avif",
                modelo: "Duramo SL",
                color: "Black",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a5",
                url: "images/adidas blue.avif",
                modelo: "Lite Racer",
                color: "Blue",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a6",
                url: "images/adidas coral.avif",
                modelo: "Lite Racer",
                color: "Pink",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "a7",
                url: "images/adidas negro.avif",
                modelo: "Lite Racer",
                color: "Black",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a8",
                url: "images/adidas tricolor.avif",
                modelo: "Lite Racer",
                color: "Black with Blue and Pink",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a9",
                url: "images/adidas green.avif",
                modelo: "Rapid Move",
                color: "Green",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a10",
                url: "images/adidas orange.avif",
                modelo: "Rapid Move",
                color: "Orange",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "a11",
                url: "images/adidas red.avif",
                modelo: "Rapid Move",
                color: "Red",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a12",
                url: "images/adidas white green.avif",
                modelo: "Rapid Move",
                color: "White",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a13",
                url: "images/adidas grey.avif",
                modelo: "Dropset",
                color: "Grey",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a14",
                url: "images/adidas rojos.avif",
                modelo: "Dropset",
                color: "Red",
                valor: 40,
                unidades: 1,
                talla: 34
            },
            {
                id: "a15",
                url: "images/adidas white orange.avif",
                modelo: "Dropset",
                color: "White with Orange",
                valor: 35,
                unidades: 1,
                talla: 34
            },
            {
                id: "a16",
                url: "images/adidas white.avif",
                modelo: "Dropset",
                color: "White",
                valor: 35,
                unidades: 1,
                talla: 34
            }
        ]
    }
]

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Recorridos
// Jordan
let container = document.createElement("h1");
container.innerHTML = "JORDAN"
document.body.append(container);

container = document.createElement("div");
container.className = "container";
for (let i = 0; i < allProducts[0].jordan.length; i++) {

    container.innerHTML += `
        <article class="box-container">
            <img src="${allProducts[0].jordan[i].url}" alt="imagen sobre ${allProducts[0].jordan[i].modelo}">
            <div class="box-body">
                <p>${allProducts[0].jordan[i].modelo}</p>
                <b>${allProducts[0].jordan[i].valor}$</b>
                <button onclick = "agregarCarritoJordan('${allProducts[0].jordan[i].id}')" id= "agregar-${allProducts[0].jordan[i].id}">Agregar al carrito</button>
            </div>
        </article>`;
}
document.body.append(container);


// Under Armour
container = document.createElement("h2");
container.innerHTML = "UNDER ARMOUR"
document.body.append(container);

container = document.createElement("div");
container.className = "container";
for (let i = 0; i < allProducts[0].underArmour.length; i++) {

    container.innerHTML += `
        <article class="box-container">
            <img src="${allProducts[0].underArmour[i].url}" alt="imagen sobre ${allProducts[0].underArmour[i].modelo}">
            <div class="box-body">
                <p>${allProducts[0].underArmour[i].modelo}</p>
                <b>${allProducts[0].underArmour[i].valor}$</b>
                <button onclick = "agregarCarritoJordan('${allProducts[0].underArmour[i].id}')" id = "agregar-${allProducts[0].underArmour[i].id}">Agregar al carrito</button>
            </div>
        </article>`;
}
document.body.append(container);


// Puma
container = document.createElement("h2");
container.innerHTML = "PUMA"
document.body.append(container);

container = document.createElement("div");
container.className = "container";
for (let i = 0; i < allProducts[0].puma.length; i++) {

    container.innerHTML += `
        <article class="box-container">
            <img src="${allProducts[0].puma[i].url}" alt="imagen sobre ${allProducts[0].puma[i].modelo}">
            <div class="box-body">
                <p>${allProducts[0].puma[i].modelo}</p>
                <b>${allProducts[0].puma[i].valor}$</b>
                <button onclick = "agregarCarritoJordan('${allProducts[0].puma[i].id}')" id= "agregar-${allProducts[0].puma[i].id}">Agregar al carrito</button>
            </div>
        </article>`;
}
document.body.append(container);


// Nike
container = document.createElement("h2");
container.innerHTML = "NIKE"
document.body.append(container);

container = document.createElement("div");
container.className = "container";
for (let i = 0; i < allProducts[0].nike.length; i++) {

    container.innerHTML += `
        <article class="box-container">
            <img src="${allProducts[0].nike[i].url}" alt="imagen sobre ${allProducts[0].nike[i].modelo}">
            <div class="box-body">
                <p>${allProducts[0].nike[i].modelo}</p>
                <b>${allProducts[0].nike[i].valor}$</b>
                <button onclick = "agregarCarritoJordan('${allProducts[0].nike[i].id}')" id= "agregar-${allProducts[0].nike[i].id}">Agregar al carrito</button>
            </div>
        </article>`;
}
document.body.append(container);


// Adidas
container = document.createElement("h2");
container.innerHTML = "ADIDAS"
document.body.append(container);

container = document.createElement("div");
container.className = "container";
for (let i = 0; i < allProducts[0].adidas.length; i++) {

    container.innerHTML += `
        <article class="box-container">
            <img src="${allProducts[0].adidas[i].url}" alt="imagen sobre ${allProducts[0].adidas[i].modelo}">
            <div class="box-body">
                <p>${allProducts[0].adidas[i].modelo}</p>
                <b>${allProducts[0].adidas[i].valor}$</b>
                <button onclick = "agregarCarritoJordan('${allProducts[0].adidas[i].id}')" id= "agregar-${allProducts[0].adidas[i].id}">Agregar al carrito</button>
            </div>
        </article>`;
}
document.body.append(container);

const ventanaCarrito = () => {

    carrito.forEach(producto => { 
        carritoHtml.innerHTML += `
            <article class="box-carrito">
                <img src="${producto.url}" alt="imagen sobre ${producto.modelo}">
                <div class="carrito-body">
                    <p class = "x1">${producto.modelo}</p>
                    <button onclick = "restar()" class = "x2 restar"> - </button>
                    <p class = "x3">Unidades: ${producto.unidades}</p>
                    <button onclick = "sumar()" class = "x4 sumar"> + </button>
                    <button onclick = "restar()" class = "x5 restar"> - </button>
                    <p class = "x6">Talla <b>${producto.talla}</b></p>
                    <button onclick = "sumar()" class = "x7 sumar"> + </button>
                    <b class = "x8">Costo: ${producto.valor}$</b>
                    <b class = "x9">Total a pagar: ${producto.valor * producto.unidades}$</b>
                    <button onclick = "eliminarProducto()" class = "x10">Borrar</button>
                </div>
            </article>`
    });
}

ventanaCarrito();

/////////////////////////////////////////////////////////////////////////////////////////////////////
