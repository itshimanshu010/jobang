import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobListComponent } from './pages/job-list/job-list.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { CreateJobComponent } from './pages/create-job/create-job.component';
import { SavedJobsComponent } from './pages/saved-jobs/saved-jobs.component';
import { JobsLayoutComponent } from './pages/jobs-layout/jobs-layout.component';


@NgModule({
  declarations: [
    JobListComponent,
    JobDetailsComponent,
    CreateJobComponent,
    SavedJobsComponent,
    JobsLayoutComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
