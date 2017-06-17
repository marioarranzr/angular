import { Component, OnInit } from '@angular/core';
import { ListaItem } from '../../app/classes/index';
@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string;
  nombreItem: string;

  items:ListaItem[] = [];

  constructor() {  }

  ngOnInit() {}

  agregar() {
    if (this.nombreLista == null || this.nombreLista.length == 0 ||
        this.nombreItem == null || this.nombreItem.length == 0) {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);
    this.nombreItem = "";
  }

  borrarItem(id:number) {
    this.items.splice(id, 1);
  }
}
