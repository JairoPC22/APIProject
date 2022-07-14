import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponents } from './album.component';

const routes: Routes = [
  {
    path: '',  // No se coloca texto en el path
    component: AlbumComponents
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
