import { InputFile } from '../types/input-file.interface';
import { MessageEntity } from '../types/message-entity.interface';
import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';
import { ReplyKeyboardMarkup } from '../types/reply-keyboard-markup.interface';
import { ReplyKeyboardRemove } from '../types/reply-keyboard-remove.interface';
import { ForceReply } from '../types/force-reply.interface';

/**
 * Use this method to send audio files, if you want Telegram clients to display the
 * file as a playable voice message. For this to work, your audio must be in an
 * .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On
 * success, the sent Message is returned. Bots can currently send voice messages of
 * up to 50 MB in size, this limit may be changed in the future.
 * @see {@link https://core.telegram.org/bots/api#sendvoice}
 */
export interface SendVoiceOptions {
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
   * Audio file to send. Pass a file_id as String to send a file that exists on the
   * Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get
   * a file from the Internet, or upload a new one using multipart/form-data. More
   * information on Sending Files: https://core.telegram.org/bots/api#sending-files
   */
  voice: InputFile | string;

  /**
   * Voice message caption, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the voice message caption. See formatting options
   * for more details.
   */
  parseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can
   * be specified instead of parse_mode
   */
  captionEntities?: MessageEntity;

  /**
   * Duration of the voice message in seconds
   */
  duration?: number;

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
