import { Chat } from './chat.interface';
import { User } from './user.interface';
import { ChatMember } from './chat-member.interface';
import { ChatInviteLink } from './chat-invite-link.interface';

/**
 * This object represents changes in the status of a chat member.
 * @see {@link https://core.telegram.org/bots/api#chatmemberupdated}
 */
export interface ChatMemberUpdated {
  /**
   * Chat the user belongs to
   */
  chat: Chat;

  /**
   * Performer of the action, which resulted in the change
   */
  from: User;

  /**
   * Date the change was done in Unix time
   */
  date: number;

  /**
   * Previous information about the chat member
   */
  oldChatMember: ChatMember;

  /**
   * New information about the chat member
   */
  newChatMember: ChatMember;

  /**
   * Chat invite link, which was used by the user to join the chat; for joining by
   * invite link events only.
   */
  inviteLink?: ChatInviteLink;
}
