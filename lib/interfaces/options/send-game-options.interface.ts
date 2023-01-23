import { InlineKeyboardMarkup } from '../types/inline-keyboard-markup.interface';

/**
 * Use this method to send a game. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendgame}
 */
export interface SendGameOptions {
  /**
   * Unique identifier for the target chat
   */
  chatId: number;

  /**
   * Unique identifier for the target message thread (topic) of the forum; for forum
   * supergroups only
   */
  messageThreadId?: number;

  /**
   * Short name of the game, serves as the unique identifier for the game. Set up
   * your games via @BotFather.
   */
  gameShortName: string;

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
   * A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title'
   * button will be shown. If not empty, the first button must launch the game.
   */
  replyMarkup?: InlineKeyboardMarkup;
}
