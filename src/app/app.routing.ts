import { Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/components/login/login.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';

export const AppRoutes: Routes = [
  {
    path: 'main',
    pathMatch: 'full',
    component: MainComponent,
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'control-panel',
    pathMatch: 'full',
    component: ControlPanelComponent,
    loadChildren: () => import('./control-panel/control-panel.module').then((m) => m.ControlPanelModule),
  },

  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  { path: '**', redirectTo: '' },
];
