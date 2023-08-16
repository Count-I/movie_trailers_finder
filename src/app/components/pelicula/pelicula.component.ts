import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
@Input() pelicula!:Pelicula;
trailerUrl!: SafeUrl
buttonText:String= "Ver trailer"
watch:boolean= false;
constructor(private sanitizer: DomSanitizer){

}
ngOnInit(): void {
    this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pelicula.url)
}

// handleButton(event: Event){
//   console.log(this.pelicula.id);
//   if(this.watch){
//     this.buttonText= "Ocultar trailer"
//     this.watch = false;
//   };
//   this.buttonText= "Ver trailer"
//   this.watch = true;
// }
}
