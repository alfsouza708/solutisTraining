
import { ComicsCadastrarModule } from './comics/comics-cadastrar/comics-cadastrar.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicsCadastrarService } from './comics/comics-cadastrar/comics-cadastrar.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ComicsCadastrarComponent } from './comics/comics-cadastrar/comics-cadastrar.component';
import { ComicListarComponent } from './comics/comic-listar/comic-listar.component';

export const routes = [{ path: 'listar', component: ComicListarComponent }, { path: 'cadastrar', component: ComicsCadastrarComponent }, { path: '',  loadChildren: './home-dashboard/home-dashboard.module#HomeDashboardModule' }];
//note to self: lembrar de colocar ComicsCadastrarComponent no seu devido module quando for dar routing
@NgModule({
  declarations: [
    AppComponent,
    ComicsCadastrarComponent,
    ComicListarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    ComicsCadastrarModule,
  ],
  providers: [ComicsCadastrarService, HttpClientModule, ComicListarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
