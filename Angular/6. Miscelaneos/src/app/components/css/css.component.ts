import { Component, OnInit } from '@angular/core';
// generado con: ng g c components/css -it -is

@Component({
  selector: 'app-css',
  template: `
    <p>
      css Works!
    </p>
  `,
  styles: [`
    p {
      font-size: 30px;
    }
  `] // se aplica únicamente a elementos de este component
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
