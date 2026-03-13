import { Routes } from '@angular/router';
import { ClienteListaComponent } from './pages/cliente-lista/cliente-lista.component';
import { SeguroComponent } from './pages/seguro/seguro.component';

export const routes: Routes = [
    {
        path: '',
    },
    {
        path: 'clientes',
        component: ClienteListaComponent,
    },
    {
        path: 'seguros',
        component: SeguroComponent,
    },
];
