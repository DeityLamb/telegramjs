import { BotCommandScopeType } from '../../enums';

interface BaseBotCommandScope {
  type: Exclude<
    BotCommandScopeType, 
    | BotCommandScopeType.CHAT
    | BotCommandScopeType.CHAT_ADMINISTRATORS
    | BotCommandScopeType.CHAT_MEMBER
  >;
}

interface BotCommandScopeChat {
  type: BotCommandScopeType.CHAT | BotCommandScopeType.CHAT_ADMINISTRATORS;
  chat_id: string;
}

interface BotCommandScopeChatMember {
  type: BotCommandScopeType.CHAT_MEMBER;
  chat_id: string;
  user_id: string;
}

export type BotCommandScope =
  | BaseBotCommandScope
  | BotCommandScopeChat
  | BotCommandScopeChatMember;
