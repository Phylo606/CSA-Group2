import { TestBed } from '@angular/core/testing';

import { ParasternalService } from './parasternal.service';

describe('ParasternalService', () => {
  let service: ParasternalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParasternalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
