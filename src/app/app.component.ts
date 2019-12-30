import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './shared/authentication/services/authentication.services';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    private authenticationService: AuthenticationService
    ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    this.authenticationService.initialize();
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
