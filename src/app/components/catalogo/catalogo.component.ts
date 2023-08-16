import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { peliculas } from 'src/app/models/peliculas';
import { categorias } from 'src/app/models/categorias';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pelicula } from 'src/app/interfaces/pelicula';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{

  categoria = categorias;
  peliculas: Pelicula[] = peliculas;
  
  nomCategoria:String = "";
  filtro:any = [] 
  safeUrl!: SafeResourceUrl;
  url!:string;

  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    
  }
  ngOnInit(): void {
    this.nomCategoria = this.route.snapshot.params['nombre']
    this.peliculas.forEach(pelicula => {
      if (pelicula.categoria == this.nomCategoria){
        this.filtro.push(pelicula)
        this.url= pelicula.url;
      }
    });
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
}


}



