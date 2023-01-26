import { BotCommandScope } from '../types/bot-command-scope.interface';

/**
 * Use this method to get the current list of the bot's commands for the given
 * scope and user language. Returns an Array of BotCommand objects. If commands
 * aren't set, an empty list is returned.
 * @see {@link https://core.telegram.org/bots/api#getmycommands}
 */
export interface GetMyCommandsOptions {
  /**
   * A JSON-serialized object, describing scope of users. Defaults to
   * BotCommandScopeDefault.
   */
  scope?: BotCommandScope;

  /**
   * A two-letter ISO 639-1 language code or an empty string
   */
  languageCode?: string;
}
