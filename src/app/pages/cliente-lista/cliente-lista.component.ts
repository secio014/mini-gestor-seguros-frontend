import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-cliente-lista',
  imports: [TableModule],
  templateUrl: './cliente-lista.component.html',
  styleUrl: './cliente-lista.component.css'
})
export class ClienteListaComponent {
  // Uma lista temporária para testarmos o visual antes de ligar ao Java
  clientes = [
    { id: '1', nome: 'João Silva' },
    { id: '2', nome: 'Pedro Sécio' }
  ];
}