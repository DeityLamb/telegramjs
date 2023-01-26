/**
 * Represents a menu button, which opens the bot's list of commands.
 * @see {@link https://core.telegram.org/bots/api#menubuttoncommands}
 */
export interface MenuButtonCommands {
  /**
   * Type of the button, must be commands
   */
  type: 'commands';
}
