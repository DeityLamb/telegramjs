import { User } from './user.interface';

/**
 * Represents a chat member that owns the chat and has all administrator
 * privileges.
 * @see {@link https://core.telegram.org/bots/api#chatmemberowner}
 */
export interface ChatMemberOwner {
  /**
   * The member's status in the chat, always "creator"
   */
  status: 'creator';

  /**
   * Information about the user
   */
  user: User;

  /**
   * True, if the user's presence in the chat is hidden
   */
  isAnonymous: boolean;

  /**
   * Custom title for this user
   */
  customTitle?: string;
}
