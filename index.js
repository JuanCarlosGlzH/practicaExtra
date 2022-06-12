// El map es un array method que nos permite iterar sobre un arreglo y aplicar una función en cada iteración.
// Caso de uso: tenemos un array de precios y queremos obtener un nuevo array con el precio menos el descuento de 100 pesos.

const precios = [300,1500,230,600,800]
const descuento= 100
function getPrecioConDescuento (){
    const precioConDescuento= precios.map((precio)=>precio-descuento)
    return precioConDescuento
}
console.log(getPrecioConDescuento())
