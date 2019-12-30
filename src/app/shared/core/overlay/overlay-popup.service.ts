import { Injectable, Injector } from '@angular/core';
import {
  Overlay,
  OverlayConfig,
  OverlayRef,
  ConnectionPositionPair,
  ComponentType,
  ConnectedPosition,
} from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { MAT_OVERLAY_DATA, OverlayPopupRef, OverlayPopupConfig } from './overlay-popup-ref';

const PANEL_CLASSES: Array<string> = ['overlay-popup'];
const BACKDROP_CLASS = 'dark-backdrop';

@Injectable({ providedIn: 'root' })
export class OverlayPopupService {
  constructor(private injector: Injector, private overlay: Overlay) {}

  open<T, R>(componentType: ComponentType<T>, config: OverlayPopupConfig = {}): OverlayPopupRef<T, R> {
    const overlayRef = this.createOverlay(config);
    const dialogRef = new OverlayPopupRef<T, R>(overlayRef);
    this.attachDialogContainer(overlayRef, config, dialogRef, componentType);
    overlayRef.backdropClick().subscribe((_) => dialogRef.close());
    return dialogRef;
  }

  private createOverlay(config: OverlayPopupConfig): any {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer<T, R>(
    overlayRef: OverlayRef,
    config: OverlayPopupConfig,
    dialogRef: OverlayPopupRef<T, R>,
    componentType: ComponentType<T>,
  ): any {
    const injector = this.createInjector(config, dialogRef);
    const containerPortal = new ComponentPortal(componentType, null, injector);
    const containerRef = overlayRef.attach(containerPortal);
    return containerRef.instance;
  }

  private createInjector<T, R>(config: OverlayPopupConfig, dialogRef: OverlayPopupRef<T, R>): PortalInjector {
    const injectionTokens = new WeakMap();
    injectionTokens.set(OverlayPopupRef, dialogRef);
    injectionTokens.set(MAT_OVERLAY_DATA, config.data);
    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(config: OverlayPopupConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(config.element)
      .withPositions(
        this.getPosition(
          config.displayPointer,
          config.offsetStartX,
          config.offsetStartY,
          config.offsetEndX,
          config.offsetEndY,
        ),
      )
      .withFlexibleDimensions(true)
      .withPush(false);

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: BACKDROP_CLASS,
      panelClass: PANEL_CLASSES,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: positionStrategy,
      width: config.width,
      height: config.height,
      disposeOnNavigation: true,
    });

    return overlayConfig;
  }

  // tslint:disable-next-line:max-line-length
  private getPosition(
    displayPointer: boolean,
    offsetStartX: number,
    offsetStartY: number,
    offsetEndX: number,
    offsetEndY: number,
  ): ConnectedPosition[] {
    let arrowClassTR = new Array<string>();
    let arrowClassBR = new Array<string>();
    let arrowClassTL = new Array<string>();
    let arrowClassBL = new Array<string>();
    let arrowClassTC = new Array<string>();
    let arrowClassBC = new Array<string>();

    let overlayOffsetStartX = 20;
    let overlayOffsetStartY = 0;
    let overlayOffsetEndX = 20;
    let overlayOffsetEndY = 0;

    if (displayPointer === true) {
      arrowClassTR = ['arrow', 'arrow-top-right'];
      arrowClassBR = ['arrow', 'arrow-bottom-right'];
      arrowClassTL = ['arrow', 'arrow-top-left'];
      arrowClassBL = ['arrow', 'arrow-bottom-left'];
      arrowClassTC = ['arrow', 'arrow-top-centre'];
      arrowClassBC = ['arrow', 'arrow-bottom-centre'];
    }

    if (offsetStartX !== undefined && offsetStartX !== null) {
      overlayOffsetStartX = offsetStartX;
    }

    if (offsetStartY !== undefined && offsetStartY !== null) {
      overlayOffsetStartY = offsetStartY;
    }

    if (offsetEndX !== undefined && offsetEndX !== null) {
      overlayOffsetEndX = offsetEndX;
    }

    if (offsetEndY !== undefined && offsetEndY !== null) {
      overlayOffsetEndY = offsetEndY;
    }

    const positionsTop = [
      new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' },
        -overlayOffsetStartX,
        overlayOffsetStartY,
        arrowClassTL,
      ),
      new ConnectionPositionPair(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' },
        -overlayOffsetStartX,
        overlayOffsetStartY,
        arrowClassBL,
      ),
      new ConnectionPositionPair(
        { originX: 'end', originY: 'bottom' },
        { overlayX: 'end', overlayY: 'top' },
        overlayOffsetEndX,
        overlayOffsetEndY,
        arrowClassTR,
      ),
      new ConnectionPositionPair(
        { originX: 'end', originY: 'top' },
        { overlayX: 'end', overlayY: 'bottom' },
        overlayOffsetEndX,
        overlayOffsetEndY,
        arrowClassBR,
      ),
      new ConnectionPositionPair(
        { originX: 'center', originY: 'bottom' },
        { overlayX: 'center', overlayY: 'top' },
        0.1,
        overlayOffsetStartY,
        arrowClassTC,
      ),
      new ConnectionPositionPair(
        { originX: 'center', originY: 'top' },
        { overlayX: 'center', overlayY: 'bottom' },
        0.1,
        overlayOffsetStartY,
        arrowClassBC,
      ),
    ];

    return positionsTop;
  }
}
