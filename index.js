// El map es un array method que nos permite iterar sobre un arreglo y aplicar una función en cada iteración.
// Caso de uso: tenemos un array de precios y queremos obtener un nuevo array con el precio menos el descuento de 100 pesos.

const precios = [300,1500,230,600,800]
const descuento= 100
function getPrecioConDescuento (){
    const precioConDescuento= precios.map((precio)=>precio-descuento)
    return precioConDescuento
}
console.log(getPrecioConDescuento())

//El filter es una opción para filtrar colecciones de datos, para partir de un array y crear uno nuevo.
//Caso de uso: tenemos un array de calificaciones y queremos obtener calificaciones aprobatorias mayores a 6.

let calificaciones = [
    {nombre:"Julian", calificacion:9},
    {nombre:"Juan", calificacion:6},
    {nombre:"Pedro", calificacion:3},
    {nombre:"Emilio", calificacion:10},
    {nombre:"Rafael", calificacion:6},
    {nombre:"Lupita", calificacion:8},
]

let califcacionesAprobatorias = calificaciones.filter(e=> e.calificacion>6);
console.log(califcacionesAprobatorias)
