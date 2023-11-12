// Variables
let carrito = [];
let carritoWindow = document.getElementById("offcanvasNavbar");
let carritoBody = document.getElementById("offcanvas-html");

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones 
const save = () => {
    localStorage.setItem("carrito" , JSON.stringify(carrito));
}

const obtain = () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
}

const pusheado = () => {
    obtain();
    carrito = carrito.filter((x) => {
        const agregado = document.getElementById(`agregar-${x.id}`);
        agregado.innerHTML = "Agregado";
        agregado.disabled = true;
    });
}

const ventanaCarrito = () => {
    obtain();
    carritoBody.innerHTML = "";
    let carritoHtml = document.createElement("div");
    carritoHtml.className = "offcanvas-body";
    carrito.forEach(producto => {
        carritoHtml.innerHTML += `
            <article class= "box-carrito">
            <img src="${producto.url}" alt="imagen sobre ${producto.modelo}">
                <div class="carrito-body">
                    <p class = "x1">${producto.modelo}</p>
                    <button onclick = "restar('${producto.id}')" class = "x2 restar"> - </button>
                    <p class = "x3">Unidades: ${producto.unidades}</p>
                    <button onclick = "sumar('${producto.id}')" class = "x4 sumar"> + </button>
                    <button onclick = "restarTalla('${producto.id}')" class = "x5 restar"> - </button>
                    <p class = "x6">Talla <b>${producto.talla}</b></p>
                    <button onclick = "sumarTalla('${producto.id}')" class = "x7 sumar"> + </button>
                    <b class = "x8">Costo: ${producto.valor}$</b>
                    <b class = "x9">Total a pagar: ${producto.valor * producto.unidades}$</b>
                    <button onclick = "eliminarProducto('${producto.id}')" class = "x10">Borrar</button>
                </div>
            </article>
            `
    });
    carritoBody.append(carritoHtml);

    let total = carrito.reduce((acc, el) => acc + el.valor * el.unidades, 0);
    let carritoFooter = document.createElement("div");
    carritoFooter.className = "offcanvas-footer";
    carritoFooter.innerHTML = 
            `<div>
                <input type= "number" id= "monto" placeholder= "Ingresar monto">
                <button id= "boton" onclick= "ingresoMonto()">✓</button>
            </div>
            <p>TOTAL ${total}$</p>`;
    carritoBody.append(carritoFooter);
}

const ingresoMonto = () => {
    obtain();
    let total = carrito.reduce((acc, el) => acc + el.valor * el.unidades, 0);
    let boton = document.getElementById('boton');
    let pago = parseInt(document.getElementById('monto').value);
    boton.innerHTML = "..."
    
    if (pago === 0 && total === 0){
        setTimeout(() => {
            boton.innerHTML = "✓";
            Toastify({

                text: "Carrito Vacio",
                position: "center",
                className: "info",
                duration: 3000
                
                }).showToast();
        },3000);
    }

    else if (pago === total) {
        setTimeout(() => {
            carrito = carrito.filter((z) => {
                const agregado = document.getElementById(`agregar-${z.id}`);
                agregado.innerHTML = "Agregar al carrito";
                agregado.disabled = false;
            });

            localStorage.clear();
            ventanaCarrito();
            boton.innerHTML = "✓";

            Swal.fire({
                title: "Compra exitosa!",
                text: "Gracias por comprar en nuestra tienda, vuelva pronto ツ",
                icon: "success"
            });
        },3000);
    }

    else {
        setTimeout(() => {
            boton.innerHTML = "✓";
            Swal.fire({
                icon: "error",
                title: "Oops..",
                text: "Monto incorrecto, vuelva a intentarlo",
            });
        },3000);
    }
}

