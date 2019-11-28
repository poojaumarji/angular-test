import { TestBed } from '@angular/core/testing';

import { ComponyListService } from './compony-list.service';

describe('ComponyListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponyListService = TestBed.get(ComponyListService);
    expect(service).toBeTruthy();
  });
});
