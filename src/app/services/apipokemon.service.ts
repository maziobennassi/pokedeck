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

  constructor(private http: HttpClient) { }

  buscarTodasCartas(): Observable<ResponseCarta> {
    const API_URL = `${this.baseUrl}/cards`;
    return this.http.get<ResponseCarta>(`${API_URL}`).pipe(catchError(this.handleError));
  }

  buscarTodasCartasPaginado(pagina: number, tamanhoPagina: number): Observable<ResponseCarta> {
    const API_URL = `${this.baseUrl}/cards`;
    const API_QUERY = `?page=${pagina}&pageSize=${tamanhoPagina}`;
    return this.http.get<ResponseCarta>(`${API_URL}${API_QUERY}`).pipe(catchError(this.handleError));
  }

  buscarTodasCartasPaginadoPorNome(pagina: number, tamanhoPagina: number, filtro: string): Observable<ResponseCarta> {
    const API_URL = `${this.baseUrl}/cards`;
    const API_QUERY = `?page=${pagina}&pageSize=${tamanhoPagina}&name=${filtro}`;
    return this.http.get<ResponseCarta>(`${API_URL}${API_QUERY}`).pipe(catchError(this.handleError));
  }

  buscarCarta(id: string): Observable<ResponseCarta> {
    const API_URL = `${this.baseUrl}/cards/${id}`;
    return this.http.get<ResponseCarta>(`${API_URL}`).pipe(catchError(this.handleError));
  }

  protected handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
