// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expectedEtoD = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(4);
    const expectedDtoY = 4*146.26;
    expect(fromDollarToYen(4)).toBe(585.04); // 1 dollar son 146.26 yens, entonces 4 dollars deberían ser = (4*146.26)
})

test("One yen should be 0.0056 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(400);
    const expectedYtoP = 400*0.0056;
    expect(fromYenToPound(400)).toBe(2.24); // 1 yen son 0.0056 pounds, entonces 400 yens deberían ser = (400*0.0056)
})