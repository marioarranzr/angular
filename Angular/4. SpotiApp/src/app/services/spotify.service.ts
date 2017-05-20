import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search"
  urlArtista:string = "https://api.spotify.com/v1/artists"

  constructor(private http:Http) { }

  getArtistas(termino:string) {

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url)
            .map(res => {

              let objetoRespuesta = res.json().artists.items;
              // console.log(res.json().artists.items);
              this.artistas = objetoRespuesta;
            });

  }

  getArtista(id:string) {

    let query = `/${id}`;
    let url = this.urlArtista + query;

    return this.http.get(url)
            .map(res => {
              return res.json();
            });
  }

  getTopTracks(id:string) {

    let query = `/${id}/top-tracks?country=ES`;
    let url = this.urlArtista + query;

    return this.http.get(url)
            .map(res => {
              return res.json().tracks;
            });
  }

}
