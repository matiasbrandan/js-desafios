
class datosDelSolicitante {
    constructor (nombre,apellido,monto,cuotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.monto = monto;
        this.cuotas = cuotas;
    }

}
const solicitante = [];
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

const almacenadoss = localStorage.setItem("listaProductos", JSON.stringify(solicitante));

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productoss = [];
let seccion = document.getElementById("mostrar")
for (let i = 0; i< almacenados.length ; i++){
    let nombre = almacenados[i].nombre;
    let apellido = almacenados[i].apellido;
    let monto = almacenados[i].monto;
    let cuotas = almacenados[i].cuotas;
    productoss.push( new datosDelSolicitante(nombre,apellido,monto,cuotas))
}

for (let i = 0; i< productoss.length;i++){
    seccion.innerHTML = `<p>nombre:${productoss[i].nombre}</p>
                        <p>apellido:${productoss[i].apellido}</p>
                        <p>monto:${productoss[i].monto}</p>
                        <p>cuotas:${productoss[i].cuotas}</p>
                        `;
}