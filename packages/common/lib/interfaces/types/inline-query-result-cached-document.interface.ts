import { MessageEntity } from './message-entity.interface';
import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a link to a file stored on the Telegram servers. By default, this
 * file will be sent by the user with an optional caption. Alternatively, you can
 * use input_message_content to send a message with the specified content instead
 * of the file.
 * Note: This will only work in Telegram versions released after 9 April, 2016.
 * Older clients will ignore them.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcacheddocument}
 */
export interface InlineQueryResultCachedDocument {
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
   * A valid file identifier for the file
   */
  documentFileId: string;

  /**
   * Short description of the result
   */
  description?: string;

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
   * Inline keyboard attached to the message
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the file
   */
  inputMessageContent?: InputMessageContent;
}
