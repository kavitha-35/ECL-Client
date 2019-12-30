import { Directive } from '@angular/core';
import { Router } from '@angular/router';

import { AccordionLinkDirective } from './accordionlink.directive';

@Directive({
  selector: '[appAccordion]',
})
export class AccordionDirective {
  protected navlinks: Array<AccordionLinkDirective> = [];

  constructor(private router: Router) {}

  public closeOtherLinks(openLink: AccordionLinkDirective): void {
    this.navlinks.forEach((link: AccordionLinkDirective) => {
      if (link !== openLink) {
        link.open = false;
      }
    });
  }

  public addLink(link: AccordionLinkDirective): void {
    this.navlinks.push(link);
  }

  public removeGroup(link: AccordionLinkDirective): void {
    const index = this.navlinks.indexOf(link);
    if (index !== -1) {
      this.navlinks.splice(index, 1);
    }
  }

  public getUrl(): string {
    return this.router.url;
  }
}
