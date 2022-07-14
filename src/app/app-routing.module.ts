import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CommentsComponents } from './pages/comments/comments.component';
import { AlbumComponents } from './pages/albums/album.component';
import {PhotosComponents} from "./pages/photos/photos..component";
import {UsersComponents} from "./pages/users/users.component";
import {TodosComponents} from "./pages/todos/todos.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'posts',
    // loadChildren: './pages/posts/posts.module#PostsModule'
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'comments',
    component: CommentsComponents
  },
  {
    path: 'album',
    component: AlbumComponents
  },
  {
    path: 'photos',
    component: PhotosComponents
  },
  {
    path: 'users',
    component: UsersComponents
  },
  {
    path: 'todos',
    loadChildren: () => import('./pages/todos/todos.module').then(m => m.TodosModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
