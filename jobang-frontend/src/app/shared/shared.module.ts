import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChartComponent } from './components/chart/chart.component';
import { MetaDataComponent } from './components/meta-data/meta-data.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { AppliedJobCardComponent } from './components/applied-job-card/applied-job-card.component';
import { SaveJobCardComponent } from './components/save-job-card/save-job-card.component';



@NgModule({
  declarations: [
    LoaderComponent,
    NavbarComponent,
    FooterComponent,
    PaginationComponent,
    SidebarComponent,
    ChartComponent,
    MetaDataComponent,
    ScrollToTopComponent,
    JobCardComponent,
    AppliedJobCardComponent,
    SaveJobCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
