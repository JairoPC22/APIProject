import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  routes = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: 'contact'
    },
    {
      name: 'Posts',
      path: 'posts'
    },
    {
      name: 'Comments',
      path: '/comments'
    },
    {
      name: 'Album',
      path: '/album'
    },
    {
      name: 'Photos',
      path: '/photos'
    },
    {
      name: 'Users',
      path: '/users'
    },
    {
      name: 'Todos',
      path: '/todos'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
