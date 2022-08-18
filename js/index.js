//VARIABLES

let inputName = document.getElementById ("userName");
let inputSurname = document.getElementById("userSurname");
let inputMonto = document.getElementById ("userMonto");
let cuotas = document.getElementById ("userCuotas");
let btnCalcular = document.getElementById("btnCalcular");
let nombre ;
let surname ;
let monto ;
let cuotaSelecionada;


// ARRAY

const opcionesDeCuotas = [6, 12, 18, 24, 30, 36];

//Ciclos

for (opciones of opcionesDeCuotas) {
    let option = document.createElement("option");
    option.innerHTML=opciones;
    cuotas.appendChild(option);
}

//funcuiones

function mostrar () {

    inputName.onchange = () => {
        nombre=inputName.value;
    }
    inputSurname.onchange = () => {
        surname=inputSurname.value;
    }
    inputMonto.onchange = () => {
        monto=parseInt (inputMonto.value);
    }
    cuotas.onchange = () => {
        cuotaSelecionada=cuotas.value;
    }
    
}

function interes (){
    for (porMes of opcionesDeCuotas){
        switch (cuotaSelecionada) {
                    case "6":
                        let primera = monto + (monto * 0.05);
                        return primera;
                    case "12":
                        let segunda = monto + (monto * 0.1);
                        return segunda;
                    case "18":
                        let tercera = monto + (monto * 0.25);
                        return tercera;
                    case "24":
                        let cuarta = monto + (monto * 0.35);
                        return cuarta;
                    case "30":
                        let quinta = monto + (monto * 0.4 );
                        return quinta;
                    case "36":
                        let sexta = monto + (monto * 0.5 );
                        return sexta;
                    default:
                        console.log ("no es una cantidad de cuotas validas");
                        break
                }
    }
}




function mostrarDatos() {
        let body = document.body
        let seccion = document.getElementById("mostrar")
        body.addEventListener("keydown", e => {
                if (e.key == "Enter") {
                    seccion.innerHTML+= `<p>nombre:${nombre}</p>
                                    <p>apellido:${surname}</p>
                                    <p>monto:${monto}</p>
                                    <p>cuotas${cuotaSelecionada}</p>
                                    <p>por mes:${interes(cuotaSelecionada)}`
                }
            }
        )
        btnCalcular.onclick = () => {
            seccion.innerHTML+= `<p>nombre:${nombre}</p>
                                    <p>apellido:${surname}</p>
                                    <p>monto:${monto}</p>
                                    <p>cuotas${cuotaSelecionada}</p>
                                    <p>por mes:${interes(cuotaSelecionada)}`
        }
}


//llamar funciones
mostrar ();
mostrarDatos();