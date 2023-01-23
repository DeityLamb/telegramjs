import { InputFile } from '../types/input-file.interface';
import { MessageEntity } from '../types/message-entity.interface';
import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';
import { ReplyKeyboardMarkup } from '../types/reply-keyboard-markup.interface';
import { ReplyKeyboardRemove } from '../types/reply-keyboard-remove.interface';
import { ForceReply } from '../types/force-reply.interface';

/**
 * Use this method to send photos. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendphoto}
 */
export interface SendPhotoOptions {
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
   * Photo to send. Pass a file_id as String to send a photo that exists on the
   * Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get
   * a photo from the Internet, or upload a new photo using multipart/form-data. The
   * photo must be at most 10 MB in size. The photo's width and height must not
   * exceed 10000 in total. Width and height ratio must be at most 20. More
   * information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  photo: InputFile | string;

  /**
   * Photo caption (may also be used when resending photos by file_id), 0-1024
   * characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the photo caption. See formatting options for more
   * details.
   */
  parseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can
   * be specified instead of parse_mode
   */
  captionEntities?: MessageEntity;

  /**
   * Pass True if the photo needs to be covered with a spoiler animation
   */
  hasSpoiler?: boolean;

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
