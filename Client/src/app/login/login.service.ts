import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  testLoggedIn() {
    this.httpClient.get('/test').subscribe(function(result2) {
      console.log('2');
    });
  }

  login() {
    this.httpClient.post('/login', {username: 'testname', password: 'testpass'},
      httpOptions).subscribe(function(res) {
        console.log('logged in');
    });
  }

  logout() {
    this.httpClient.delete('/login').subscribe(function(res) {
      console.log('logged out');
    });
  }

}
