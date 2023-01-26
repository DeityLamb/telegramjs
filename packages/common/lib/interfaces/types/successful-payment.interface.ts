import { OrderInfo } from './order-info.interface';

/**
 * This object contains basic information about a successful payment.
 * @see {@link https://core.telegram.org/bots/api#successfulpayment}
 */
export interface SuccessfulPayment {
  /**
   * Three-letter ISO 4217 currency code
   */
  currency: string;

  /**
   * Total price in the smallest units of the currency (integer, not float/double).
   * For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in
   * currencies.json, it shows the number of digits past the decimal point for each
   * currency (2 for the majority of currencies).
   */
  totalAmount: number;

  /**
   * Bot specified invoice payload
   */
  invoicePayload: string;

  /**
   * Identifier of the shipping option chosen by the user
   */
  shippingOptionId?: string;

  /**
   * Order information provided by the user
   */
  orderInfo?: OrderInfo;

  /**
   * Telegram payment identifier
   */
  telegramPaymentChargeId: string;

  /**
   * Provider payment identifier
   */
  providerPaymentChargeId: string;
}
