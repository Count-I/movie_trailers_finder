import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface Pelicula{
    id:number,
    categoria:string,
    titulo:string,
    imagen:string,
    duracion:string,
    vistas:string,
    url:string
  }