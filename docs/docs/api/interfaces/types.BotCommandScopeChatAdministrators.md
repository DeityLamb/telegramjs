---
id: "types.BotCommandScopeChatAdministrators"
title: "Interface: BotCommandScopeChatAdministrators"
sidebar_label: "BotCommandScopeChatAdministrators"
custom_edit_url: null
---

[types](../modules/types.md).BotCommandScopeChatAdministrators

Represents the scope of bot commands, covering all administrators of a specific
group or supergroup chat.

**`See`**

[https://core.telegram.org/bots/api#botcommandscopechatadministrators](https://core.telegram.org/bots/api#botcommandscopechatadministrators)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[types/bot-command-scope-chat-administrators.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/bot-command-scope-chat-administrators.interface.ts#L16)

___

### type

• **type**: ``"chat_administrators"``

Scope type, must be chat_administrators

#### Defined in

[types/bot-command-scope-chat-administrators.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/bot-command-scope-chat-administrators.interface.ts#L10)
