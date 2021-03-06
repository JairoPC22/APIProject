import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
  getAlbum(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
  getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
