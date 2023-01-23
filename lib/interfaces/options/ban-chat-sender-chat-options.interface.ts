/**
 * Use this method to ban a channel chat in a supergroup or a channel. Until the
 * chat is unbanned, the owner of the banned chat won't be able to send messages on
 * behalf of any of their channels. The bot must be an administrator in the
 * supergroup or channel for this to work and must have the appropriate
 * administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#banchatsenderchat}
 */
export interface BanChatSenderChatOptions {
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
