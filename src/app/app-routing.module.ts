import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'tipo',
    loadChildren: () => import('./pages/tipo/tipo.module').then( m => m.TipoPageModule)
  },
  {
    path: 'niveles',
    loadChildren: () => import('./pages/niveles/niveles.module').then( m => m.NivelesPageModule)
  },
  {
    path: 'metodologia',
    loadChildren: () => import('./pages/metodologia/metodologia.module').then( m => m.MetodologiaPageModule)
  },
  {
    path: 'suscripcion',
    loadChildren: () => import('./pages/suscripcion/suscripcion.module').then( m => m.SuscripcionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
