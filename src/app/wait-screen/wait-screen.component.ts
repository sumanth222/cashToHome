import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wait-screen',
  templateUrl: './wait-screen.component.html',
  styleUrls: ['./wait-screen.component.css']
})
export class WaitScreenComponent implements OnInit {

  lat: String = ""
  lng:String = ""

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

}
