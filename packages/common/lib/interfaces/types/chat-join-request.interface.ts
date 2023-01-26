import { Chat } from './chat.interface';
import { User } from './user.interface';
import { ChatInviteLink } from './chat-invite-link.interface';

/**
 * Represents a join request sent to a chat.
 * @see {@link https://core.telegram.org/bots/api#chatjoinrequest}
 */
export interface ChatJoinRequest {
  /**
   * Chat to which the request was sent
   */
  chat: Chat;

  /**
   * User that sent the join request
   */
  from: User;

  /**
   * Date the request was sent in Unix time
   */
  date: number;

  /**
   * Bio of the user.
   */
  bio?: string;

  /**
   * Chat invite link that was used by the user to send the join request
   */
  inviteLink?: ChatInviteLink;
}
