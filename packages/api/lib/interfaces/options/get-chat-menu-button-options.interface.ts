/**
 * Use this method to get the current value of the bot's menu button in a private
 * chat, or the default menu button. Returns MenuButton on success.
 * @see {@link https://core.telegram.org/bots/api#getchatmenubutton}
 */
export interface GetChatMenuButtonOptions {
  /**
   * Unique identifier for the target private chat. If not specified, default bot's
   * menu button will be returned
   */
  chatId?: number;
}
