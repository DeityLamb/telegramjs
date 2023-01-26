/**
 * Use this method to set a custom title for an administrator in a supergroup
 * promoted by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchatadministratorcustomtitle}
 */
export interface SetChatAdministratorCustomTitleOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in
   * the format @supergroupusername)
   */
  chatId: number | string;

  /**
   * Unique identifier of the target user
   */
  userId: number;

  /**
   * New custom title for the administrator; 0-16 characters, emoji are not allowed
   */
  customTitle: string;
}
