import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { PropertyService } from './property.service';
import { FormsModule, ReactiveFormsModule, }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserService } from "./user.service";
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { NavComponent } from './nav/nav.component';
import { MapComponent } from './map/map.component';
import { PropertyTileComponent } from './property-tile/property-tile.component';
import { PropertyComponent } from './property/property.component';
import { BookingRequestComponent } from './booking-request/booking-request.component';
import { ProfileComponent } from './profile/profile.component'; 
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { HostFormComponent } from './host-form/host-form.component';
import { CommonModule }   from '@angular/common';
import { AgmCoreModule } from '@agm/core';

// import { RequestOptions } from '@angular/http';
// import {HttpClientModule} from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import {Http, Headers, RequestOptions} from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MapComponent,
    PropertyTileComponent,
    PropertyComponent,
    BookingRequestComponent,
    ProfileComponent,
    HostFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MyDateRangePickerModule,
    AgmCoreModule.forRoot({
      
           apiKey: 'AIzaSyBWV7-vUoEKBzioYvs4-EDWB5rt8QJhsiw'
      
         })

    // HttpClientModule,
    // HttpHeaders,
    // Http,
    // Headers,

  ],

  providers: [UserService, PropertyService,
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
