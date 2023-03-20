import { Directive } from '@angular/core';
import { REACTIVE_CONVEYER } from '@egjs/conveyer';
import { ReactiveAdapterResult } from '@cfcs/angular';

@Directive()
export class NgxConveyerInterface {}

// automatic reactive state, methods types
export interface NgxConveyerInterface
  extends ReactiveAdapterResult<typeof REACTIVE_CONVEYER, 'ngx'> {}
