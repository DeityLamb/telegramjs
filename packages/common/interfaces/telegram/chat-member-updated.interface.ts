import { Chat } from './chat.interface';
import { User } from './user.interface';
import { ChatMember } from './chat-member.interface';
import { ChatInviteLink } from './chat-invite-link.interface';

export interface ChatMemberUpdated {
  chat: Chat;
  from: User;
  date: number;
  old_chat_member: ChatMember;
  new_chat_member: ChatMember;
  invite_link?: ChatInviteLink;
}
