import { Injectable } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

import { oAuthConfig } from '../config/authentication.config';
import { User } from '../../models/user.model';

@Injectable()
export class AuthenticationService {
  constructor(private readonly oAuthService: OAuthService) {}

  public initialize(): void {
    this.oAuthService.configure(oAuthConfig);
    this.oAuthService.setStorage(sessionStorage);
  }

  public async login(userName: string, password: string): Promise<User> {
    const result = await this.oAuthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(userName, password);

    return Promise.resolve<User>(result as User);
  }

  public logout(): void {
    this.oAuthService.logOut();
    localStorage.clear();
    sessionStorage.clear();
  }

  public getUserDetails(): Promise<Object> {
    const accessToken = this.oAuthService.getAccessToken();
    if (accessToken) {
      const isValidToken = this.oAuthService.hasValidAccessToken();
      if (isValidToken) {
        return this.oAuthService.loadUserProfile();
      }
      return Promise.reject('oops! something went wrong. Kindly relogin');
    }

    return Promise.reject('oops! something went wrong. Kindly relogin');
  }

}
