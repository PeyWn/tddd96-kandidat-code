import { Component, OnInit } from '@angular/core';
import {InboxService} from './inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private inboxService: InboxService) {}

  ngOnInit() {
    this.inboxService.selected = this.inboxService.testItems[0];
  }
}
