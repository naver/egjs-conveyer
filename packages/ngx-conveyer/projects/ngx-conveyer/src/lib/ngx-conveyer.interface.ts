import { REACTIVE_CONVEYER } from '@egjs/conveyer';
import { AngularReactiveAdapterResult } from '@cfcs/angular';


export class NgxConveyerInterface { }

// automatic reactive state, methods types
export interface NgxConveyerInterface
  extends AngularReactiveAdapterResult<typeof REACTIVE_CONVEYER> { }
