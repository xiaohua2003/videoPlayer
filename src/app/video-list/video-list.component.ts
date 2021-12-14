import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Videos } from '../videos';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
@Output() newvideoEvent=new EventEmitter();
showVideo(value:Videos){
  this.newvideoEvent.emit(value)
}
 @Input() videoList:Videos[]=[]
  constructor() { }
  
  ngOnInit(): void {
  }

}
