import { TestBed } from '@angular/core/testing';

import { SynthesizeService } from './synthesize.service';

describe('SynthesizeService', () => {
  let service: SynthesizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SynthesizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
