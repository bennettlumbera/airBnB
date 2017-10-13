import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  server_route = 'http://127.0.0.1:8000/'

  constructor(private _http: Http) { }
  regAttempt(user) {
    console.log("HIT USER SERVICE")
    return this._http.post(this.server_route +'api/users/register', user)
    .map(data => data.json())
    .toPromise();
  }
  loginAttempt(user) {
    return this._http.post('/api/login', user)
    .map(data => data.json())
    .toPromise();
  }

}
