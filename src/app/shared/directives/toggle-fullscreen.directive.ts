import { Directive, HostListener } from '@angular/core';

import * as screenfull from 'screenfull';

@Directive({
  selector: '[appToggleFullscreen]',
})
export class ToggleFullscreenDirective {
  @HostListener('click') public onClick(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
}
