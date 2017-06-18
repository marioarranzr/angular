import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {
    this.cargarData();
    console.log("servicio inicializado");
  }

  actualizarData() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarData() {
    let listasEnDataStorage = JSON.parse(localStorage.getItem("data"));
    if (listasEnDataStorage) {
      this.listas = listasEnDataStorage;
    }
  }

  agregarLista(lista:Lista) {
    this.listas.push(lista);
    this.actualizarData();
  }
}
