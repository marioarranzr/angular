import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Lista } from '../../app/classes/lista';

import { NavController } from 'ionic-angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(private listaDeseosService:ListaDeseosService,
              private navController:NavController) {

}

ngOnInit() {}

verDetalles(lista:Lista, id:number) {
  this.navController.push(DetalleComponent,
                          {lista, id}); // de esta manera pasamos parámetros en el navController
}

}
