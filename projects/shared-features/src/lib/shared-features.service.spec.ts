import { TestBed } from '@angular/core/testing';

import { SharedFeaturesService } from './shared-features.service';

describe('SharedFeaturesService', () => {
  let service: SharedFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
