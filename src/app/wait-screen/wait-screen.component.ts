import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminScreenComponent } from '../admin-screen/admin-screen.component';

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
    const channel = new BroadcastChannel('app-data');
    channel.addEventListener ('message', (event) => {
    console.log(event.data);
  });
  }

  dataReceived(){
    console.log("Data received")
  }
}
