import { Component, Input, OnInit } from '@angular/core';
import { Videos } from '../videos';
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  @Input() videoSelect:Videos={title:'',
url:'',description:''}
  constructor() { }

  ngOnInit(): void {
  }
 

}
