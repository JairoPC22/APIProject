import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CommentsComponents } from './comments/comments.component';
import { AlbumComponents } from './albums/album.component';
import {PhotosComponents} from "./photos/photos..component";
import {UsersComponents} from "./users/users.component";


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CommentsComponents,
    AlbumComponents,
    PhotosComponents,
    UsersComponents,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    CommentsComponents,
    AlbumComponents,
    PhotosComponents,
    UsersComponents,
  ]
})
export class PagesModule { }
