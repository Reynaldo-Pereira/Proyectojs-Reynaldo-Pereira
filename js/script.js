// Inicio
let nombreUsuario = prompt ("¿Como te llamas?");
alert (`Hola mucho gusto ${nombreUsuario}, bienvenido/a a nuestra tienda de zapatos`);
let interes = prompt ("¿Buscas alguna marca de zapatos en especifico?");

// Variables
let bucle = 0
let jordanPequeños = 10;
let jordanGrandes = 15;
let underArmourPequeños = 12;
let underArmourGrandes = 20;
let pumaPequeños = 8;
let pumaGrandes = 16;

// Funciones 
const totalConDescuento = (modelo, costo, descuento) => {
    let monto = costo - descuento;
    alert (`Las ${modelo} con descuento te quedarian en ${monto}$`);
    return monto;
}
const total = (modelo, costo) => {
    monto = costo;
    alert (`Las ${modelo} te quedarian en ${monto}$`);
    return monto;
}

// Bloque de codigo
if (interes === "si" || interes === "Si" || interes === "SI") {
    let marca = prompt ("¿Que marca estas buscando?");

    switch (marca) {

        // JORDAN
        case "jordan" ||"Jordan" || "JORDAN":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
            var talla = parseInt(prompt("¿Que talla de zapato usas?"));

            if (talla > 35 && talla < 41) {
                alert ("Tenemos: Airjordan red a 48$, Jordan black a 55$ y Jordan grey a 45$");
                let zapato = prompt ("¿Cual de estos 3 zapatos te gustaria elegir?");

                if (zapato === "Airjordan red" || zapato === "airjordan red" || zapato ==="Airjordan Red") {
                    let valor = 48;
                    totalConDescuento("Airjordan red",valor, jordanPequeños);
                    break;
                }
                else if (zapato === "Jordan black" || zapato === "jordan black" || zapato === "Jordan Black") {
                    valor = 55;
                    totalConDescuento("Jordan black",valor, jordanPequeños);
                    break;
                }
                else if (zapato === "Jordan grey" || zapato === "jordan grey" || zapato === "Jordan Grey") {
                    valor = 45;
                    totalConDescuento("Jordan grey",valor, jordanPequeños);
                    break;
                }
                else {
                    alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                    break;
                }
            }

            else if (talla > 40 && talla < 49) {
                alert ("Tenemos: Airjordan red a 60$, Jordan grey a 55$, Airjordan blue a 65$ y los Jordan black edición limitada a 80$");
                zapato = prompt ("¿Cual de estos 4 zapatos te gustaria elegir?");

                if (zapato === "Airjordan red" || zapato === "airjordan red" || zapato === "Airjordan Red") {
                    valor = 60;
                    totalConDescuento("Airjordan red",valor, jordanGrandes);
                    break;
                }
                else if (zapato === "Jordan black" || zapato === "jordan black" || zapato === "Jordan Black") {
                    valor = 80;
                    totalConDescuento("Jordan black",valor, jordanGrandes);
                    break;
                }
                else if (zapato === "Jordan grey" || zapato === "jordan grey" || zapato === "Jordan Grey") {
                    valor = 55;
                    totalConDescuento("Jordan grey",valor, jordanGrandes);
                    break;
                }
                else if (zapato === "Airjordan blue" || zapato === "airjordan blue" || zapato === "Airjordan Blue") {
                    valor = 65;
                    totalConDescuento("Airjordan blue",valor, jordanGrandes);
                    break;
                }
                else {
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
                alert ("Para tallas pequeñas solo tenemos dos modelos: Las zapatillas basketball green a 35$ y zapatillas running pink a 40$");
                zapato = prompt ("¿Cual de estos 2 zapatos te gustaria elegir?");

                if (zapato === "Zapatillas basketball green" || zapato === "zapatillas basketball green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                    valor = 35;
                    totalConDescuento("Zapatillas green",valor, underArmourPequeños);
                    break;
                }
                else if (zapato === "Zapatillas running pink" || zapato === "zapatillas running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                    valor = 40;
                    totalConDescuento("Zapatillas pink",valor, underArmourPequeños);
                    break;
                }
                else {
                    alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 47) {
                alert ("Tenemos: Las zapatillas training white a 70$, zapatillas running pink a 70$, zapatillas running black a 75$, zapatillas basketball multicolor a 90$ y zapatillas basketball red a 85$");
                zapato = prompt ("¿Cual de estos 5 zapatos te gustaria elegir?");

                if (zapato === "zapatillas training white" || zapato === "Zapatillas training white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                    valor = 70;
                    totalConDescuento("Zapatillas white",valor, underArmourGrandes);
                    break;
                }
                else if (zapato === "zapatillas running pink" || zapato === "Zapatillas running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                    valor = 70;
                    totalConDescuento("Zapatillas rosas",valor, underArmourGrandes);
                    break;
                }
                else if (zapato === "Zapatillas running black" || zapato === "zapatillas running black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                    valor = 75;
                    totalConDescuento("Zapatillas black",valor, underArmourGrandes);
                    break;
                }
                else if (zapato === "zapatillas basketball multicolor" || zapato === "Zapatillas basketball multicolor" || zapato === "zapatillas multicolor" || zapato === "Zapatillas multicolor") {
                    valor = 90;
                    totalConDescuento("Zapatillas multicolor",valor, underArmourGrandes);
                    break;
                }
                else if (zapato === "zapatillas basketball red" || zapato === "Zapatillas basketball red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                    valor = 85;
                    totalConDescuento("Zapatillas red",valor, underArmourGrandes);
                    break;
                }
                else {
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

            if (talla > 33 && talla < 41) {
                alert ("Tenemos: Las zapatillas running white a 38$, zapatillas running blue 38$, zapatillas running red a 38$, zapatillas classic black a 45$, zapatillas classic pink a 40$, zapatillas classic purple a 43$ y zapatillas classic green a 40$");
                zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas running white" || "zapatillas running white" || "zapatillas white" || "Zapatillas white":
                        valor = 38;
                        totalConDescuento("Zapatillas white",valor, pumaPequeños);
                        break;

                    case "Zapatillas running blue" || "zapatillas running blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 38;
                        totalConDescuento("Zapatillas blue",valor, pumaPequeños);
                        break;

                    case "Zapatillas running red" || "zapatillas running red" || "zapatillas red" || "Zapatillas red":
                        valor = 38;
                        totalConDescuento("Zapatillas red",valor, pumaPequeños);
                        break;

                    case "Zapatillas classic black" || "zapatillas classic black" || "zapatillas black" || "Zapatillas black":
                        valor = 45;
                        totalConDescuento("Zapatillas black",valor, pumaPequeños);
                        break;

                    case "Zapatillas classic pink" || "zapatillas classic pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 40;
                        totalConDescuento("Zapatillas pink",valor, pumaPequeños);
                        break;

                    case "Zapatillas classic purple" || "zapatillas classic purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 43;
                        totalConDescuento("Zapatillas purple",valor, pumaPequeños);
                        break;

                    case "Zapatillas classic green" || "zapatillas classic green" || "zapatillas green" || "Zapatillas green":
                        valor = 40;
                        totalConDescuento("Zapatillas green",valor, pumaPequeños);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 44) {
                alert ("Tenemos: Las zapatillas running white a 43$, zapatillas running blue 43$, zapatillas running red a 43$, zapatillas classic black a 50$, zapatillas classic pink a 45$, zapatillas classic purple a 48$ y zapatillas classic green a 45$");
                zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas running white" || "zapatillas running white" || "zapatillas white" || "Zapatillas white":
                        valor = 43;
                        totalConDescuento("Zapatillas white",valor, pumaGrandes);
                        break;

                    case "Zapatillas running blue" || "zapatillas running blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 43;
                        totalConDescuento("Zapatillas blue",valor, pumaGrandes);
                        break;

                    case "Zapatillas running red" || "zapatillas running red" || "zapatillas red" || "Zapatillas red":
                        valor = 43;
                        totalConDescuento("Zapatillas red",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic black" || "zapatillas classic black" || "zapatillas black" || "Zapatillas black":
                        valor = 50;
                        totalConDescuento("Zapatillas black",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic pink" || "zapatillas classic pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 45;
                        totalConDescuento("Zapatillas pink",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic purple" || "zapatillas classic purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 48;
                        totalConDescuento("Zapatillas purple",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic green" || "zapatillas classic green" || "zapatillas green" || "Zapatillas green":
                        valor = 45;
                        totalConDescuento("Zapatillas green",valor, pumaGrandes);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 43 && talla < 47) {
                alert ("Tenemos: Las zapatillas running white a 48$, zapatillas running blue 48$, zapatillas running red a 48$, zapatillas classic black a 55$, zapatillas classic pink a 50$, zapatillas classic purple a 53$ y zapatillas classic green a 50$");
                zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas running white" || "zapatillas running white" || "zapatillas white" || "Zapatillas white":
                        valor = 48;
                        totalConDescuento("Zapatillas white",valor, pumaGrandes);
                        break;

                    case "Zapatillas running blue" || "zapatillas running blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 48;
                        totalConDescuento("Zapatillas blue",valor, pumaGrandes);
                        break;

                    case "Zapatillas running red" || "zapatillas running red" || "zapatillas red" || "Zapatillas red":
                        valor = 48;
                        totalConDescuento("Zapatillas red",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic black" || "zapatillas classic black" || "zapatillas black" || "Zapatillas black":
                        valor = 55;
                        totalConDescuento("Zapatillas black",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic pink" || "zapatillas classic pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 50;
                        totalConDescuento("Zapatillas pink",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic purple" || "zapatillas classic purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 53;
                        totalConDescuento("Zapatillas purple",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic green" || "zapatillas classic green" || "zapatillas green" || "Zapatillas green":
                        valor = 50;
                        totalConDescuento("Zapatillas green",valor, pumaGrandes);
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
            talla = parseInt(prompt("¿Que talla de zapato usas?"));

            if (talla > 33 && talla < 41) {
                alert ("Tenemos: zapatillas dunk yellow a 75$, dunk red a 80$, dunk blue a 80$, air black a 90$, air white a 90$, air purple a 85$, air multicolor a 88$, running pink a 80$, running orange a 75$ y running green a 75$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas dunk yellow" || "zapatillas dunk yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 75;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas dunk red" || "zapatillas dunk red" || "zapatillas red" || "Zapatillas red":
                        valor = 80;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas dunk blue" || "zapatillas dunk blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 80;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas air black" || "zapatillas air black" || "zapatillas black" || "Zapatillas black":
                        valor = 90;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas air white" || "zapatillas air white" || "zapatillas white" || "Zapatillas white":
                        valor = 90;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas air purple" || "zapatillas air purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 85;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas air multicolor" || "zapatillas air multicolor" || "zapatillas multicolor" || "Zapatillas multicolor":
                        valor = 88;
                        total("Zapatillas multicolor",valor);
                        break;

                    case "Zapatillas running pink" || "zapatillas running pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 80;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 75;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 75;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 44) {
                alert ("Tenemos: zapatillas dunk yellow a 80$, dunk red a 85$, dunk blue a 85$, air black a 95$, air white a 95$, air purple a 90$, air multicolor a 93$, running pink a 85$, running orange a 80$ y running green a 80$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas dunk yellow" || "zapatillas dunk yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 80;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas dunk red" || "zapatillas dunk red" || "zapatillas red" || "Zapatillas red":
                        valor = 85;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas dunk blue" || "zapatillas dunk blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 85;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas air black" || "zapatillas air black" || "zapatillas black" || "Zapatillas black":
                        valor = 95;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas air white" || "zapatillas air white" || "zapatillas white" || "Zapatillas white":
                        valor = 95;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas air purple" || "zapatillas air purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 90;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas air multicolor" || "zapatillas air multicolor" || "zapatillas multicolor" || "Zapatillas multicolor":
                        valor = 93;
                        total("Zapatillas multicolor",valor);
                        break;

                    case "Zapatillas running pink" || "zapatillas running pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 85;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 80;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 80;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 43 && talla < 47) {
                alert ("Tenemos: zapatillas dunk yellow a 85$, dunk red a 90$, dunk blue a 90$, air black a 100$, air white a 100$, air purple a 95$, air multicolor edición limitada a 110$, running pink a 90$, running orange a 85$ y running green a 85$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas dunk yellow" || "zapatillas dunk yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 85;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas dunk red" || "zapatillas dunk red" || "zapatillas red" || "Zapatillas red":
                        valor = 90;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas dunk blue" || "zapatillas dunk blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 90;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas air black" || "zapatillas air black" || "zapatillas black" || "Zapatillas black":
                        valor = 100;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas air white" || "zapatillas air white" || "zapatillas white" || "Zapatillas white":
                        valor = 100;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas air purple" || "zapatillas air purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 95;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas air multicolor" || "zapatillas air multicolor" || "zapatillas multicolor" || "Zapatillas multicolor":
                        valor = 110;
                        total("Zapatillas multicolor",valor);
                        break;

                    case "Zapatillas running pink" || "zapatillas running pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 90;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 85;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 85;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else {
                alert ("No tenemos de esa talla lo siento");
            }

        // ADIDAS 
        case "adidas" || "Adidas" || "ADIDAS":
            alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
            talla = parseInt(prompt("¿Que talla de zapato usas?"));

            if (talla > 33 && talla < 41) {
                alert ("Tenemos: zapatillas adizero yellow 75$, adizero pink a 75$, adizero blue a 80$, lite racer black a 105$, ultraboost white a 110$, lite racer grey a 85$, lite racer red a 95$, running purple a 80$, running orange a 75$ y running green a 75$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas adizero yellow" || "zapatillas adizero yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 75;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas adizero pink" || "zapatillas adizero pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 75;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas adizero blue" || "zapatillas adizero blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 80;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas lite racer black" || "zapatillas lite racer black" || "zapatillas black" || "Zapatillas black":
                        valor = 105;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas ultraboost white" || "zapatillas ultraboost white" || "zapatillas white" || "Zapatillas white":
                        valor = 110;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas lite racer grey" || "zapatillas lite racer grey" || "zapatillas grey" || "Zapatillas grey":
                        valor = 85;
                        total("Zapatillas grey",valor);
                        break;

                    case "Zapatillas lite racer red" || "zapatillas lite racer red" || "zapatillas red" || "Zapatillas red":
                        valor = 95;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas running purple" || "zapatillas running purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 80;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 75;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 75;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 44) {
                alert ("Tenemos: zapatillas adizero yellow 80$, adizero pink a 80$, adizero blue a 85$, lite racer black a 110$, ultraboost white a 115$, lite racer grey a 90$, lite racer red a 100$, running purple a 85$, running orange a 80$ y running green a 80$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas adizero yellow" || "zapatillas adizero yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 80;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas adizero pink" || "zapatillas adizero pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 80;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas adizero blue" || "zapatillas adizero blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 85;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas lite racer black" || "zapatillas lite racer black" || "zapatillas black" || "Zapatillas black":
                        valor = 110;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas ultraboost white" || "zapatillas ultraboost white" || "zapatillas white" || "Zapatillas white":
                        valor = 115;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas lite racer grey" || "zapatillas lite racer grey" || "zapatillas grey" || "Zapatillas grey":
                        valor = 90;
                        total("Zapatillas grey",valor);
                        break;

                    case "Zapatillas lite racer red" || "zapatillas lite racer red" || "zapatillas red" || "Zapatillas red":
                        valor = 100;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas running purple" || "zapatillas running purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 85;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 80;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 80;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 43 && talla < 47) {
                alert ("Tenemos: zapatillas adizero yellow 85$, adizero pink a 85$, adizero blue a 90$, lite racer black a 115$, ultraboost white a 120$, lite racer grey a 95$, lite racer red a 105$, running purple a 90$, running orange a 85$ y running green a 85$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas adizero yellow" || "zapatillas adizero yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 85;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas adizero pink" || "zapatillas adizero pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 85;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas adizero blue" || "zapatillas adizero blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 90;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas lite racer black" || "zapatillas lite racer black" || "zapatillas black" || "Zapatillas black":
                        valor = 115;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas ultraboost white" || "zapatillas ultraboost white" || "zapatillas white" || "Zapatillas white":
                        valor = 120;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas lite racer grey" || "zapatillas lite racer grey" || "zapatillas grey" || "Zapatillas grey":
                        valor = 95;
                        total("Zapatillas grey",valor);
                        break;

                    case "Zapatillas lite racer red" || "zapatillas lite racer red" || "zapatillas red" || "Zapatillas red":
                        valor = 105;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas running purple" || "zapatillas running purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 90;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 85;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 85;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else {
                alert ("No tenemos de esa talla lo siento");
            }

        default:
            alert ("Lo siento, no tenemos de esa marca");
            break;
    }
}

else if (interes === "no" || interes === "No" || interes === "NO") {
    marca = prompt ("Las marcas que tenemos disponibles son: Jordan, Under Armour, Puma, Adidas y Nike ¿Cual de estas 5 opciones te gustaria ver?");

    switch (marca) {

        // JORDAN
        case "jordan" ||"Jordan" || "JORDAN":
            alert ("Perfecto, tenemos ofertas con descuento de esta marca");
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
            alert ("Perfecto, tenemos ofertas con descuento de esta marca");
            talla = parseInt(prompt("¿Que talla de zapato usas?"));

            if (talla > 35 && talla < 41) {
                alert ("Para tallas pequeñas solo tenemos dos modelos: Las zapatillas basketball green a 35$ y zapatillas running pink a 40$");
                zapato = prompt ("¿Cual de estos 2 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas basketball green" || "zapatillas basketball green" || "zapatillas green" || "Zapatillas green":
                        valor = 35;
                        totalConDescuento("Zapatillas green",valor, underArmourPequeños);
                        break;

                    case "Zapatillas running pink" || "zapatillas running pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 40;
                        totalConDescuento("Zapatillas pink",valor, underArmourPequeños);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 47) {
                alert ("Tenemos: Las zapatillas training white a 70$, zapatillas running pink a 70$, zapatillas running black a 75$, zapatillas basketball multicolor a 90$ y zapatillas basketball red a 85$");
                zapato = prompt ("¿Cual de estos 5 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "zapatillas training white" || "Zapatillas training white" || "zapatillas white" || "Zapatillas white":
                        valor = 70;
                        totalConDescuento("Zapatillas white",valor, underArmourGrandes);
                        break;

                    case "zapatillas running pink" || "Zapatillas running pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 70;
                        totalConDescuento("Zapatillas rosas",valor, underArmourGrandes);
                        break;

                    case "Zapatillas running black" || "zapatillas running black" || "zapatillas black" || "Zapatillas black":
                        valor = 75;
                        totalConDescuento("Zapatillas black",valor, underArmourGrandes);
                        break;

                    case "zapatillas basketball multicolor" || "Zapatillas basketball multicolor" || "zapatillas multicolor" || "Zapatillas multicolor":
                        valor = 90;
                        totalConDescuento("Zapatillas multicolor",valor, underArmourGrandes);
                        break;

                    case "zapatillas basketball red" || "Zapatillas basketball red" || "zapatillas red" || "Zapatillas red":
                        valor = 85;
                        totalConDescuento("Zapatillas red",valor, underArmourGrandes);
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
            alert ("Perfecto, tenemos ofertas con descuento de esta marca");
            talla = parseInt(prompt("¿Que talla de zapato usas?"));

            if (talla > 33 && talla < 41) {
                alert ("Tenemos: Las zapatillas running white a 38$, zapatillas running blue 38$, zapatillas running red a 38$, zapatillas classic black a 45$, zapatillas classic pink a 40$, zapatillas classic purple a 43$ y zapatillas classic green a 40$");
                zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas running white" || "zapatillas running white" || "zapatillas white" || "Zapatillas white":
                        valor = 38;
                        totalConDescuento("Zapatillas white",valor, pumaPequeños);
                        break;

                    case "Zapatillas running blue" || "zapatillas running blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 38;
                        totalConDescuento("Zapatillas blue",valor, pumaPequeños);
                        break;

                    case "Zapatillas running red" || "zapatillas running red" || "zapatillas red" || "Zapatillas red":
                        valor = 38;
                        totalConDescuento("Zapatillas red",valor, pumaPequeños);
                        break;

                    case "Zapatillas classic black" || "zapatillas classic black" || "zapatillas black" || "Zapatillas black":
                        valor = 45;
                        totalConDescuento("Zapatillas black",valor, pumaPequeños);
                        break;

                    case "Zapatillas classic pink" || "zapatillas classic pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 40;
                        totalConDescuento("Zapatillas pink",valor, pumaPequeños);
                        break;

                    case "Zapatillas classic purple" || "zapatillas classic purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 43;
                        totalConDescuento("Zapatillas purple",valor, pumaPequeños);
                        break;

                    case "Zapatillas classic green" || "zapatillas classic green" || "zapatillas green" || "Zapatillas green":
                        valor = 40;
                        totalConDescuento("Zapatillas green",valor, pumaPequeños);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 44) {
                alert ("Tenemos: Las zapatillas running white a 43$, zapatillas running blue 43$, zapatillas running red a 43$, zapatillas classic black a 50$, zapatillas classic pink a 45$, zapatillas classic purple a 48$ y zapatillas classic green a 45$");
                zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas running white" || "zapatillas running white" || "zapatillas white" || "Zapatillas white":
                        valor = 43;
                        totalConDescuento("Zapatillas white",valor, pumaGrandes);
                        break;

                    case "Zapatillas running blue" || "zapatillas running blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 43;
                        totalConDescuento("Zapatillas blue",valor, pumaGrandes);
                        break;

                    case "Zapatillas running red" || "zapatillas running red" || "zapatillas red" || "Zapatillas red":
                        valor = 43;
                        totalConDescuento("Zapatillas red",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic black" || "zapatillas classic black" || "zapatillas black" || "Zapatillas black":
                        valor = 50;
                        totalConDescuento("Zapatillas black",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic pink" || "zapatillas classic pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 45;
                        totalConDescuento("Zapatillas pink",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic purple" || "zapatillas classic purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 48;
                        totalConDescuento("Zapatillas purple",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic green" || "zapatillas classic green" || "zapatillas green" || "Zapatillas green":
                        valor = 45;
                        totalConDescuento("Zapatillas green",valor, pumaGrandes);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 43 && talla < 47) {
                alert ("Tenemos: Las zapatillas running white a 48$, zapatillas running blue 48$, zapatillas running red a 48$, zapatillas classic black a 55$, zapatillas classic pink a 50$, zapatillas classic purple a 53$ y zapatillas classic green a 50$");
                zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas running white" || "zapatillas running white" || "zapatillas white" || "Zapatillas white":
                        valor = 48;
                        totalConDescuento("Zapatillas white",valor, pumaGrandes);
                        break;

                    case "Zapatillas running blue" || "zapatillas running blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 48;
                        totalConDescuento("Zapatillas blue",valor, pumaGrandes);
                        break;

                    case "Zapatillas running red" || "zapatillas running red" || "zapatillas red" || "Zapatillas red":
                        valor = 48;
                        totalConDescuento("Zapatillas red",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic black" || "zapatillas classic black" || "zapatillas black" || "Zapatillas black":
                        valor = 55;
                        totalConDescuento("Zapatillas black",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic pink" || "zapatillas classic pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 50;
                        totalConDescuento("Zapatillas pink",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic purple" || "zapatillas classic purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 53;
                        totalConDescuento("Zapatillas purple",valor, pumaGrandes);
                        break;

                    case "Zapatillas classic green" || "zapatillas classic green" || "zapatillas green" || "Zapatillas green":
                        valor = 50;
                        totalConDescuento("Zapatillas green",valor, pumaGrandes);
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
            alert ("Perfecto, a continuación te mostraremos nuestras opciones");
            talla = parseInt(prompt("¿Que talla de zapato usas?"));

            if (talla > 33 && talla < 41) {
                alert ("Tenemos: zapatillas dunk yellow a 75$, dunk red a 80$, dunk blue a 80$, air black a 90$, air white a 90$, air purple a 85$, air multicolor a 88$, running pink a 80$, running orange a 75$ y running green a 75$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas dunk yellow" || "zapatillas dunk yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 75;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas dunk red" || "zapatillas dunk red" || "zapatillas red" || "Zapatillas red":
                        valor = 80;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas dunk blue" || "zapatillas dunk blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 80;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas air black" || "zapatillas air black" || "zapatillas black" || "Zapatillas black":
                        valor = 90;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas air white" || "zapatillas air white" || "zapatillas white" || "Zapatillas white":
                        valor = 90;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas air purple" || "zapatillas air purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 85;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas air multicolor" || "zapatillas air multicolor" || "zapatillas multicolor" || "Zapatillas multicolor":
                        valor = 88;
                        total("Zapatillas multicolor",valor);
                        break;

                    case "Zapatillas running pink" || "zapatillas running pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 80;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 75;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 75;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 44) {
                alert ("Tenemos: zapatillas dunk yellow a 80$, dunk red a 85$, dunk blue a 85$, air black a 95$, air white a 95$, air purple a 90$, air multicolor a 93$, running pink a 85$, running orange a 80$ y running green a 80$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas dunk yellow" || "zapatillas dunk yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 80;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas dunk red" || "zapatillas dunk red" || "zapatillas red" || "Zapatillas red":
                        valor = 85;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas dunk blue" || "zapatillas dunk blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 85;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas air black" || "zapatillas air black" || "zapatillas black" || "Zapatillas black":
                        valor = 95;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas air white" || "zapatillas air white" || "zapatillas white" || "Zapatillas white":
                        valor = 95;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas air purple" || "zapatillas air purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 90;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas air multicolor" || "zapatillas air multicolor" || "zapatillas multicolor" || "Zapatillas multicolor":
                        valor = 93;
                        total("Zapatillas multicolor",valor);
                        break;

                    case "Zapatillas running pink" || "zapatillas running pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 85;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 80;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 80;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 43 && talla < 47) {
                alert ("Tenemos: zapatillas dunk yellow a 85$, dunk red a 90$, dunk blue a 90$, air black a 100$, air white a 100$, air purple a 95$, air multicolor edición limitada a 110$, running pink a 90$, running orange a 85$ y running green a 85$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas dunk yellow" || "zapatillas dunk yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 85;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas dunk red" || "zapatillas dunk red" || "zapatillas red" || "Zapatillas red":
                        valor = 90;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas dunk blue" || "zapatillas dunk blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 90;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas air black" || "zapatillas air black" || "zapatillas black" || "Zapatillas black":
                        valor = 100;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas air white" || "zapatillas air white" || "zapatillas white" || "Zapatillas white":
                        valor = 100;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas air purple" || "zapatillas air purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 95;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas air multicolor" || "zapatillas air multicolor" || "zapatillas multicolor" || "Zapatillas multicolor":
                        valor = 110;
                        total("Zapatillas multicolor",valor);
                        break;

                    case "Zapatillas running pink" || "zapatillas running pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 90;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 85;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 85;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else {
                alert ("No tenemos de esa talla lo siento");
            }

        // ADIDAS 
        case "adidas" || "Adidas" || "ADIDAS": 
            alert ("Perfecto, a continuación te mostraremos nuestras opciones");
            talla = parseInt(prompt("¿Que talla de zapato usas?"));

            if (talla > 33 && talla < 41) {
                alert ("Tenemos: zapatillas adizero yellow 75$, adizero pink a 75$, adizero blue a 80$, lite racer black a 105$, ultraboost white a 110$, lite racer grey a 85$, lite racer red a 95$, running purple a 80$, running orange a 75$ y running green a 75$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas adizero yellow" || "zapatillas adizero yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 75;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas adizero pink" || "zapatillas adizero pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 75;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas adizero blue" || "zapatillas adizero blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 80;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas lite racer black" || "zapatillas lite racer black" || "zapatillas black" || "Zapatillas black":
                        valor = 105;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas ultraboost white" || "zapatillas ultraboost white" || "zapatillas white" || "Zapatillas white":
                        valor = 110;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas lite racer grey" || "zapatillas lite racer grey" || "zapatillas grey" || "Zapatillas grey":
                        valor = 85;
                        total("Zapatillas grey",valor);
                        break;

                    case "Zapatillas lite racer red" || "zapatillas lite racer red" || "zapatillas red" || "Zapatillas red":
                        valor = 95;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas running purple" || "zapatillas running purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 80;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 75;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 75;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 40 && talla < 44) {
                alert ("Tenemos: zapatillas adizero yellow 80$, adizero pink a 80$, adizero blue a 85$, lite racer black a 110$, ultraboost white a 115$, lite racer grey a 90$, lite racer red a 100$, running purple a 85$, running orange a 80$ y running green a 80$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas adizero yellow" || "zapatillas adizero yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 80;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas adizero pink" || "zapatillas adizero pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 80;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas adizero blue" || "zapatillas adizero blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 85;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas lite racer black" || "zapatillas lite racer black" || "zapatillas black" || "Zapatillas black":
                        valor = 110;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas ultraboost white" || "zapatillas ultraboost white" || "zapatillas white" || "Zapatillas white":
                        valor = 115;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas lite racer grey" || "zapatillas lite racer grey" || "zapatillas grey" || "Zapatillas grey":
                        valor = 90;
                        total("Zapatillas grey",valor);
                        break;

                    case "Zapatillas lite racer red" || "zapatillas lite racer red" || "zapatillas red" || "Zapatillas red":
                        valor = 100;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas running purple" || "zapatillas running purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 85;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 80;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 80;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else if (talla > 43 && talla < 47) {
                alert ("Tenemos: zapatillas adizero yellow 85$, adizero pink a 85$, adizero blue a 90$, lite racer black a 115$, ultraboost white a 120$, lite racer grey a 95$, lite racer red a 105$, running purple a 90$, running orange a 85$ y running green a 85$ ");
                zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");

                switch (zapato) {

                    case "Zapatillas adizero yellow" || "zapatillas adizero yellow" || "zapatillas yellow" || "Zapatillas yellow":
                        valor = 85;
                        total("Zapatillas yellow",valor);
                        break;

                    case "Zapatillas adizero pink" || "zapatillas adizero pink" || "zapatillas pink" || "Zapatillas pink":
                        valor = 85;
                        total("Zapatillas pink",valor);
                        break;

                    case "Zapatillas adizero blue" || "zapatillas adizero blue" || "zapatillas blue" || "Zapatillas blue":
                        valor = 90;
                        total("Zapatillas blue",valor);
                        break;

                    case "Zapatillas lite racer black" || "zapatillas lite racer black" || "zapatillas black" || "Zapatillas black":
                        valor = 115;
                        total("Zapatillas black",valor);
                        break;

                    case "Zapatillas ultraboost white" || "zapatillas ultraboost white" || "zapatillas white" || "Zapatillas white":
                        valor = 120;
                        total("Zapatillas white",valor);
                        break;

                    case "Zapatillas lite racer grey" || "zapatillas lite racer grey" || "zapatillas grey" || "Zapatillas grey":
                        valor = 95;
                        total("Zapatillas grey",valor);
                        break;

                    case "Zapatillas lite racer red" || "zapatillas lite racer red" || "zapatillas red" || "Zapatillas red":
                        valor = 105;
                        total("Zapatillas red",valor);
                        break;

                    case "Zapatillas running purple" || "zapatillas running purple" || "zapatillas purple" || "Zapatillas purple":
                        valor = 90;
                        total("Zapatillas purple",valor);
                        break;

                    case "Zapatillas running orange" || "zapatillas running orange" || "zapatillas orange" || "Zapatillas orange":
                        valor = 85;
                        total("Zapatillas orange",valor);
                        break;

                    case "Zapatillas running green" || "zapatillas running green" || "zapatillas green" || "Zapatillas green":
                        valor = 85;
                        total("Zapatillas green",valor);
                        break;

                    default:
                        alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                }
            }

            else {
                alert ("No tenemos de esa talla lo siento");
            }

        default:
            alert ("Lo siento, no tenemos de esa marca");
            break;
    }
}

else {
    alert ("Lo siento, necesitamos que nos responda con un si o un no, sino no podremos ayudarte");
}
while (condition) {
    
}





























// let pago = parseInt(prompt("ingresar monto"));
// while (pago === monto) {
//     monto = parseInt(prompt("ingresar monto"));
// }
