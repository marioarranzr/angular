import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Mario';
  nombre2 = 'Mario aRRanz RoPerO';
  array = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a:number = 0.234;
  salario:number = 1234.5;
  heroe = {
    nombre: "Logan",
    clave:  "Wolverine",
    edad:   500,
    direccion: {
      calle: "Calle Falsa",
      numero: 123
    }
  };
  promesa = new Promise( (resolve, rejected) => {
    setTimeout( () => resolve('Llegó el dato!'), 2300);
  });
  fecha = new Date();
}
