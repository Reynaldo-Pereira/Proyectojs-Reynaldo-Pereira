// Inicio
let nombreUsuario = prompt ("¿Como te llamas?");
alert (`Hola mucho gusto ${nombreUsuario}, bienvenido/a a nuestra tienda de zapatos`);
let interes = prompt ("¿Buscas alguna marca de zapatos en especifico?");

// Variables
let bucle = 0;
let bucleZapato = 0;
let buclePago = 0;
let jordanPequeños = 10;
let jordanGrandes = 15;
let underArmourPequeños = 12;
let underArmourGrandes = 20;
let pumaPequeños = 8;
let pumaGrandes = 16;
let monto = 0;
let dinero = 1;

// Funciones 
const totalConDescuento = (modelo, costo, descuento) => {
    monto = costo - descuento;
    alert (`Las ${modelo} con descuento te quedarian en ${monto}$`);
    return monto;
}

const total = (modelo, costo) => {
    monto = costo;
    alert (`Las ${modelo} te quedarian en ${monto}$`);
    return monto;
}

const pago = (tipo) => {
    while (buclePago === 0) {
        dinero = parseInt(prompt("Ingresar monto"));
        
        if (dinero === monto) {
            alert (`Compra realizada. Gracias por comprar los ${tipo} en nuestra tienda, vuelva pronto`);
            break;
        }
        else {
            alert ("Monto incorrecto");
        }
    }
}

