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
    this.listaDeseosService.actualizarData();
  }

  borrarItem(item:ListaItem) {
    if (this.showConfirm()) {

    }
  }

  showConfirm() {
    let confirm = this.alertController.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
