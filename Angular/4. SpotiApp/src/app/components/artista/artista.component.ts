import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
          .map(parametros => parametros['id'])
          .subscribe( id => {
            console.log(id);
          })
  }

}
