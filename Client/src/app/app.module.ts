import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './scheduler/sidebar/sidebar.component';
import { MenubarComponent } from './scheduler/menubar/menubar.component';
import { ContentareaComponent } from './scheduler/contentarea/contentarea.component';
import { LoginComponent } from './login/login.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { LoginService } from './login.service';
import { InboxComponent } from './scheduler/sidebar/inbox/inbox.component';
import { DecisionComponent } from './scheduler/sidebar/decision/decision.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenubarComponent,
    ContentareaComponent,
    LoginComponent,
    SchedulerComponent,
    InboxComponent,
    DecisionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
