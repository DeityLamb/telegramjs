/**
 * Use this method to change the title of a chat. Titles can't be changed for
 * private chats. The bot must be an administrator in the chat for this to work and
 * must have the appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchattitle}
 */
export interface SetChatTitleOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * New chat title, 1-128 characters
   */
  title: string;
}
