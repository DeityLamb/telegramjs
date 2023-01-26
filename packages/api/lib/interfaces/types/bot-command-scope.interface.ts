import { BotCommandScopeDefault } from './bot-command-scope-default.interface';
import { BotCommandScopeAllPrivateChats } from './bot-command-scope-all-private-chats.interface';
import { BotCommandScopeAllGroupChats } from './bot-command-scope-all-group-chats.interface';
import { BotCommandScopeAllChatAdministrators } from './bot-command-scope-all-chat-administrators.interface';
import { BotCommandScopeChat } from './bot-command-scope-chat.interface';
import { BotCommandScopeChatAdministrators } from './bot-command-scope-chat-administrators.interface';
import { BotCommandScopeChatMember } from './bot-command-scope-chat-member.interface';

/**
 * This object represents the scope to which bot commands are applied. Currently,
 * the following 7 scopes are supported:
 * - BotCommandScopeDefault
 * - BotCommandScopeAllPrivateChats
 * - BotCommandScopeAllGroupChats
 * - BotCommandScopeAllChatAdministrators
 * - BotCommandScopeChat
 * - BotCommandScopeChatAdministrators
 * - BotCommandScopeChatMember
 * @see {@link https://core.telegram.org/bots/api#botcommandscope}
 */
export type BotCommandScope =
  | BotCommandScopeDefault
  | BotCommandScopeAllPrivateChats
  | BotCommandScopeAllGroupChats
  | BotCommandScopeAllChatAdministrators
  | BotCommandScopeChat
  | BotCommandScopeChatAdministrators
  | BotCommandScopeChatMember;
