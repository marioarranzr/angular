import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  id:number;
  lista:Lista;

  constructor(public navParams:NavParams,
              public navController:NavController,
              public alertController:AlertController,
              public listaDeseosService:ListaDeseosService) {

    this.id = this.navParams.get("id");
    this.lista = this.navParams.get("lista");

  }

  ngOnInit() {}

  actualizarItem(item:ListaItem) {

    item.completado = !item.completado;

    let todosMarcados = true;
    for (let item of this.lista.items) { // gracias al let podemos llamar item a la variable local
      if (!item.completado) {
        todosMarcados = false;
        break;
      }
    }

    this.lista.completada = todosMarcados;

    this.listaDeseosService.actualizarData();
  }

  borrarItem(item:ListaItem) {
    if (this.showConfirm()) {

    }
  }

  showConfirm() {
    let confirm = this.alertController.create({
      title: 'ELiminar lista',
      message: '¿Estás seguro de que deseas eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            this.listaDeseosService.eliminarLista(this.id);
            this.navController.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
