// Variables
let interes = "si";
let marca = 0;
let compra = 0;
let bucle = 0;
let bucleZapato = 0;
let buclePago = 0;
let jordanPequeños = 10;
let jordanGrandes = 15;
let underArmourPequeños = 12;
let underArmourGrandes = 20;
let pumaPequeños = 8;
let pumaGrandes = 16;
let zapato = 0;
let unidades = 1;
let monto = 0;
let dinero = 1;
let totalFinal = 0;
let carrito = [];
const carritoHtml = document.querySelector(".offcanvas-body");

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones 
const save = () => {
    localStorage.setItem("carrito" , JSON.stringify(carrito));
}

const ventanaCarrito = () => {
    const carritoLocal = JSON.parse(localStorage.getItem("carrito"));

    carritoLocal.forEach(producto => { 
        carritoHtml.innerHTML += `
            <article class="box-carrito">
                <img src="${producto.url}" alt="imagen sobre ${producto.modelo}">
                <div class="carrito-body">
                    <p class = "x1">${producto.modelo}</p>
                    <b class = "x2">${producto.valor}$</b>
                    <p class = "x3">unidades: 1</p>
                    <button class = "x4">Borrar</button>
                </div>
            </article>`
    });
}

const totalConDescuento = (modelo, costo, descuento) => {
    monto = costo - descuento;
    alert (`Los ${modelo} con descuento te quedarian en ${monto}$`);
    return monto;
}

const total = (modelo, costo) => {
    monto = costo;
    alert (`Las ${modelo} te quedarian en ${monto}$`);
    return monto;
}

const agregarCarritoJordan = (id) => {
    const productoJordan = jordan.find((j) => j.id === id);

    if (productoJordan && !carrito.some((i) => i.id === id)) {
        const agregado = document.getElementById(`agregar-${id}`);
        agregado.innerHTML = "Agregado";
        agregado.disabled = true;
        carrito.push(productoJordan)
        save();
        ventanaCarrito();
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
        ventanaCarrito();
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
        ventanaCarrito();
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
        ventanaCarrito();
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
        ventanaCarrito();
    }
}

