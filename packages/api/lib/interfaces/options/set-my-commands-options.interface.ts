import { BotCommand } from '../types/bot-command.interface';
import { BotCommandScope } from '../types/bot-command-scope.interface';

/**
 * Use this method to change the list of the bot's commands. See this manual for
 * more details about bot commands. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setmycommands}
 */
export interface SetMyCommandsOptions {
  /**
   * A JSON-serialized list of bot commands to be set as the list of the bot's
   * commands. At most 100 commands can be specified.
   */
  commands: BotCommand;

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
