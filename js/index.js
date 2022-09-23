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
let indicee = document.getElementById("indicee");
let btnSubmit = document.getElementById("btnsubmit");
let tituloDG = document.getElementById("tituloDatosGuardados");
let selecPais = document.getElementById("userPais");

const datosGuardados = [];
const opcionesDeCuotas = [6, 12,24,36];
const monedas = ["peso Argentino", "euro", "dolar", "real"];
let arrSinDuplicaciones;

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
fetch ("/paises.JSON")
    .then ((response)=> response.json())
    .then ((data)=> {
        for(let i=0;i<=data.length;i++){
            let paises = data[i].nombre;
            let option = document.createElement("option");
            option.innerHTML=paises;
            selecPais.append(option);
        }
    })
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


function datosUser() {if (inputName.value !== "" && inputSurname.value !== "" && inputMonto.value >= 1000 && cuotas.value !== "Ninguna" && selecDivisas.value !== "Ninguna" ){ 
        return true
    } else {
        return false
    } 
}

function guardarDatos () {
    if (datosUser ()){
        datosGuardados.push (new datos (inputName.value, inputSurname.value, inputMonto.value, cuotas.value, selecDivisas.value))
    }
}

class datos{
    constructor(nombre, surname, monto, cuotas, divisas) {
        this.nombre = nombre;
        this.surname   = surname;
        this.monto  = monto;
        this.cuotas = cuotas;
        this.divisas = divisas;
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
    seccion.innerHTML = `<p class="mostrar__pN">${inputName.value}</p>
                        <p class="mostrar__pA">${inputSurname.value}</p>
                        <p class="mostrar__pM">${selecDivisas.value}:${inputMonto.value}</p>
                        <p class="mostrar__pC">${cuotas.value}</p>
                        <p class="mostrar__pP">${interes(cuotas.value).toFixed(2)}</p>`
    btnSubmit.classList.remove("ocultar");
    indice.classList.remove("ocultar");
        } else if (inputMonto.value == "") {
            swal({
            text: "NO HA INGRESADO NINGUN MONTO",icon: "warning",
            });
    } else swal({
        text: "COMPLETE TODOS LOS CAMPOS", icon: "warning",
    })
    guardarDatos ();
    guardados = localStorage.setItem ("simulaciones", JSON.stringify(datosGuardados));
    
}


btnUltima.onmousedown = () => {
    
    let set = new Set( datosGuardados.map( JSON.stringify ) )
    arrSinDuplicaciones = Array.from( set ).map( JSON.parse );
    if (inputName.value !== "" && inputSurname.value !== "" && inputMonto.value !== "" && cuotas.value !== "Ninguna" && selecDivisas.value !== "Ninguna"){
        indicee.classList.remove("ocultar");  
        tituloDG.classList.remove("ocultar");
        for (let i = 0; i < arrSinDuplicaciones.length;i++){
        divDatos.innerHTML +=   `   
                                    <p class="datosGuardados__p">${arrSinDuplicaciones[i].nombre}</p>
                                    <p class="datosGuardados__p">${arrSinDuplicaciones[i].surname}</p>
                                    <p class="datosGuardados__p">${arrSinDuplicaciones[i].divisas}:${arrSinDuplicaciones[i].monto}</p>
                                    <p class="datosGuardados__p">${arrSinDuplicaciones[i].cuotas}</p>
                                    <p class="datosGuardados__p">${interes(cuotas.value).toFixed(2)}</p>
                                `;
                                btnUltima.onmouseup = () => {
                                    for (let i=0;i<= datosGuardados.length;i++){
                                        datosGuardados.splice(0,i);
                                        datosGuardados.shift()
                                    }
                                }
        
    }} else 
        swal({
            text: "NO HA CALCULADO NINGUNA SIMULACION",icon: "warning",
        });
    

}

btnSubmit.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: "POST",
            body: JSON.stringify(datosGuardados),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => swal({
            text: "SE A ENVIADO CON EXITO",icon: "success",
        }) )
}