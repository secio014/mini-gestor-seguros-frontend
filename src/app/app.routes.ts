import { Routes } from '@angular/router';
import { ClienteListaComponent } from './pages/cliente-lista/cliente-lista.component';

export const routes: Routes = [
    {
        path: '',
        component: ClienteListaComponent,
    },
    {
        path: 'clientes',
        component: ClienteListaComponent,
    },
];
