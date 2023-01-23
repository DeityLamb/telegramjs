/**
 * Represents the default scope of bot commands. Default commands are used if no
 * commands with a narrower scope are specified for the user.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopedefault}
 */
export interface BotCommandScopeDefault {
  /**
   * Scope type, must be default
   */
  type: 'default';
}
