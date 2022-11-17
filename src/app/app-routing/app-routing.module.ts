import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { AppViewModule } from '../app-view-module';
const rutas:Routes = [
  {path: '**', loadChildren: () => import ('./../app.module').then(m => m.AppModule)}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ]
})
export class AppRoutingModule { }
