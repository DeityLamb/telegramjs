import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';
import { InputMessageContent } from './input-message-content.interface';

/**
 * Represents a location on a map. By default, the location will be sent by the
 * user. Alternatively, you can use input_message_content to send a message with
 * the specified content instead of the location.
 * Note: This will only work in Telegram versions released after 9 April, 2016.
 * Older clients will ignore them.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultlocation}
 */
export interface InlineQueryResultLocation {
  /**
   * Type of the result, must be location
   */
  type: 'location';

  /**
   * Unique identifier for this result, 1-64 Bytes
   */
  id: string;

  /**
   * Location latitude in degrees
   */
  latitude: number;

  /**
   * Location longitude in degrees
   */
  longitude: number;

  /**
   * Location title
   */
  title: string;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontalAccuracy?: number;

  /**
   * Period in seconds for which the location can be updated, should be between 60
   * and 86400.
   */
  livePeriod?: number;

  /**
   * For live locations, a direction in which the user is moving, in degrees. Must
   * be between 1 and 360 if specified.
   */
  heading?: number;

  /**
   * For live locations, a maximum distance for proximity alerts about approaching
   * another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximityAlertRadius?: number;

  /**
   * Inline keyboard attached to the message
   */
  replyMarkup?: InlineKeyboardMarkup;

  /**
   * Content of the message to be sent instead of the location
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
