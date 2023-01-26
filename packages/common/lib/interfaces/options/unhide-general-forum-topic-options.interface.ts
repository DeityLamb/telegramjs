/**
 * Use this method to unhide the 'General' topic in a forum supergroup chat. The
 * bot must be an administrator in the chat for this to work and must have the
 * can_manage_topics administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unhidegeneralforumtopic}
 */
export interface UnhideGeneralForumTopicOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in
   * the format @supergroupusername)
   */
  chatId: number | string;
}
