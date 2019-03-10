import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarePlanComponent } from './care-plan/care-plan.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },{
    path: 'my-care-plan', 
    component: CarePlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
