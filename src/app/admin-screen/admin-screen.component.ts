import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})

export class AdminScreenComponent implements OnInit {
  
  headers : string[] = []
  address : any[] = []
  addressRow : any[] = [] 
  allDetails : any[] = []
  cols : number = 0

  @Output() actionedItems = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.headers = ["ID","Username","Address","Latitude","Longitude"]
    this.httpClient.get("http://localhost:8080/getAll").
    subscribe((response : any)=>{
        console.log(response)
        this.allDetails = response
        this.cols = this.allDetails.length + 1
      }
    )
  }

  updateRequest(userID : number){
    console.log(userID)
    this.httpClient.post("http://localhost:8080/modifyReq",{
      id : userID,
      requestAccepted : "Accepted"
    })
  }
}
