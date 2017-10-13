import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HostFormComponent } from './host-form/host-form.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent, children: []},
  {path: 'host/register', pathMatch: 'full', component: HostFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
