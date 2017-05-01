import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app-component.html'
  // template: `
  //   <app-header></app-header>
  // `,
})
export class AppComponent  {
  name = 'Hola Mundo';
}
