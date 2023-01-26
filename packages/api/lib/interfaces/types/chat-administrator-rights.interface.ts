/**
 * Represents the rights of an administrator in a chat.
 * @see {@link https://core.telegram.org/bots/api#chatadministratorrights}
 */
export interface ChatAdministratorRights {
  /**
   * True, if the user's presence in the chat is hidden
   */
  isAnonymous: boolean;

  /**
   * True, if the administrator can access the chat event log, chat statistics,
   * message statistics in channels, see channel members, see anonymous
   * administrators in supergroups and ignore slow mode. Implied by any other
   * administrator privilege
   */
  canManageChat: boolean;

  /**
   * True, if the administrator can delete messages of other users
   */
  canDeleteMessages: boolean;

  /**
   * True, if the administrator can manage video chats
   */
  canManageVideoChats: boolean;

  /**
   * True, if the administrator can restrict, ban or unban chat members
   */
  canRestrictMembers: boolean;

  /**
   * True, if the administrator can add new administrators with a subset of their own
   * privileges or demote administrators that they have promoted, directly or
   * indirectly (promoted by administrators that were appointed by the user)
   */
  canPromoteMembers: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other settings
   */
  canChangeInfo: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  canInviteUsers: boolean;

  /**
   * True, if the administrator can post in the channel; channels only
   */
  canPostMessages?: boolean;

  /**
   * True, if the administrator can edit messages of other users and can pin
   * messages; channels only
   */
  canEditMessages?: boolean;

  /**
   * True, if the user is allowed to pin messages; groups and supergroups only
   */
  canPinMessages?: boolean;

  /**
   * True, if the user is allowed to create, rename, close, and reopen forum topics;
   * supergroups only
   */
  canManageTopics?: boolean;
}
