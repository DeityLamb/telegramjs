import { InputFile } from '../types/input-file.interface';
import { MessageEntity } from '../types/message-entity.interface';
import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';
import { ReplyKeyboardMarkup } from '../types/reply-keyboard-markup.interface';
import { ReplyKeyboardRemove } from '../types/reply-keyboard-remove.interface';
import { ForceReply } from '../types/force-reply.interface';

/**
 * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without
 * sound). On success, the sent Message is returned. Bots can currently send
 * animation files of up to 50 MB in size, this limit may be changed in the future.
 * @see {@link https://core.telegram.org/bots/api#sendanimation}
 */
export interface SendAnimationOptions {
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
   * Animation to send. Pass a file_id as String to send an animation that exists on
   * the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to
   * get an animation from the Internet, or upload a new animation using
   * multipart/form-data. More information on Sending Files:
   * https://core.telegram.org/bots/api#sending-files
   */
  animation: InputFile | string;

  /**
   * Duration of sent animation in seconds
   */
  duration?: number;

  /**
   * Animation width
   */
  width?: number;

  /**
   * Animation height
   */
  height?: number;

  /**
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file
   * is supported server-side. The thumbnail should be in JPEG format and less than
   * 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if
   * the file is not uploaded using multipart/form-data. Thumbnails can't be reused
   * and can be only uploaded as a new file, so you can pass
   * "attach://<file_attach_name>" if the thumbnail was uploaded using
   * multipart/form-data under <file_attach_name>. More information on Sending Files:
   * https://core.telegram.org/bots/api#sending-files
   */
  thumb?: InputFile | string;

  /**
   * Animation caption (may also be used when resending animation by file_id), 0-1024
   * characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the animation caption. See formatting options for
   * more details.
   */
  parseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can
   * be specified instead of parse_mode
   */
  captionEntities?: MessageEntity;

  /**
   * Pass True if the animation needs to be covered with a spoiler animation
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
