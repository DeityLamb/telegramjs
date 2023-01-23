import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';

/**
 * Use this method to edit live location messages. A location can be edited until
 * its live_period expires or editing is explicitly disabled by a call to
 * stopMessageLiveLocation. On success, if the edited message is not an inline
 * message, the edited Message is returned, otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#editmessagelivelocation}
 */
export interface EditMessageLiveLocationOptions {
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target
   * chat or username of the target channel (in the format @channelusername)
   */
  chatId?: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message to
   * edit
   */
  messageId?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline
   * message
   */
  inlineMessageId?: string;

  /**
   * Latitude of new location
   */
  latitude: number;

  /**
   * Longitude of new location
   */
  longitude: number;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontalAccuracy?: number;

  /**
   * Direction in which the user is moving, in degrees. Must be between 1 and 360 if
   * specified.
   */
  heading?: number;

  /**
   * The maximum distance for proximity alerts about approaching another chat member,
   * in meters. Must be between 1 and 100000 if specified.
   */
  proximityAlertRadius?: number;

  /**
   * A JSON-serialized object for a new inline keyboard.
   */
  replyMarkup?: InlineKeyboardMarkup;
}
