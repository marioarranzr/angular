import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService) {

    this.activatedRoute.params.subscribe(params => {
      // console.log(params['id']); // es 'id' porque en el router el enroutado es heroe/:id
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {

  }

}
