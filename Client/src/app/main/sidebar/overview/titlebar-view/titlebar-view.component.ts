
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlebar-view',
  templateUrl: './titlebar-view.component.html',
  styleUrls: ['./titlebar-view.component.css']
})
export class TitlebarViewComponent implements OnInit {
  title = 'Beslutsöversikt';

  constructor() { }

  ngOnInit() {
  }

}
