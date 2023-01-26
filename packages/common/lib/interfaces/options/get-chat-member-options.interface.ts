/**
 * Use this method to get information about a member of a chat. The method is
 * guaranteed to work for other users, only if the bot is an administrator in the
 * chat. Returns a ChatMember object on success.
 * @see {@link https://core.telegram.org/bots/api#getchatmember}
 */
export interface GetChatMemberOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup or
   * channel (in the format @channelusername)
   */
  chatId: number | string;

  /**
   * Unique identifier of the target user
   */
  userId: number;
}
