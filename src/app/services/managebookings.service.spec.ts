import { TestBed } from '@angular/core/testing';

import { ManagebookingsService } from './managebookings.service';

describe('ManagebookingsService', () => {
  let service: ManagebookingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagebookingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
