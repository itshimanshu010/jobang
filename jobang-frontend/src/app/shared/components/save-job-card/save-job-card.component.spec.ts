import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveJobCardComponent } from './save-job-card.component';

describe('SaveJobCardComponent', () => {
  let component: SaveJobCardComponent;
  let fixture: ComponentFixture<SaveJobCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveJobCardComponent]
    });
    fixture = TestBed.createComponent(SaveJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
