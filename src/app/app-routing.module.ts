import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'cliente-lista',
    loadChildren: () => import('./views/clientes/cliente-lista/cliente-lista.module').then(m => m.ClienteListaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente-registro',
    loadChildren: () => import('./views/clientes/cliente-registro/cliente-registro.module').then(m => m.ClienteRegistroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente-financiamento',
    loadChildren: () => import('./views/clientes/cliente-financiamento/cliente-financiamento.module').then(m => m.ClienteFinanciamentoPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'usuario-registro',
    loadChildren: () => import('./views/usuarios/usuario-registro/usuario-registro.module').then(m => m.UsuarioRegistroPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario-lista',
    loadChildren: () => import('./views/usuarios/usuario-lista/usuario-lista.module').then(m => m.UsuarioListaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'parceiros',
    loadChildren: () => import('./views/parceiros/parceiros.module').then(m => m.ParceirosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'quem-somos',
    loadChildren: () => import('./views/quem-somos/quem-somos.module').then(m => m.QuemSomosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contato',
    loadChildren: () => import('./views/contato/contato.module').then(m => m.ContatoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente-simulacao',
    loadChildren: () => import('./views/clientes/cliente-simulacao/cliente-simulacao.module').then(m => m.ClienteSimulacaoPageModule),
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'cliente-detalhes',
  //   loadChildren: () => import('./views/clientes/cliente-detalhes/cliente-detalhes.module').then(m => m.ClienteDetalhesPageModule),
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'cliente-detalhes/:id',
    loadChildren: () => import('./views/clientes/cliente-detalhes/cliente-detalhes.module').then(m => m.ClienteDetalhesPageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
