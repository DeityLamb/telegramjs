import { User } from './user.interface';

/**
 * Represents a chat member that was banned in the chat and can't return to the
 * chat or view chat messages.
 * @see {@link https://core.telegram.org/bots/api#chatmemberbanned}
 */
export interface ChatMemberBanned {
  /**
   * The member's status in the chat, always "kicked"
   */
  status: 'kicked';

  /**
   * Information about the user
   */
  user: User;

  /**
   * Date when restrictions will be lifted for this user; unix time. If 0, then the
   * user is banned forever
   */
  untilDate: number;
}
