import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Videos} from './videos';
import { catchError, Observable,tap } from 'rxjs';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videoUrl='http://localhost:3000/api/videos'
  addUrl='http://localhost:3000/api/video'
  updateUrl="http://localhost:3000/api/videos/"
  deleteUrl="http://localhost:3000/api/videos/"
  constructor(private http: HttpClient) { 
  }
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  getVideos(){
    return this.http.get<Videos[]>(this.videoUrl).pipe(catchError(this.handleError))
  }
  addVideos(videos:Videos):Observable<Videos>{
    return this.http.post<Videos>(this.addUrl, videos, this.httpOptions).pipe(catchError(this.handleError))
    
  }
  updateVideo(video:Videos){
    return this.http.patch(this.updateUrl+video._id, JSON.stringify(video), this.httpOptions).pipe(catchError(this.handleError))
  }
  deleteVideo(video:Videos){
    return this.http.delete(this.deleteUrl+video._id, this.httpOptions).pipe(tap( _ => console.log('delete')),catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>error)
  }

}
