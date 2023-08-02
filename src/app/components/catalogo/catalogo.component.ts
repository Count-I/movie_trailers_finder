import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { peliculas } from 'src/app/models/peliculas';
import { categorias } from 'src/app/models/categorias';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit{

  categoria = categorias;
  pelicula = peliculas;
  
  nomCategoria:String = "";
  filtro:any = [] 

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }
  ngOnInit(): void {
    this.nomCategoria = this.route.snapshot.params['nombre']
    this.pelicula.forEach(pelicula => {
      if (pelicula.categoria == this.nomCategoria)
      {
        this.filtro.push(pelicula)
      }
    });
    
}


}



