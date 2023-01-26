import { MessageEntity } from './message-entity.interface';
import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a link to a page containing an embedded video player or a video file.
 * By default, this video file will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with the
 * specified content instead of the video.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultvideo}
 */
export interface InlineQueryResultVideo {
  /**
   * Type of the result, must be video
   */
  type: 'video';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the embedded video player or video file
   */
  videoUrl: string;

  /**
   * MIME type of the content of the video URL, "text/html" or "video/mp4"
   */
  mimeType: string;

  /**
   * URL of the thumbnail (JPEG only) for the video
   */
  thumbUrl: string;

  /**
   * Title for the result
   */
  title: string;

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
   * Video width
   */
  videoWidth?: number;

  /**
   * Video height
   */
  videoHeight?: number;

  /**
   * Video duration in seconds
   */
  videoDuration?: number;

  /**
   * Short description of the result
   */
  description?: string;

  /**
   * Inline keyboard attached to the message
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the video. This field is required
   * if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a
   * YouTube video).
   */
  inputMessageContent?: InputMessageContent;
}