const eliminarProducto = (id) => {
    obtain();
    const foundId = carrito.find((e) => e.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    save();
    ventanaCarrito();
    
    const botonAgregar = document.getElementById(`agregar-${id}`);
    botonAgregar.innerHTML = "Agregar al carrito";
    botonAgregar.disabled = false;
}

const restar = (id) => {
    obtain();
    const productId = carrito.find((r) => r.id === id);

    if (productId.unidades > 1) {
        productId.unidades--
        save();
        ventanaCarrito();
    }
}

const restarTalla = (id) => {
    obtain();
    const productId = carrito.find((t) => t.id === id);

    if (productId.talla > 34) {
        productId.talla--
        save();
        ventanaCarrito();
    }
    else {
        Toastify({

            text: "Lo siento, no tenemos de esa talla",
            position: "center",
            className: "info",
            duration: 3000
            
            }).showToast();
    }
}

const sumar = (id) => {
    obtain();
    const productId = carrito.find((s) => s.id === id);
    
    if (productId.unidades < 10) {
        productId.unidades++
        save();
        ventanaCarrito();
    }
    else {
        Toastify({

            text: "Lo siento, no tenemos tantas unidades",
            position: "center",
            className: "info",
            duration: 3000
            
            }).showToast();
    }
}

const sumarTalla = (id) => {
    obtain();
    const productId = carrito.find((t) => t.id === id);

    if (productId.talla < 47) {
        productId.talla++
        save();
        ventanaCarrito();
    }
    else {
        Toastify({

            text: "Lo siento, no tenemos de esa talla",
            position: "center",
            className: "info",
            duration: 3000
            
            }).showToast();
    }
}

const agregarCarritoJordan = (id) => {

    fetch('js/productos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error ('error al cargar los datos');
        }

        return res.json();
    })
    .then(data => {
        obtain();
        const productoJordan = data[0].jordan.find((j) => j.id === id);

        if (productoJordan && !carrito.some((i) => i.id === id)) {
            const agregado = document.getElementById(`agregar-${id}`);
            agregado.innerHTML = "Agregado";
            agregado.disabled = true;
            carrito.push(productoJordan);
            save();
            ventanaCarrito();
        }
    });
}

const agregarCarritoUnder = (id) => {

    fetch('js/productos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error ('error al cargar los datos');
        }

        return res.json();
    })
    .then(data => {
        obtain();
        const productoUnder = data[0].underArmour.find((u) => u.id === id);

        if (productoUnder && !carrito.some((i) => i.id === id)) {
            const agregado = document.getElementById(`agregar-${id}`);
            agregado.innerHTML = "Agregado";
            agregado.disabled = true;
            carrito.push(productoUnder);
            save();
            ventanaCarrito();
        }
    });
}

const agregarCarritoPuma = (id) => {

    fetch('js/productos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error ('error al cargar los datos');
        }

        return res.json();
    })
    .then(data => {
        obtain();
        const productoPuma = data[0].puma.find((p) => p.id === id);

        if (productoPuma && !carrito.some((i) => i.id === id)) {
            const agregado = document.getElementById(`agregar-${id}`);
            agregado.innerHTML = "Agregado";
            agregado.disabled = true;
            carrito.push(productoPuma);
            save();
            ventanaCarrito();
        }
    });
}

const agregarCarritoNike = (id) => {

    fetch('js/productos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error ('error al cargar los datos');
        }

        return res.json();
    })
    .then(data => {
        obtain();
        const productoNike = data[0].nike.find((n) => n.id === id);

        if (productoNike && !carrito.some((i) => i.id === id)) {
            const agregado = document.getElementById(`agregar-${id}`);
            agregado.innerHTML = "Agregado";
            agregado.disabled = true;
            carrito.push(productoNike);
            save();
            ventanaCarrito();
        }
    });
}

const agregarCarritoAdidas = (id) => {

    fetch('js/productos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error ('error al cargar los datos');
        }

        return res.json();
    })
    .then(data => {
        obtain();
        const productoAdidas = data[0].adidas.find((a) => a.id === id);

        if (productoAdidas && !carrito.some((i) => i.id === id)) {
            const agregado = document.getElementById(`agregar-${id}`);
            agregado.innerHTML = "Agregado";
            agregado.disabled = true;
            carrito.push(productoAdidas);
            save();
            ventanaCarrito();
        }
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Recorridos

// JORDAN

fetch('js/productos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error ('error al cargar los datos');
        }

        return res.json();
    })
    .then(data => {
        let container = document.createElement("h1");
        container.innerHTML = "JORDAN"
        document.body.append(container);

        container = document.createElement("div");
        container.className = "container";

        for (let i = 0; i < data[0].jordan.length; i++) {

            container.innerHTML += `
                <article class="box-container">
                    <div class="box-image">
                        <img src="${data[0].jordan[i].url}" alt="imagen sobre ${data[0].jordan[i].modelo}">
                    </div>
                    <div class="box-body">
                        <p>${data[0].jordan[i].modelo}</p>
                        <b>${data[0].jordan[i].valor}$</b>
                        <button onclick = "agregarCarritoJordan('${data[0].jordan[i].id}')"id ="agregar-${data[0].jordan[i].id}">Agregar al carrito</button>
                    </div>
                </article>`;
        }

        document.body.append(container);
    });



