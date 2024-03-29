import { BotCommandScope } from '../types/bot-command-scope.interface';

/**
 * Use this method to delete the list of the bot's commands for the given scope and
 * user language. After deletion, higher level commands will be shown to affected
 * users. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deletemycommands}
 */
export interface DeleteMyCommandsOptions {
  /**
   * A JSON-serialized object, describing scope of users for which the commands are
   * relevant. Defaults to BotCommandScopeDefault.
   */
  scope?: BotCommandScope;

  /**
   * A two-letter ISO 639-1 language code. If empty, commands will be applied to all
   * users from the given scope, for whose language there are no dedicated commands
   */
  languageCode?: string;
}
