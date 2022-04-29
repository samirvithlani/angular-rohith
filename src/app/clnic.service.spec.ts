import { TestBed } from '@angular/core/testing';

import { ClnicService } from './clnic.service';

describe('ClnicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClnicService = TestBed.get(ClnicService);
    expect(service).toBeTruthy();
  });
});
