import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarePlanComponent } from './care-plan/care-plan.component';
import { CalendarComponent } from './calendar/calendar.component';
import { JournalComponent } from './journal/journal.component';
import { ProfileComponent } from './profile/profile.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },{
    path: 'my-care-plan', 
    component: CarePlanComponent
  }, {
    path: 'my-calendar',
    component: CalendarComponent
  }, {
    path: 'my-journal',
    component: JournalComponent
  }, {
    path: 'my-profile',
    component: ProfileComponent
  }, {
    path: 'share',
    component: ShareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
