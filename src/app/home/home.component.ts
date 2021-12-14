import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url='https://www.youtube.com/embed/M9y1X-WQkLo'
  constructor() { }

  ngOnInit(): void {
  }

}
