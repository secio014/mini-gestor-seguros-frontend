import { Component, inject, OnInit } from '@angular/core'; // Adicionámos inject e OnInit
import { TableModule } from 'primeng/table';
import { ClienteService } from '../../services/cliente.service'; // Importamos o serviço
import { Cliente } from '../../models/cliente';
import { Button } from "primeng/button"; // Import Interface

@Component({
  selector: 'app-cliente-lista',
  standalone: true,
  imports: [TableModule, Button],
  templateUrl: './cliente-lista.component.html',
  styleUrl: './cliente-lista.component.css'
})

export class ClienteListaComponent implements OnInit {
  private clienteService = inject(ClienteService);
  clientes: Cliente[] = []; // Começa vazia agora

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.clienteService.listarTodos().subscribe(dados => {
      this.clientes = dados;
    });
  }

  excluirCliente (id: string) {
    this.clienteService.excluir(id).subscribe(() => {
        this.listar();
    });
  }
}