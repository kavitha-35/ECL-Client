import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ESCAPE } from '@angular/cdk/keycodes';
import { InjectionToken,  } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { ElementRef } from '@angular/core';

export class OverlayPopupConfig <D = any> {
  element?: ElementRef;
  width?: number;
  height?: number;
  data?: D | null = null;
  displayPointer?: boolean;
  offsetStartX?: number;
  offsetStartY?: number;
  offsetEndX?: number;
  offsetEndY?: number;
}

export class OverlayPopupRef<T, R = any> {

  private readonly _afterClosed = new Subject<R | undefined>();
  componentInstance: T;
  private _result: R | undefined;


  constructor(private overlayRef: OverlayRef) {
    overlayRef.detachments().subscribe(() => {
      this._afterClosed.next(this._result);
      this._afterClosed.complete();
    });

    this.afterClosed().subscribe(() => {
      this.overlayRef.detach();
      this.overlayRef.dispose();
      this.componentInstance = null;
    });

    overlayRef.keydownEvents()
      .pipe(filter(event => event.keyCode === ESCAPE))
      .subscribe(() => this.close());
  }

  afterClosed(): Observable<R | undefined> {
    return this._afterClosed.asObservable();
  }

  close(dialogResult?: R): void {
    this._result = dialogResult;
    this.overlayRef.dispose();
  }
}

export const MAT_OVERLAY_DATA = new InjectionToken<any>('MatDialogData');
