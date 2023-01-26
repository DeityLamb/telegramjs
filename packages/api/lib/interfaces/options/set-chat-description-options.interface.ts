/**
 * Use this method to change the description of a group, a supergroup or a channel.
 * The bot must be an administrator in the chat for this to work and must have the
 * appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchatdescription}
 */
export interface SetChatDescriptionOptions {
  /**
   * Unique identifier for the target chat or username of the target channel (in the
   * format @channelusername)
   */
  chatId: number | string;

  /**
   * New chat description, 0-255 characters
   */
  description?: string;
}
