import { TestBed } from '@angular/core/testing';

import { LasAcaciasData } from './las-acacias-data';

describe('LasAcaciasData', () => {
  let service: LasAcaciasData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LasAcaciasData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
