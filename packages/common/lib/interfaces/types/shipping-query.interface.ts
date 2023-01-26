import { User } from './user.interface';
import { ShippingAddress } from './shipping-address.interface';

/**
 * This object contains information about an incoming shipping query.
 * @see {@link https://core.telegram.org/bots/api#shippingquery}
 */
export interface ShippingQuery {
  /**
   * Unique query identifier
   */
  id: string;

  /**
   * User who sent the query
   */
  from: User;

  /**
   * Bot specified invoice payload
   */
  invoicePayload: string;

  /**
   * User specified shipping address
   */
  shippingAddress: ShippingAddress;
}
