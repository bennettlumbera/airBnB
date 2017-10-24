import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HostFormComponent } from './host-form/host-form.component';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent, children: []},
  {path: 'host/register', pathMatch: 'full', component: HostFormComponent },
  {path: 'users/edit/:id', pathMatch: 'full', component: ProfileComponent },
  {path: 'map', pathMatch: 'full', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
