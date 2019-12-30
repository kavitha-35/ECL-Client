import { AuthConfig } from 'angular-oauth2-oidc';

export const oAuthConfig: AuthConfig = {
  clientId: 'lis',
  issuer: 'https://lis-server-identity.azurewebsites.net',
  dummyClientSecret: 'secret',
  requestAccessToken: true,
  scope: 'openid',
  tokenEndpoint: 'https://lis-server-identity.azurewebsites.net/connect/token',
  userinfoEndpoint: 'https://lis-server-identity.azurewebsites.net/connect/userinfo',
  oidc: false
};
