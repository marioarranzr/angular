import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Lista } from '../../app/classes/lista';

import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private listaDeseosService:ListaDeseosService,
              private navController:NavController) {

  }

  ngOnInit() {}

  irAgregar() {
    this.navController.push(AgregarComponent);
  }

  verDetalles(lista:Lista, id:number) {
    this.navController.push(DetalleComponent,
                            {lista, id}); // de esta manera pasamos parámetros en el navController
  }
}
