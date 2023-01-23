/**
 * Use this method to get data for high score tables. Will return the score of the
 * specified user and several of their neighbors in a game. Returns an Array of
 * GameHighScore objects.
 * @see {@link https://core.telegram.org/bots/api#getgamehighscores}
 */
export interface GetGameHighScoresOptions {
  /**
   * Target user id
   */
  userId: number;

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
