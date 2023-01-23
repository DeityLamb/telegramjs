import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';

/**
 * Use this method to edit only the reply markup of messages. On success, if the
 * edited message is not an inline message, the edited Message is returned,
 * otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#editmessagereplymarkup}
 */
export interface EditMessageReplyMarkupOptions {
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
   * A JSON-serialized object for an inline keyboard.
   */
  replyMarkup?: InlineKeyboardMarkup;
}
