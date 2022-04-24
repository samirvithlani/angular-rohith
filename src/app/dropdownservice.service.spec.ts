import { TestBed } from '@angular/core/testing';

import { DropdownserviceService } from './dropdownservice.service';

describe('DropdownserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropdownserviceService = TestBed.get(DropdownserviceService);
    expect(service).toBeTruthy();
  });
});
