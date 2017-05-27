import { ListaItem } from './lista-item';

export class Lista {
  nombre:string;
  completada:boolean;
  items:ListaItem[];

  constructor(nombre:string) {
    this.nombre = nombre;
    this.completada = false;
  }
}
