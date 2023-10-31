import { TestBed } from '@angular/core/testing';

import { weaponService } from './weapon.service';

describe('weaponService', () => {
  let service: weaponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(weaponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
