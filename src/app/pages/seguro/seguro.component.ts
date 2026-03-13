import { Component, inject, OnInit } from '@angular/core'; // Adicionámos inject e OnInit
import { CardModule } from 'primeng/card';
import { SeguroService } from '../../services/seguro.service'; // Importamos o serviço
import { Seguro } from '../../models/seguro';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-seguro',
  imports: [CardModule, CurrencyPipe],
  templateUrl: './seguro.component.html',
  styleUrl: './seguro.component.css'
})

export class SeguroComponent implements OnInit {

  private seguroService = inject(SeguroService)
  seguros: Seguro[] = []

  ngOnInit(): void {
    this.listar();
  }

  listar() { this.seguroService.listarTodos().subscribe(dados => { this.seguros = dados; }); }

}
