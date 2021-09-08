class Figura {
    constructor() {

    }
    //Método para hallar el área de un disco
    areaDisco(radioDisco) {
        return Math.PI * (Math.pow(Number(radioDisco), 2));
    }
    //Método para halla el área de una elipse de semiejes
    areaElipseDeSemiejes(semiejeMenor, semiejeMayor) {
        return Math.PI * semiejeMenor * semiejeMayor;
    }
    //Método para hallar el área de una esfera
    areaEsfera(radioEsfera) {
        return 4 * (Math.PI * (Math.pow(Number(radioEsfera), 2)));
    }

    //Método para hallar el área lateral de un cilindro
    areaLateralCilindro(radioCilindro, alturaCilindro) {
        return 2 * Math.PI * radioCilindro * alturaCilindro;
    }

    //Método para hallar el área lateral de un cono
    areaLateralCono(radioCono, generatrizCono) {
        return Math.PI * radioCono * generatrizCono;
    }

    //método para hallar el volumen de una esfera
    volumenEsfera(radioEsfera2) {
        return (4 / 3) * Math.PI * (Math.pow(Number(radioEsfera2), 3));
    }

    //método para hallar el volumen de un cilindro
    volumenCilindro(areaBaseCilindro, alturaCilindro2) {
        return areaBaseCilindro * alturaCilindro2;
    }

    //método para hallar el volumen de un cono
    volumenCono(areaBaseCono, alturaCono2) {
        return (areaBaseCono * alturaCono2) / 3;
    }
}


let figuras = new Figura();


let opcion = prompt("********Escoja la opción que desee********\n"
    + "1.Calcular el area de un disco \n"
    + "2.Area de una Elipse de Semiejes \n"
    + "3.Area de una esfera\n"
    + "4.Area lateral de un cilindro\n"
    + "5.Área lateral de un cono\n"
    + "6.Volumen de una esfera\n"
    + "7.Volumen de un cilindro\n"
    + "8.Volumen de un cono")

opcionEscogida = Number(opcion);
switch (opcionEscogida) {

    case 1:
        let radioDisco = prompt("Ingrese el radio del disco");
        let radioDisco1 = Number(radioDisco);
        let resultadoAreaDisco = `El Área del disco es: ${figuras.areaDisco(radioDisco1).toFixed(2)}`
        alert(resultadoAreaDisco);
        console.log(resultadoAreaDisco);
        break;
    case 2:
        let semiejeMenor = prompt("Ingrese el valor del semieje menor");
        let semiejeMenor1 = Number(semiejeMenor);
        let semiejeMayor = prompt("Ingrese el valor del semieje menor");
        let semiejeMayor1 = Number(semiejeMayor);
        let resultadoAreaElipse = `El área de la elipse de semiejes es: ${figuras.areaElipseDeSemiejes(semiejeMenor1, semiejeMayor1).toFixed(2)}`
        alert(resultadoAreaElipse);
        console.log(resultadoAreaElipse);
        break;
    case 3:
        let radioEsfera = prompt("Ingrese el radio de la esfera");
        let radioEsfera1 = Number(radioEsfera);
        let resultadoAreaEsfera = `El área de la esfera es: ${figuras.areaEsfera(radioEsfera1).toFixed(2)}`
        alert(resultadoAreaEsfera);
        console.log(resultadoAreaEsfera);
        break;
    case 4:
        let radioCilindro = prompt("Ingrese el radio del cilindro");
        let radioCilindro1 = Number(radioCilindro);
        let alturaCilindro = prompt("Ingrese la altura del cilindro");
        let alturaCilindro1 = Number(alturaCilindro);
        let resultadoAreaLateralCilindro = `El área lateral del cilindro es: ${figuras.areaLateralCilindro(radioCilindro1, alturaCilindro1).toFixed(2)}`
        alert(resultadoAreaLateralCilindro);
        console.log(resultadoAreaLateralCilindro);
        break;
    case 5:
        let radioCono = prompt("Ingrese el radio del cono");
        let radioCono1 = Number(radioCono);
        let generatrizCono = prompt("Ingrese la altura del cilindro");
        let generatrizCono1 = Number(generatrizCono);
        let resultadoAreaLateralCono = `El área lateral del cilindro es: ${figuras.areaLateralCono(radioCono1, generatrizCono1).toFixed(2)}`
        alert(resultadoAreaLateralCono);
        console.log(resultadoAreaLateralCono);
        break;
    case 6:
        let radioEsfera2 = prompt("Ingrese el radio de la esfera");
        let radioEsfera3 = Number(radioEsfera2);
        let resultadoVolumenEsfera = `El Volumen de la esfera es: ${figuras.volumenEsfera(radioEsfera3).toFixed(2)}`
        alert(resultadoVolumenEsfera);
        console.log(resultadoVolumenEsfera);
        break;
    case 7:
        let radioCilindro2 = prompt("Ingrese el radio del cilindro");
        let radioCilindro3 = Number(radioCilindro2);
        let alturaCilindro2 = prompt("Ingrese la altura del cilindro");
        let alturaCilindro3 = Number(alturaCilindro2);
        let areaBaseCilindro = Math.PI * Math.pow(radioCilindro3, 2);
        let resultadoVolumenCilindro = `El volumen del cilindro es: ${figuras.volumenCilindro(areaBaseCilindro, alturaCilindro3).toFixed(2)}`
        alert(resultadoVolumenCilindro);
        console.log(resultadoVolumenCilindro);
        break;
    case 8:
        let radioCono2 = prompt("Ingrese el radio del cono");
        let radioCono3 = Number(radioCono2);
        let alturaCono2 = prompt("Ingrese la altura del cono");
        let alturaCono3 = Number(alturaCono2);
        let areaBaseCono = Math.PI * Math.pow(radioCono3, 2);
        let resultadoVolumenCono = `El volumen del cono es: ${figuras.volumenCono(areaBaseCono, alturaCono3).toFixed(2)}`
        alert(resultadoVolumenCono);
        console.log(resultadoVolumenCono);
        break;
    default:
        alert("La opción que ha escogido es incorrecta");

}
