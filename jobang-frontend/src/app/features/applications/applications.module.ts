import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { ApplicationDetailsComponent } from './pages/application-details/application-details.component';
import { AppliedJobsComponent } from './pages/applied-jobs/applied-jobs.component';


@NgModule({
  declarations: [
    ApplicationListComponent,
    ApplicationDetailsComponent,
    AppliedJobsComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
