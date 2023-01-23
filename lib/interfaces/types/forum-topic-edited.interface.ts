/**
 * This object represents a service message about an edited forum topic.
 * @see {@link https://core.telegram.org/bots/api#forumtopicedited}
 */
export interface ForumTopicEdited {
  /**
   * New name of the topic, if it was edited
   */
  name?: string;

  /**
   * New identifier of the custom emoji shown as the topic icon, if it was edited;
   * an empty string if the icon was removed
   */
  iconCustomEmojiId?: string;
}
