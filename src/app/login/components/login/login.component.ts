import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../shared/authentication/services/authentication.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  isBusy: boolean;
  isInvalidCredentials: boolean;

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  public async login(ngForm: NgForm): Promise<void> {
    await this.router.navigate([`/main`]);
    // Commented since the Server is Down.
    // this.isBusy = true;
    // this.isInvalidCredentials = false;
    // if (ngForm.valid) {
    //   this.authenticationService.login(this.email, this.password)
    //                             .then(async (user) => {
    //                                 await this.router.navigate([`/main`]);
    //                             })
    //                             .catch((err) => {
    //                               this.isInvalidCredentials = true;
    //                               this.isBusy = false;
    //                             });
    // }
  }
}
