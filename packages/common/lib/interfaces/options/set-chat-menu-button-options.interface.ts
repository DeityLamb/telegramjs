import { MenuButton } from '../types/menu-button.interface';

/**
 * Use this method to change the bot's menu button in a private chat, or the
 * default menu button. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchatmenubutton}
 */
export interface SetChatMenuButtonOptions {
  /**
   * Unique identifier for the target private chat. If not specified, default bot's
   * menu button will be changed
   */
  chatId?: number;

  /**
   * A JSON-serialized object for the bot's new menu button. Defaults to
   * MenuButtonDefault
   */
  menuButton?: MenuButton;
}
