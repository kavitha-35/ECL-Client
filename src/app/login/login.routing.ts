import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-email',
    component: ForgotEmailComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

export const LoginRouting: ModuleWithProviders = RouterModule.forChild(routes);
