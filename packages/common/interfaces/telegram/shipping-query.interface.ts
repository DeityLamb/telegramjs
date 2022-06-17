import { User } from './user.interface';
import { ShippingAddress } from './shipping-address.interface';

export interface ShippingQuery {
  id: string;
  from: User;
  invoice_payload: string;
  shipping_address: ShippingAddress;
}
