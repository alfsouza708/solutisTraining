import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComicsCadastrarComponent } from './comics/comics-cadastrar/comics-cadastrar.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicsCadastrarService } from './comics/comics-cadastrar/comics-cadastrar.service';

export const routes = [{ path: '',  loadChildren: './home-dashboard/home-dashboard.module#HomeDashboardModule' }];

@NgModule({
  declarations: [
    AppComponent,
    ComicsCadastrarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ComicsCadastrarService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
