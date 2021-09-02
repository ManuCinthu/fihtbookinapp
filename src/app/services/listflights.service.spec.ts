import { TestBed } from '@angular/core/testing';

import { ListflightsService } from './listflights.service';

describe('ListflightsService', () => {
  let service: ListflightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListflightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
