/**
 * Use this method to promote or demote a user in a supergroup or a channel. The
 * bot must be an administrator in the chat for this to work and must have the
 * appropriate administrator rights. Pass False for all boolean parameters to
 * demote a user. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#promotechatmember}
 */
export interface PromoteChatMemberOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * Unique identifier of the target user
   */
  userId: number;

  /**
   * Pass True if the administrator's presence in the chat is hidden
   */
  isAnonymous?: boolean;

  /**
   * Pass True if the administrator can access the chat event log, chat statistics,
   * message statistics in channels, see channel members, see anonymous
   * administrators in supergroups and ignore slow mode. Implied by any other
   * administrator privilege
   */
  canManageChat?: boolean;

  /**
   * Pass True if the administrator can create channel posts, channels only
   */
  canPostMessages?: boolean;

  /**
   * Pass True if the administrator can edit messages of other users and can pin
   * messages, channels only
   */
  canEditMessages?: boolean;

  /**
   * Pass True if the administrator can delete messages of other users
   */
  canDeleteMessages?: boolean;

  /**
   * Pass True if the administrator can manage video chats
   */
  canManageVideoChats?: boolean;

  /**
   * Pass True if the administrator can restrict, ban or unban chat members
   */
  canRestrictMembers?: boolean;

  /**
   * Pass True if the administrator can add new administrators with a subset of their
   * own privileges or demote administrators that they have promoted, directly or
   * indirectly (promoted by administrators that were appointed by him)
   */
  canPromoteMembers?: boolean;

  /**
   * Pass True if the administrator can change chat title, photo and other settings
   */
  canChangeInfo?: boolean;

  /**
   * Pass True if the administrator can invite new users to the chat
   */
  canInviteUsers?: boolean;

  /**
   * Pass True if the administrator can pin messages, supergroups only
   */
  canPinMessages?: boolean;

  /**
   * Pass True if the user is allowed to create, rename, close, and reopen forum
   * topics, supergroups only
   */
  canManageTopics?: boolean;
}
