import { Directive, ElementRef, Input } from '@angular/core';
import { ConveyerOptions, REACTIVE_CONVEYER } from '@egjs/conveyer';
import { useReactive } from './cfc/useReactive';
import { NgxConveyerInterface } from './ngx-conveyer.interface';


@Directive({
  selector: '[ngxConveyer]',
  exportAs: "ngxConveyer",
})
export class NgxConveyerDirective extends NgxConveyerInterface {
  // manual options(props)
  @Input() public ngxConveyer!: ConveyerOptions | "";
  // automatic methods, reactive state
  protected reacitveConveyer = useReactive(this, {
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
    this.reacitveConveyer.mounted();
  }
  // manual destory
  ngOnDestroy() {
    this.reacitveConveyer.destroy();
  }
}
