import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';

/**
 * Use this method to stop a poll which was sent by the bot. On success, the
 * stopped Poll is returned.
 * @see {@link https://core.telegram.org/bots/api#stoppoll}
 */
export interface StopPollOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * Identifier of the original message with the poll
   */
  messageId: number;

  /**
   * A JSON-serialized object for a new message inline keyboard.
   */
  replyMarkup?: InlineKeyboardMarkup;
}
