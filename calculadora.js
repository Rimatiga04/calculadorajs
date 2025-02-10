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
window.suma = suma;
window.resta = resta;
window.multiplicar = multiplicar;
window.dividir = dividir;