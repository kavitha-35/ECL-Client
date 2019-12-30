import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LoginRouting } from './login.routing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SharedModule } from '../shared/shared.module';
import { NgxLoadingModule } from 'ngx-loading';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotEmailComponent } from './components/forgot-email/forgot-email.component';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ForgotEmailComponent],
  imports: [
    CommonModule,
    LoginRouting,
    FormsModule,
    MatCardModule,
    FlexModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    SharedModule,
    NgxLoadingModule,
  ],
  exports: [RouterModule]
})
export class LoginModule { }
