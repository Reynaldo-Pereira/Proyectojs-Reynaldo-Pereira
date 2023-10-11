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

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones 
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

const pushCarrito = () => {
    compra = prompt ("¿Desea agregar al carrito? (marcar si o no)");

    if (compra === "si") {
        unidades = parseInt (prompt ("¿Cuantas unidades quiere?"));
        carrito.push({zapato, unidades, monto});
        interes = prompt ("¿Desea seguir comprando?");

        if (interes === "si") {
            marca = prompt ("¿Que marca estas buscando?");
        }
        else {
            alert ("A continuación le mostraremos su carrito");
            carrito.forEach ((carritoFinal) => {
                alert (`Modelo: ${carritoFinal.zapato}; unidades: ${carritoFinal.unidades}; total a pagar por modelo ${carritoFinal.unidades * carritoFinal.monto}$`);
            })
            totalFinal = carrito.reduce ((acumulador, el) => acumulador + el.unidades * el.monto, 0);
            alert (`El costo final por su compra es de ${totalFinal}$`);
        }
    }
    else {
        interes = prompt ("¿Desea seguir comprando?");

        if (interes === "si") {
            marca = prompt ("¿Que marca estas buscando?");
        }
        else {
            alert ("A continuación le mostraremos su carrito");
            carrito.forEach ((carritoFinal) => {
                alert (`Modelo: ${carritoFinal.zapato}; unidades: ${carritoFinal.unidades}; total a pagar por modelo ${carritoFinal.unidades * carritoFinal.monto}$`);
            })
            totalFinal = carrito.reduce ((acumulador, el) => acumulador + el.unidades * el.monto, 0);
            alert (`El costo final por su compra es de ${totalFinal}$`);
        }
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
        modelo: "Airjordan",
        color: "red",
        valor: [48, 60]
    },
    {
        modelo: "Airjordan",
        color: "blue",
        valor: [53, 65]
    },
    {
        modelo: "Jordan",
        color: "grey",
        valor: [45, 55]
    },
    {
        modelo: "Jordan",
        color: "black",
        valor: [55, 80]
    }
]

let underArmourSmall = [
    {
        modelo: "Basketball",
        color: "green",
        valor: 35
    },
    {
        modelo: "Running",
        color: "pink",
        valor: 40
    }
]

let underArmourBig = [
    {
        modelo: "Training",
        color: "white",
        valor: 70
    },
    {
        modelo: "Running",
        color: "pink",
        valor: 70
    },
    {
        modelo: "Running",
        color: "black",
        valor: 75
    },
    {
        modelo: "Basketball",
        color: "multicolor",
        valor: 90
    },
    {
        modelo: "Basketball",
        color: "red",
        valor: 85
    }
]

let puma = [
    {
        modelo: "Running",
        color: "white",
        valor: [38, 43, 48]
    },
    {
        modelo: "Running",
        color: "blue",
        valor: [38, 43, 48]
    },
    {
        modelo: "Running",
        color: "red",
        valor: [38, 43, 48]
    },
    {
        modelo: "Classic",
        color: "black",
        valor: [45, 50, 55]
    },
    {
        modelo: "Classic",
        color: "pink",
        valor: [40, 45, 50]
    },
    {
        modelo: "Classic",
        color: "purple",
        valor: [43, 48, 53]
    },
    {
        modelo: "Classic",
        color: "green",
        valor: [40, 45, 50]
    },
]

let nike = [
    {
        modelo: "Dunk",
        color: "yellow",
        valor: [75, 80, 85]
    },
    {
        modelo: "Dunk",
        color: "red",
        valor: [80, 85, 90]
    },
    {
        modelo: "Dunk",
        color: "blue",
        valor: [80, 85, 90]
    },
    {
        modelo: "Air",
        color: "black",
        valor: [90, 95, 100]
    },
    {
        modelo: "Air",
        color: "white",
        valor: [90, 95, 100]
    },
    {
        modelo: "Air",
        color: "purple",
        valor: [85, 90, 95]
    },
    {
        modelo: "Air",
        color: "multicolor",
        valor: [88, 93, 110]
    },
    {
        modelo: "Running",
        color: "pink",
        valor: [80, 85, 90]
    },
    {
        modelo: "Running",
        color: "orange",
        valor: [75, 80, 85]
    },
    {
        modelo: "Running",
        color: "green",
        valor: [75, 80, 85]
    }
]

