/**
 * Use this method to generate a new primary invite link for a chat; any previously
 * generated primary link is revoked. The bot must be an administrator in the chat
 * for this to work and must have the appropriate administrator rights. Returns the
 * new invite link as String on success.
 * @see {@link https://core.telegram.org/bots/api#exportchatinvitelink}
 */
export interface ExportChatInviteLinkOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;
}
