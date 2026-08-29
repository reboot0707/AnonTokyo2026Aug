import { TestBed } from '@angular/core/testing';

import { InputVerify } from './input-verify';

describe('InputVerify', () => {
  let service: InputVerify;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputVerify);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
