import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private _route: ActivatedRoute){
    this._route.paramMap.subscribe( params => {
      console.log("User ID is:");
      console.log(params.get('id'));
    })
  }

  ngOnInit() {}
  
}
