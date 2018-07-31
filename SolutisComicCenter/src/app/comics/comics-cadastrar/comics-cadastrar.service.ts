import { Comic } from './../../model/comic.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsCadastrarService {

  private comicUrl: string = 'http://localhost:8080/comics';
  private headers = new Headers({'Content-Type' : 'application.json'});
  private arrayComic: Comic[];

  constructor( private http: HttpClient) {}
  
  //utilizando http
   getAllComicHttp(): Observable<any>{
     return this.http.get(this.comicUrl);
   }
  
  saveComicHttp(comic: Comic){
    let result: Observable<Object>;
    result = this.http.post(this.comicUrl, comic);
    return result;
  }

  //utilizando array
  getAllComic(): Comic[]{
    return this.arrayComic;
  }

  getComicByName(nome: String): Comic[] {
    let newArrayComic: Comic[]; 
    this.arrayComic.forEach(comic => {
      if(comic.nome == nome) {
        newArrayComic.push(comic);
      }
     });
    return newArrayComic;
  }
 
 saveComic(comic: Comic){
   this.arrayComic.push(comic);
 }

  
}


