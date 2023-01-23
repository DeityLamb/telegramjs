/**
 * Represents the scope of bot commands, covering all group and supergroup chats.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopeallgroupchats}
 */
export interface BotCommandScopeAllGroupChats {
  /**
   * Scope type, must be all_group_chats
   */
  type: 'all_group_chats';
}
