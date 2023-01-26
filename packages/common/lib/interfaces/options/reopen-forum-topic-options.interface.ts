/**
 * Use this method to reopen a closed topic in a forum supergroup chat. The bot
 * must be an administrator in the chat for this to work and must have the
 * can_manage_topics administrator rights, unless it is the creator of the topic.
 * Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#reopenforumtopic}
 */
export interface ReopenForumTopicOptions {
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
