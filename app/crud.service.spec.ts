import { TestBed } from '@angular/core/testing';

import { serve } from './crud.service';

describe('serve', () => {
  let service: serve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(serve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
