import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageairlinesComponent } from './manageairlines.component';

describe('ManageairlinesComponent', () => {
  let component: ManageairlinesComponent;
  let fixture: ComponentFixture<ManageairlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageairlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageairlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
