import { ShippingOption } from '../types/shipping-option.interface';

/**
 * If you sent an invoice requesting a shipping address and the parameter
 * is_flexible was specified, the Bot API will send an Update with a shipping_query
 * field to the bot. Use this method to reply to shipping queries. On success, True
 * is returned.
 * @see {@link https://core.telegram.org/bots/api#answershippingquery}
 */
export interface AnswerShippingQueryOptions {
  /**
   * Unique identifier for the query to be answered
   */
  shippingQueryId: string;

  /**
   * Pass True if delivery to the specified address is possible and False if there
   * are any problems (for example, if delivery to the specified address is not
   * possible)
   */
  ok: boolean;

  /**
   * Required if ok is True. A JSON-serialized array of available shipping options.
   */
  shippingOptions?: ShippingOption;

  /**
   * Required if ok is False. Error message in human readable form that explains why
   * it is impossible to complete the order (e.g. "Sorry, delivery to your desired
   * address is unavailable'). Telegram will display this message to the user.
   */
  errorMessage?: string;
}