// Bloque de codigo
if (interes === "si" || interes === "Si" || interes === "SI") {

    while (dinero !== monto) {
        let marca = prompt ("¿Que marca estas buscando?");

        while (bucle === 0) {
                
                // JORDAN
                if ( marca === "jordan" || marca === "Jordan" || marca === "JORDAN") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    var talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 35 && talla < 41) {
                        alert ("Tenemos:\nAirjordan red a 48$\nJordan black a 55$\nJordan grey a 45$");
                        let zapato = prompt ("¿Cual de estos 3 zapatos te gustaria elegir?");
                        
                        if (zapato === "Airjordan red" || zapato === "airjordan red" || zapato ==="Airjordan Red") {
                            let valor = 48;
                            totalConDescuento("Airjordan red",valor, jordanPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Jordan black" || zapato === "jordan black" || zapato === "Jordan Black") {
                            valor = 55;
                            totalConDescuento("Jordan black",valor, jordanPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Jordan grey" || zapato === "jordan grey" || zapato === "Jordan Grey") {
                            valor = 45;
                            totalConDescuento("Jordan grey",valor, jordanPequeños);
                            pago(zapato);
                            break;
                        }
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 49) {
                        alert ("Tenemos:\nAirjordan red a 60$\nJordan grey a 55$\nAirjordan blue a 65$\nJordan black edición limitada a 80$");
                        zapato = prompt ("¿Cual de estos 4 zapatos te gustaria elegir?");
                        
                        if (zapato === "Airjordan red" || zapato === "airjordan red" || zapato === "Airjordan Red") {
                            valor = 60;
                            totalConDescuento("Airjordan red",valor, jordanGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Jordan black" || zapato === "jordan black" || zapato === "Jordan Black") {
                            valor = 80;
                            totalConDescuento("Jordan black",valor, jordanGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Jordan grey" || zapato === "jordan grey" || zapato === "Jordan Grey") {
                            valor = 55;
                            totalConDescuento("Jordan grey",valor, jordanGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Airjordan blue" || zapato === "airjordan blue" || zapato === "Airjordan Blue") {
                            valor = 65;
                            totalConDescuento("Airjordan blue",valor, jordanGrandes);
                            pago(zapato);
                            break;
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
                else if (marca === "under armour" || marca === "Under armour" || marca === "Under Armour" || marca === "UNDER ARMOUR") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 35 && talla < 41) {
                        alert ("Para tallas pequeñas solo tenemos dos modelos:\nLas zapatillas basketball green a 35$\nzapatillas running pink a 40$");
                        zapato = prompt ("¿Cual de estos 2 zapatos te gustaria elegir?");
                        
                        if (zapato === "Basketball green" || zapato === "basketball green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 35;
                            totalConDescuento("Zapatillas green",valor, underArmourPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running pink" || zapato === "running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 40;
                            totalConDescuento("Zapatillas pink",valor, underArmourPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 47) {
                        alert ("Tenemos:\nzapatillas training white a 70$\nzapatillas running pink a 70$\nzapatillas running black a 75$\nzapatillas basketball multicolor a 90$\nzapatillas basketball red a 85$");
                        zapato = prompt ("¿Cual de estos 5 zapatos te gustaria elegir?");
                        
                        if (zapato === "Training white" || zapato === "training white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 70;
                            totalConDescuento("Zapatillas white",valor, underArmourGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running pink" || zapato === "running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 70;
                            totalConDescuento("Zapatillas rosas",valor, underArmourGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running black" || zapato === "running black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 75;
                            totalConDescuento("Zapatillas black",valor, underArmourGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Basketball multicolor" || zapato === "basketball multicolor" || zapato === "zapatillas multicolor" || zapato === "Zapatillas multicolor") {
                            valor = 90;
                            totalConDescuento("Zapatillas multicolor",valor, underArmourGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Basketball red" || zapato === "basketball red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 85;
                            totalConDescuento("Zapatillas red",valor, underArmourGrandes);
                            pago(zapato);
                            break;
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
                else if (marca === "puma" || marca === "Puma" || marca === "PUMA") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 33 && talla < 41) {
                        alert ("Tenemos:\nLas zapatillas running white a 38$\nzapatillas running blue 38$\nzapatillas running red a 38$\nzapatillas classic black a 45$\nzapatillas classic pink a 40$\nzapatillas classic purple a 43$\nzapatillas classic green a 40$");
                        zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");
                        
                        if (zapato === "Running white" || zapato === "running white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 38;
                            totalConDescuento("Zapatillas white",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running blue" || zapato === "running blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 38;
                            totalConDescuento("Zapatillas blue",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running red" || zapato === "running red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 38;
                            totalConDescuento("Zapatillas red",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic black" || zapato === "classic black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 45;
                            totalConDescuento("Zapatillas black",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic pink" || zapato === "classic pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 40;
                            totalConDescuento("Zapatillas pink",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic purple" || zapato === "classic purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 43;
                            totalConDescuento("Zapatillas purple",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic green" || zapato === "classic green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 40;
                            totalConDescuento("Zapatillas green",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 44) {
                        alert ("Tenemos:\nLas zapatillas running white a 43$\nzapatillas running blue 43$\nzapatillas running red a 43$\nzapatillas classic black a 50$\nzapatillas classic pink a 45$\nzapatillas classic purple a 48$\nzapatillas classic green a 45$");
                        zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");
                        
                        if (zapato === "Running white" || zapato === "running white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 43;
                            totalConDescuento("Zapatillas white",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running blue" || zapato === "running blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 43;
                            totalConDescuento("Zapatillas blue",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running red" || zapato === "running red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 43;
                            totalConDescuento("Zapatillas red",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic black" || zapato === "classic black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 50;
                            totalConDescuento("Zapatillas black",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic pink" || zapato === "classic pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 45;
                            totalConDescuento("Zapatillas pink",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic purple" || zapato === "classic purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 48;
                            totalConDescuento("Zapatillas purple",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic green" || zapato === "classic green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 45;
                            totalConDescuento("Zapatillas green",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 43 && talla < 47) {
                        alert ("Tenemos:\nLas zapatillas running white a 48$\nzapatillas running blue 48$\nzapatillas running red a 48$\nzapatillas classic black a 55$\nzapatillas classic pink a 50$\nzapatillas classic purple a 53$\nzapatillas classic green a 50$");
                        zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");
                        
                        if (zapato === "Running white" || zapato === "running white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 48;
                            totalConDescuento("Zapatillas white",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running blue" || zapato === "running blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 48;
                            totalConDescuento("Zapatillas blue",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running red" || zapato === "running red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 48;
                            totalConDescuento("Zapatillas red",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic black" || zapato === "classic black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 55;
                            totalConDescuento("Zapatillas black",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic pink" || zapato === "classic pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 50;
                            totalConDescuento("Zapatillas pink",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic purple" || zapato === "classic purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 53;
                            totalConDescuento("Zapatillas purple",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic green" || zapato === "classic green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 50;
                            totalConDescuento("Zapatillas green",valor, pumaGrandes);
                            pago(zapato);
                            break;
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
                else if (marca === "nike" || marca === "Nike" || marca === "NIKE") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 33 && talla < 41) {
                        alert ("Tenemos:\nzapatillas dunk yellow a 75$\ndunk red a 80$\ndunk blue a 80$\nair black a 90$\nair white a 90$\nair purple a 85$\nair multicolor a 88$\nrunning pink a 80$\nrunning orange a 75$\nrunning green a 75$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Dunk yellow" || zapato === "dunk yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 75;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk red" || zapato === "dunk red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 80;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk blue" || zapato === "dunk blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 80;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air black" || zapato === "air black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 90;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air white" || zapato === "air white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 90;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air purple" || zapato === "air purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 85;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air multicolor" || zapato === "air multicolor" || zapato === "zapatillas multicolor" || zapato === "Zapatillas multicolor") {
                            valor = 88;
                            total("Zapatillas multicolor",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running pink" || zapato === "running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 80;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running orange" || zapato === "running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 75;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running green" || zapato === "running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 75;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 44) {
                        alert ("Tenemos:\nzapatillas dunk yellow a 80$\ndunk red a 85$\ndunk blue a 85$\nair black a 95$\nair white a 95$\nair purple a 90$\nair multicolor a 93$\nrunning pink a 85$\nrunning orange a 80$\nrunning green a 80$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Dunk yellow" || zapato === "dunk yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 80;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk red" || zapato === "dunk red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 85;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk blue" || zapato === "dunk blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 85;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air black" || zapato === "air black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 95;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air white" || zapato === "air white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 95;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air purple" || zapato === "air purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 90;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air multicolor" || zapato === "air multicolor" || zapato === "zapatillas multicolor" || zapato === "Zapatillas multicolor") {
                            valor = 93;
                            total("Zapatillas multicolor",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running pink" || zapato === "running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 85;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running orange" || zapato === "running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 80;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running green" || zapato === "running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 80;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 43 && talla < 47) {
                        alert ("Tenemos:\nzapatillas dunk yellow a 85$\ndunk red a 90$\ndunk blue a 90$\nair black a 100$\nair white a 100$\nair purple a 95$\nair multicolor edición limitada a 110$\nrunning pink a 90$\nrunning orange a 85$\nrunning green a 85$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Dunk yellow" || zapato === "dunk yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 85;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk red" || zapato === "dunk red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 90;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk blue" || zapato === "dunk blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 90;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air black" || zapato === "air black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 100;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air white" || zapato === "air white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 100;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air purple" || zapato === "air purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 95;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air multicolor" || zapato === "air multicolor" || zapato === "zapatillas multicolor" || zapato === "Zapatillas multicolor") {
                            valor = 110;
                            total("Zapatillas multicolor",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running pink" || zapato === "running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 90;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running orange" || zapato === "running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 85;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running green" || zapato === "running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 85;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
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
                else if (marca === "adidas" || marca === "Adidas" || marca === "ADIDAS") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 33 && talla < 41) {
                        alert ("Tenemos:\nzapatillas adizero yellow 75$\nadizero pink a 75$\nadizero blue a 80$\nlite racer black a 105$\nultraboost white a 110$\nlite racer grey a 85$\nlite racer red a 95$\nrunning purple a 80$\nrunning orange a 75$\nrunning green a 75$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Zapatillas adizero yellow" || zapato === "zapatillas adizero yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 75;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas adizero pink" || zapato === "zapatillas adizero pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 75;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas adizero blue" || zapato === "zapatillas adizero blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 80;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas lite racer black" || zapato === "zapatillas lite racer black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 105;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas ultraboost white" || zapato === "zapatillas ultraboost white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 110;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas lite racer grey" || zapato === "zapatillas lite racer grey" || zapato === "zapatillas grey" || zapato === "Zapatillas grey") {
                            valor = 85;
                            total("Zapatillas grey",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas lite racer red" || zapato === "zapatillas lite racer red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 95;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas running purple" || zapato === "zapatillas running purple" ||zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 80;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas running orange" || zapato === "zapatillas running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 75;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas running green" || zapato === "zapatillas running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 75;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 44) {
                        alert ("Tenemos:\nzapatillas adizero yellow 80$\nadizero pink a 80$\nadizero blue a 85$\nlite racer black a 110$\nultraboost white a 115$\nlite racer grey a 90$\nlite racer red a 100$\nrunning purple a 85$\nrunning orange a 80$\nrunning green a 80$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Adizero yellow" || zapato === "adizero yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 80;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Adizero pink" || zapato === "adizero pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 80;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Adizero blue" || zapato === "adizero blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 85;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer black" || zapato === "lite racer black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 110;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Ultraboost white" || zapato === "ultraboost white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 115;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer grey" || zapato === "lite racer grey" || zapato === "zapatillas grey" || zapato === "Zapatillas grey") {
                            valor = 90;
                            total("Zapatillas grey",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer red" || zapato === "lite racer red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 100;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running purple" || zapato === "running purple" ||zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 85;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running orange" || zapato === "running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 80;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running green" || zapato === "running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 80;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 43 && talla < 47) {
                        alert ("Tenemos:\nzapatillas adizero yellow 85$\nadizero pink a 85$\nadizero blue a 90$\nlite racer black a 115$\nultraboost white a 120$\nlite racer grey a 95$\nlite racer red a 105$\nrunning purple a 90$\nrunning orange a 85$\nrunning green a 85$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Adizero yellow" || zapato === "adizero yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 85;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Adizero pink" || zapato === "adizero pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 85;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Adizero blue" || zapato === "adizero blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 90;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer black" || zapato === "lite racer black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 115;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Ultraboost white" || zapato === "ultraboost white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 120;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer grey" || zapato === "lite racer grey" || zapato === "zapatillas grey" || zapato === "Zapatillas grey") {
                            valor = 95;
                            total("Zapatillas grey",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer red" || zapato === "lite racer red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 105;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running purple" || zapato === "running purple" ||zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 90;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running orange" || zapato === "running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 85;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running green" || zapato === "running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 85;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
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
                
                else {
                    alert ("Lo siento, no tenemos de esa marca");
                    break;
                }
            }
        }
    }

else if (interes === "no" || interes === "No" || interes === "NO") {

    while (dinero !== monto) {
        marca = prompt ("Las marcas que tenemos disponibles son: Jordan, Under Armour, Puma, Adidas y Nike ¿Cual de estas 5 opciones te gustaria ver?");

        while (bucle === 0) {
                
                // JORDAN
                if ( marca === "jordan" || marca === "Jordan" || marca === "JORDAN") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 35 && talla < 41) {
                        alert ("Tenemos:\nAirjordan red a 48$\nJordan black a 55$\nJordan grey a 45$");
                        zapato = prompt ("¿Cual de estos 3 zapatos te gustaria elegir?");
                        
                        if (zapato === "Airjordan red" || zapato === "airjordan red" || zapato ==="Airjordan Red") {
                            valor = 48;
                            totalConDescuento("Airjordan red",valor, jordanPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Jordan black" || zapato === "jordan black" || zapato === "Jordan Black") {
                            valor = 55;
                            totalConDescuento("Jordan black",valor, jordanPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Jordan grey" || zapato === "jordan grey" || zapato === "Jordan Grey") {
                            valor = 45;
                            totalConDescuento("Jordan grey",valor, jordanPequeños);
                            pago(zapato);
                            break;
                        }
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 49) {
                        alert ("Tenemos:\nAirjordan red a 60$\nJordan grey a 55$\nAirjordan blue a 65$\nJordan black edición limitada a 80$");
                        zapato = prompt ("¿Cual de estos 4 zapatos te gustaria elegir?");
                        
                        if (zapato === "Airjordan red" || zapato === "airjordan red" || zapato === "Airjordan Red") {
                            valor = 60;
                            totalConDescuento("Airjordan red",valor, jordanGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Jordan black" || zapato === "jordan black" || zapato === "Jordan Black") {
                            valor = 80;
                            totalConDescuento("Jordan black",valor, jordanGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Jordan grey" || zapato === "jordan grey" || zapato === "Jordan Grey") {
                            valor = 55;
                            totalConDescuento("Jordan grey",valor, jordanGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Airjordan blue" || zapato === "airjordan blue" || zapato === "Airjordan Blue") {
                            valor = 65;
                            totalConDescuento("Airjordan blue",valor, jordanGrandes);
                            pago(zapato);
                            break;
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
                else if (marca === "under armour" || marca === "Under armour" || marca === "Under Armour" || marca === "UNDER ARMOUR") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 35 && talla < 41) {
                        alert ("Para tallas pequeñas solo tenemos dos modelos:\nLas zapatillas basketball green a 35$\nzapatillas running pink a 40$");
                        zapato = prompt ("¿Cual de estos 2 zapatos te gustaria elegir?");
                        
                        if (zapato === "Basketball green" || zapato === "basketball green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 35;
                            totalConDescuento("Zapatillas green",valor, underArmourPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running pink" || zapato === "running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 40;
                            totalConDescuento("Zapatillas pink",valor, underArmourPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 47) {
                        alert ("Tenemos:\nzapatillas training white a 70$\nzapatillas running pink a 70$\nzapatillas running black a 75$\nzapatillas basketball multicolor a 90$\nzapatillas basketball red a 85$");
                        zapato = prompt ("¿Cual de estos 5 zapatos te gustaria elegir?");
                        
                        if (zapato === "Training white" || zapato === "training white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 70;
                            totalConDescuento("Zapatillas white",valor, underArmourGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running pink" || zapato === "running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 70;
                            totalConDescuento("Zapatillas rosas",valor, underArmourGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running black" || zapato === "running black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 75;
                            totalConDescuento("Zapatillas black",valor, underArmourGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Basketball multicolor" || zapato === "basketball multicolor" || zapato === "zapatillas multicolor" || zapato === "Zapatillas multicolor") {
                            valor = 90;
                            totalConDescuento("Zapatillas multicolor",valor, underArmourGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Basketball red" || zapato === "basketball red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 85;
                            totalConDescuento("Zapatillas red",valor, underArmourGrandes);
                            pago(zapato);
                            break;
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
                else if (marca === "puma" || marca === "Puma" || marca === "PUMA") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte y con descuento`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 33 && talla < 41) {
                        alert ("Tenemos:\nLas zapatillas running white a 38$\nzapatillas running blue 38$\nzapatillas running red a 38$\nzapatillas classic black a 45$\nzapatillas classic pink a 40$\nzapatillas classic purple a 43$\nzapatillas classic green a 40$");
                        zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");
                        
                        if (zapato === "Running white" || zapato === "running white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 38;
                            totalConDescuento("Zapatillas white",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running blue" || zapato === "running blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 38;
                            totalConDescuento("Zapatillas blue",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running red" || zapato === "running red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 38;
                            totalConDescuento("Zapatillas red",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic black" || zapato === "classic black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 45;
                            totalConDescuento("Zapatillas black",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic pink" || zapato === "classic pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 40;
                            totalConDescuento("Zapatillas pink",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic purple" || zapato === "classic purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 43;
                            totalConDescuento("Zapatillas purple",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic green" || zapato === "classic green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 40;
                            totalConDescuento("Zapatillas green",valor, pumaPequeños);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 44) {
                        alert ("Tenemos:\nLas zapatillas running white a 43$\nzapatillas running blue 43$\nzapatillas running red a 43$\nzapatillas classic black a 50$\nzapatillas classic pink a 45$\nzapatillas classic purple a 48$\nzapatillas classic green a 45$");
                        zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");
                        
                        if (zapato === "Running white" || zapato === "running white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 43;
                            totalConDescuento("Zapatillas white",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running blue" || zapato === "running blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 43;
                            totalConDescuento("Zapatillas blue",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running red" || zapato === "running red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 43;
                            totalConDescuento("Zapatillas red",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic black" || zapato === "classic black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 50;
                            totalConDescuento("Zapatillas black",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic pink" || zapato === "classic pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 45;
                            totalConDescuento("Zapatillas pink",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic purple" || zapato === "classic purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 48;
                            totalConDescuento("Zapatillas purple",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic green" || zapato === "classic green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 45;
                            totalConDescuento("Zapatillas green",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 43 && talla < 47) {
                        alert ("Tenemos:\nLas zapatillas running white a 48$\nzapatillas running blue 48$\nzapatillas running red a 48$\nzapatillas classic black a 55$\nzapatillas classic pink a 50$\nzapatillas classic purple a 53$\nzapatillas classic green a 50$");
                        zapato = prompt ("¿Cual de estos 7 zapatos te gustaria elegir?");
                        
                        if (zapato === "Running white" || zapato === "running white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 48;
                            totalConDescuento("Zapatillas white",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running blue" || zapato === "running blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 48;
                            totalConDescuento("Zapatillas blue",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running red" || zapato === "running red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 48;
                            totalConDescuento("Zapatillas red",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic black" || zapato === "classic black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 55;
                            totalConDescuento("Zapatillas black",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic pink" || zapato === "classic pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 50;
                            totalConDescuento("Zapatillas pink",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic purple" || zapato === "classic purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 53;
                            totalConDescuento("Zapatillas purple",valor, pumaGrandes);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Classic green" || zapato === "classic green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 50;
                            totalConDescuento("Zapatillas green",valor, pumaGrandes);
                            pago(zapato);
                            break;
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
                else if (marca === "nike" || marca === "Nike" || marca === "NIKE") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 33 && talla < 41) {
                        alert ("Tenemos:\nzapatillas dunk yellow a 75$\ndunk red a 80$\ndunk blue a 80$\nair black a 90$\nair white a 90$\nair purple a 85$\nair multicolor a 88$\nrunning pink a 80$\nrunning orange a 75$\nrunning green a 75$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Dunk yellow" || zapato === "dunk yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 75;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk red" || zapato === "dunk red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 80;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk blue" || zapato === "dunk blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 80;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air black" || zapato === "air black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 90;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air white" || zapato === "air white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 90;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air purple" || zapato === "air purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 85;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air multicolor" || zapato === "air multicolor" || zapato === "zapatillas multicolor" || zapato === "Zapatillas multicolor") {
                            valor = 88;
                            total("Zapatillas multicolor",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running pink" || zapato === "running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 80;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running orange" || zapato === "running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 75;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running green" || zapato === "running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 75;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 44) {
                        alert ("Tenemos:\nzapatillas dunk yellow a 80$\ndunk red a 85$\ndunk blue a 85$\nair black a 95$\nair white a 95$\nair purple a 90$\nair multicolor a 93$\nrunning pink a 85$\nrunning orange a 80$\nrunning green a 80$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Dunk yellow" || zapato === "dunk yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 80;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk red" || zapato === "dunk red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 85;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk blue" || zapato === "dunk blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 85;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air black" || zapato === "air black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 95;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air white" || zapato === "air white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 95;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air purple" || zapato === "air purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 90;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air multicolor" || zapato === "air multicolor" || zapato === "zapatillas multicolor" || zapato === "Zapatillas multicolor") {
                            valor = 93;
                            total("Zapatillas multicolor",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running pink" || zapato === "running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 85;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running orange" || zapato === "running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 80;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running green" || zapato === "running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 80;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 43 && talla < 47) {
                        alert ("Tenemos:\nzapatillas dunk yellow a 85$\ndunk red a 90$\ndunk blue a 90$\nair black a 100$\nair white a 100$\nair purple a 95$\nair multicolor edición limitada a 110$\nrunning pink a 90$\nrunning orange a 85$\nrunning green a 85$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Dunk yellow" || zapato === "dunk yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 85;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk red" || zapato === "dunk red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 90;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Dunk blue" || zapato === "dunk blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 90;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air black" || zapato === "air black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 100;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air white" || zapato === "air white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 100;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air purple" || zapato === "air purple" || zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 95;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Air multicolor" || zapato === "air multicolor" || zapato === "zapatillas multicolor" || zapato === "Zapatillas multicolor") {
                            valor = 110;
                            total("Zapatillas multicolor",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running pink" || zapato === "running pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 90;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running orange" || zapato === "running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 85;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running green" || zapato === "running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 85;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
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
                else if (marca === "adidas" || marca === "Adidas" || marca === "ADIDAS") {
                    alert (`Perfecto, tenemos zapatos ${marca} para ofrecerte`);
                    talla = parseInt(prompt("¿Que talla de zapato usas?"));
                    
                    if (talla > 33 && talla < 41) {
                        alert ("Tenemos:\nzapatillas adizero yellow 75$\nadizero pink a 75$\nadizero blue a 80$\nlite racer black a 105$\nultraboost white a 110$\nlite racer grey a 85$\nlite racer red a 95$\nrunning purple a 80$\nrunning orange a 75$\nrunning green a 75$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Zapatillas adizero yellow" || zapato === "zapatillas adizero yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 75;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas adizero pink" || zapato === "zapatillas adizero pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 75;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas adizero blue" || zapato === "zapatillas adizero blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 80;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas lite racer black" || zapato === "zapatillas lite racer black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 105;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas ultraboost white" || zapato === "zapatillas ultraboost white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 110;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas lite racer grey" || zapato === "zapatillas lite racer grey" || zapato === "zapatillas grey" || zapato === "Zapatillas grey") {
                            valor = 85;
                            total("Zapatillas grey",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas lite racer red" || zapato === "zapatillas lite racer red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 95;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas running purple" || zapato === "zapatillas running purple" ||zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 80;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas running orange" || zapato === "zapatillas running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 75;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Zapatillas running green" || zapato === "zapatillas running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 75;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 40 && talla < 44) {
                        alert ("Tenemos:\nzapatillas adizero yellow 80$\nadizero pink a 80$\nadizero blue a 85$\nlite racer black a 110$\nultraboost white a 115$\nlite racer grey a 90$\nlite racer red a 100$\nrunning purple a 85$\nrunning orange a 80$\nrunning green a 80$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Adizero yellow" || zapato === "adizero yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 80;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Adizero pink" || zapato === "adizero pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 80;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Adizero blue" || zapato === "adizero blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 85;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer black" || zapato === "lite racer black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 110;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Ultraboost white" || zapato === "ultraboost white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 115;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer grey" || zapato === "lite racer grey" || zapato === "zapatillas grey" || zapato === "Zapatillas grey") {
                            valor = 90;
                            total("Zapatillas grey",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer red" || zapato === "lite racer red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 100;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running purple" || zapato === "running purple" ||zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 85;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running orange" || zapato === "running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 80;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running green" || zapato === "running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 80;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else {
                            alert ("No es ninguna de las opciones, si quiere puede elegir otra marca de nuestro catálogo");
                            break;
                        }
                    }
                    
                    else if (talla > 43 && talla < 47) {
                        alert ("Tenemos:\nzapatillas adizero yellow 85$\nadizero pink a 85$\nadizero blue a 90$\nlite racer black a 115$\nultraboost white a 120$\nlite racer grey a 95$\nlite racer red a 105$\nrunning purple a 90$\nrunning orange a 85$\nrunning green a 85$");
                        zapato = prompt ("¿Cual de estos 10 zapatos te gustaria elegir?");
                        
                        if (zapato === "Adizero yellow" || zapato === "adizero yellow" || zapato === "zapatillas yellow" || zapato === "Zapatillas yellow") {
                            valor = 85;
                            total("Zapatillas yellow",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Adizero pink" || zapato === "adizero pink" || zapato === "zapatillas pink" || zapato === "Zapatillas pink") {
                            valor = 85;
                            total("Zapatillas pink",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Adizero blue" || zapato === "adizero blue" || zapato === "zapatillas blue" || zapato === "Zapatillas blue") {
                            valor = 90;
                            total("Zapatillas blue",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer black" || zapato === "lite racer black" || zapato === "zapatillas black" || zapato === "Zapatillas black") {
                            valor = 115;
                            total("Zapatillas black",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Ultraboost white" || zapato === "ultraboost white" || zapato === "zapatillas white" || zapato === "Zapatillas white") {
                            valor = 120;
                            total("Zapatillas white",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer grey" || zapato === "lite racer grey" || zapato === "zapatillas grey" || zapato === "Zapatillas grey") {
                            valor = 95;
                            total("Zapatillas grey",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Lite racer red" || zapato === "lite racer red" || zapato === "zapatillas red" || zapato === "Zapatillas red") {
                            valor = 105;
                            total("Zapatillas red",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running purple" || zapato === "running purple" ||zapato === "zapatillas purple" || zapato === "Zapatillas purple") {
                            valor = 90;
                            total("Zapatillas purple",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running orange" || zapato === "running orange" || zapato === "zapatillas orange" || zapato === "Zapatillas orange") {
                            valor = 85;
                            total("Zapatillas orange",valor);
                            pago(zapato);
                            break;
                        }
                        
                        else if (zapato === "Running green" || zapato === "running green" || zapato === "zapatillas green" || zapato === "Zapatillas green") {
                            valor = 85;
                            total("Zapatillas green",valor);
                            pago(zapato);
                            break;
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
                
                else {
                    alert ("Lo siento, no tenemos de esa marca");
                    break;
                }
            }
        }
    }

else {
    alert ("Lo siento, necesitamos que nos responda con un si o un no, sino no podremos ayudarte");
}