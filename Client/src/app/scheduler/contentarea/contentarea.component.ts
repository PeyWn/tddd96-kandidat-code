import { Component, OnInit } from '@angular/core';
import {InboxService} from '../sidebar/inbox/inbox.service';

@Component({
  selector: 'app-contentarea',
  templateUrl: './contentarea.component.html',
  styleUrls: ['./contentarea.component.css']
})
export class ContentareaComponent implements OnInit {

  constructor(private inboxService: InboxService) { }

  ngOnInit() {
  }

}
