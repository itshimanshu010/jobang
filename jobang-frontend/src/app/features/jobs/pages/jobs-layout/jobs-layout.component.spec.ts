import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsLayoutComponent } from './jobs-layout.component';

describe('JobsLayoutComponent', () => {
  let component: JobsLayoutComponent;
  let fixture: ComponentFixture<JobsLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsLayoutComponent]
    });
    fixture = TestBed.createComponent(JobsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
