import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: '../heroes/heroes.component.html',
  styles: []
})
export class BuscarHeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;
  pagina:string;

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router:Router) {
    this.pagina = "buscador";

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']); // es 'id' porque en el router el enroutado es heroe/:id
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
      console.log(this.heroes);
    });
  }

  verHeroe(id:number) {
    // console.log(id);
    this.router.navigate( ['/heroe', id] );

    // Enlace para que sea de la forma /heroes/heroe/{id}
    // this.router.navigate( ['/heroes/heroe', id] );
  }

}
