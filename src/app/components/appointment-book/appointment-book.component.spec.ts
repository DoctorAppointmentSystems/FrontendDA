import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentBookComponent } from './appointment-book.component';

describe('AppointmentBookComponent', () => {
  let component: AppointmentBookComponent;
  let fixture: ComponentFixture<AppointmentBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentBookComponent]
    });
    fixture = TestBed.createComponent(AppointmentBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
