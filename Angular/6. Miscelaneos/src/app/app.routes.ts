import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent }, // con esto todo lo que entre por /home lo analizamos con HomeComponent
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES // nos referimos a la const exportada en el usuario.routes
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // y con esto le decimos que cualquier otra ruta la mande a home
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