// UNDER ARMOUR

fetch('js/productos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error ('error al cargar los datos');
        }

        return res.json();
    })
    .then(data => {
        let container = document.createElement("h2");
        container.innerHTML = "UNDER ARMOUR"
        document.body.append(container);

        container = document.createElement("div");
        container.className = "container";

        for (let i = 0; i < data[0].underArmour.length; i++) {

            container.innerHTML += `
                <article class="box-container">
                    <div class="box-image">
                        <img src="${data[0].underArmour[i].url}" alt="imagen sobre ${data[0].underArmour[i].modelo}">
                    </div>
                    <div class="box-body">
                        <p>${data[0].underArmour[i].modelo}</p>
                        <b>${data[0].underArmour[i].valor}$</b>
                        <button onclick = "agregarCarritoUnder('${data[0].underArmour[i].id}')"id ="agregar-${data[0].underArmour[i].id}">Agregar al carrito</button>
                    </div>
                </article>`;
        }

        document.body.append(container);
    });


// PUMA

fetch('js/productos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error ('error al cargar los datos');
        }

        return res.json();
    })
    .then(data => {
        let container = document.createElement("h2");
        container.innerHTML = "PUMA"
        document.body.append(container);

        container = document.createElement("div");
        container.className = "container";

        for (let i = 0; i < data[0].puma.length; i++) {

            container.innerHTML += `
                <article class="box-container">
                    <div class="box-image">
                        <img src="${data[0].puma[i].url}" alt="imagen sobre ${data[0].puma[i].modelo}">
                    </div>
                    <div class="box-body">
                        <p>${data[0].puma[i].modelo}</p>
                        <b>${data[0].puma[i].valor}$</b>
                        <button onclick = "agregarCarritoPuma('${data[0].puma[i].id}')"id ="agregar-${data[0].puma[i].id}">Agregar al carrito</button>
                    </div>
                </article>`;
        }

        document.body.append(container);
    });


// NIKE

fetch('js/productos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error ('error al cargar los datos');
        }

        return res.json();
    })
    .then(data => {
        let container = document.createElement("h2");
        container.innerHTML = "NIKE"
        document.body.append(container);

        container = document.createElement("div");
        container.className = "container";

        for (let i = 0; i < data[0].nike.length; i++) {

            container.innerHTML += `
                <article class="box-container">
                    <div class="box-image">
                        <img src="${data[0].nike[i].url}" alt="imagen sobre ${data[0].nike[i].modelo}">
                    </div>
                    <div class="box-body">
                        <p>${data[0].nike[i].modelo}</p>
                        <b>${data[0].nike[i].valor}$</b>
                        <button onclick = "agregarCarritoNike('${data[0].nike[i].id}')"id ="agregar-${data[0].nike[i].id}">Agregar al carrito</button>
                    </div>
                </article>`;
        }

        document.body.append(container);
    });


// ADIDAS

fetch('js/productos.json')
    .then(res => {
        if (!res.ok) {
            throw new Error ('error al cargar los datos');
        }

        return res.json();
    })
    .then(data => {
        let container = document.createElement("h2");
        container.innerHTML = "ADIDAS"
        document.body.append(container);

        container = document.createElement("div");
        container.className = "container";

        for (let i = 0; i < data[0].adidas.length; i++) {

            container.innerHTML += `
                <article class="box-container">
                    <div class="box-image">
                        <img src="${data[0].adidas[i].url}" alt="imagen sobre ${data[0].adidas[i].modelo}">
                    </div>
                    <div class="box-body">
                        <p>${data[0].adidas[i].modelo}</p>
                        <b>${data[0].adidas[i].valor}$</b>
                        <button onclick = "agregarCarritoAdidas('${data[0].adidas[i].id}')"id ="agregar-${data[0].adidas[i].id}">Agregar al carrito</button>
                    </div>
                </article>`;
        }

        document.body.append(container);
    });

setTimeout(() => {
    ventanaCarrito();
    pusheado();
}, 90);
/////////////////////////////////////////////////////////////////////////////////////////////////////
