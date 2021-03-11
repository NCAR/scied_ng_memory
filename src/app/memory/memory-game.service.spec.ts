import { TestBed } from '@angular/core/testing';

import { MemoryGameService } from './memory-game.service';

describe('MemoryGameService', () => {
  let service: MemoryGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemoryGameService]
    });

  });
  beforeEach(() => {
    service = TestBed.get(MemoryGameService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
