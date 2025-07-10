import { TestBed } from '@angular/core/testing';

import { SmartApiService } from './smart-api.service';

describe('SmartApiService', () => {
  let service: SmartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
