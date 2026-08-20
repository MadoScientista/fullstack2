
const URL_API_DOLAR_BASE = 'https://cl.dolarapi.com/v1/cotizaciones/'


export async function obtenerDivisa(moneda) {
    const response = await fetch(URL_API_DOLAR_BASE + moneda)
    const data = await response.json()
    
    return data;
}