import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categorias } from 'src/app/models/categorias';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias = categorias;


  constructor(private router: Router) { }

  irACatalogo(nombre: string) {
    this.router.navigate(['/catalogo', nombre]);
  }


  ngOnInit() {
  }

}
