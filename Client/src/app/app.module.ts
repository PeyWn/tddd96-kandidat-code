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
import { TitlebarComponent } from './main/sidebar/planning/titlebar/titlebar.component';
import { CurrentViewService } from './main/current-view.service';
import { CalenderViewComponent } from './main/content/calender-view/calender-view.component';
import { DayViewComponent } from './main/content/day-view/day-view.component';
import { DetailViewComponent } from './main/content/detail-view/detail-view.component';
import { ButtonpanelComponent } from './main/sidebar/planning/buttonpanel/buttonpanel.component';
import { InfoheaderComponent } from './main/sidebar/planning/infoheader/infoheader.component';
import { PlanningComponent } from './main/sidebar/planning/planning.component';
import { OverviewComponent } from './main/sidebar/overview/overview.component';

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
    PlanningComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CurrentViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
