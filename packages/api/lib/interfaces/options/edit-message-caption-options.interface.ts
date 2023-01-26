import { MessageEntity } from '../types/message-entity.interface';
import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';

/**
 * Use this method to edit captions of messages. On success, if the edited message
 * is not an inline message, the edited Message is returned, otherwise True is
 * returned.
 * @see {@link https://core.telegram.org/bots/api#editmessagecaption}
 */
export interface EditMessageCaptionOptions {
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
   * New caption of the message, 0-1024 characters after entities parsing
   */
  caption?: string;

  /**
   * Mode for parsing entities in the message caption. See formatting options for
   * more details.
   */
  parseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in the caption, which can
   * be specified instead of parse_mode
   */
  captionEntities?: MessageEntity;

  /**
   * A JSON-serialized object for an inline keyboard.
   */
  replyMarkup?: InlineKeyboardMarkup;
}
