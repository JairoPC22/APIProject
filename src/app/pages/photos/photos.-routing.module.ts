import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponents } from './photos..component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component:  PhotosComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  PhotosRoutingModule { }
