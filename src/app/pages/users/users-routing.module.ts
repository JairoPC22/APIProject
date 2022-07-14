import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponents } from './users.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: UsersComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
