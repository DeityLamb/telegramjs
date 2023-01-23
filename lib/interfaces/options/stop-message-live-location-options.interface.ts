import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';

/**
 * Use this method to stop updating a live location message before live_period
 * expires. On success, if the message is not an inline message, the edited Message
 * is returned, otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#stopmessagelivelocation}
 */
export interface StopMessageLiveLocationOptions {
  /**
   * Required if inline_message_id is not specified. Unique identifier for the target
   * chat or username of the target channel (in the format @channelusername)
   */
  chatId?: number | string;

  /**
   * Required if inline_message_id is not specified. Identifier of the message with
   * live location to stop
   */
  messageId?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline
   * message
   */
  inlineMessageId?: string;

  /**
   * A JSON-serialized object for a new inline keyboard.
   */
  replyMarkup?: InlineKeyboardMarkup;
}
