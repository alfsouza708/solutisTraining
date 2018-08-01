import { ComicsCadastrarService } from './comics-cadastrar.service';
import { Comic } from './../../model/comic.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comics-cadastrar',
  templateUrl: './comics-cadastrar.component.html',
  styleUrls: ['./comics-cadastrar.component.css']
})
export class ComicsCadastrarComponent implements OnInit {

  comic: Comic;//new
  comicArray: Comic[];
  formulario: FormGroup;
  

  constructor(private comicService: ComicsCadastrarService ) { }

  //utilizacao de formulario ao inves do model (quebra de padrao de projeto)
  ngOnInit() {

    this.formulario = new FormGroup({ 
      nome: new FormControl(null),
      edicao: new FormControl(null),
      paginas: new FormControl(null),
      dataPublicacao: new FormControl(null)
     })

  }

  cadastrarComic() {
    
  }
//try exception usando toasty para mostrar msg de erro !!implementar
  pesquisarComic(name: String) {
    if(name == null) {
      return this.comicService.getAllComic;
    }
    else {
      return this.comicService.getComicByName(name);
    }
  }

}
