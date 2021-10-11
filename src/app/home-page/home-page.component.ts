import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router : Router, private httpClient : HttpClient) { }

  ngOnInit(): void {}


  validateRequest(){
    this.router.navigate(["AddressScreen"])
  }

  gotoAdminScreen(){
    this.router.navigate(["AdminScreen"])
  }

}
