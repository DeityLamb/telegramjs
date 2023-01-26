import { ChatMemberOwner } from './chat-member-owner.interface';
import { ChatMemberAdministrator } from './chat-member-administrator.interface';
import { ChatMemberMember } from './chat-member-member.interface';
import { ChatMemberRestricted } from './chat-member-restricted.interface';
import { ChatMemberLeft } from './chat-member-left.interface';
import { ChatMemberBanned } from './chat-member-banned.interface';

/**
 * This object contains information about one member of a chat. Currently, the
 * following 6 types of chat members are supported:
 * - ChatMemberOwner
 * - ChatMemberAdministrator
 * - ChatMemberMember
 * - ChatMemberRestricted
 * - ChatMemberLeft
 * - ChatMemberBanned
 * @see {@link https://core.telegram.org/bots/api#chatmember}
 */
export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned;
