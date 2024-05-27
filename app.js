// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
//facrtor de conversion Dolar a Yen es 156.5/1.07=146.26
const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar*146.26
    return valueInYen.toFixed(2);
}
//factor de conversion Yen a Libra es 0.87/156.5=0.0056
const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen*0.0056
    return valueInPound.toFixed(2);
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))
console.log(fromDollarToYen(4))
console.log(fromYenToPound(400))

// Exporta la función para usarla en otros archivos 
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }