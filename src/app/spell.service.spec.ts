import { TestBed } from '@angular/core/testing';

import { SpellListService } from './spell.service';

describe('SpellListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellListService = TestBed.get(SpellListService);
    expect(service).toBeTruthy();
  });
});