const pago = () => {
    while (buclePago === 0) {
        dinero = parseInt(prompt("Ingresar monto"));
        
        if (dinero === totalFinal) {
            alert ("Muchas gracias por comprar en nuestra tienda, vuelva pronto!");
            break;
        }
        else {
            alert ("Monto incorrecto");
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Arrays
let jordan = [
    {
        id: "j1",
        url: "images/jordan black lisas.jpg",
        modelo: "Airjordan Black",
        valor: 48
    },
    {
        id: "j2",
        url: "images/jordan black white.jpg",
        modelo: "Airjordan White",
        valor: 53
    },
    {
        id: "j3",
        url: "images/jordan black.jpg",
        modelo: "Jordan Retro Red",
        valor: 45
    },
    {
        id: "j4",
        url: "images/jordan blue.jpg" ,
        modelo: "Jordan Retro Blue",
        valor: 55
    },
    {
        id: "j5",
        url: "images/jordan grey.jpg",
        modelo: "Jordan Retro Grey",
        valor: 48
    },
    {
        id: "j6",
        url: "images/jordan orange.jpg",
        modelo: "Jordan Orange Retro",
        valor: 53
    },
    {
        id: "j7",
        url: "images/jordan white lisas.jpg",
        modelo: "Airjordan White Retro",
        valor: 45
    },
    {
        id: "j8",
        url: "images/jordan white.jpg" ,
        modelo: "Airjordan Black Retro",
        valor: 55
    }
]

let underArmour = [
    {
        id: "u1",
        url: "images/Under Armour verde.jpeg",
        modelo: "Running Green",
        valor: 35
    },
    {
        id: "u2",
        url: "images/Under armour rojos.jpeg",
        modelo: "Running Red",
        valor: 40
    },
    {
        id: "u3",
        url: "images/under armour multicolor.jpeg",
        modelo: "Basketball Multicolor",
        valor: 35
    },
    {
        id: "u4",
        url: "images/under armour black white.jpeg",
        modelo: "Running Black",
        valor: 35
    },
    {
        id: "u5",
        url: "images/under armour black.jpeg",
        modelo: "Classic Militar Black",
        valor: 35
    },
    {
        id: "u6",
        url: "images/under armour blue.jpeg",
        modelo: "Classic Running Blue",
        valor: 40
    },
    {
        id: "u7",
        url: "images/under armour pink.jpeg",
        modelo: "Classic Running Pink",
        valor: 35
    },
    {
        id: "u8",
        url: "images/under armour red.jpeg",
        modelo: "Under Retro",
        valor: 35
    }
]

let puma = [
    {
        id: "p1",
        url: "images/puma black green.jpg",
        modelo: "Running Forever Run Black Green",
        valor: 35
    },
    {
        id: "p2",
        url: "images/puma black.jpg",
        modelo: "Running Forever Run Black",
        valor: 40
    },
    {
        id: "p3",
        url: "images/puma blue.jpg",
        modelo: "Running Forever Run Blue",
        valor: 35
    },
    {
        id: "p4",
        url: "images/puma coral.jpg",
        modelo: "Running Forever Run Pink",
        valor: 35
    },
    {
        id: "p5",
        url: "images/puma grey.jpg",
        modelo: "Running Forever Run",
        valor: 35
    },
    {
        id: "p6",
        url: "images/puma multicolor.jpg",
        modelo: "Basic Multicolor",
        valor: 40
    },
    {
        id: "p7",
        url: "images/puma white pink.jpg",
        modelo: "Rider Tech White",
        valor: 35
    },
    {
        id: "p8",
        url: "images/puma negro.jpg",
        modelo: "Rider Tech Black",
        valor: 35
    },
    {
        id: "p9",
        url: "images/puma orange.jpg",
        modelo: "Training Orange",
        valor: 35
    },
    {
        id: "p10",
        url: "images/puma pink.jpg",
        modelo: "Training Pink",
        valor: 40
    },
    {
        id: "p11",
        url: "images/puma purple.jpg",
        modelo: "Rider Tech Purple",
        valor: 35
    },
    {
        id: "p12",
        url: "images/puma rosita.jpg",
        modelo: "Rider Tech Pink",
        valor: 35
    }
]

let nike = [
    {
        id: "n1",
        url: "images/nike bicolor.webp",
        modelo: "Infinity Run",
        color: "green",
        valor: 35
    },
    {
        id: "n2",
        url: "images/nike black white.webp",
        modelo: "Infinity Run",
        color: "pink",
        valor: 40
    },
    {
        id: "n3",
        url: "images/nike black red.webp",
        modelo: "Infinity Run",
        color: "green",
        valor: 35
    },
    {
        id: "n4",
        url: "images/nike blue.webp",
        modelo: "Infinity Run",
        color: "green",
        valor: 35
    },
    {
        id: "n5",
        url: "images/nike bordo.webp",
        modelo: "Dunk Low",
        color: "green",
        valor: 35
    },
    {
        id: "n6",
        url: "images/nike green.webp",
        modelo: "Dunk Low",
        color: "pink",
        valor: 40
    },
    {
        id: "n7",
        url: "images/nike grey.webp",
        modelo: "Dunk Low",
        color: "green",
        valor: 35
    },
    {
        id: "n8",
        url: "images/nike gris claro.webp",
        modelo: "Dunk Low",
        color: "green",
        valor: 35
    },
    {
        id: "n9",
        url: "images/nike moradito.webp",
        modelo: "Infinity Training",
        color: "green",
        valor: 35
    },
    {
        id: "n10",
        url: "images/nike morado.webp",
        modelo: "Infinity Training",
        color: "pink",
        valor: 40
    },
    {
        id: "n11",
        url: "images/nike red.webp",
        modelo: "Infinity Training",
        color: "green",
        valor: 35
    },
    {
        id: "n12",
        url: "images/nike purple.webp",
        modelo: "Infinity Training",
        color: "green",
        valor: 35
    },
    {
        id: "n13",
        url: "images/nike rosa.webp",
        modelo: "Air Presto",
        color: "green",
        valor: 35
    },
    {
        id: "n14",
        url: "images/nike tricolor.webp",
        modelo: "Air Presto",
        color: "pink",
        valor: 40
    },
    {
        id: "n15",
        url: "images/nike white orange.webp",
        modelo: "Air Presto",
        color: "green",
        valor: 35
    },
    {
        id: "n16",
        url: "images/nike white pink.webp",
        modelo: "Air Presto",
        color: "green",
        valor: 35
    }
]

let adidas = [
    {
        id: "a1",
        url: "images/adidas azul claro.avif",
        modelo: "Duramo SL",
        color: "green",
        valor: 35
    },
    {
        id: "a2",
        url: "images/adidas azul.avif",
        modelo: "Duramo SL",
        color: "pink",
        valor: 40
    },
    {
        id: "a3",
        url: "images/adidas bicolor.avif",
        modelo: "Duramo SL",
        color: "green",
        valor: 35
    },
    {
        id: "a4",
        url: "images/adidas black.avif",
        modelo: "Duramo SL",
        color: "green",
        valor: 35
    },
    {
        id: "a5",
        url: "images/adidas blue.avif",
        modelo: "Lite Racer",
        color: "green",
        valor: 35
    },
    {
        id: "a6",
        url: "images/adidas coral.avif",
        modelo: "Lite Racer",
        color: "pink",
        valor: 40
    },
    {
        id: "a7",
        url: "images/adidas negro.avif",
        modelo: "Lite Racer",
        color: "green",
        valor: 35
    },
    {
        id: "a8",
        url: "images/adidas tricolor.avif",
        modelo: "Lite Racer",
        color: "green",
        valor: 35
    },
    {
        id: "a9",
        url: "images/adidas green.avif",
        modelo: "Rapid Move",
        color: "green",
        valor: 35
    },
    {
        id: "a10",
        url: "images/adidas orange.avif",
        modelo: "Rapid Move",
        color: "pink",
        valor: 40
    },
    {
        id: "a11",
        url: "images/adidas red.avif",
        modelo: "Rapid Move",
        color: "green",
        valor: 35
    },
    {
        id: "a12",
        url: "images/adidas white green.avif",
        modelo: "Rapid Move",
        color: "green",
        valor: 35
    },
    {
        id: "a13",
        url: "images/adidas grey.avif",
        modelo: "Dropset",
        color: "green",
        valor: 35
    },
    {
        id: "a14",
        url: "images/adidas rojos.avif",
        modelo: "Dropset",
        color: "pink",
        valor: 40
    },
    {
        id: "a15",
        url: "images/adidas white orange.avif",
        modelo: "Dropset",
        color: "green",
        valor: 35
    },
    {
        id: "a16",
        url: "images/adidas white.avif",
        modelo: "Dropset",
        color: "green",
        valor: 35
    }
]

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Recorridos
// Jordan
let container = document.createElement("h1");
container.innerHTML = "JORDAN"
document.body.append(container);

container = document.createElement("div");
for (j of jordan) {
    container.innerHTML += `
        <article class="box-container">
            <img src="${j.url}" alt="imagen sobre ${j.modelo}">
            <div class="box-body">
                <p>${j.modelo}</p>
                <input type="number" min="36" max="46" placeholder="36" value>
                <b>${j.valor}$</b>
                <button onclick = "agregarCarritoJordan('${j.id}')" id= "agregar-${j.id}">Agregar al carrito</button>
            </div>
        </article>`;
}
document.body.append(container);


// Under Armour
container = document.createElement("h2");
container.innerHTML = "UNDER ARMOUR"
document.body.append(container);

container = document.createElement("div");
for (u of underArmour) {
    container.innerHTML += `
        <article class="box-container">
            <img src="${u.url}" alt="imagen sobre ${u.modelo}">
            <div class="box-body">
                <p>${u.modelo}</p>
                <input type="number" min="36" max="46" placeholder="36" value>
                <b>${u.valor}$</b>
                <button onclick = "agregarCarritoUnder('${u.id}')" id= "agregar-${u.id}">Agregar al carrito</button>
            </div>
        </article>`;
}
document.body.append(container);


// Puma
container = document.createElement("h2");
container.innerHTML = "PUMA"
document.body.append(container);

container = document.createElement("div");
for (p of puma) {
    container.innerHTML += `
        <article class="box-container">
            <img src="${p.url}" alt="imagen sobre ${p.modelo}">
            <div class="box-body">
                <p>${p.modelo}</p>
                <input type="number" min="36" max="46" placeholder="36" value>
                <b>${p.valor}$</b>
                <button onclick = "agregarCarritoPuma('${p.id}')" id= "agregar-${p.id}">Agregar al carrito</button>
            </div>
        </article>`;
}
document.body.append(container);


// Nike
container = document.createElement("h2");
container.innerHTML = "NIKE"
document.body.append(container);

container = document.createElement("div");
for (n of nike) {
    container.innerHTML += `
        <article class="box-container">
            <img src="${n.url}" alt="imagen sobre ${n.modelo}">
            <div class="box-body">
                <p>${n.modelo}</p>
                <input type="number" min="36" max="46" placeholder="36" value>
                <b>${n.valor}$</b>
                <button onclick = "agregarCarritoNike('${n.id}')" id= "agregar-${n.id}">Agregar al carrito</button>
            </div>
        </article>`;
}
document.body.append(container);


// Adidas
container = document.createElement("h2");
container.innerHTML = "ADIDAS"
document.body.append(container);

container = document.createElement("div");
for (a of adidas) {
    container.innerHTML += `
        <article class="box-container">
            <img src="${a.url}" alt="imagen sobre ${a.modelo}">
            <div class="box-body">
                <p>${a.modelo}</p>
                <input type="number" min="36" max="46" placeholder="36" value>
                <b>${a.valor}$</b>
                <button onclick = "agregarCarritoAdidas('${a.id}')" id= "agregar-${a.id}">Agregar al carrito</button>
            </div>
        </article>`;
}
document.body.append(container);

ventanaCarrito();

/////////////////////////////////////////////////////////////////////////////////////////////////////




































































































// Bloque de codigo
// if (interes === "si" && interesMarca === "si" || interes === "si" && interesMarca === "Si") {

//     while (dinero !== monto) {
//         marca = prompt ("¿Que marca estas buscando?").toLowerCase();

//         while (bucle === 0) {
                
//                 // JORDAN
//                 if (interes === "si" && marca === "jordan") {
//                     alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
//                     var talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
//                     if (talla > 35 && talla < 41) {
//                         alert (catalogoJordanPequeños.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "airjordan red") {
//                             let valor = 48;
//                             totalConDescuento("Airjordan red",valor, jordanPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "jordan black") {
//                             valor = 55;
//                             totalConDescuento("Jordan black",valor, jordanPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "jordan grey") {
//                             valor = 45;
//                             totalConDescuento("Jordan grey",valor, jordanPequeños);
//                             pushCarrito();
//                         }
//                         else {
//                             alert ("Si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else if (talla > 40 && talla < 49) {
//                         alert (catalogoJordanGrandes.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "airjordan red") {
//                             valor = 60;
//                             totalConDescuento("Airjordan red",valor, jordanGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "jordan black") {
//                             valor = 80;
//                             totalConDescuento("Jordan black",valor, jordanGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "jordan grey") {
//                             valor = 55;
//                             totalConDescuento("Jordan grey",valor, jordanGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "airjordan blue") {
//                             valor = 65;
//                             totalConDescuento("Airjordan blue",valor, jordanGrandes);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else {
//                         alert ("No tenemos de esa talla lo siento");
//                         break;
//                     }
//                 }

//                 // UNDER ARMOUR
//                 else if (interes === "si" && marca === "under armour") {
//                     alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
//                     talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
//                     if (talla > 35 && talla < 41) {
//                         alert (catalogoUnderPequeños.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "basketball green") {
//                             valor = 35;
//                             totalConDescuento("Basketball green",valor, underArmourPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running pink") {
//                             valor = 40;
//                             totalConDescuento("Running pink",valor, underArmourPequeños);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else if (talla > 40 && talla < 47) {
//                         alert (catalogoUnderGrandes.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "training white") {
//                             valor = 70;
//                             totalConDescuento("Training white",valor, underArmourGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running pink") {
//                             valor = 70;
//                             totalConDescuento("Running rosas",valor, underArmourGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running black") {
//                             valor = 75;
//                             totalConDescuento("Running black",valor, underArmourGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "basketball multicolor") {
//                             valor = 90;
//                             totalConDescuento("Basketball multicolor",valor, underArmourGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "basketball red") {
//                             valor = 85;
//                             totalConDescuento("Basketball red",valor, underArmourGrandes);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break
//                         }
//                     }
                    
//                     else {
//                         alert ("No tenemos de esa talla lo siento");
//                         break;
//                     }
//                 }
                
//                 // PUMA
//                 else if (interes === "si" && marca === "puma") {
//                     alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
//                     talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
//                     if (talla > 33 && talla < 41) {
//                         alert (catalogoPumaPequeños.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "running white") {
//                             valor = 38;
//                             totalConDescuento("Running white",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running blue") {
//                             valor = 38;
//                             totalConDescuento("Running blue",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running red") {
//                             valor = 38;
//                             totalConDescuento("Running red",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic black") {
//                             valor = 45;
//                             totalConDescuento("Classic black",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic pink") {
//                             valor = 40;
//                             totalConDescuento("Classic pink",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic purple") {
//                             valor = 43;
//                             totalConDescuento("Classic purple",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic green") {
//                             valor = 40;
//                             totalConDescuento("Classic green",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else if (talla > 40 && talla < 44) {
//                         alert (catalogoPumaMedianos.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "running white") {
//                             valor = 43;
//                             totalConDescuento("Running white",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running blue") {
//                             valor = 43;
//                             totalConDescuento("Running blue",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running red") {
//                             valor = 43;
//                             totalConDescuento("Running red",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic black") {
//                             valor = 50;
//                             totalConDescuento("Classic black",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic pink") {
//                             valor = 45;
//                             totalConDescuento("Classic pink",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic purple") {
//                             valor = 48;
//                             totalConDescuento("Classic purple",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic green") {
//                             valor = 45;
//                             totalConDescuento("Classic green",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else if (talla > 43 && talla < 47) {
//                         alert (catalogoPumaGrandes.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "running white") {
//                             valor = 48;
//                             totalConDescuento("Running white",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running blue") {
//                             valor = 48;
//                             totalConDescuento("Running blue",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running red") {
//                             valor = 48;
//                             totalConDescuento("Running red",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic black") {
//                             valor = 55;
//                             totalConDescuento("Classic black",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic pink") {
//                             valor = 50;
//                             totalConDescuento("Classic pink",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic purple") {
//                             valor = 53;
//                             totalConDescuento("Classic purple",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "classic green") {
//                             valor = 50;
//                             totalConDescuento("Classic green",valor, pumaGrandes);
//                             pushCarrito();
//                         }
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else {
//                         alert ("No tenemos de esa talla lo siento");
//                         break;
//                     }
//                 }

//                 // NIKE
//                 else if (interes === "si" && marca === "nike") {
//                     alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
//                     talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
//                     if (talla > 33 && talla < 41) {
//                         alert (catalogoNikePequeños.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "dunk yellow") {
//                             valor = 75;
//                             total("Dunk yellow",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "dunk red") {
//                             valor = 80;
//                             total("Dunk red",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "dunk blue") {
//                             valor = 80;
//                             total("Dunk blue",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air black") {
//                             valor = 90;
//                             total("Air black",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air white") {
//                             valor = 90;
//                             total("Air white",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air purple") {
//                             valor = 85;
//                             total("Air purple",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air multicolor") {
//                             valor = 88;
//                             total("Air multicolor",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running pink") {
//                             valor = 80;
//                             total("Running pink",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running orange") {
//                             valor = 75;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running green") {
//                             valor = 75;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else if (talla > 40 && talla < 44) {
//                         alert (catalogoNikeMedianos.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "dunk yellow") {
//                             valor = 80;
//                             total("Dunk yellow",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "dunk red") {
//                             valor = 85;
//                             total("Dunk red",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "dunk blue") {
//                             valor = 85;
//                             total("Dunk blue",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air black") {
//                             valor = 95;
//                             total("Air black",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air white") {
//                             valor = 95;
//                             total("Air white",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air purple") {
//                             valor = 90;
//                             total("Air purple",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air multicolor") {
//                             valor = 93;
//                             total("Air multicolor",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running pink") {
//                             valor = 85;
//                             total("Running pink",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running orange") {
//                             valor = 80;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running green") {
//                             valor = 80;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else if (talla > 43 && talla < 47) {
//                         alert (catalogoNikeGrandes.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "dunk yellow") {
//                             valor = 85;
//                             total("Dunk yellow",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "dunk red") {
//                             valor = 90;
//                             total("Dunk red",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "dunk blue") {
//                             valor = 90;
//                             total("Dunk blue",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air black") {
//                             valor = 100;
//                             total("Air black",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air white") {
//                             valor = 100;
//                             total("Air white",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air purple") {
//                             valor = 95;
//                             total("Air purple",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "air multicolor") {
//                             valor = 110;
//                             total("Air multicolor",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running pink") {
//                             valor = 90;
//                             total("Running pink",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running orange") {
//                             valor = 85;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running green") {
//                             valor = 85;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }

//                     else {
//                         alert ("No tenemos de esa talla lo siento");
//                         break;
//                     }
//                 }

//                 // ADIDAS 
//                 else if (interes === "si" && marca === "adidas") {
//                     alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
//                     talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
//                     if (talla > 33 && talla < 41) {
//                         alert (catalogoAdidasPequeños.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "adizero yellow") {
//                             valor = 75;
//                             total("Adizero yellow",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "adizero pink") {
//                             valor = 75;
//                             total("Adizero pink",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "adizero blue") {
//                             valor = 80;
//                             total("Adizero blue",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "lite racer black") {
//                             valor = 105;
//                             total("Lite racer black",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "ultraboost white") {
//                             valor = 110;
//                             total("Ultraboost white",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "lite racer grey") {
//                             valor = 85;
//                             total("Lite racer grey",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "lite racer red") {
//                             valor = 95;
//                             total("Lite racer red",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running purple") {
//                             valor = 80;
//                             total("Running purple",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running orange") {
//                             valor = 75;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running green") {
//                             valor = 75;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else if (talla > 40 && talla < 44) {
//                         alert (catalogoAdidasMedianos.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "adizero yellow") {
//                             valor = 80;
//                             total("Adizero yellow",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "adizero pink") {
//                             valor = 80;
//                             total("Adizero pink",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "adizero blue") {
//                             valor = 85;
//                             total("Adizero blue",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "lite racer black") {
//                             valor = 110;
//                             total("Lite racer black",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "ultraboost white") {
//                             valor = 115;
//                             total("Ultraboost white",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "lite racer grey") {
//                             valor = 90;
//                             total("Lite racer grey",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "lite racer red") {
//                             valor = 100;
//                             total("Lite racer red",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running purple") {
//                             valor = 85;
//                             total("Running purple",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running orange") {
//                             valor = 80;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running green") {
//                             valor = 80;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else if (talla > 43 && talla < 47) {
//                         alert (catalogoAdidasGrandes.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "adizero yellow") {
//                             valor = 85;
//                             total("Adizero yellow",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "adizero pink") {
//                             valor = 85;
//                             total("Adizero pink",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "adizero blue") {
//                             valor = 90;
//                             total("Adizero blue",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "lite racer black") {
//                             valor = 115;
//                             total("Lite racer black",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "ultraboost white") {
//                             valor = 120;
//                             total("Ultraboost white",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "lite racer grey") {
//                             valor = 95;
//                             total("Lite racer grey",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "lite racer red") {
//                             valor = 105;
//                             total("Lite racer red",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running purple") {
//                             valor = 90;
//                             total("Running purple",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running orange") {
//                             valor = 85;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "running green") {
//                             valor = 85;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else {
//                         alert ("No tenemos de esa talla lo siento");
//                         break;
//                     }
//                 }

//                 else if (interes === "no") {
//                     pago();
//                     break;
//                 }
                
//                 else {
//                     alert ("Lo siento, no tenemos de esa marca");
//                     break;
//                 }
//             }
//             break;
//         }
//     }

// else if (interes === "si" && interesMarca === "no" || interes === "si" && interesMarca === "No") {

//     while (dinero !== monto) {
//         marca = prompt ("Las marcas que tenemos disponibles son: Jordan, Under Armour, Puma, Adidas y Nike ¿Cual de estas 5 opciones te gustaria ver?").toLowerCase();

//         while (bucle === 0) {
                
//                 // JORDAN
//                 if (interes === "si" && marca === "jordan") {
//                     alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
//                     talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
//                     if (talla > 35 && talla < 41) {
//                         alert (catalogoJordanPequeños.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "airjordan red") {
//                             let valor = 48;
//                             totalConDescuento("Airjordan red",valor, jordanPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "jordan black") {
//                             valor = 55;
//                             totalConDescuento("Jordan black",valor, jordanPequeños);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "jordan grey") {
//                             valor = 45;
//                             totalConDescuento("Jordan grey",valor, jordanPequeños);
//                             pushCarrito();
//                         }
                        
//                         else {
//                             alert ("Si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else if (talla > 40 && talla < 49) {
//                         alert (catalogoJordanGrandes.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
//                         if (zapato === "airjordan red") {
//                             valor = 60;
//                             totalConDescuento("Airjordan red",valor, jordanGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "jordan black") {
//                             valor = 80;
//                             totalConDescuento("Jordan black",valor, jordanGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "jordan grey") {
//                             valor = 55;
//                             totalConDescuento("Jordan grey",valor, jordanGrandes);
//                             pushCarrito();
//                         }
                        
//                         else if (zapato === "airjordan blue") {
//                             valor = 65;
//                             totalConDescuento("Airjordan blue",valor, jordanGrandes);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                    
//                     else {
//                         alert ("No tenemos de esa talla lo siento");
//                         break;
//                     }
//                 }  

//                 // UNDER ARMOUR
//                 else if (interes === "si" && marca === "under armour") {
//                     alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
//                     talla = parseInt(prompt("¿Que talla de zapato usas?"));
                
//                     if (talla > 35 && talla < 41) {
//                         alert (catalogoUnderPequeños.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "basketball green") {
//                             valor = 35;
//                             totalConDescuento("Basketball green",valor, underArmourPequeños);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running pink") {
//                             valor = 40;
//                             totalConDescuento("Running pink",valor, underArmourPequeños);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                
//                     else if (talla > 40 && talla < 47) {
//                         alert (catalogoUnderGrandes.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "training white") {
//                             valor = 70;
//                             totalConDescuento("Training white",valor, underArmourGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running pink") {
//                             valor = 70;
//                             totalConDescuento("Running rosas",valor, underArmourGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running black") {
//                             valor = 75;
//                             totalConDescuento("Running black",valor, underArmourGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "basketball multicolor") {
//                             valor = 90;
//                             totalConDescuento("Basketball multicolor",valor, underArmourGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "basketball red") {
//                             valor = 85;
//                             totalConDescuento("Basketball red",valor, underArmourGrandes);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro     catálogo");
//                             break
//                         }
//                     }
                
//                     else {
//                         alert ("No tenemos de esa talla lo siento");
//                         break;
//                     }
//                 }
                
//                 // PUMA
//                 else if (interes === "si" && marca === "puma") {
//                     alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
//                     talla = parseInt(prompt("¿Que talla de zapato usas?"));
                
//                     if (talla > 33 && talla < 41) {
//                         alert (catalogoPumaPequeños.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "running white") {
//                             valor = 38;
//                             totalConDescuento("Running white",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running blue") {
//                             valor = 38;
//                             totalConDescuento("Running blue",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running red") {
//                             valor = 38;
//                             totalConDescuento("Running red",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic black") {
//                             valor = 45;
//                             totalConDescuento("Classic black",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic pink") {
//                             valor = 40;
//                             totalConDescuento("Classic pink",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic purple") {
//                             valor = 43;
//                             totalConDescuento("Classic purple",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic green") {
//                             valor = 40;
//                             totalConDescuento("Classic green",valor, pumaPequeños);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                
//                     else if (talla > 40 && talla < 44) {
//                         alert (catalogoPumaMedianos.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "running white") {
//                             valor = 43;
//                             totalConDescuento("Running white",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running blue") {
//                             valor = 43;
//                             totalConDescuento("Running blue",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running red") {
//                             valor = 43;
//                             totalConDescuento("Running red",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic black") {
//                             valor = 50;
//                             totalConDescuento("Classic black",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic pink") {
//                             valor = 45;
//                             totalConDescuento("Classic pink",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic purple") {
//                             valor = 48;
//                             totalConDescuento("Classic purple",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic green") {
//                             valor = 45;
//                             totalConDescuento("Classic green",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                
//                     else if (talla > 43 && talla < 47) {
//                         alert (catalogoPumaGrandes.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "running white") {
//                             valor = 48;
//                             totalConDescuento("Running white",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running blue") {
//                             valor = 48;
//                             totalConDescuento("Running blue",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running red") {
//                             valor = 48;
//                             totalConDescuento("Running red",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic black") {
//                             valor = 55;
//                             totalConDescuento("Classic black",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic pink") {
//                             valor = 50;
//                             totalConDescuento("Classic pink",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic purple") {
//                             valor = 53;
//                             totalConDescuento("Classic purple",valor, pumaGrandes);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "classic green") {
//                             valor = 50;
//                             totalConDescuento("Classic green",valor, pumaGrandes);
//                             pushCarrito();
//                         }

//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                
//                     else {
//                         alert ("No tenemos de esa talla lo siento");
//                         break;
//                     }
//                 }

//                 // NIKE
//                 else if (interes === "si" && marca === "nike") {
//                     alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
//                     talla = parseInt(prompt("¿Que talla de zapato usas?"));
                
//                     if (talla > 33 && talla < 41) {
//                         alert (catalogoNikePequeños.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "dunk yellow") {
//                             valor = 75;
//                             total("Dunk yellow",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "dunk red") {
//                             valor = 80;
//                             total("Dunk red",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "dunk blue") {
//                             valor = 80;
//                             total("Dunk blue",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air black") {
//                             valor = 90;
//                             total("Air black",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air white") {
//                             valor = 90;
//                             total("Air white",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air purple") {
//                             valor = 85;
//                             total("Air purple",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air multicolor") {
//                             valor = 88;
//                             total("Air multicolor",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running pink") {
//                             valor = 80;
//                             total("Running pink",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running orange") {
//                             valor = 75;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running green") {
//                             valor = 75;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                
//                     else if (talla > 40 && talla < 44) {
//                         alert (catalogoNikeMedianos.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "dunk yellow") {
//                             valor = 80;
//                             total("Dunk yellow",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "dunk red") {
//                             valor = 85;
//                             total("Dunk red",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "dunk blue") {
//                             valor = 85;
//                             total("Dunk blue",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air black") {
//                             valor = 95;
//                             total("Air black",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air white") {
//                             valor = 95;
//                             total("Air white",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air purple") {
//                             valor = 90;
//                             total("Air purple",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air multicolor") {
//                             valor = 93;
//                             total("Air multicolor",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running pink") {
//                             valor = 85;
//                             total("Running pink",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running orange") {
//                             valor = 80;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running green") {
//                             valor = 80;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                
//                     else if (talla > 43 && talla < 47) {
//                         alert (catalogoNikeGrandes.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "dunk yellow") {
//                             valor = 85;
//                             total("Dunk yellow",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "dunk red") {
//                             valor = 90;
//                             total("Dunk red",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "dunk blue") {
//                             valor = 90;
//                             total("Dunk blue",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air black") {
//                             valor = 100;
//                             total("Air black",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air white") {
//                             valor = 100;
//                             total("Air white",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air purple") {
//                             valor = 95;
//                             total("Air purple",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "air multicolor") {
//                             valor = 110;
//                             total("Air multicolor",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running pink") {
//                             valor = 90;
//                             total("Running pink",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running orange") {
//                             valor = 85;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running green") {
//                             valor = 85;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }

//                     else {
//                         alert ("No tenemos de esa talla lo siento");
//                         break;
//                     }
//                 }

//                 // ADIDAS 
//                 else if (interes === "si" && marca === "adidas") {
//                     alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
//                     talla = parseInt(prompt("¿Que talla de zapato usas?"));
                
//                     if (talla > 33 && talla < 41) {
//                         alert (catalogoAdidasPequeños.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "adizero yellow") {
//                             valor = 75;
//                             total("Adizero yellow",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "adizero pink") {
//                             valor = 75;
//                             total("Adizero pink",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "adizero blue") {
//                             valor = 80;
//                             total("Adizero blue",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "lite racer black") {
//                             valor = 105;
//                             total("Lite racer black",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "ultraboost white") {
//                             valor = 110;
//                             total("Ultraboost white",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "lite racer grey") {
//                             valor = 85;
//                             total("Lite racer grey",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "lite racer red") {
//                             valor = 95;
//                             total("Lite racer red",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running purple") {
//                             valor = 80;
//                             total("Running purple",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running orange") {
//                             valor = 75;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running green") {
//                             valor = 75;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                
//                     else if (talla > 40 && talla < 44) {
//                         alert (catalogoAdidasMedianos.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "adizero yellow") {
//                             valor = 80;
//                             total("Adizero yellow",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "adizero pink") {
//                             valor = 80;
//                             total("Adizero pink",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "adizero blue") {
//                             valor = 85;
//                             total("Adizero blue",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "lite racer black") {
//                             valor = 110;
//                             total("Lite racer black",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "ultraboost white") {
//                             valor = 115;
//                             total("Ultraboost white",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "lite racer grey") {
//                             valor = 90;
//                             total("Lite racer grey",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "lite racer red") {
//                             valor = 100;
//                             total("Lite racer red",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running purple") {
//                             valor = 85;
//                             total("Running purple",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running orange") {
//                             valor = 80;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running green") {
//                             valor = 80;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                
//                     else if (talla > 43 && talla < 47) {
//                         alert (catalogoAdidasGrandes.join ("\n"));
//                         zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
//                         if (zapato === "adizero yellow") {
//                             valor = 85;
//                             total("Adizero yellow",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "adizero pink") {
//                             valor = 85;
//                             total("Adizero pink",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "adizero blue") {
//                             valor = 90;
//                             total("Adizero blue",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "lite racer black") {
//                             valor = 115;
//                             total("Lite racer black",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "ultraboost white") {
//                             valor = 120;
//                             total("Ultraboost white",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "lite racer grey") {
//                             valor = 95;
//                             total("Lite racer grey",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "lite racer red") {
//                             valor = 105;
//                             total("Lite racer red",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running purple") {
//                             valor = 90;
//                             total("Running purple",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running orange") {
//                             valor = 85;
//                             total("Running orange",valor);
//                             pushCarrito();
//                         }
                    
//                         else if (zapato === "running green") {
//                             valor = 85;
//                             total("Running green",valor);
//                             pushCarrito();
//                         }
                    
//                         else {
//                             alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
//                             break;
//                         }
//                     }
                
//                     else {
//                         alert ("No tenemos de esa talla lo siento");
//                         break;
//                     }
//                 }

//                 else if (interes === "no") {
//                     pago();
//                     break;
//                 }
            
//                 else {
//                     alert ("Lo siento, no tenemos de esa marca");
//                     break;
//                 }
//             }
//             break;
//         }
//     }

// else {
//     alert ("Lo siento, necesitamos que nos responda con un si o un no, sino no podremos ayudarte");
// }