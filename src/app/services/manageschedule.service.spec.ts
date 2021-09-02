import { TestBed } from '@angular/core/testing';

import { ManagescheduleService } from './manageschedule.service';

describe('ManagescheduleService', () => {
  let service: ManagescheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagescheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
