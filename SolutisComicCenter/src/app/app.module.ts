import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { PesquisaUsuarioComponent } from './pesquisa-usuario/pesquisa-usuario.component';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    PesquisaUsuarioComponent,
    CadastraUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
