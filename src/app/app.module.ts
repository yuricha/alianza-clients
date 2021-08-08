import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
//import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ClientsComponent,
    SidenavComponent,
    DialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule ,
    MatDialogModule ,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    MatIconModule,

  ],
  providers: [HttpClientModule,],
  bootstrap: [AppComponent]
  ,
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
