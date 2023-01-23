/**
 * Describes actions that a non-administrator user is allowed to take in a chat.
 * @see {@link https://core.telegram.org/bots/api#chatpermissions}
 */
export interface ChatPermissions {
  /**
   * True, if the user is allowed to send text messages, contacts, locations and
   * venues
   */
  canSendMessages?: boolean;

  /**
   * True, if the user is allowed to send audios, documents, photos, videos, video
   * notes and voice notes, implies can_send_messages
   */
  canSendMediaMessages?: boolean;

  /**
   * True, if the user is allowed to send polls, implies can_send_messages
   */
  canSendPolls?: boolean;

  /**
   * True, if the user is allowed to send animations, games, stickers and use inline
   * bots, implies can_send_media_messages
   */
  canSendOtherMessages?: boolean;

  /**
   * True, if the user is allowed to add web page previews to their messages,
   * implies can_send_media_messages
   */
  canAddWebPagePreviews?: boolean;

  /**
   * True, if the user is allowed to change the chat title, photo and other
   * settings. Ignored in public supergroups
   */
  canChangeInfo?: boolean;

  /**
   * True, if the user is allowed to invite new users to the chat
   */
  canInviteUsers?: boolean;

  /**
   * True, if the user is allowed to pin messages. Ignored in public supergroups
   */
  canPinMessages?: boolean;

  /**
   * True, if the user is allowed to create forum topics. If omitted defaults to the
   * value of can_pin_messages
   */
  canManageTopics?: boolean;
}
