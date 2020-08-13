import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ResponseCarta } from '../models/response-carta';

@Injectable({
  providedIn: 'root'
})

export class ApiPokemonService {

  private baseUrl: string = environment.apiPokemon;
  private baseUrlConsultar: string = `${this.baseUrl}/cards`;

  constructor(private http: HttpClient) { }

  buscarTodasCartas(): Observable<ResponseCarta> {
    const API_URL = this.baseUrlConsultar;
    return this.get(API_URL);
  }

  buscarTodasCartasPaginado(pagina: number, tamanhoPagina: number): Observable<ResponseCarta> {
    const API_URL = this.baseUrlConsultar;
    const API_QUERY = `?page=${pagina}&pageSize=${tamanhoPagina}`;
    return this.get(`${API_URL}${API_QUERY}`);
  }

  buscarTodasCartasPaginadoPorNome(pagina: number, tamanhoPagina: number, filtro: string): Observable<ResponseCarta> {
    const API_URL = this.baseUrlConsultar;
    const API_QUERY = `?page=${pagina}&pageSize=${tamanhoPagina}&name=${filtro}`;
    return this.get(`${API_URL}${API_QUERY}`);
  }

  buscarCarta(id: string): Observable<ResponseCarta> {
    const API_URL = `${this.baseUrlConsultar}/${id}`;
    return this.get(API_URL);
  }

  protected get(endpoint: string): Observable<ResponseCarta> {
    return this.http.get<ResponseCarta>(endpoint).pipe(catchError(this.handleError));
  }

  protected handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
