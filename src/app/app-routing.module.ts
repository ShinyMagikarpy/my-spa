import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', loadChildren: () => import ('./app-view-module').then(m => m.AppViewModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
