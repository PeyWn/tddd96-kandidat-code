import { Component, OnInit } from '@angular/core';
import { CurrentViewService } from '../current-view.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  getView() : string {
    return this.cvService.getCurrentView();
  }
  constructor(private cvService: CurrentViewService ) { }

  ngOnInit() {
  }

}
