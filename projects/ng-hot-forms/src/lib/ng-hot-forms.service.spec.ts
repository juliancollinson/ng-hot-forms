import { TestBed } from '@angular/core/testing';

import { NgHotFormsService } from './ng-hot-forms.service';

describe('NgHotFormsService', () => {
  let service: NgHotFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgHotFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
