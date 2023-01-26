/**
 * Represents the scope of bot commands, covering a specific chat.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopechat}
 */
export interface BotCommandScopeChat {
  /**
   * Scope type, must be chat
   */
  type: 'chat';

  /**
   * Unique identifier for the target chat or username of the target supergroup (in
   * the format @supergroupusername)
   */
  chatId: number | string;
}
