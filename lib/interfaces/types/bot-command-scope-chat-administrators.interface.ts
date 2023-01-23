/**
 * Represents the scope of bot commands, covering all administrators of a specific
 * group or supergroup chat.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopechatadministrators}
 */
export interface BotCommandScopeChatAdministrators {
  /**
   * Scope type, must be chat_administrators
   */
  type: 'chat_administrators';

  /**
   * Unique identifier for the target chat or username of the target supergroup (in
   * the format @supergroupusername)
   */
  chatId: number | string;
}
