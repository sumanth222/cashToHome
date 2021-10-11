import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {
  
  headers : string[] = []
  address : any[] = []
  addressRow : any[] = [] 

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.headers = ["ID","Username","Address"]
    this.httpClient.get("http://localhost:8080/getAll").
    subscribe((response)=>{
      console.log(response)
    }
  )
  }
}
