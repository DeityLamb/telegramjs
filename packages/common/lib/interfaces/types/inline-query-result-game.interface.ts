import { InlineKeyboardMarkup } from './inline-keyboard-markup.interface';

/**
 * Represents a Game.
 * Note: This will only work in Telegram versions released after October 1, 2016.
 * Older clients will not display any inline results if a game result is among
 * them.
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultgame}
 */
export interface InlineQueryResultGame {
  /**
   * Type of the result, must be game
   */
  type: 'game';

  /**
   * Unique identifier for this result, 1-64 bytes
   */
  id: string;

  /**
   * Short name of the game
   */
  gameShortName: string;

  /**
   * Inline keyboard attached to the message
   */
  replyMarkup?: InlineKeyboardMarkup;
}
