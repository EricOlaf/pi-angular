import { TestBed } from '@angular/core/testing';

import { PiDetailsService } from './pi-details.service';

describe('PiDetailsService', () => {
  let service: PiDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
