import { ShippingAddress } from './shipping-address.interface';

/**
 * This object represents information about an order.
 * @see {@link https://core.telegram.org/bots/api#orderinfo}
 */
export interface OrderInfo {
  /**
   * User name
   */
  name?: string;

  /**
   * User's phone number
   */
  phoneNumber?: string;

  /**
   * User email
   */
  email?: string;

  /**
   * User shipping address
   */
  shippingAddress?: ShippingAddress;
}
