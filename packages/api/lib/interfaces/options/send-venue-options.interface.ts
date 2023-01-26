import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';
import { ReplyKeyboardMarkup } from '../types/reply-keyboard-markup.interface';
import { ReplyKeyboardRemove } from '../types/reply-keyboard-remove.interface';
import { ForceReply } from '../types/force-reply.interface';

/**
 * Use this method to send information about a venue. On success, the sent Message
 * is returned.
 * @see {@link https://core.telegram.org/bots/api#sendvenue}
 */
export interface SendVenueOptions {
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
   * Latitude of the venue
   */
  latitude: number;

  /**
   * Longitude of the venue
   */
  longitude: number;

  /**
   * Name of the venue
   */
  title: string;

  /**
   * Address of the venue
   */
  address: string;

  /**
   * Foursquare identifier of the venue
   */
  foursquareId?: string;

  /**
   * Foursquare type of the venue, if known. (For example,
   * "arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)
   */
  foursquareType?: string;

  /**
   * Google Places identifier of the venue
   */
  googlePlaceId?: string;

  /**
   * Google Places type of the venue. (See supported types.)
   */
  googlePlaceType?: string;

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
