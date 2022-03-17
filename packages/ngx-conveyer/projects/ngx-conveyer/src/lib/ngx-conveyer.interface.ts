import { ConveyerEvents, REACTIVE_CONVEYER } from '@egjs/conveyer';
import { AngularBindingProperties, AngularReactiveAdapterResult } from './cfcs/types';


export class NgxConveyerInterface { }

export interface NgxConveyerEvents extends AngularBindingProperties<ConveyerEvents> {
}
// automatic reactive state, methods types
export interface NgxConveyerInterface
  extends AngularReactiveAdapterResult<typeof REACTIVE_CONVEYER, NgxConveyerEvents> { }
