/**
 * Use this method to set the score of the specified user in a game message. On
 * success, if the message is not an inline message, the Message is returned,
 * otherwise True is returned. Returns an error, if the new score is not greater
 * than the user's current score in the chat and force is False.
 * @see {@link https://core.telegram.org/bots/api#setgamescore}
 */
export interface SetGameScoreOptions {
  /**
   * User identifier
   */
  userId: number;

  /**
   * New score, must be non-negative
   */
  score: 'non';

  /**
   * Pass True if the high score is allowed to decrease. This can be useful when
   * fixing mistakes or banning cheaters
   */
  force?: boolean;

  /**
   * Pass True if the game message should not be automatically edited to include the
   * current scoreboard
   */
  disableEditMessage?: boolean;

  /**
   * Required if inline_message_id is not specified. Unique identifier for the target
   * chat
   */
  chatId?: number;

  /**
   * Required if inline_message_id is not specified. Identifier of the sent message
   */
  messageId?: number;

  /**
   * Required if chat_id and message_id are not specified. Identifier of the inline
   * message
   */
  inlineMessageId?: string;
}
