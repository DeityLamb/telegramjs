/**
 * Use this method for your bot to leave a group, supergroup or channel. Returns
 * True on success.
 * @see {@link https://core.telegram.org/bots/api#leavechat}
 */
export interface LeaveChatOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername)
   */
  chatId: number | string;
}
