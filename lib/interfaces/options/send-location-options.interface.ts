import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';
import { ReplyKeyboardMarkup } from '../types/reply-keyboard-markup.interface';
import { ReplyKeyboardRemove } from '../types/reply-keyboard-remove.interface';
import { ForceReply } from '../types/force-reply.interface';

/**
 * Use this method to send point on the map. On success, the sent Message is
 * returned.
 * @see {@link https://core.telegram.org/bots/api#sendlocation}
 */
export interface SendLocationOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum
   * supergroups only
   */
  messageThreadId?: number;

  /**
   * Latitude of the location
   */
  latitude: number;

  /**
   * Longitude of the location
   */
  longitude: number;

  /**
   * The radius of uncertainty for the location, measured in meters; 0-1500
   */
  horizontalAccuracy?: number;

  /**
   * Period in seconds for which the location will be updated (see Live Locations,
   * should be between 60 and 86400.
   */
  livePeriod?: number;

  /**
   * For live locations, a direction in which the user is moving, in degrees. Must be
   * between 1 and 360 if specified.
   */
  heading?: number;

  /**
   * For live locations, a maximum distance for proximity alerts about approaching
   * another chat member, in meters. Must be between 1 and 100000 if specified.
   */
  proximityAlertRadius?: number;

  /**
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disableNotification?: boolean;

  /**
   * Protects the contents of the sent message from forwarding and saving
   */
  protectContent?: boolean;

  /**
   * If the message is a reply, ID of the original message
   */
  replyToMessageId?: number;

  /**
   * Pass True if the message should be sent even if the specified replied-to message
   * is not found
   */
  allowSendingWithoutReply?: boolean;

  /**
   * Additional interface options. A JSON-serialized object for an inline keyboard,
   * custom reply keyboard, instructions to remove reply keyboard or to force a reply
   * from the user.
   */
  replyMarkup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}
