import { TestBed } from '@angular/core/testing';

import { UsersService } from './users-service.service';

describe('UsersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});
