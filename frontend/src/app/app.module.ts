import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserService } from "./user.service";
import { HttpModule } from '@angular/http';
import { NavComponent } from './nav/nav.component';
import { MapComponent } from './map/map.component';
import { PropertyTileComponent } from './property-tile/property-tile.component';
import { PropertyComponent } from './property/property.component';
import { BookingRequestComponent } from './booking-request/booking-request.component';
import { ProfileComponent } from './profile/profile.component'; 
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { HostFormComponent } from './host-form/host-form.component';



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
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
