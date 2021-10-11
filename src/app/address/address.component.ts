import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  colony : String = ""
  hno : String = ""
  pincode : String = ""
  locality : String = ""

  constructor(private router : Router, private httprouter : HttpClient) { }

  ngOnInit(): void {
  }

  addressFilled(){
    var lat: String = ""
    var lng : String = ""
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude.toString()
        lng = position.coords.longitude.toString()
      })
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
    
    setTimeout(() => {
      
      console.log(lat+" "+lng)
      this.httprouter.post("http://localhost:8080/saveLocation",{
        id : "0",
        userName : "Sample",
        lat : lat,
        lng : lng,
        address : "Colony : "+this.colony + "; " + "House no/ Road number : "+this.hno + "; " + "Locality : "+this.locality + "; " + "Pincode :"+ this.pincode
      }).subscribe((response) => {console.log(response)})
    },3500)
    this.router.navigate(["WaitScreen"])
  }


}
