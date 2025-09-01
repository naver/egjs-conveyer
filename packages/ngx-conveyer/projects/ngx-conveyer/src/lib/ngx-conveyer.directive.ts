import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
} from '@angular/core';
import { ConveyerOptions, REACTIVE_CONVEYER } from '@egjs/conveyer';
import { useReactive } from '@cfcs/angular';

import { ANGULAR_CONVEYER_EVENTS } from './consts';
import { NgxConveyerInterface } from './ngx-conveyer.interface';

@Directive({
    selector: '[ngxConveyer]',
    exportAs: 'ngxConveyer',
    outputs: ANGULAR_CONVEYER_EVENTS,
    standalone: false
})
export class NgxConveyerDirective extends NgxConveyerInterface {
  @Input() ngxConveyer!: ConveyerOptions | '';

  /** Event emitters below will be created by `@cfcs/angular`. */

  // automatic methods, reactive state
  private _reactiveConveyer = useReactive(this, {
    data: () => {
      return {
        container: { current: this._host.nativeElement! },
        props: this.ngxConveyer || {},
      };
    },
    ...REACTIVE_CONVEYER,
  });

  constructor(private _host: ElementRef<HTMLElement>, private _ngZone: NgZone) {
    super();
  }

  ngAfterViewInit() {
    this._patchEventEmitters();
    this._ngZone.runOutsideAngular(() => this._reactiveConveyer.mounted());
  }

  ngOnDestroy() {
    this._reactiveConveyer.destroy();
  }

  private _patchEventEmitters(): void {
    // Pick `ngxReachStart`, ngxReachEnd` and other event emitters.
    // They will be created by `@cfcs/angular`.
    const eventEmitters: EventEmitter<unknown>[] = Object.values(this).filter(
      (value) => value instanceof EventEmitter
    );

    for (const eventEmitter of eventEmitters) {
      const emit = eventEmitter.emit;

      // We must patch event generators because we're not responsible for
      // calling `emit` since this is done by `@cfcs/angular`. The `conveyer`
      // is created outside of the Angular zone to reduce the number of change
      // detections since it setups mouse listeners (as `mousemove`).
      eventEmitter.emit = (value) => {
        // `observed` is available only in newer RxJS version (7.2+).
        if (eventEmitter.observed || eventEmitter.observers.length > 0) {
          // Given event emitter is `ngxBeginScroll`; this will re-enter the Angular
          // zone if there're any listeners added in template, for instance:
          // `<div ngxConveyer (beginScroll)="onBeginScroll()"></div>`.ngxConveyer
          return this._ngZone.run(() => emit.call(eventEmitter, value));
        } else {
          return emit.call(eventEmitter, value);
        }
      };
    }
  }
}
