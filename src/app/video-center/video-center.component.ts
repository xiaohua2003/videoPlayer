import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
  public videos:any
  selectedVideo:any
  errorMsg:any
  hideVideo:boolean=true

  constructor(private _videosService: VideosService) { }
 
  ngOnInit(): void {
    this.fetchData()
  }
  fetchData(){
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
    this.hideVideo=true;
  }
  newVideo(){
    this.hideVideo=false;
  }
  addNewvideo(video:Videos){
   this._videosService.addVideos(video).subscribe(data=>{
     this.videos.push(data)
     this.hideVideo=true;
   },
   error=>{
     this.errorMsg=error.message
   })
   console.log(this.videos)
  }
  
  updateVideo(video:Videos){
    this._videosService.updateVideo(video).subscribe(
      error=>{
        this.errorMsg=error
      }
    )
    console.log(this.videos)
   }
  deleteVideo(video:Videos){
    this.videos=this.videos.filter((h:Videos)=>h!==video)
    this._videosService.deleteVideo(video).subscribe(
    )
    this.selectedVideo=null
   console.log(this.videos)
   
  
  }

}
