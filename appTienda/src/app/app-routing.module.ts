import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule) },
  { path: 'cambiopass', loadChildren: () => import('./cambiopass/cambiopass.module').then(m => m.CambiopassModule), ...canActivate(() => redirectUnauthorizedTo([''])) },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'articulos', loadChildren: () => import('./articulos/articulos.module').then(m => m.ArticulosModule) },
  { path: 'niños', loadChildren: () => import('./niños/niños.module').then(m => m.NiñosModule) },
  { path: 'lanzamientos', loadChildren: () => import('./lanzamientos/lanzamientos.module').then(m => m.LanzamientosModule) },
  { path: 'favoritos', loadChildren: () => import('./favoritos/favoritos.module').then(m => m.FavoritosModule), ...canActivate(() => redirectUnauthorizedTo([''])) },
  { path: 'contactos', loadChildren: () => import('./contactos/contactos.module').then(m => m.ContactosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
