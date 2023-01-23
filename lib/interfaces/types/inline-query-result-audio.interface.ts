import { MessageEntity } from './message-entity.interface';
import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a link to an MP3 audio file. By default, this audio file will be sent
 * by the user. Alternatively, you can use input_message_content to send a message
 * with the specified content instead of the audio.
 * Note: This will only work in Telegram versions released after 9 April, 2016.
 * Older clients will ignore them.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultaudio}
 */
export interface InlineQueryResultAudio {
  /**
   * Type of the result, must be audio
   */
  type: 'audio';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * A valid URL for the audio file
   */
  audioUrl: string;

  /**
   * Title
   */
  title: string;

  /**
   * Caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the audio caption. See formatting options for more
   * details.
   */
  parseMode?: string;

  /**
   * List of special entities that appear in the caption, which can be specified
   * instead of parse_mode
   */
  captionEntities?: MessageEntity;

  /**
   * Performer
   */
  performer?: string;

  /**
   * Audio duration in seconds
   */
  audioDuration?: number;

  /**
   * Inline keyboard attached to the message
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the audio
   */
  inputMessageContent?: InputMessageContent;
}
