import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal : string;

  jogos : string[] = ['Gold', 'Silver', 'Crystal'];

  constructor() {
    this.nomePortal = 'http://serebii.net';
    for (let i=0; i<this.jogos.length;i++){
      let jogo = this.jogos[i];
    }
  }

  ngOnInit() {
  }

}
