import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }
  regAttempt(user) {
    console.log("HIT USER SERVICE")
    return this._http.post('/api/users/register', user)
    .map(data => data.json())
    .toPromise();
  }
  loginAttempt(user) {
    return this._http.post('/api/login', user)
    .map(data => data.json())
    .toPromise();
  }

}
