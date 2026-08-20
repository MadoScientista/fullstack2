import { obtenerDivisa } from "./divisaService.js"

// async function mostrarDivisaDolar(){
//     const infoDivisa = await obtenerDivisa("usd")

//     document.getElementById("valorNombreUSD").innerHTML = infoDivisa.nombre
//     document.getElementById("valorMonedaUSD").innerHTML = infoDivisa.moneda
//     document.getElementById("valorUltimoCierreUSD").innerHTML = infoDivisa.ultimoCierre
//     document.getElementById("valorCompraUSD").innerHTML = infoDivisa.compra
//     document.getElementById("valorVentaUSD").innerHTML = infoDivisa.venta
//     document.getElementById("valorFechaActualizacionUSD").innerHTML = infoDivisa.fechaActualizacion
// }

async function mostrarDivisa(moneda){
    const infoDivisa = await obtenerDivisa(moneda.toLowerCase())

    document.getElementById("valorNombre"+ moneda).innerHTML = infoDivisa.nombre
    document.getElementById("valorMoneda" + moneda).innerHTML = infoDivisa.moneda
    document.getElementById("valorUltimoCierre" + moneda).innerHTML = infoDivisa.ultimoCierre
    document.getElementById("valorCompra" + moneda).innerHTML = infoDivisa.compra
    document.getElementById("valorVenta" + moneda).innerHTML = infoDivisa.venta
    document.getElementById("valorFechaActualizacion" + moneda).innerHTML = infoDivisa.fechaActualizacion
}

async function mostrarFechaActualizacion() {
    const infoDivisa = await obtenerDivisa("usd")
    document.getElementById("fechaUltimaActualizacionDivisas").innerHTML = infoDivisa.fechaActualizacion
}

mostrarDivisa("USD")
mostrarDivisa("EUR")
mostrarDivisa("BRL")
mostrarFechaActualizacion()



