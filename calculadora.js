// calculadora.js

function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
// Hacer las funciones accesibles en el navegador
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { suma, resta, multiplicar, dividir };
}

// Exportación para el navegador
if (typeof window !== 'undefined') {
    window.calculadora = { suma, resta, multiplicar, dividir };
}