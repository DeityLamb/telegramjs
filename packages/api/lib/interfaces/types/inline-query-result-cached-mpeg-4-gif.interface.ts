import { MessageEntity } from './message-entity.interface';
import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound)
 * stored on the Telegram servers. By default, this animated MPEG-4 file will be
 * sent by the user with an optional caption. Alternatively, you can use
 * input_message_content to send a message with the specified content instead of
 * the animation.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif}
 */
export interface InlineQueryResultCachedMpeg4Gif {
  /**
   * Type of the result, must be mpeg4_gif
   */
  type: 'mpeg4_gif';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid file identifier for the MPEG4 file
   */
  mpeg4FileId: string;

  /**
   * Title for the result
   */
  title?: string;

  /**
   * Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
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
   * Content of the message to be sent instead of the video animation
   */
  inputMessageContent?: InputMessageContent;
}
