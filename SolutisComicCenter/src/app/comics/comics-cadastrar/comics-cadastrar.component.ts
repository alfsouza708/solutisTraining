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
  

  constructor() { }

  ngOnInit() {
  }

  cadastrarComic() {
    
  }

}
