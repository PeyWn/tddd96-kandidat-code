import { Injectable } from '@angular/core';

@Injectable()
export class InboxService {

  public testItems = [
    {name: 'test1', test: 'something'},
    {name: 'test2', test: 'lala'},
    {name: 'test3', test: 'thing'},
    {name: 'test4', test: 'some'}
  ];

  public selected;

  constructor() {
  }

}
