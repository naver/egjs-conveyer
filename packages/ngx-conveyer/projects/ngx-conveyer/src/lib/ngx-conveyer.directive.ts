import { Directive, ElementRef, Input } from '@angular/core';
import { ConveyerOptions, REACTIVE_CONVEYER } from '@egjs/conveyer';
import { useReactive } from '@cfcs/angular';
import { ANGULAR_CONVEYER_EVENTS } from './consts';
import { NgxConveyerInterface } from './ngx-conveyer.interface';


@Directive({
  selector: '[ngxConveyer]',
  exportAs: "ngxConveyer",
  outputs: ANGULAR_CONVEYER_EVENTS,
})
export class NgxConveyerDirective extends NgxConveyerInterface {
  @Input() public ngxConveyer!: ConveyerOptions | "";
  // automatic methods, reactive state
  private _reacitveConveyer = useReactive(this, {
    data: () => {
      return {
        container: { current: this._elRef.nativeElement! },
        props: this.ngxConveyer || {},
      };
    },
    ...REACTIVE_CONVEYER,
  });
  // constructor
  constructor(private _elRef: ElementRef<HTMLElement>) {
    super();
  }

  // manual mounted
  ngAfterViewInit() {
    this._reacitveConveyer.mounted();
  }
  // manual destory
  ngOnDestroy() {
    this._reacitveConveyer.destroy();
  }
}
