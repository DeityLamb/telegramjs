import { User } from './user.interface';

/**
 * Represents a chat member that has no additional privileges or restrictions.
 * @see {@link https://core.telegram.org/bots/api#chatmembermember}
 */
export interface ChatMemberMember {
  /**
   * The member's status in the chat, always "member"
   */
  status: 'member';

  /**
   * Information about the user
   */
  user: User;
}
