import { ComicsCadastrarModule } from './comics/comics-cadastrar/comics-cadastrar.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicsCadastrarService } from './comics/comics-cadastrar/comics-cadastrar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes = [{ path: '',  loadChildren: './home-dashboard/home-dashboard.module#HomeDashboardModule' }];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    ComicsCadastrarModule
  ],
  providers: [ComicsCadastrarService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
