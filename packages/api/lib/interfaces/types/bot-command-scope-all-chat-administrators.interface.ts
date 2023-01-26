/**
 * Represents the scope of bot commands, covering all group and supergroup chat
 * administrators.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopeallchatadministrators}
 */
export interface BotCommandScopeAllChatAdministrators {
  /**
   * Scope type, must be all_chat_administrators
   */
  type: 'all_chat_administrators';
}
