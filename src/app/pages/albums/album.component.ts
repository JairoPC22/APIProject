import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponents implements OnInit {

  Album: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.Album = this.dataService.getAlbum();
  }

}
