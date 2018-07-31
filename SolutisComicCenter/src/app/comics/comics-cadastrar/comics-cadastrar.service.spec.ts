import { TestBed, inject } from '@angular/core/testing';

import { ComicsCadastrarService } from './comics-cadastrar.service';

describe('ComicsCadastrarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicsCadastrarService]
    });
  });

  it('should be created', inject([ComicsCadastrarService], (service: ComicsCadastrarService) => {
    expect(service).toBeTruthy();
  }));
});
