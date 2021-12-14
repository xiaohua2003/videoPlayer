import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
  public videos:Videos[]=[]
  selectedVideo:any
  errorMsg=""

  constructor(private _videosService: VideosService) { }
 
  ngOnInit(): void {
    this._videosService.getVideos().subscribe(data=>{
      this.videos=data
    },
    error=>{
         this.errorMsg=error.message
    }
    )
  }
  selectVideo(video:any){
    this.selectedVideo=video
    console.log(this.selectedVideo)
  }
}
