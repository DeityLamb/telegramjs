import { MessageEntity } from '../types/message-entity.interface';
import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';
import { ReplyKeyboardMarkup } from '../types/reply-keyboard-markup.interface';
import { ReplyKeyboardRemove } from '../types/reply-keyboard-remove.interface';
import { ForceReply } from '../types/force-reply.interface';

/**
 * Use this method to copy messages of any kind. Service messages and invoice
 * messages can't be copied. A quiz poll can be copied only if the value of the
 * field correct_option_id is known to the bot. The method is analogous to the
 * method forwardMessage, but the copied message doesn't have a link to the
 * original message. Returns the MessageId of the sent message on success.
 * @see {@link https://core.telegram.org/bots/api#copymessage}
 */
export interface CopyMessageOptions {
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
   * Unique identifier for the chat where the original message was sent (or channel
   * username in the format @channelusername)
   */
  fromChatId: number | string;

  /**
   * Message identifier in the chat specified in from_chat_id
   */
  messageId: number;

  /**
   * New caption for media, 0-1024 characters after entities parsing. If not
   * specified, the original caption is kept
   */
  caption?: string;

  /**
   * Mode for parsing entities in the new caption. See formatting options for more
   * details.
   */
  parseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the new caption, which
   * can be specified instead of parse_mode
   */
  captionEntities?: MessageEntity;

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
