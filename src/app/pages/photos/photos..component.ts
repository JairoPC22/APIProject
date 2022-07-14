import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-Photos',
  templateUrl: './photos..component.html',
  styleUrls: ['./photos.component.css']
})
export class  PhotosComponents implements OnInit {

  Photos: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.Photos = this.dataService.getPhotos;
  }

}
