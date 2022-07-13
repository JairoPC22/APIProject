import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponents } from './comments.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: CommentsComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
