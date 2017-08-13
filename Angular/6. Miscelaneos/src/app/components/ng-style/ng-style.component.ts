import { Component, OnInit } from '@angular/core';
// generado con: ng g c components/ngStyle -it -is

@Component({
  selector: 'app-ng-style',
  template: ` <!-- it: inline template -->
    <p style="font-size: 10px">
      ng-style Works!
    </p>
    <p [ngStyle]="{ 'font-size': '20px'}">
      ng-style Works!
    </p>
    <p [ngStyle]="{ 'font-size': tamano + 'px', 'color': 'red'}">
      ng-style Works!
    </p>
    <p [style.fontSize]="tamano + 'px'">
      ng-style Works!
    </p>
    <p [style.fontSize.px]="tamano">
      ng-style Works!
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>

  `,
  styles: [] // is: inline styles
})
export class NgStyleComponent implements OnInit {

  tamano:number = 30;

  constructor() { }

  ngOnInit() {
  }

}
