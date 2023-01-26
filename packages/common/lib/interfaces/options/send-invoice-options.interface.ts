import { LabeledPrice } from '../types/labeled-price.interface';
import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';

/**
 * Use this method to send invoices. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendinvoice}
 */
export interface SendInvoiceOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum
   * supergroups only
   */
  messageThreadId?: number;

  /**
   * Product name, 1-32 characters
   */
  title: string;

  /**
   * Product description, 1-255 characters
   */
  description: string;

  /**
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the
   * user, use for your internal processes.
   */
  payload: string;

  /**
   * Payment provider token, obtained via @BotFather
   */
  providerToken: string;

  /**
   * Three-letter ISO 4217 currency code, see more on currencies
   */
  currency: string;

  /**
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax,
   * discount, delivery cost, delivery tax, bonus, etc.)
   */
  prices: LabeledPrice;

  /**
   * The maximum accepted amount for tips in the smallest units of the currency
   * (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass
   * max_tip_amount = 145. See the exp parameter in currencies.json, it shows the
   * number of digits past the decimal point for each currency (2 for the majority of
   * currencies). Defaults to 0
   */
  maxTipAmount?: number;

  /**
   * A JSON-serialized array of suggested amounts of tips in the smallest units of
   * the currency (integer, not float/double). At most 4 suggested tip amounts can be
   * specified. The suggested tip amounts must be positive, passed in a strictly
   * increased order and must not exceed max_tip_amount.
   */
  suggestedTipAmounts?: number;

  /**
   * Unique deep-linking parameter. If left empty, forwarded copies of the sent
   * message will have a Pay button, allowing multiple users to pay directly from the
   * forwarded message, using the same invoice. If non-empty, forwarded copies of the
   * sent message will have a URL button with a deep link to the bot (instead of a
   * Pay button), with the value used as the start parameter
   */
  startParameter?: string;

  /**
   * JSON-serialized data about the invoice, which will be shared with the payment
   * provider. A detailed description of required fields should be provided by the
   * payment provider.
   */
  providerData?: string;

  /**
   * URL of the product photo for the invoice. Can be a photo of the goods or a
   * marketing image for a service. People like it better when they see what they are
   * paying for.
   */
  photoUrl?: string;

  /**
   * Photo size in bytes
   */
  photoSize?: number;

  /**
   * Photo width
   */
  photoWidth?: number;

  /**
   * Photo height
   */
  photoHeight?: number;

  /**
   * Pass True if you require the user's full name to complete the order
   */
  needName?: boolean;

  /**
   * Pass True if you require the user's phone number to complete the order
   */
  needPhoneNumber?: boolean;

  /**
   * Pass True if you require the user's email address to complete the order
   */
  needEmail?: boolean;

  /**
   * Pass True if you require the user's shipping address to complete the order
   */
  needShippingAddress?: boolean;

  /**
   * Pass True if the user's phone number should be sent to provider
   */
  sendPhoneNumberToProvider?: boolean;

  /**
   * Pass True if the user's email address should be sent to provider
   */
  sendEmailToProvider?: boolean;

  /**
   * Pass True if the final price depends on the shipping method
   */
  isFlexible?: boolean;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disableNotification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protectContent?: boolean;

  /**
   * If the message is a reply, ID of the original message
   */
  replyToMessageId?: number;

  /**
   * Pass True if the message should be sent even if the specified replied-to message
   * is not found
   */
  allowSendingWithoutReply?: boolean;

  /**
   * A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price'
   * button will be shown. If not empty, the first button must be a Pay button.
   */
  replyMarkup?: InlineKeyboardMarkup;
}
