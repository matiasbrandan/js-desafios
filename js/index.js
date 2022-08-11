// OBJETOS

class datosDelSolicitante {
    constructor (nombre,apellido,monto,cuotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.monto = monto;
        this.cuotas = cuotas;
    }

}

// ARRAY

const solicitante = [];

//funcuiones

function nuevoSolicitante () {
    let nombre = prompt("ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let monto = parseInt(prompt("Ingresa el monto:"));
    alert ("elija la cantidad de cuotas de las siguentes opciones")
    let cuotas = prompt ("6 - 12 - 18 - 24 -30 -36");
        solicitante.push(new datosDelSolicitante(nombre, apellido, monto, cuotas))
        console.table(solicitante)
}
nuevoSolicitante ()

for (const calcularCuota of solicitante) {
    let cuotas = calcularCuota.cuotas;
    let monto = calcularCuota.monto;
    switch (cuotas) {
        case "6":
            let primera = monto + (monto * 0.05);
            alert ("su monto a abonar es " + primera / 6 + "por mes");
            break;
        case "12":
            let segunda = monto + (monto * 0.1);
            alert ("su monto a abonar es " + segunda / 12 + "por mes");
            break;
        case "18":
            let tercera = monto + (monto * 0.25);
            alert ("su monto a abonar es " + tercera / 18 + "por mes");
            break;
        case "24":
            let cuarta = monto + (monto * 0.35);
            alert ("su monto a abonar es " + cuarta / 24 + "por mes");
            break;
        case "30":
            let quinta = monto + (monto * 0.4 );
            alert ("su monto a abonar es " + quinta / 30 + "por mes");
        case "36":
            let sexta = monto + (monto * 0.5 );
            alert ("su monto a abonar es " + sexta / 36 + "por mes");
        default:
            alert ("no es una cantidad de cuotas validas");
    }
}



