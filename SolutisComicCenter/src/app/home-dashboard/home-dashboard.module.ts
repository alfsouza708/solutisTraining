import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeDashboardComponent } from './home-dashboard.component';

const appRoute: Routes = [{ path: 'home', component: HomeDashboardComponent },
 { path: '',     redirectTo: '/home',     pathMatch: 'full'   }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoute)
  ],
  declarations: [
    HomeDashboardComponent
  ]
})
export class HomeDashboardModule { }
