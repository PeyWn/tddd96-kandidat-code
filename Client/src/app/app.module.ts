import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenubarComponent } from './main/menubar/menubar.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { ContentComponent } from './main/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenubarComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
