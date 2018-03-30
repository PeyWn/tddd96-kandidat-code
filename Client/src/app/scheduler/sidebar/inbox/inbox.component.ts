import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  testItems = [
    {name: 'test1', test: 'something'},
    {name: 'test2', test: 'lala'},
    {name: 'test3', test: 'thing'},
    {name: 'test4', test: 'some'}
  ];

  selected;

  constructor() {
    this.selected = this.testItems[0];
  }

  ngOnInit() {
  }

  onSelect(item) {
    this.selected = item;
  }
}
