import { User } from './user.interface';

/**
 * Represents a chat member that is under certain restrictions in the chat.
 * Supergroups only.
 * @see {@link https://core.telegram.org/bots/api#chatmemberrestricted}
 */
export interface ChatMemberRestricted {
  /**
   * The member's status in the chat, always "restricted"
   */
  status: 'restricted';

  /**
   * Information about the user
   */
  user: User;

  /**
   * True, if the user is a member of the chat at the moment of the request
   */
  isMember: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  canChangeInfo: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  canInviteUsers: boolean;

  /**
   * True, if the user is allowed to pin messages
   */
  canPinMessages: boolean;

  /**
   * True, if the user is allowed to create forum topics
   */
  canManageTopics: boolean;

  /**
   * True, if the user is allowed to send text messages, contacts, locations and
   * venues
   */
  canSendMessages: boolean;

  /**
   * True, if the user is allowed to send audios, documents, photos, videos, video
   * notes and voice notes
   */
  canSendMediaMessages: boolean;

  /**
   * True, if the user is allowed to send polls
   */
  canSendPolls: boolean;

  /**
   * True, if the user is allowed to send animations, games, stickers and use inline
   * bots
   */
  canSendOtherMessages: boolean;

  /**
   * True, if the user is allowed to add web page previews to their messages
   */
  canAddWebPagePreviews: boolean;

  /**
   * Date when restrictions will be lifted for this user; unix time. If 0, then the
   * user is restricted forever
   */
  untilDate: number;
}
