import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagediscountsComponent } from './managediscounts.component';

describe('ManagediscountsComponent', () => {
  let component: ManagediscountsComponent;
  let fixture: ComponentFixture<ManagediscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagediscountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagediscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
