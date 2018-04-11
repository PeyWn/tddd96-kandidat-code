import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  test = 'one';
  constructor() { }

  ngOnInit() {
  }

  setTest(charmander) {
    this.test = charmander;
  }

  getTest() {
    return this.test;
  }
}
