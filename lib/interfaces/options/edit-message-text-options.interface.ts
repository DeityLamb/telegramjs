import { MessageEntity } from '../types/message-entity.interface';
import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';

/**
 * Use this method to edit text and game messages. On success, if the edited
 * message is not an inline message, the edited Message is returned, otherwise True
 * is returned.
 * @see {@link https://core.telegram.org/bots/api#editmessagetext}
 */
export interface EditMessageTextOptions {
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
   * New text of the message, 1-4096 characters after entities parsing
   */
  text: string;

  /**
   * Mode for parsing entities in the message text. See formatting options for more
   * details.
   */
  parseMode?: string;

  /**
   * A JSON-serialized list of special entities that appear in message text, which
   * can be specified instead of parse_mode
   */
  entities?: MessageEntity;

  /**
   * Disables link previews for links in this message
   */
  disableWebPagePreview?: boolean;

  /**
   * A JSON-serialized object for an inline keyboard.
   */
  replyMarkup?: InlineKeyboardMarkup;
}
