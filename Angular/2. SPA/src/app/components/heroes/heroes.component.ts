import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  pagina:string;

  constructor(private heroesService:HeroesService,
              private router:Router) {
    // console.log(this.heroes);
    this.pagina = "heroes";
  }

  ngOnInit() {
    // console.log(this.heroes);
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(id:number) {
    // console.log(id);
    this.router.navigate( ['/heroe', id] );

    // Enlace para que sea de la forma /heroes/heroe/{id}
    // this.router.navigate( ['/heroes/heroe', id] );
  }

}
