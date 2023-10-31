import { TestBed } from '@angular/core/testing';

import { WeaponGuard } from './weapon.guard';

describe('WeaponGuard', () => {
  let guard: WeaponGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WeaponGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
