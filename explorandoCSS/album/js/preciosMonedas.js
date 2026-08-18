// document.getElementById("miJS").innerHTML = "Este texto es generado por JS: Hola mundo"

fetch('https://cl.dolarapi.com/v1/cotizaciones/usd')
.then(respuesta => respuesta.json())
.then(datos => document.getElementById("precioDolar").innerHTML = datos.ultimoCierre)
.catch(error => console.error('Hubo un error', error))

fetch('https://cl.dolarapi.com/v1/cotizaciones/eur')
.then(respuesta => respuesta.json())
.then(datos => document.getElementById("precioEuro").innerHTML = datos.ultimoCierre)
.catch(error => console.error('Hubo un error', error))

fetch('https://cl.dolarapi.com/v1/cotizaciones/brl')
.then(respuesta => respuesta.json())
.then(datos => document.getElementById("precioRealBr").innerHTML = datos.ultimoCierre)
.catch(error => console.error('Hubo un error', error))