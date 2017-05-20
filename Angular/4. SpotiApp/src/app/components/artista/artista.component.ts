import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any;
  tracks:any[];

  constructor(private activatedRoute:ActivatedRoute,
              private spotifyService:SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params
          .map(parametros => parametros['id'])
          .subscribe( id => {
            this.spotifyService.getArtista(id) //devuelve una promesa así que nos suscribimos
              .subscribe( data => {
                this.artista = data;
              });

            this.spotifyService.getTopTracks(id) //devuelve una promesa así que nos suscribimos
              .subscribe( data =>  {
                  this.tracks = data;
              });
          });
  }

}
