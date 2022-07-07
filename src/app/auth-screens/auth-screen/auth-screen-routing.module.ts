import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthScreenPage } from './auth-screen.page';

const routes: Routes = [
  {
    path: '',
    component: AuthScreenPage
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthScreenPageRoutingModule {}
