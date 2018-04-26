import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class LoginService {
  loggedIn: boolean;
  previousError: string;
  constructor(private httpClient: HttpClient) {
    this.loggedIn = false;
  }

  checkLoggedIn(): void {
    this.httpClient.get('/api/login').subscribe((loggedIn: boolean) => {
      this.loggedIn = loggedIn;
    });
  }

  login(username: string, password: string): void {
    this.httpClient.post('/api/login', {username: username, password: password},
      httpOptions).subscribe((res: {success: boolean, message: string}) => {
        if (res.success === true) {
          this.loggedIn = true;
        } else {
          this.previousError = res.message;
        }
    });
  }

  logout(): void {
    this.httpClient.delete('/api/login').subscribe(() => {
      this.loggedIn = false;
    });
  }

}
