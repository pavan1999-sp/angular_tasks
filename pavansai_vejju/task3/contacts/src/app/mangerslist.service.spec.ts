import { TestBed } from '@angular/core/testing';

import { MangerslistService } from './mangerslist.service';

describe('MangerslistService', () => {
  let service: MangerslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangerslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
