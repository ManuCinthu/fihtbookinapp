import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleresultsComponent } from './scheduleresults.component';

describe('ScheduleresultsComponent', () => {
  let component: ScheduleresultsComponent;
  let fixture: ComponentFixture<ScheduleresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
