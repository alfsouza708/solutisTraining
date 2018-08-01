import { ComicsCadastrarService } from './comics-cadastrar.service';
//import { Comic } from './../../model/comic.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-comics-cadastrar',
  templateUrl: './comics-cadastrar.component.html',
  styleUrls: ['./comics-cadastrar.component.css']
})
export class ComicsCadastrarComponent implements OnInit {

  //comic: Comic;//new
  //comicArray: Comic[];
  formulario: FormGroup;
  

  constructor(private formBuilder: FormBuilder,private comicService: ComicsCadastrarService, private http: Http  ) { }

  //utilizacao de formulario ao inves do model (quebra de padrao de projeto)
  ngOnInit() {

     this.formulario = this.formBuilder.group({
       nome:[null, Validators.required],
       email:[null, [Validators.required, Validators.email]]
     });

     Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

  }

  onSubmit() {
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);
        this.Resetar();
      }, (error:any) => alert('erro'));
  }

  Resetar() {
    this.formulario.reset;
  }

  verificaValidTouched(campo) {

    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;

  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if(campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  /*cadastrarComic() {
    
  }*/
//try exception usando toasty para mostrar msg de erro !!implementar
  /*pesquisarComic(name: String) {
    if(name == null) {
      return this.comicService.getAllComic;
    }
    else {
      return this.comicService.getComicByName(name);
    }
  }*/

}
