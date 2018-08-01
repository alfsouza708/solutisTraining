import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent
  ]
})
export class ComicsCadastrarModule { }
