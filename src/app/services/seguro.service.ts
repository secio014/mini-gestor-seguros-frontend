import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Seguro } from '../models/seguro';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {
  // O inject(HttpClient) é a forma moderna de trazer o cliente HTTP para aqui
  private http = inject(HttpClient);
  private url = 'http://localhost:8081/seguros'; // Verifique se é este o caminho do seu Java

  listarTodos() {
    return this.http.get<Seguro[]>(this.url);
  }
}