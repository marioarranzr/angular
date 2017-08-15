import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// generado con ng g c components/usuario/usuarioNuevo -it -is --flat (esto último para que no me genere una carpeta, sino que genere el archivo ahí mismo)

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo Works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe(
      parametros => {
        console.log("Ruta hija usuario nuevo");
        console.log(parametros);
      }
    );
  }

  ngOnInit() {
  }

}
