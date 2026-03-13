import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ClienteListaComponent } from "./pages/cliente-lista/cliente-lista.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, ClienteListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'mini-gestor-seguros-frontend';

  itensDoMenu: MenuItem[] | undefined;

  ngOnInit() {
    this.itensDoMenu = [
      {
        label: 'Início',
        icon: 'pi pi-home'
      },
      {
        label: 'Clientes',
        icon: 'pi pi-users'
      }
    ]

  }
}
