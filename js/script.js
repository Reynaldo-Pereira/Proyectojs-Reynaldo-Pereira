// Inicio
let nombreUsuario = prompt ("¿Como te llamas?");
alert (`Hola mucho gusto ${nombreUsuario}, bienvenido/a a nuestra tienda de zapatos`);

// Funciones 
const totalConDescuento = (modelo, costo, descuento) => {
    let monto = costo - descuento;
    alert (`Los ${modelo} con descuento te quedarian en ${monto}$`);
    return monto;
}
const total = (modelo, costo) => {
    monto = costo;
    alert (`Los ${modelo} te quedarian en ${monto}$`);
    return monto;
}

// variables
let jordanPequeños = 10

// Bloque de codigo
let interes = prompt ("¿Buscas alguna marca de zapatos en especifico?");
if (interes === "si" || interes === "Si" || interes === "SI") {
    let marca = prompt ("¿Que marca estas buscando?");
    switch (marca) {
        case "jordan" ||"Jordan" || "JORDAN":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
            let talla = parseInt(prompt("¿Que talla de zapato usas?"));
            if (talla > 35 && talla < 41) {
                alert ("Tenemos: Airjordan rojo a 48$, Jordan retro black a 55$ y Jordan retro cool grises a 45$");
                let zapato = prompt ("¿Que zapato te gustaria elegir?")
                if (zapato === "Airjordan rojo" || "airjordan rojo") {
                    let valor = 48
                    totalConDescuento("Airjordan rojo",valor, jordanPequeños);
                }
            }
            break;
        case "under armour" ||"Under armour" || "Under Armour" || "UNDER ARMOUR":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
            break;
        case "puma" ||"Puma" || "PUMA":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
            break;
        case "nike" || "Nike" || "NIKE":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
            break;
        case "adidas" || "Adidas" || "ADIDAS":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
            break;    
        default:
            alert ("Lo siento, no tenemos de esa marca");
            break;
    }
}
else if (interes === "no" || interes === "No" || interes === "NO") {
    marca = prompt ("Las marcas que tenemos disponibles son: Jordan, Under Armour, Puma, Adidas y Nike ¿Cual de estas 5 opciones te gustaria ver o te interesan todas?")
}





























// let monto = parseInt(prompt("ingresar monto"));
// while (monto < 20) {
//     monto = parseInt(prompt("ingresar monto"));
// }
