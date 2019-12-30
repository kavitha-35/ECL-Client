import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isBusy: boolean;

  public showLoader(): void {
    this.isBusy = true;
  }

  public hideLoader(): void {
    this.isBusy = false;
  }
}
