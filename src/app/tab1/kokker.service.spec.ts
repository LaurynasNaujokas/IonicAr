import { TestBed } from '@angular/core/testing';

import { KokkerService } from './kokker.service';

describe('KokkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KokkerService = TestBed.get(KokkerService);
    expect(service).toBeTruthy();
  });
});