let adidas = [
    {
        modelo: "Adizero",
        color: "yellow",
        valor: [75, 80, 85]
    },
    {
        modelo: "Adizero",
        color: "pink",
        valor: [75, 80, 85]
    },
    {
        modelo: "Adizero",
        color: "blue",
        valor: [80, 85, 90]
    },
    {
        modelo: "Lite racer",
        color: "black",
        valor: [105, 110, 115]
    },
    {
        modelo: "Lite racer",
        color: "grey",
        valor: [85, 90, 95]
    },
    {
        modelo: "Lite racer",
        color: "red",
        valor: [95, 100, 105]
    },
    {
        modelo: "Ultraboost",
        color: "white",
        valor: [110, 115, 120]
    },
    {
        modelo: "Running",
        color: "purple",
        valor: [80, 85, 90]
    },
    {
        modelo: "Running",
        color: "orange",
        valor: [75, 80, 85]
    },
    {
        modelo: "Running",
        color: "green",
        valor: [75, 80, 85]
    }
]

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Recorridos
// Jordan
let catalogoJordanPequeños = jordan.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[0]}$`);

let catalogoJordanGrandes = jordan.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[1]}$`);


// Under Armour
let catalogoUnderPequeños = underArmourSmall.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor}$`);

let catalogoUnderGrandes = underArmourBig.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor}$`);


// Puma
let catalogoPumaPequeños = puma.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[0]}$`);

let catalogoPumaMedianos = puma.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[1]}$`);

let catalogoPumaGrandes = puma.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[2]}$`);


// Nike
let catalogoNikePequeños = nike.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[0]}$`);

let catalogoNikeMedianos = nike.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[1]}$`);

let catalogoNikeGrandes = nike.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[2]}$`);


// Adidas
let catalogoAdidasPequeños = adidas.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[0]}$`);

let catalogoAdidasMedianos = adidas.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[1]}$`);

