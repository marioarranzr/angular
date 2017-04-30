/*
// Imprimir cadenas de texto secillo
let nombre1:string = "Mario";
let edad:number = 20;

let texto = `Hola, ${nombre1} (${edad}) años`;
console.log(texto)

let avenger = {
  nombre : "M",
  poder : "ddd"
}

// Descentralizar funciones
let { nombre, poder } = avenger;
console.log(nombre, poder);

function mario() { () => 5 + 4; }
console.log(mario());


// Promesas
let prom1 = new Promise( function (resolve, reject) {
  setTimeout( () => {
    console.log("Promesa");
    //resolve();
    reject();
  }, 1500)
});


prom1.then(function() {
  console.log("Todo ha ido bien");
},
function() {
  console.error("Todo ha ido mal");
});

// Interfaces
interface Xmen {
  nombre:string,
  poder:string
}
function enviarMision (xmen:Xmen) {
  console.log("Enviando a " + xmen.nombre);
}
let worlverine:Xmen = {
  nombre:"worlverine",
  poder:"regeneración"
}
enviarMision(worlverine);
*/
