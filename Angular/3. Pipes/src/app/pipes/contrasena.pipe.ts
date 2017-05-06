import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activa: boolean = true): string {
    // return activa?value.replace(value,"*".repeat(value.length)):value ;
    if (activa) {
      let resultado="";
      // return value.replace(/./g, '*'); 
      for(let i=0; i<value.length; i++) {
        resultado += "*";
      }
      return resultado;
    }
    return value;
  }

}
