/**
 * Use this method to approve a chat join request. The bot must be an administrator
 * in the chat for this to work and must have the can_invite_users administrator
 * right. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#approvechatjoinrequest}
 */
export interface ApproveChatJoinRequestOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * Unique identifier of the target user
   */
  userId: number;
}
