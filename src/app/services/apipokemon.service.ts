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
    return this.get();
  }

  buscarTodasCartasPaginado(pagina: number, tamanhoPagina: number): Observable<ResponseCarta> {
    const API_QUERY = `?page=${pagina}&pageSize=${tamanhoPagina}`;
    return this.get(API_QUERY);
  }

  buscarTodasCartasPaginadoPorNome(pagina: number, tamanhoPagina: number, filtro: string): Observable<ResponseCarta> {
    const API_QUERY = `?page=${pagina}&pageSize=${tamanhoPagina}&name=${filtro}`;
    return this.get(API_QUERY);
  }

  private get(queryString: string = ""): Observable<ResponseCarta> {
    const API_URL = this.baseUrlConsultar;
    return this.http.get<ResponseCarta>(`${API_URL}${queryString}`).pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
