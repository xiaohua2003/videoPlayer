import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Videos} from './videos';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videoUrl='http://localhost:3000/api/videos'
  constructor(private http: HttpClient) { 
  }
  getVideos(){
    return this.http.get<Videos[]>(this.videoUrl).pipe(catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>error)
  }
}
