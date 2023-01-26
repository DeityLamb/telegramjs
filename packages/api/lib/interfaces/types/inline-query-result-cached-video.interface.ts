import { MessageEntity } from './message-entity.interface';
import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a link to a video file stored on the Telegram servers. By default,
 * this video file will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with the
 * specified content instead of the video.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedvideo}
 */
export interface InlineQueryResultCachedVideo {
  /**
   * Type of the result, must be video
   */
  type: 'video';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the video file
   */
  videoFileId: string;

  /**
   * Title for the result
   */
  title: string;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Caption of the video to be sent, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the video caption. See formatting options for more
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
   * Content of the message to be sent instead of the video
   */
  inputMessageContent?: InputMessageContent;
}
