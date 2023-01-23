import { MessageEntity } from './message-entity.interface';
import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a link to an animated GIF file. By default, this animated GIF file
 * will be sent by the user with optional caption. Alternatively, you can use
 * input_message_content to send a message with the specified content instead of
 * the animation.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultgif}
 */
export interface InlineQueryResultGif {
  /**
   * Type of the result, must be gif
   */
  type: 'gif';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the GIF file. File size must not exceed 1MB
   */
  gifUrl: string;

  /**
   * Width of the GIF
   */
  gifWidth?: number;

  /**
   * Height of the GIF
   */
  gifHeight?: number;

  /**
   * Duration of the GIF in seconds
   */
  gifDuration?: number;

  /**
   * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
   */
  thumbUrl: string;

  /**
   * MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or
   * "video/mp4". Defaults to "image/jpeg"
   */
  thumbMimeType?: 'one';

  /**
   * Title for the result
   */
  title?: string;

  /**
   * Caption of the GIF file to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the caption. See formatting options for more
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
   * Content of the message to be sent instead of the GIF animation
   */
  inputMessageContent?: InputMessageContent;
}
