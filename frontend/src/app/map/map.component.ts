import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title: string = 'Google Maps Addeed Successfully';
  
   lat: number = 28.38 ;
  
   lng: number = 77.12;

  constructor() { }


  ngOnInit() {
    // var map = new google.maps.Map(document.getElementById('map'), {
    //   center: {lat: -34.397, lng: 150.644},
    //   zoom: 8
    // });
  }
  }


