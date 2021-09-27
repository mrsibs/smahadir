import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'utama',
    loadChildren: () => import('./utama/utama.module').then( m => m.UtamaPageModule)
  },
  {
    path: 'guru',
    loadChildren: () => import('./guru/guru.module').then( m => m.GuruPageModule)
  },
  {
    path: 'scanguru',
    loadChildren: () => import('./scanguru/scanguru.module').then( m => m.ScanguruPageModule)
  },
  {
    path: 'hadirguru',
    loadChildren: () => import('./hadirguru/hadirguru.module').then( m => m.HadirguruPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
