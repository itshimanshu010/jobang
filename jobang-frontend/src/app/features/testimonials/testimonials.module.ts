import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsListComponent } from './testimonials-list/testimonials-list.component';


@NgModule({
  declarations: [
    TestimonialsListComponent
  ],
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ]
})
export class TestimonialsModule { }
