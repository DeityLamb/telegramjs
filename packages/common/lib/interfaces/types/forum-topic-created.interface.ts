/**
 * This object represents a service message about a new forum topic created in the
 * chat.
 * @see {@link https://core.telegram.org/bots/api#forumtopiccreated}
 */
export interface ForumTopicCreated {
  /**
   * Name of the topic
   */
  name: string;

  /**
   * Color of the topic icon in RGB format
   */
  iconColor: number;

  /**
   * Unique identifier of the custom emoji shown as the topic icon
   */
  iconCustomEmojiId?: string;
}
