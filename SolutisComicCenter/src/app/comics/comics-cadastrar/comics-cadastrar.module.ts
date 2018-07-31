import { ComicsCadastrarComponent } from './comics-cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ComicsCadastrarComponent
  ]
})
export class ComicsCadastrarModule { }
