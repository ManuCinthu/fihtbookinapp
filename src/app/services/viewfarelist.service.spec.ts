import { TestBed } from '@angular/core/testing';

import { ViewfarelistService } from './viewfarelist.service';

describe('ViewfarelistService', () => {
  let service: ViewfarelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewfarelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
