import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {

    let lista1 = new Lista("Compras de supermercado");
    let lista2 = new Lista("Juegos");
    let lista3 = new Lista("Cosas");

    this.listas.push(lista1, lista2, lista3);

    console.log("servicio inicializado");
  }
}
