import { TestBed } from '@angular/core/testing';

import { PiListService } from './pi-list.service';

describe('PiListService', () => {
  let service: PiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
