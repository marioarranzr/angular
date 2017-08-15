import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <br>

    <app-css></app-css>
    <br>

    <p>Hola desde app.component.html</p>
    <app-classes></app-classes>
    <br><br>
    <!-- <p appResaltado>
      Hola mundo
    </p> -->
    <p [appResaltado]="'orange'">
      Hola mundo
    </p>
    <br>

    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
