import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login').then(m => m.Login)
  },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./login/login').then(m => m.Login)
  // },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadComponent: () => import('./login/login').then(m => m.Login)
      },
      {
        path: 'aa',
        loadComponent: () => import('./login/login').then(m => m.Login)
      },
      {
        path: 'test',
        loadComponent: () => import('./sign-up/sign-up').then(m => m.SignUp)
      },
      {
        path: '**',
        loadComponent: () => import('./login/login').then(m => m.Login)
      },
    ]
  },
  {
    path: 'signup',
    loadComponent: () => import('./sign-up/sign-up').then(m => m.SignUp)
  },
  {
    path: 'signup/:id',
    loadComponent: () => import('./sign-up/sign-up').then(m => m.SignUp)
  },
  {
    path: '**',
    loadComponent: () => import('./login/login').then(m => m.Login)
  },
];
