import { InputTextMessageContent } from './input-text-message-content.interface';
import { InputLocationMessageContent } from './input-location-message-content.interface';
import { InputVenueMessageContent } from './input-venue-message-content.interface';
import { InputContactMessageContent } from './input-contact-message-content.interface';
import { InputInvoiceMessageContent } from './input-invoice-message-content.interface';

/**
 * This object represents the content of a message to be sent as a result of an
 * inline query. Telegram clients currently support the following 5 types:
 * - InputTextMessageContent
 * - InputLocationMessageContent
 * - InputVenueMessageContent
 * - InputContactMessageContent
 * - InputInvoiceMessageContent
 * @see {@link https://core.telegram.org/bots/api#inputmessagecontent}
 */
export type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent
  | InputInvoiceMessageContent;
