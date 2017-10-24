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
  user: {}

  constructor(private _route: ActivatedRoute, private _userService: UserService){
   
  
  }
  ngOnInit() {
    this.showUser();
  }

  showUser() {
    this._userService.showCurrUser()
      .then(data => {
        this.user = data[0]['fields']
      })
  }
  
}
