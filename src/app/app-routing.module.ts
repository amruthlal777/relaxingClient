import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from './commercial/commercial.component';
import { HomeComponent } from './home/home.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LivingSpacesComponent } from './living-spaces/living-spaces.component';
import { OfficeComponent } from './office/office.component';

const routes: Routes = [
  {
    path:'' , 
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path: 'living', 
    component:LivingSpacesComponent,
    pathMatch:'full'
  },
  {
    path: 'office', 
    component:OfficeComponent,
    pathMatch:'full'
  },
  {
    path: 'kitchen', 
    component:KitchenComponent,
    pathMatch:'full'
  },
  {
    path: 'commercial', 
    component:CommercialComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