let catalogoAdidasGrandes = adidas.map ((producto) => `Los ${producto.modelo} ${producto.color} tienen un valor de ${producto.valor[2]}$`);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Inicio
while (bucle === 0) {
    let nombreUsuario = prompt ("¿Cual es tu nombre?");

    if (nombreUsuario === "") {
        alert ("Introduzca un nombre");
    }
    else {
        alert (`Hola mucho gusto ${nombreUsuario}, bienvenido/a a nuestra tienda de zapatos`);
        break;
    }
}
let interesMarca = prompt ("¿Buscas alguna marca de zapatos en especifico? (marcar si o no)");

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Bloque de codigo
if (interes === "si" && interesMarca === "si" || interes === "Si" && interesMarca === "Si") {

    while (dinero !== monto) {
        marca = prompt ("¿Que marca estas buscando?").toLowerCase();

        while (bucle === 0) {
                
                // JORDAN
                if (interes === "si" && marca === "jordan") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    var talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 35 && talla < 41) {
                        alert (catalogoJordanPequeños.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "airjordan red") {
                            let valor = 48;
                            totalConDescuento("Airjordan red",valor, jordanPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "jordan black") {
                            valor = 55;
                            totalConDescuento("Jordan black",valor, jordanPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "jordan grey") {
                            valor = 45;
                            totalConDescuento("Jordan grey",valor, jordanPequeños);
                            pushCarrito();
                        }
                        else {
                            alert ("Si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 49) {
                        alert (catalogoJordanGrandes.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "airjordan red") {
                            valor = 60;
                            totalConDescuento("Airjordan red",valor, jordanGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "jordan black") {
                            valor = 80;
                            totalConDescuento("Jordan black",valor, jordanGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "jordan grey") {
                            valor = 55;
                            totalConDescuento("Jordan grey",valor, jordanGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "airjordan blue") {
                            valor = 65;
                            totalConDescuento("Airjordan blue",valor, jordanGrandes);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else {
                        alert ("No tenemos de esa talla lo siento");
                        break;
                    }
                }

                // UNDER ARMOUR
                else if (interes === "si" && marca === "under armour") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 35 && talla < 41) {
                        alert (catalogoUnderPequeños.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "basketball green") {
                            valor = 35;
                            totalConDescuento("Basketball green",valor, underArmourPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running pink") {
                            valor = 40;
                            totalConDescuento("Running pink",valor, underArmourPequeños);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 47) {
                        alert (catalogoUnderGrandes.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "training white") {
                            valor = 70;
                            totalConDescuento("Training white",valor, underArmourGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running pink") {
                            valor = 70;
                            totalConDescuento("Running rosas",valor, underArmourGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running black") {
                            valor = 75;
                            totalConDescuento("Running black",valor, underArmourGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "basketball multicolor") {
                            valor = 90;
                            totalConDescuento("Basketball multicolor",valor, underArmourGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "basketball red") {
                            valor = 85;
                            totalConDescuento("Basketball red",valor, underArmourGrandes);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break
                        }
                    }
                    
                    else {
                        alert ("No tenemos de esa talla lo siento");
                        break;
                    }
                }
                
                // PUMA
                else if (interes === "si" && marca === "puma") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 33 && talla < 41) {
                        alert (catalogoPumaPequeños.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "running white") {
                            valor = 38;
                            totalConDescuento("Running white",valor, pumaPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running blue") {
                            valor = 38;
                            totalConDescuento("Running blue",valor, pumaPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running red") {
                            valor = 38;
                            totalConDescuento("Running red",valor, pumaPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic black") {
                            valor = 45;
                            totalConDescuento("Classic black",valor, pumaPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic pink") {
                            valor = 40;
                            totalConDescuento("Classic pink",valor, pumaPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic purple") {
                            valor = 43;
                            totalConDescuento("Classic purple",valor, pumaPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic green") {
                            valor = 40;
                            totalConDescuento("Classic green",valor, pumaPequeños);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 44) {
                        alert (catalogoPumaMedianos.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "running white") {
                            valor = 43;
                            totalConDescuento("Running white",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running blue") {
                            valor = 43;
                            totalConDescuento("Running blue",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running red") {
                            valor = 43;
                            totalConDescuento("Running red",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic black") {
                            valor = 50;
                            totalConDescuento("Classic black",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic pink") {
                            valor = 45;
                            totalConDescuento("Classic pink",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic purple") {
                            valor = 48;
                            totalConDescuento("Classic purple",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic green") {
                            valor = 45;
                            totalConDescuento("Classic green",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 43 && talla < 47) {
                        alert (catalogoPumaGrandes.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "running white") {
                            valor = 48;
                            totalConDescuento("Running white",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running blue") {
                            valor = 48;
                            totalConDescuento("Running blue",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running red") {
                            valor = 48;
                            totalConDescuento("Running red",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic black") {
                            valor = 55;
                            totalConDescuento("Classic black",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic pink") {
                            valor = 50;
                            totalConDescuento("Classic pink",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic purple") {
                            valor = 53;
                            totalConDescuento("Classic purple",valor, pumaGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "classic green") {
                            valor = 50;
                            totalConDescuento("Classic green",valor, pumaGrandes);
                            pushCarrito();
                        }
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else {
                        alert ("No tenemos de esa talla lo siento");
                        break;
                    }
                }

                // NIKE
                else if (interes === "si" && marca === "nike") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 33 && talla < 41) {
                        alert (catalogoNikePequeños.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "dunk yellow") {
                            valor = 75;
                            total("Dunk yellow",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "dunk red") {
                            valor = 80;
                            total("Dunk red",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "dunk blue") {
                            valor = 80;
                            total("Dunk blue",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air black") {
                            valor = 90;
                            total("Air black",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air white") {
                            valor = 90;
                            total("Air white",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air purple") {
                            valor = 85;
                            total("Air purple",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air multicolor") {
                            valor = 88;
                            total("Air multicolor",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running pink") {
                            valor = 80;
                            total("Running pink",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running orange") {
                            valor = 75;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running green") {
                            valor = 75;
                            total("Running green",valor);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 44) {
                        alert (catalogoNikeMedianos.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "dunk yellow") {
                            valor = 80;
                            total("Dunk yellow",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "dunk red") {
                            valor = 85;
                            total("Dunk red",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "dunk blue") {
                            valor = 85;
                            total("Dunk blue",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air black") {
                            valor = 95;
                            total("Air black",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air white") {
                            valor = 95;
                            total("Air white",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air purple") {
                            valor = 90;
                            total("Air purple",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air multicolor") {
                            valor = 93;
                            total("Air multicolor",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running pink") {
                            valor = 85;
                            total("Running pink",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running orange") {
                            valor = 80;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running green") {
                            valor = 80;
                            total("Running green",valor);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 43 && talla < 47) {
                        alert (catalogoNikeGrandes.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "dunk yellow") {
                            valor = 85;
                            total("Dunk yellow",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "dunk red") {
                            valor = 90;
                            total("Dunk red",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "dunk blue") {
                            valor = 90;
                            total("Dunk blue",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air black") {
                            valor = 100;
                            total("Air black",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air white") {
                            valor = 100;
                            total("Air white",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air purple") {
                            valor = 95;
                            total("Air purple",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "air multicolor") {
                            valor = 110;
                            total("Air multicolor",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running pink") {
                            valor = 90;
                            total("Running pink",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running orange") {
                            valor = 85;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running green") {
                            valor = 85;
                            total("Running green",valor);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }

                    else {
                        alert ("No tenemos de esa talla lo siento");
                        break;
                    }
                }

                // ADIDAS 
                else if (interes === "si" && marca === "adidas") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 33 && talla < 41) {
                        alert (catalogoAdidasPequeños.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "adizero yellow") {
                            valor = 75;
                            total("Adizero yellow",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "adizero pink") {
                            valor = 75;
                            total("Adizero pink",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "adizero blue") {
                            valor = 80;
                            total("Adizero blue",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "lite racer black") {
                            valor = 105;
                            total("Lite racer black",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "ultraboost white") {
                            valor = 110;
                            total("Ultraboost white",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "lite racer grey") {
                            valor = 85;
                            total("Lite racer grey",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "lite racer red") {
                            valor = 95;
                            total("Lite racer red",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running purple") {
                            valor = 80;
                            total("Running purple",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running orange") {
                            valor = 75;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running green") {
                            valor = 75;
                            total("Running green",valor);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 44) {
                        alert (catalogoAdidasMedianos.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "adizero yellow") {
                            valor = 80;
                            total("Adizero yellow",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "adizero pink") {
                            valor = 80;
                            total("Adizero pink",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "adizero blue") {
                            valor = 85;
                            total("Adizero blue",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "lite racer black") {
                            valor = 110;
                            total("Lite racer black",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "ultraboost white") {
                            valor = 115;
                            total("Ultraboost white",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "lite racer grey") {
                            valor = 90;
                            total("Lite racer grey",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "lite racer red") {
                            valor = 100;
                            total("Lite racer red",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running purple") {
                            valor = 85;
                            total("Running purple",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running orange") {
                            valor = 80;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running green") {
                            valor = 80;
                            total("Running green",valor);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 43 && talla < 47) {
                        alert (catalogoAdidasGrandes.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "adizero yellow") {
                            valor = 85;
                            total("Adizero yellow",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "adizero pink") {
                            valor = 85;
                            total("Adizero pink",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "adizero blue") {
                            valor = 90;
                            total("Adizero blue",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "lite racer black") {
                            valor = 115;
                            total("Lite racer black",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "ultraboost white") {
                            valor = 120;
                            total("Ultraboost white",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "lite racer grey") {
                            valor = 95;
                            total("Lite racer grey",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "lite racer red") {
                            valor = 105;
                            total("Lite racer red",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running purple") {
                            valor = 90;
                            total("Running purple",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running orange") {
                            valor = 85;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                        
                        else if (zapato === "running green") {
                            valor = 85;
                            total("Running green",valor);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else {
                        alert ("No tenemos de esa talla lo siento");
                        break;
                    }
                }

                else if (interes === "no") {
                    pago();
                    break;
                }
                
                else {
                    alert ("Lo siento, no tenemos de esa marca");
                    break;
                }
            }
            break;
        }
    }

else if (interes === "si" && interesMarca === "no" || interes === "Si" && interesMarca === "No") {

    while (dinero !== monto) {
        marca = prompt ("Las marcas que tenemos disponibles son: Jordan, Under Armour, Puma, Adidas y Nike ¿Cual de estas 5 opciones te gustaria ver?").toLowerCase();

        while (bucle === 0) {
                
                // JORDAN
                if (interes === "si" && marca === "jordan") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 35 && talla < 41) {
                        alert (catalogoJordanPequeños.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "airjordan red") {
                            let valor = 48;
                            totalConDescuento("Airjordan red",valor, jordanPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "jordan black") {
                            valor = 55;
                            totalConDescuento("Jordan black",valor, jordanPequeños);
                            pushCarrito();
                        }
                        
                        else if (zapato === "jordan grey") {
                            valor = 45;
                            totalConDescuento("Jordan grey",valor, jordanPequeños);
                            pushCarrito();
                        }
                        
                        else {
                            alert ("Si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 49) {
                        alert (catalogoJordanGrandes.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                        
                        if (zapato === "airjordan red") {
                            valor = 60;
                            totalConDescuento("Airjordan red",valor, jordanGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "jordan black") {
                            valor = 80;
                            totalConDescuento("Jordan black",valor, jordanGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "jordan grey") {
                            valor = 55;
                            totalConDescuento("Jordan grey",valor, jordanGrandes);
                            pushCarrito();
                        }
                        
                        else if (zapato === "airjordan blue") {
                            valor = 65;
                            totalConDescuento("Airjordan blue",valor, jordanGrandes);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else {
                        alert ("No tenemos de esa talla lo siento");
                        break;
                    }
                }  

                // UNDER ARMOUR
                else if (interes === "si" && marca === "under armour") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                
                    if (talla > 35 && talla < 41) {
                        alert (catalogoUnderPequeños.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "basketball green") {
                            valor = 35;
                            totalConDescuento("Basketball green",valor, underArmourPequeños);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running pink") {
                            valor = 40;
                            totalConDescuento("Running pink",valor, underArmourPequeños);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                
                    else if (talla > 40 && talla < 47) {
                        alert (catalogoUnderGrandes.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "training white") {
                            valor = 70;
                            totalConDescuento("Training white",valor, underArmourGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running pink") {
                            valor = 70;
                            totalConDescuento("Running rosas",valor, underArmourGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running black") {
                            valor = 75;
                            totalConDescuento("Running black",valor, underArmourGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "basketball multicolor") {
                            valor = 90;
                            totalConDescuento("Basketball multicolor",valor, underArmourGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "basketball red") {
                            valor = 85;
                            totalConDescuento("Basketball red",valor, underArmourGrandes);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro     catálogo");
                            break
                        }
                    }
                
                    else {
                        alert ("No tenemos de esa talla lo siento");
                        break;
                    }
                }
                
                // PUMA
                else if (interes === "si" && marca === "puma") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                
                    if (talla > 33 && talla < 41) {
                        alert (catalogoPumaPequeños.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "running white") {
                            valor = 38;
                            totalConDescuento("Running white",valor, pumaPequeños);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running blue") {
                            valor = 38;
                            totalConDescuento("Running blue",valor, pumaPequeños);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running red") {
                            valor = 38;
                            totalConDescuento("Running red",valor, pumaPequeños);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic black") {
                            valor = 45;
                            totalConDescuento("Classic black",valor, pumaPequeños);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic pink") {
                            valor = 40;
                            totalConDescuento("Classic pink",valor, pumaPequeños);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic purple") {
                            valor = 43;
                            totalConDescuento("Classic purple",valor, pumaPequeños);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic green") {
                            valor = 40;
                            totalConDescuento("Classic green",valor, pumaPequeños);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                
                    else if (talla > 40 && talla < 44) {
                        alert (catalogoPumaMedianos.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "running white") {
                            valor = 43;
                            totalConDescuento("Running white",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running blue") {
                            valor = 43;
                            totalConDescuento("Running blue",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running red") {
                            valor = 43;
                            totalConDescuento("Running red",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic black") {
                            valor = 50;
                            totalConDescuento("Classic black",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic pink") {
                            valor = 45;
                            totalConDescuento("Classic pink",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic purple") {
                            valor = 48;
                            totalConDescuento("Classic purple",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic green") {
                            valor = 45;
                            totalConDescuento("Classic green",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                
                    else if (talla > 43 && talla < 47) {
                        alert (catalogoPumaGrandes.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "running white") {
                            valor = 48;
                            totalConDescuento("Running white",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running blue") {
                            valor = 48;
                            totalConDescuento("Running blue",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running red") {
                            valor = 48;
                            totalConDescuento("Running red",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic black") {
                            valor = 55;
                            totalConDescuento("Classic black",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic pink") {
                            valor = 50;
                            totalConDescuento("Classic pink",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic purple") {
                            valor = 53;
                            totalConDescuento("Classic purple",valor, pumaGrandes);
                            pushCarrito();
                        }
                    
                        else if (zapato === "classic green") {
                            valor = 50;
                            totalConDescuento("Classic green",valor, pumaGrandes);
                            pushCarrito();
                        }

                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                
                    else {
                        alert ("No tenemos de esa talla lo siento");
                        break;
                    }
                }

                // NIKE
                else if (interes === "si" && marca === "nike") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                
                    if (talla > 33 && talla < 41) {
                        alert (catalogoNikePequeños.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "dunk yellow") {
                            valor = 75;
                            total("Dunk yellow",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "dunk red") {
                            valor = 80;
                            total("Dunk red",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "dunk blue") {
                            valor = 80;
                            total("Dunk blue",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air black") {
                            valor = 90;
                            total("Air black",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air white") {
                            valor = 90;
                            total("Air white",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air purple") {
                            valor = 85;
                            total("Air purple",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air multicolor") {
                            valor = 88;
                            total("Air multicolor",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running pink") {
                            valor = 80;
                            total("Running pink",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running orange") {
                            valor = 75;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running green") {
                            valor = 75;
                            total("Running green",valor);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                
                    else if (talla > 40 && talla < 44) {
                        alert (catalogoNikeMedianos.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "dunk yellow") {
                            valor = 80;
                            total("Dunk yellow",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "dunk red") {
                            valor = 85;
                            total("Dunk red",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "dunk blue") {
                            valor = 85;
                            total("Dunk blue",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air black") {
                            valor = 95;
                            total("Air black",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air white") {
                            valor = 95;
                            total("Air white",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air purple") {
                            valor = 90;
                            total("Air purple",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air multicolor") {
                            valor = 93;
                            total("Air multicolor",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running pink") {
                            valor = 85;
                            total("Running pink",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running orange") {
                            valor = 80;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running green") {
                            valor = 80;
                            total("Running green",valor);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                
                    else if (talla > 43 && talla < 47) {
                        alert (catalogoNikeGrandes.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "dunk yellow") {
                            valor = 85;
                            total("Dunk yellow",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "dunk red") {
                            valor = 90;
                            total("Dunk red",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "dunk blue") {
                            valor = 90;
                            total("Dunk blue",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air black") {
                            valor = 100;
                            total("Air black",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air white") {
                            valor = 100;
                            total("Air white",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air purple") {
                            valor = 95;
                            total("Air purple",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "air multicolor") {
                            valor = 110;
                            total("Air multicolor",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running pink") {
                            valor = 90;
                            total("Running pink",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running orange") {
                            valor = 85;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running green") {
                            valor = 85;
                            total("Running green",valor);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }

                    else {
                        alert ("No tenemos de esa talla lo siento");
                        break;
                    }
                }

                // ADIDAS 
                else if (interes === "si" && marca === "adidas") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                
                    if (talla > 33 && talla < 41) {
                        alert (catalogoAdidasPequeños.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "adizero yellow") {
                            valor = 75;
                            total("Adizero yellow",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "adizero pink") {
                            valor = 75;
                            total("Adizero pink",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "adizero blue") {
                            valor = 80;
                            total("Adizero blue",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "lite racer black") {
                            valor = 105;
                            total("Lite racer black",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "ultraboost white") {
                            valor = 110;
                            total("Ultraboost white",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "lite racer grey") {
                            valor = 85;
                            total("Lite racer grey",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "lite racer red") {
                            valor = 95;
                            total("Lite racer red",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running purple") {
                            valor = 80;
                            total("Running purple",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running orange") {
                            valor = 75;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running green") {
                            valor = 75;
                            total("Running green",valor);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                
                    else if (talla > 40 && talla < 44) {
                        alert (catalogoAdidasMedianos.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "adizero yellow") {
                            valor = 80;
                            total("Adizero yellow",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "adizero pink") {
                            valor = 80;
                            total("Adizero pink",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "adizero blue") {
                            valor = 85;
                            total("Adizero blue",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "lite racer black") {
                            valor = 110;
                            total("Lite racer black",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "ultraboost white") {
                            valor = 115;
                            total("Ultraboost white",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "lite racer grey") {
                            valor = 90;
                            total("Lite racer grey",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "lite racer red") {
                            valor = 100;
                            total("Lite racer red",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running purple") {
                            valor = 85;
                            total("Running purple",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running orange") {
                            valor = 80;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running green") {
                            valor = 80;
                            total("Running green",valor);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                
                    else if (talla > 43 && talla < 47) {
                        alert (catalogoAdidasGrandes.join ("\n"));
                        zapato = prompt ("¿Cual le gustaria elegir?").toLowerCase();
                    
                        if (zapato === "adizero yellow") {
                            valor = 85;
                            total("Adizero yellow",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "adizero pink") {
                            valor = 85;
                            total("Adizero pink",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "adizero blue") {
                            valor = 90;
                            total("Adizero blue",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "lite racer black") {
                            valor = 115;
                            total("Lite racer black",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "ultraboost white") {
                            valor = 120;
                            total("Ultraboost white",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "lite racer grey") {
                            valor = 95;
                            total("Lite racer grey",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "lite racer red") {
                            valor = 105;
                            total("Lite racer red",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running purple") {
                            valor = 90;
                            total("Running purple",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running orange") {
                            valor = 85;
                            total("Running orange",valor);
                            pushCarrito();
                        }
                    
                        else if (zapato === "running green") {
                            valor = 85;
                            total("Running green",valor);
                            pushCarrito();
                        }
                    
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                
                    else {
                        alert ("No tenemos de esa talla lo siento");
                        break;
                    }
                }

                else if (interes === "no") {
                    pago();
                    break;
                }
            
                else {
                    alert ("Lo siento, no tenemos de esa marca");
                    break;
                }
            }
            break;
        }
    }

else {
    alert ("Lo siento, necesitamos que nos responda con un si o un no, sino no podremos ayudarte");
}