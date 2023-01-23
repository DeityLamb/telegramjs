/**
 * Use this method to clear the list of pinned messages in a forum topic. The bot
 * must be an administrator in the chat for this to work and must have the
 * can_pin_messages administrator right in the supergroup. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unpinallforumtopicmessages}
 */
export interface UnpinAllForumTopicMessagesOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in
   * the format @supergroupusername)
   */
  chatId: number | string;

  /**
   * Unique identifier for the target message thread of the forum topic
   */
  messageThreadId: number;
}
