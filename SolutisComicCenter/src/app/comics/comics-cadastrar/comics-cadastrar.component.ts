import { ComicsCadastrarService } from './comics-cadastrar.service';
import { Comic } from './../../model/comic.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics-cadastrar',
  templateUrl: './comics-cadastrar.component.html',
  styleUrls: ['./comics-cadastrar.component.css']
})
export class ComicsCadastrarComponent implements OnInit {

  comic: Comic;//new
  comicArray: Comic[];
  

  constructor(private comicService: ComicsCadastrarService ) { }

  ngOnInit() {
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
