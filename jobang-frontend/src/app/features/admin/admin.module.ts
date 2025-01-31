import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditJobComponent } from './pages/edit-job/edit-job.component';
import { EditApplicationComponent } from './pages/edit-application/edit-application.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { ViewAllJobsComponent } from './pages/view-all-jobs/view-all-jobs.component';
import { ViewAllApplicationsComponent } from './pages/view-all-applications/view-all-applications.component';
import { ViewAllUsersComponent } from './pages/view-all-users/view-all-users.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EditJobComponent,
    EditApplicationComponent,
    EditUserComponent,
    ViewAllJobsComponent,
    ViewAllApplicationsComponent,
    ViewAllUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
