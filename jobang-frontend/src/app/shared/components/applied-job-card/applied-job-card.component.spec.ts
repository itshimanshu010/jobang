import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobCardComponent } from './applied-job-card.component';

describe('AppliedJobCardComponent', () => {
  let component: AppliedJobCardComponent;
  let fixture: ComponentFixture<AppliedJobCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedJobCardComponent]
    });
    fixture = TestBed.createComponent(AppliedJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
