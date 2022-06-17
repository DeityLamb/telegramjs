import { Chat } from './chat.interface';
import { User } from './user.interface';
import { ChatInviteLink } from './chat-invite-link.interface';

export interface ChatJoinRequest {
  chat: Chat;
  from: User;
  date: number;
  bio?: string;
  invite_link?: ChatInviteLink;
}
