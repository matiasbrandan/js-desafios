//VARIABLES

let inputName = document.getElementById ("userName");
let inputSurname = document.getElementById("userSurname");
let inputMonto = document.getElementById ("userMonto");
let cuotas = document.getElementById ("userCuotas");
let btnCalcular = document.getElementById("btnCalcular");
let btnUltima = document.getElementById ("btnUltima");
let datosJson;

const datosGuardados = [];
const opcionesDeCuotas = [6, 12, 18, 24, 30, 36];


for (opciones of opcionesDeCuotas) {
    let option = document.createElement("option");
    option.innerHTML=opciones;
    cuotas.appendChild(option);
}

inputName.onchange = () => {
    inputName.value;
}
inputSurname.onchange = () => {
    inputSurname.value;
}
inputMonto.onchange = () => {
    parseInt (inputMonto.value);
}
cuotas.onchange = () => {
    cuotas.value;
}

function datosUser() { if (inputName.value !== "" && inputSurname.value !== "" && inputMonto.value >= 1000 && cuotas.value !== "Ninguna" ){ 
        return true
    } else {
        return false
    } 
}

function guardarDatos () {
    if (datosUser ()){
        datosGuardados.push (new datos (inputName.value, inputSurname.value, inputMonto.value, cuotas.value))
    }
}

class datos{
    constructor(nombre, surname, monto, cuotas) {
        this.nombre = nombre;
        this.surname   = surname;
        this.monto  = monto;
        this.cuotas = cuotas;
    }
}

function interes (){
    for (porMes of opcionesDeCuotas){
        switch (cuotas.value) {
                    case "6":
                        let primera =inputMonto.value * 1.2;
                        return primera / 6;
                    case "12":
                        let segunda = inputMonto.value * 1.5;
                        return segunda / 12;
                    case "18":
                        let tercera = inputMonto.value * 1.7;
                        return tercera / 18;
                    case "24":
                        let cuarta = inputMonto.value * 1.9;
                        return cuarta / 24;
                    case "30":
                        let quinta = inputMonto.value * 2.2 ;
                        return quinta / 30;
                    case "36":
                        let sexta = inputMonto.value * 2.7 ;
                        return sexta / 36;
                    default:
                        break
                }
    }
}



function mostrarDatos() {
        let seccion = document.getElementById("mostrar")
        let divDatos = document.getElementById("datosGuardados")
        btnCalcular.onclick = () => {
            seccion.innerHTML = `<p>nombre:${inputName.value}</p>
                                    <p>apellido:${inputSurname.value}</p>
                                    <p>monto:${inputMonto.value}</p>
                                    <p>cuotas:${cuotas.value}</p>
                                    <p>total con interes:${parseInt(inputMonto.value) + interes(cuotas.value)}</p>
                                    <p>por mes:${interes(cuotas.value).toFixed(2)}`
            guardarDatos ();
            localStorage.setItem ("ultima simulacion", JSON.stringify(datosGuardados));
            btnUltima.classList.remove("ocultar")
            btnUltima.onclick = () => {
                seccion.className = "ocultar"
                for (let i = 0; i < localStorage.length; i++) {
                    alert(`${ localStorage.getItem("ultima simulacion") } total con interes:${ parseInt(inputMonto.value) + interes(cuotas.value) } por mes:${ interes(cuotas.value).toFixed(2) }`);
                }
            window.location.reload();
            }
            }
        }

        


mostrarDatos();