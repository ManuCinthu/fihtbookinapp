import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddairlinesComponent } from './addairlines.component';

describe('AddairlinesComponent', () => {
  let component: AddairlinesComponent;
  let fixture: ComponentFixture<AddairlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddairlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddairlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
