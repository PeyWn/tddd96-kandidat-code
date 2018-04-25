import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
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
  bootstrap: [AppComponent]
})
export class AppModule { }
