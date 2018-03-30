import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  loggedIn: boolean;
  constructor() {
    this.loggedIn = false;
  }

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
