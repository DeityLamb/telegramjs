/**
 * This object represents a forum topic.
 * @see {@link https://core.telegram.org/bots/api#forumtopic}
 */
export interface ForumTopic {
  /**
   * Unique identifier of the forum topic
   */
  messageThreadId: number;

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
