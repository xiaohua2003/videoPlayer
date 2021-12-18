import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Videos } from '../videos';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  video:Videos={_id:"",title:'',
  url:'',description:''}
  @Input() videoSelect:Videos={_id:"", title:'',
url:'',description:''}
  @Output() updateVideoEvent=new EventEmitter()
  @Output() deleteVideoEvent=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
 updateVideo(video:Videos){
   console.log(JSON.stringify(video))

   this.updateVideoEvent.emit(video)}
deleteVideo(video:Videos){
  this.deleteVideoEvent.emit(video)
}

}
