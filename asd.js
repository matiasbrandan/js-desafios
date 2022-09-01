// const monedas = [
//     {id: "peso Argentino", valor: 1},
//     {id: "peso Uruguayo", valor:0.29},
//     {id: "euro", valor: 0.0072},
//     {id: "dolar", valor: 0.0072},
//     {id: "real", valor: 0.036},
//     {id: "bolivar", valor: 0.057}
// ];
// let selecDivisas = document.getElementById("userDivisas");
// for (let i = 0 ; i < monedas.length; i++) { 
//     let divisasArray = [];
//     divisasArray.push(monedas[i].id) ;
//     for (let opciones of divisasArray ) {
//         let option = document.createElement("option");
//         option.innerHTML=opciones;
//         selecDivisas.appendChild(option);
//     }
// }

// function comparacion (){
//     for (igualA of monedas ){
//         switch (selecDivisas.value) {
//                     case "peso Argentino":
//                         let pesoArg =;
//                         return pesoArg;
//                     case "peso Uruguayo":
//                         let pesoUru =;
//                         return pesoUru;
//                     case "euro":
//                         let euro =;
//                         return euro ;
//                     case "dolar":
//                         let dolar =;
//                         return dolar;
//                     case "real":
//                         let real = ;
//                         return real ;
//                     case "bolivar":
//                         let bolivar = ;
//                         return bolivar;
//                     default:
//                         break
//                 }
//     }
// }
function interesDolar (){
    if (selecDivisas.value == "dolar"){
        for (porMes of opcionesDeCuotas){
        switch (cuotas.value) {
                    case "6":
                        let primera =inputMonto.value * 10;
                        return primera / 6;
                    case "12":
                        let segunda = inputMonto.value * 10;
                        return segunda / 12;
                    case "24":
                        let cuarta = inputMonto.value * 10;
                        return cuarta / 24;
                    case "36":
                        let sexta = inputMonto.value * 10;
                        return sexta / 36;
                    default:
                        break
                }
    }
    }
}