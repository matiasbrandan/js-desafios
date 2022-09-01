//VARIABLES

let inputName = document.getElementById ("userName");
let inputSurname = document.getElementById("userSurname");
let inputMonto = document.getElementById ("userMonto") ;
let cuotas = document.getElementById ("userCuotas");
let btnCalcular = document.getElementById("btnCalcular");
let btnUltima = document.getElementById ("btnUltima");
let seccion = document.getElementById("mostrar");
let divDatos = document.getElementById("datosGuardados");
let selecDivisas = document.getElementById("userDivisas");
let proMonto = document.getElementById("proMonto") ;
let indice = document.getElementById("indice");
let indicee = document.getElementById("indicee")

let datosJson;
const datosGuardados = [];
const recuperados = [];
const opcionesDeCuotas = [6, 12,24,36];
const monedas = ["peso Argentino", "euro", "dolar", "real"];

for (opciones of opcionesDeCuotas) {
    let option = document.createElement("option");
    option.innerHTML=opciones;
    cuotas.appendChild(option);
}
for (let opciones of monedas ) {
    let option = document.createElement("option");
    option.innerHTML=opciones;
    selecDivisas.appendChild(option);
}


inputName.onchange = () => {
    inputName.value;
}
inputSurname.onchange = () => {
    inputSurname.value;
}
inputMonto.onchange = () => {
    parseInt (inputMonto.value);
    proMonto.value = inputMonto.value;
}
cuotas.onchange = () => {
    cuotas.value;
}
selecDivisas.onchange = () => {
    if (selecDivisas.value == "peso Argentino" ){
        inputMonto.setAttribute("value",10000);
        inputMonto.setAttribute("min",10000);
        inputMonto.setAttribute("max",1500000);
        proMonto.setAttribute("min",10000);
        proMonto.setAttribute("max",1500000)
    }else if (selecDivisas.value == "euro"){
        inputMonto.setAttribute("value",1000);
            inputMonto.setAttribute("min",1000);
            inputMonto.setAttribute("max",10000);
            proMonto.setAttribute("min",1000);
            proMonto.setAttribute("max",10000)
    }else if (selecDivisas.value == "dolar"){
        inputMonto.setAttribute("value",1000);
        inputMonto.setAttribute("min",1000);
        inputMonto.setAttribute("max",20000);
        proMonto.setAttribute("min",1000);
        proMonto.setAttribute("max",100000)
    }else if (selecDivisas.value == "real"){
        inputMonto.setAttribute("value",10000);
        inputMonto.setAttribute("min",10000);
        inputMonto.setAttribute("max",800000);
        proMonto.setAttribute("min",10000);
        proMonto.setAttribute("max",800000)
    }
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
    if (selecDivisas.value == "peso Argentino") {
        for (porMes of opcionesDeCuotas){
            switch (cuotas.value) {
                        case "6":
                            let primera =inputMonto.value * 1.2;
                            return primera / 6;
                        case "12":
                            let segunda = inputMonto.value * 1.5;
                            return segunda / 12;
                        case "24":
                            let cuarta = inputMonto.value * 1.7;
                            return cuarta / 24;
                        case "36":
                            let sexta = inputMonto.value * 2.5;
                            return sexta / 36;
                        default:
                            break
                    }
        }
    } else if (selecDivisas.value == "euro"){
        for (porMes of opcionesDeCuotas){
            switch (cuotas.value) {
                    case "6":
                        let primera =inputMonto.value * 1.5;
                        return primera / 6;
                    case "12":
                        let segunda = inputMonto.value * 2.2;
                        return segunda / 12;
                    case "24":
                        let cuarta = inputMonto.value * 2.8;
                        return cuarta / 24;
                    case "36":
                        let sexta = inputMonto.value * 3.2;
                        return sexta / 36;
                    default:
                        break
            }
        }
    } else if (selecDivisas.value == "dolar"){
        for (cambio of opcionesDeCuotas){
            switch (cuotas.value) {
                    case "6":
                        let primera =inputMonto.value * 1.4;
                        return primera / 6;
                    case "12":
                        let segunda = inputMonto.value * 1.9;
                        return segunda / 12;
                    case "24":
                        let cuarta = inputMonto.value * 2.3;
                        return cuarta / 24;
                    case "36":
                        let sexta = inputMonto.value * 3;
                        return sexta / 36;
                    default:
                        break
            }
        }
    } else if (selecDivisas.value == "real"){
        for (porMes of opcionesDeCuotas){
            switch (cuotas.value) {
                    case "6":
                        let primera =inputMonto.value * 1.3;
                        return primera / 6;
                    case "12":
                        let segunda = inputMonto.value * 1.6;
                        return segunda / 12;
                    case "24":
                        let cuarta = inputMonto.value * 2.2;
                        return cuarta / 24;
                    case "36":
                        let sexta = inputMonto.value * 2.8;
                        return sexta / 36;
                    default:
                        break
            }
        }
    }
    
}



btnCalcular.onclick = () => {
    if (inputName.value !== "" && inputSurname.value !== ""){
        if (inputMonto.value !== ""){
            let sumaa;
            let suma = () =>{
                sumaa =(parseFloat(inputMonto.value)) + (interes(cuotas.value));
                return sumaa
            } ;
    seccion.innerHTML = `<p class="mostrar__pN">${inputName.value}</p>
                        <p class="mostrar__pA">${inputSurname.value}</p>
                        <p class="mostrar__pM">${selecDivisas.value}:${inputMonto.value}</p>
                        <p class="mostrar__pC">${cuotas.value}</p>
                        <p class="mostrar__pT">${suma().toFixed(2)}</p>
                        <p class="mostrar__pP">${interes(cuotas.value).toFixed(2)}</p>`
    btnUltima.classList.remove("ocultar")
    indice.classList.remove("ocultar")
        } else swal({
            text: "NO HA INGRESADO NINGUN MONTO",icon: "warning",
        });
    } else swal({
        text: "COMPLETE TODOS LOS CAMPOS", icon: "warning",
    })
    guardarDatos ();
    let guardados = localStorage.setItem ("simulaciones", JSON.stringify(datosGuardados));
    let almacenados = JSON.parse(localStorage.getItem("simulaciones"))
    for (let i = 0; i <= almacenados.length ; i++){
        let nombre = almacenados[i].nombre ;
        let apellido = almacenados[i].surname;
        let monto = almacenados[i].monto;
        let cuotas = almacenados[i].cuotas;
        recuperados.push( new datos(nombre,apellido,monto,cuotas))
    }
}
    
btnUltima.onclick = () => {
    indicee.classList.remove("ocultar")
    for (let i = 0; i < recuperados.length;i++){
        divDatos.innerHTML += `<p class="datosGuardados__p">${recuperados[i].nombre}</p>
                            <p class="datosGuardados__p">${recuperados[i].surname}</p>
                            <p class="datosGuardados__p">${selecDivisas.value}:${recuperados[i].monto}</p>
                            <p class="datosGuardados__p">${recuperados[i].cuotas}</p>
                            <p class="datosGuardados__p">${parseFloat(inputMonto.value) + (interes(cuotas.value))}</p>
                            <p class="datosGuardados__p">${interes(cuotas.value).toFixed(2)}</p>
                            `;
    }
}
