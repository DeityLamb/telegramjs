/**
 * Use this method to delete a forum topic along with all its messages in a forum
 * supergroup chat. The bot must be an administrator in the chat for this to work
 * and must have the can_delete_messages administrator rights. Returns True on
 * success.
 * @see {@link https://core.telegram.org/bots/api#deleteforumtopic}
 */
export interface DeleteForumTopicOptions {
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
