/**
 * Use this method to reopen a closed 'General' topic in a forum supergroup chat.
 * The bot must be an administrator in the chat for this to work and must have the
 * can_manage_topics administrator rights. The topic will be automatically unhidden
 * if it was hidden. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#reopengeneralforumtopic}
 */
export interface ReopenGeneralForumTopicOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in
   * the format @supergroupusername)
   */
  chatId: number | string;
}
