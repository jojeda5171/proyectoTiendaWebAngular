import { TestBed } from '@angular/core/testing';

import { NiñosService } from './niños.service';

describe('NiñosService', () => {
  let service: NiñosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NiñosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
