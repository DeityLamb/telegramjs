import { MessageEntity } from './message-entity.interface';
import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a link to a photo. By default, this photo will be sent by the user
 * with optional caption. Alternatively, you can use input_message_content to send
 * a message with the specified content instead of the photo.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultphoto}
 */
export interface InlineQueryResultPhoto {
  /**
   * Type of the result, must be photo
   */
  type: 'photo';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL of the photo. Photo must be in JPEG format. Photo size must not
   * exceed 5MB
   */
  photoUrl: string;

  /**
   * URL of the thumbnail for the photo
   */
  thumbUrl: string;

  /**
   * Width of the photo
   */
  photoWidth?: number;

  /**
   * Height of the photo
   */
  photoHeight?: number;

  /**
   * Title for the result
   */
  title?: string;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Caption of the photo to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the photo caption. See formatting options for more
   * details.
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
   * Content of the message to be sent instead of the photo
   */
  inputMessageContent?: InputMessageContent;
}
