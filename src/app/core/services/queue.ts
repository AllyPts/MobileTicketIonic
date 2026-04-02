import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  private API_URL = 'http://localhost:3000'; // URL do seu backend Node

  constructor(private http: HttpClient) {}

  // Busca as últimas 5 senhas chamadas para o Painel
  getUltimasChamadas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/senhas/ultimas`);
  }

  // Atendente chama a próxima
  chamarProximo(guiche: number): Observable<any> {
    return this.http.post(`${this.API_URL}/senhas/chamar`, { guiche });
  }
}
