import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/classes/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service'

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string;
  nombreItem: string;

  items:ListaItem[] = [];

  constructor(public alertController:AlertController,
              public navController:NavController,
              public listaDeseosService:ListaDeseosService) { }

  ngOnInit() {}

  /**
  * Agregamos una lista local a esta pantalla
  * Hasta que no la guardemos no se persistirá
  */
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

  /**
  * Borramos un itam de la lista local a esta pantalla
  * Hasta que no la guardemos no se persistirá
  */
  borrarItem(id:number) {
    this.items.splice(id, 1);
  }

  guardarLista() {
    if (this.nombreLista == null ||
        this.nombreLista.length == 0) {
          let alert = this.alertController.create({
            title: 'Nombre de la lista',
            subTitle: 'El nombre de la lista es necesario',
            buttons: ['OK']
          });
          alert.present();
          return;
    }

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    this.listaDeseosService.agregarLista(lista);

    this.navController.pop(); //volver a la pantalla anterior
  }
}
