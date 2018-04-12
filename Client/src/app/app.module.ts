import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenubarComponent } from './main/menubar/menubar.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { ContentComponent } from './main/content/content.component';
import { NavbarComponent } from './main/content/navbar/navbar.component';
import { ContentBodyComponent } from './main/content/content-body/content-body.component';
import { TitlebarComponent } from './main/sidebar/titlebar/titlebar.component';
import { CurrentViewService } from './main/current-view.service';
import { CalenderViewComponent } from './main/content/calender-view/calender-view.component';
import { DayViewComponent } from './main/content/day-view/day-view.component';
import { DetailViewComponent } from './main/content/detail-view/detail-view.component';
import { ButtonpanelComponent } from './main/sidebar/buttonpanel/buttonpanel.component';
import { InfoheaderComponent } from './main/sidebar/infoheader/infoheader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenubarComponent,
    SidebarComponent,
    ContentComponent,
    NavbarComponent,
    ContentBodyComponent,
    TitlebarComponent,
    CalenderViewComponent,
    DayViewComponent,
    DetailViewComponent,
    ButtonpanelComponent,
    InfoheaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CurrentViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
