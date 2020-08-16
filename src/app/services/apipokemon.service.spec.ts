import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CartaMock } from 'src/test/mocks/carta-mock';

import { ResponseCarta } from '../models/response-carta';
import { ApiPokemonService } from './apipokemon.service';

describe('ApipokemonService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: ApiPokemonService;
  const baseUrlConsultar: string = environment.apiPokemon + '/cards';
  const pagina: number = 1;
  const quantidade: number = 5;
  const nome: string = "teste";
  const resultadoEsperado: Observable<ResponseCarta> = of({
    cards: CartaMock.retornarCartas()
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(ApiPokemonService);
  });

  afterEach(() => {
    service = null;
    httpMock.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('método buscarTodasCartas deve retornar uma lista de cartas', () => {
    service.buscarTodasCartas()
      .pipe(
        first(),
      )
      .subscribe((data) => {
        expect(data).toEqual(resultadoEsperado);
      });

    const requisicao = httpMock.expectOne(baseUrlConsultar);
    expect(requisicao.request.method).toBe('GET');
    requisicao.flush(resultadoEsperado);
  });

  it('método buscarTodasCartas deve retornar uma lista de cartas paginado', () => {
    service.buscarTodasCartasPaginado(pagina, quantidade)
      .pipe(
        first(),
      )
      .subscribe((data) => {
        expect(data).toEqual(resultadoEsperado);
      });

    const requisicao = httpMock.expectOne(`${baseUrlConsultar}?page=${pagina}&pageSize=${quantidade}`);
    expect(requisicao.request.method).toBe('GET');
    requisicao.flush(resultadoEsperado);
  });

  it('método buscarTodasCartas deve retornar uma lista de cartas paginado por nome', () => {
    service.buscarTodasCartasPaginadoPorNome(pagina, quantidade, nome)
      .pipe(
        first(),
      )
      .subscribe((data) => {
        expect(data).toEqual(resultadoEsperado);
      });

    const requisicao = httpMock.expectOne(`${baseUrlConsultar}?page=${pagina}&pageSize=${quantidade}&name=${nome}`);
    expect(requisicao.request.method).toBe('GET');
    requisicao.flush(resultadoEsperado);
  });
});