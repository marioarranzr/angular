import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private heroesService:HeroesService) {

  }

  ngOnInit() {

    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);

  }

}
