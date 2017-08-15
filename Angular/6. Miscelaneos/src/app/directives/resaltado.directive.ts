import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// Para trabajar con referencias al HTML usamos ElementRef
// Para estar pendiente de los eventos

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  colorInicial:string = "yellow";

  constructor(private elementRef:ElementRef) {
    console.log("directiva");
    elementRef.nativeElement.style.backgroundColor = this.colorInicial;
    // elemento que actúa al cargarse (está en el ctor)
  }

  @Input('appResaltado') nuevoColor:string;

  @HostListener('mouseenter') mouseEntra() {
    // this.elementRef.nativeElement.style.backgroundColor = "red";
    this.elementRef.nativeElement.style.backgroundColor = this.nuevoColor;
    this.resaltar (this.nuevoColor || "yellow"); // Si this.nuevoColor es null, pone "yellow"
    // Elemento que se llama al pasar el mouse por encima del elemento
  }

  @HostListener('mouseleave') mouseSale() {
    this.elementRef.nativeElement.style.backgroundColor = this.colorInicial;
    // Elemento que se llama al pasar el mouse por encima del elemento. Para quitar colones lo seteamos a null
  }

  private resaltar (color:string = "yellow") {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
