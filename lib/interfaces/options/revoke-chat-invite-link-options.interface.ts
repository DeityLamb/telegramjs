/**
 * Use this method to revoke an invite link created by the bot. If the primary link
 * is revoked, a new link is automatically generated. The bot must be an
 * administrator in the chat for this to work and must have the appropriate
 * administrator rights. Returns the revoked invite link as ChatInviteLink object.
 * @see {@link https://core.telegram.org/bots/api#revokechatinvitelink}
 */
export interface RevokeChatInviteLinkOptions {
  /**
   * Unique identifier of the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * The invite link to revoke
   */
  inviteLink: string;
}
