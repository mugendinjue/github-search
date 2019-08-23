import { TestBed } from '@angular/core/testing';

import { HttpSeviceService } from './http-sevice.service';

describe('HttpSeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpSeviceService = TestBed.get(HttpSeviceService);
    expect(service).toBeTruthy();
  });
});
