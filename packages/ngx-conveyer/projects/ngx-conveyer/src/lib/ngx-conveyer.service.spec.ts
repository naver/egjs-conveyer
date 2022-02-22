import { TestBed } from '@angular/core/testing';

import { NgxConveyerService } from './ngx-conveyer.service';

describe('NgxConveyerService', () => {
  let service: NgxConveyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxConveyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
