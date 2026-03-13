import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // O inject(HttpClient) é a forma moderna de trazer o cliente HTTP para aqui
  private http = inject(HttpClient);
  private url = 'http://localhost:8081/clientes'; // Verifique se é este o caminho do seu Java

  listarTodos() {
    return this.http.get<Cliente[]>(this.url);
  }
}