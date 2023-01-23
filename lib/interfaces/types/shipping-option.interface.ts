import { LabeledPrice } from './labeled-price.interface';

/**
 * This object represents one shipping option.
 * @see {@link https://core.telegram.org/bots/api#shippingoption}
 */
export interface ShippingOption {
  /**
   * Shipping option identifier
   */
  id: string;

  /**
   * Option title
   */
  title: string;

  /**
   * List of price portions
   */
  prices: LabeledPrice;
}
