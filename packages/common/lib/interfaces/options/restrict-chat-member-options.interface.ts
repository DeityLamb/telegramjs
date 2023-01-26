import { ChatPermissions } from '../types/chat-permissions.interface';

/**
 * Use this method to restrict a user in a supergroup. The bot must be an
 * administrator in the supergroup for this to work and must have the appropriate
 * administrator rights. Pass True for all permissions to lift restrictions from a
 * user. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#restrictchatmember}
 */
export interface RestrictChatMemberOptions {
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
   * A JSON-serialized object for new user permissions
   */
  permissions: ChatPermissions;

  /**
   * Date when restrictions will be lifted for the user, unix time. If user is
   * restricted for more than 366 days or less than 30 seconds from the current time,
   * they are considered to be restricted forever
   */
  untilDate?: number;
}
