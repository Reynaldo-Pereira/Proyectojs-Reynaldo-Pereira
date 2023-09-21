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
let jordanPequeños = 10;
let jordanGrandes = 15;
let underArmourPequeños = 5;
let underArmourGrandes = 20;

// Bloque de codigo
let interes = prompt ("¿Buscas alguna marca de zapatos en especifico?");
if (interes === "si" || interes === "Si" || interes === "SI") {
    let marca = prompt ("¿Que marca estas buscando?");
    switch (marca) {

        // JORDAN
        case "jordan" ||"Jordan" || "JORDAN":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
            let talla = parseInt(prompt("¿Que talla de zapato usas?"));

            if (talla > 35 && talla < 41) {
                alert ("Tenemos: Airjordan red a 48$, Jordan black a 55$ y Jordan grey a 45$");
                let zapato = prompt ("¿Cual de estos 3 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Airjordan red" || "airjordan red" || "Airjordan Red":
                        let valor = 48;
                        totalConDescuento("Airjordan red",valor, jordanPequeños);
                        break;

                    case "Jordan black" || "jordan black" || "Jordan Black":
                        valor = 55;
                        totalConDescuento("Jordan black",valor, jordanPequeños);
                        break;

                    case "Jordan grey" || "jordan grey" || "Jordan Grey":
                        valor = 45;
                        totalConDescuento("Jordan grey",valor, jordanPequeños);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 49) {
                alert ("Tenemos: Airjordan red a 60$, Jordan grey a 55$, Airjordan blue a 65$ y los Jordan black edición limitada a 80$");
                zapato = prompt ("¿Cual de estos 4 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Airjordan red" || "airjordan red" || "Airjordan Red":
                        valor = 60;
                        totalConDescuento("Airjordan red",valor, jordanGrandes);
                        break;

                    case "Jordan black" || "jordan black" || "Jordan Black":
                        valor = 80;
                        totalConDescuento("Jordan black",valor, jordanGrandes);
                        break;

                    case "Jordan grey" || "jordan grey" || "Jordan Grey":
                        valor = 55;
                        totalConDescuento("Jordan grey",valor, jordanGrandes);
                        break;

                    case "Airjordan blue" || "airjordan blue" || "Airjordan Blue":
                        valor = 65;
                        totalConDescuento("Airjordan blue",valor, jordanGrandes);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else {
                alert ("No tenemos de esa talla lo siento");
            }

        // UNDER ARMOUR
        case "under armour" ||"Under armour" || "Under Armour" || "UNDER ARMOUR":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
            talla = parseInt(prompt("¿Que talla de zapato usas?"));

            if (talla > 35 && talla < 41) {
                alert ("Para tallas pequeñas solo tenemos dos modelos: Las zapatillas de basketball verdes a 35$ y zapatillas de running rosas a 40$");
                zapato = prompt ("¿Cual de estos 2 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas de basketball verdes" || "zapatillas de basketball verdes" || "zapatillas verdes" || "Zapatillas verdes":
                        valor = 35;
                        totalConDescuento("Zapatillas verdes",valor, underArmourPequeños);
                        break;

                    case "Zapatillas de running rosas" || "zapatillas de running rosas" || "zapatillas rosas" || "Zapatillas rosas":
                        valor = 40;
                        totalConDescuento("Zapatillas verdes",valor, underArmourPequeños);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 47) {
                alert ("Tenemos: zapatillas de entrenamiento blancas a 70$, zapatillas de running rosas a 70$, zapatillas de running negras a 75$, zapatillas de basketball multicolor a 90$ y zapatillas de basketball rojas a 85$");
                zapato = prompt ("¿Cual de estos 5 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "zapatillas de entrenamiento blancas" || "Zapatillas de entrenamiento blancas" || "zapatillas blancas" || "Zapatillas blancas":
                        valor = 70;
                        totalConDescuento("Zapatillas blancas",valor, underArmourGrandes);
                        break;

                    case "zapatillas de running rosas" || "Zapatillas de running rosas" || "zapatillas rosas" || "Zapatillas rosas":
                        valor = 70;
                        totalConDescuento("Zapatillas rosas",valor, underArmourGrandes);
                        break;

                    case "Zapatillas de running negras" || "zapatillas de running negras" || "zapatillas negras" || "Zapatillas negras":
                        valor = 75;
                        totalConDescuento("Zapatillas negras",valor, underArmourGrandes);
                        break;

                    case "zapatillas de basketball multicolor" || "Zapatillas de basketball multicolor" || "zapatillas multicolor" || "Zapatillas multicolor":
                        valor = 90;
                        totalConDescuento("Zapatillas multicolor",valor, underArmourGrandes);
                        break;

                    case "zapatillas de basketball rojas" || "Zapatillas de basketball rojas" || "zapatillas rojas" || "Zapatillas rojas":
                        valor = 85;
                        totalConDescuento("Zapatillas rojas",valor, underArmourGrandes);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else {
                alert ("No tenemos de esa talla lo siento");
            }

        // PUMA
        case "puma" ||"Puma" || "PUMA":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
            talla = parseInt(prompt("¿Que talla de zapato usas?"));

            if (talla > 34 && talla < 41) {
                alert ("Tenemos: Las zapatillas running rosas a , zapatillas running moradas, zapatillas entrenamiento negras, zapatillas entrenamiento blancas, zapatillas urbanas negras, zapatillas urbanas rosas, zapatillas urbanas azules");
                zapato = prompt ("¿Cual de estos 2 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas de basketball verdes" || "zapatillas de basketball verdes" || "zapatillas verdes" || "Zapatillas verdes":
                        valor = 35;
                        totalConDescuento("Zapatillas verdes",valor, underArmourPequeños);
                        break;

                    case "Zapatillas de running rosas" || "zapatillas de running rosas" || "zapatillas rosas" || "Zapatillas rosas":
                        valor = 40;
                        totalConDescuento("Zapatillas verdes",valor, underArmourPequeños);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 44) {
                alert ("Tenemos: zapatillas de entrenamiento blancas a 70$, zapatillas de running rosas a 70$, zapatillas de running negras a 75$, zapatillas de basketball multicolor a 90$ y zapatillas de basketball rojas a 85$");
                zapato = prompt ("¿Cual de estos 5 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "zapatillas de entrenamiento blancas" || "Zapatillas de entrenamiento blancas" || "zapatillas blancas" || "Zapatillas blancas":
                        valor = 70;
                        totalConDescuento("Zapatillas blancas",valor, underArmourGrandes);
                        break;

                    case "zapatillas de running rosas" || "Zapatillas de running rosas" || "zapatillas rosas" || "Zapatillas rosas":
                        valor = 70;
                        totalConDescuento("Zapatillas rosas",valor, underArmourGrandes);
                        break;

                    case "Zapatillas de running negras" || "zapatillas de running negras" || "zapatillas negras" || "Zapatillas negras":
                        valor = 75;
                        totalConDescuento("Zapatillas negras",valor, underArmourGrandes);
                        break;

                    case "zapatillas de basketball multicolor" || "Zapatillas de basketball multicolor" || "zapatillas multicolor" || "Zapatillas multicolor":
                        valor = 90;
                        totalConDescuento("Zapatillas multicolor",valor, underArmourGrandes);
                        break;

                    case "zapatillas de basketball rojas" || "Zapatillas de basketball rojas" || "zapatillas rojas" || "Zapatillas rojas":
                        valor = 85;
                        totalConDescuento("Zapatillas rojas",valor, underArmourGrandes);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else {
                alert ("No tenemos de esa talla lo siento");
            }

        // NIKE
        case "nike" || "Nike" || "NIKE":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
            break;

        // ADIDAS 
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
