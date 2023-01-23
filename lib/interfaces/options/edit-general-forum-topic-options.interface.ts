/**
 * Use this method to edit the name of the 'General' topic in a forum supergroup
 * chat. The bot must be an administrator in the chat for this to work and must
 * have can_manage_topics administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#editgeneralforumtopic}
 */
export interface EditGeneralForumTopicOptions {
  /**
   * Unique identifier for the target chat or username of the target supergroup (in
   * the format @supergroupusername)
   */
  chatId: number | string;

  /**
   * New topic name, 1-128 characters
   */
  name: string;
}
