import { InputFile } from '../types/input-file.interface';
import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';
import { ReplyKeyboardMarkup } from '../types/reply-keyboard-markup.interface';
import { ReplyKeyboardRemove } from '../types/reply-keyboard-remove.interface';
import { ForceReply } from '../types/force-reply.interface';

/**
 * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On
 * success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendsticker}
 */
export interface SendStickerOptions {
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
   * Sticker to send. Pass a file_id as String to send a file that exists on the
   * Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get
   * a .WEBP file from the Internet, or upload a new one using multipart/form-data.
   * More information on Sending Files:
   * https://core.telegram.org/bots/api#sending-files
   */
  sticker: InputFile | string;

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
