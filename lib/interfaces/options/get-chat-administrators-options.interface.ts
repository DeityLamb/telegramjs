/**
 * Use this method to get a list of administrators in a chat, which aren't bots.
 * Returns an Array of ChatMember objects.
 * @see {@link https://core.telegram.org/bots/api#getchatadministrators}
 */
export interface GetChatAdministratorsOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername)
   */
  chatId: number | string;
}
