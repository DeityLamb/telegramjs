import { MessageEntity } from './message-entity.interface';
import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a link to a file. By default, this file will be sent by the user with
 * an optional caption. Alternatively, you can use input_message_content to send a
 * message with the specified content instead of the file. Currently, only .PDF and
 * .ZIP files can be sent using this method.
 * Note: This will only work in Telegram versions released after 9 April, 2016.
 * Older clients will ignore them.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultdocument}
 */
export interface InlineQueryResultDocument {
  /**
   * Type of the result, must be document
   */
  type: 'document';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * Title for the result
   */
  title: string;

  /**
   * Caption of the document to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the document caption. See formatting options for
   * more details.
   */
  parseMode?: string;

  /**
   * List of special entities that appear in the caption, which can be specified
   * instead of parse_mode
   */
  captionEntities?: MessageEntity;

  /**
   * A valid URL for the file
   */
  documentUrl: string;

  /**
   * MIME type of the content of the file, either "application/pdf" or
   * "application/zip"
   */
  mimeType: string;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Inline keyboard attached to the message
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the file
   */
  inputMessageContent?: InputMessageContent;

  /**
   * URL of the thumbnail (JPEG only) for the file
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
