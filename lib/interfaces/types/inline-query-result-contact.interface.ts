import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a contact with a phone number. By default, this contact will be sent
 * by the user. Alternatively, you can use input_message_content to send a message
 * with the specified content instead of the contact.
 * Note: This will only work in Telegram versions released after 9 April, 2016.
 * Older clients will ignore them.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcontact}
 */
export interface InlineQueryResultContact {
  /**
   * Type of the result, must be contact
   */
  type: 'contact';

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

  /**
   * Contact's phone number
   */
  phoneNumber: string;

  /**
   * Contact's first name
   */
  firstName: string;

  /**
   * Contact's last name
   */
  lastName?: string;

  /**
   * Additional data about the contact in the form of a vCard, 0-2048 bytes
   */
  vcard?: string;

  /**
   * Inline keyboard attached to the message
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the contact
   */
  inputMessageContent?: InputMessageContent;

  /**
   * Url of the thumbnail for the result
   */
  thumbUrl?: string;

  /**
   * Thumbnail width
   */
  thumbWidth?: number;

  /**
   * Thumbnail height
   */
  thumbHeight?: number;
}
