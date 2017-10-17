import { Component } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'airBnB';

  constructor(private http: Http) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authentication', `hello`);

   let options = new RequestOptions({headers: headers});
   this.http.post(
    "http://localhost:4200",
    JSON.stringify({id: 4, name: 'some'}),
    options
   ).subscribe();
}
}
