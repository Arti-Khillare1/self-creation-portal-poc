import { TestBed } from '@angular/core/testing';

import { SelfCreationPortalDockService } from './self-creation-portal-dock.service';

describe('SelfCreationPortalDockService', () => {
  let service: SelfCreationPortalDockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfCreationPortalDockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
