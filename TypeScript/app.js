// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;
const PERSONAJE = {
    nombre: nombre,
    edad: edad
};
let batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
function resultadoDoble(a, b) {
    return (a + b) * 2;
}
let resultadoDoble2 = (a, b) => (a + b) * 2;
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma = "arco") {
    let mensaje;
    if (poder) {
        // mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        mensaje = ` ${nombre} tiene el poder de: ${poder} y un arma: ${arma}`;
    }
    else {
        // mensaje = nombre + " tiene un " + poder
        mensaje = ` ${nombre} tiene un ${poder}`;
    }
}
;
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
