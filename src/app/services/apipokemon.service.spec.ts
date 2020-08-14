import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiPokemonService } from './apipokemon.service';

describe('ApipokemonService', () => {
  let service: ApiPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
