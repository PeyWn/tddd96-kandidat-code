import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



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
import { ButtonpanelOverviewComponent } from './main/sidebar/overview/buttonpanel-overview/buttonpanel-overview.component';
import { TitlebarViewComponent } from './main/sidebar/overview/titlebar-view/titlebar-view.component';
import { SidebarPanelService} from './main/sidebar/sidebar-panel.service';
import { DecisionsComponent } from './main/sidebar/overview/decisions/decisions.component';
import { GetPatientsService} from './main/get-patients.service';
import {CommonModule} from '@angular/common';

// Language fix
import { registerLocaleData } from '@angular/common';
import localeSv from '@angular/common/locales/sv';
registerLocaleData(localeSv);
import {DecisionService} from './http-api/decision/decision.service';
import {HttpClientModule} from '@angular/common/http';
import {StaffService} from './http-api/staff/staff.service';
import {ProcedureService} from './http-api/procedure/procedure.service';
import {RoomService} from './http-api/room/room.service';
import {PatientService} from './http-api/patient/patient.service';
import {MaterialService} from './http-api/material/material.service';
import {Icd10Service} from './http-api/icd10/icd10.service';
import {ClinicService} from './http-api/clinic/clinic.service';
import {BookingService} from './http-api/booking/booking.service';

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
    ButtonpanelOverviewComponent,
    TitlebarViewComponent,
    DecisionsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    CommonModule,
    NgbModalModule.forRoot(),
  ],
  providers: [
    CurrentViewService,
    SidebarPanelService,
    GetPatientsService,
    DecisionService,
    StaffService,
    ProcedureService,
    RoomService,
    PatientService,
    MaterialService,
    Icd10Service,
    ClinicService,
    BookingService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    InfoheaderComponent,
    DayViewComponent
  ],
})
export class AppModule { }
