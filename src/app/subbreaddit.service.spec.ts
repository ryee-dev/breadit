import { TestBed, inject } from '@angular/core/testing';

import { SubbreadditService } from './subbreaddit.service';

describe('SubbreadditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubbreadditService]
    });
  });

  it('should be created', inject([SubbreadditService], (service: SubbreadditService) => {
    expect(service).toBeTruthy();
  }));
});
