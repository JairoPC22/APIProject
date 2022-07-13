import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponents implements OnInit {

  comentarios: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.comentarios = this.dataService.getComments();
  }

}
