/**
 * Use this method to get up to date information about the chat (current name of
 * the user for one-on-one conversations, current username of a user, group or
 * channel, etc.). Returns a Chat object on success.
 * @see {@link https://core.telegram.org/bots/api#getchat}
 */
export interface GetChatOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername)
   */
  chatId: number | string;
}
