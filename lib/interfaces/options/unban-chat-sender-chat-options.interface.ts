/**
 * Use this method to unban a previously banned channel chat in a supergroup or
 * channel. The bot must be an administrator for this to work and must have the
 * appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unbanchatsenderchat}
 */
export interface UnbanChatSenderChatOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * Unique identifier of the target sender chat
   */
  senderChatId: number;
}
