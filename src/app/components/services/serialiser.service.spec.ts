import { TestBed, inject } from '@angular/core/testing';

import { SerialiserService } from './serialiser.service';

describe('SerialiserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerialiserService]
    });
  });

  it('should be created', inject([SerialiserService], (service: SerialiserService) => {
    expect(service).toBeTruthy();
  }));
});
