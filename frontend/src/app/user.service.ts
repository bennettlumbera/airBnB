import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {

  currUserId = null

  server_route = 'http://127.0.0.1:8000/'
  constructor(private _http: Http) { }
  regAttempt(user) {
    console.log("HIT USER SERVICE")
    console.log(user)
    return this._http.post(this.server_route + 'api/users/register', user)
    .map(data => data.json())
    .toPromise();
  }

  loginAttempt(user) {
    console.log("HIT LOGIN AT USER SERVICE")
    console.log(user)
    return this._http.post(this.server_route + 'api/users/login', user)
    .map(data => data.json())
    .toPromise();
  }

  // logout(user) {
  //   console.log("HIT LOGOUT AT USER SERVICE")
  //   console.log(user)
  //   return this._http.get(this.server_route + 'api/users/logout', user)
  //   .map(data => data.json())
  //   .toPromise();
  // }  
  
  showUser(user) {
    return this._http.get(this.server_route + 'api/users/profile' + user)
      .map(data => data.json())
      .toPromise();
  }

  showCurrUser() {
    return this._http.get(this.server_route + 'api/users/profile/' + this.currUserId)
      .map(data => data.json())
      .toPromise();
  }

  setCurrUser(userId) {
    this.currUserId = userId
  }

}
