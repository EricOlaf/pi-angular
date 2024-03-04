import { TestBed } from '@angular/core/testing';

import { PiReviewsService } from './pi-reviews.service';

describe('PiReviewsService', () => {
  let service: PiReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
