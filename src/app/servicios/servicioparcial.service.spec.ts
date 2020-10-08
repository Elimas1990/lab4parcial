import { TestBed } from '@angular/core/testing';

import { ServicioparcialService } from './servicioparcial.service';

describe('ServicioparcialService', () => {
  let service: ServicioparcialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioparcialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
