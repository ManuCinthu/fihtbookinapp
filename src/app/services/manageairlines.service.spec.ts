import { TestBed } from '@angular/core/testing';

import { ManageairlinesService } from './manageairlines.service';

describe('ManageairlinesService', () => {
  let service: ManageairlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageairlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
