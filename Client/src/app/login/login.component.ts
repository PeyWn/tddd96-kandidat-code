import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  login(username: string, password: string): void {
    this.loginService.login(username, password);
  }

  ngOnInit() {
    this.loginService.previousError = '';
    this.loginService.checkLoggedIn();
  }

}
