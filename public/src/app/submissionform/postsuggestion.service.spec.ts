import { TestBed } from '@angular/core/testing';

import { PostSuggestionService } from './postsuggestion.service';

describe('PostsuggestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostSuggestionService = TestBed.get(PostSuggestionService);
    expect(service).toBeTruthy();
  });
});
