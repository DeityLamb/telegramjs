---
id: "types.BotCommandScopeChatMember"
title: "Interface: BotCommandScopeChatMember"
sidebar_label: "BotCommandScopeChatMember"
custom_edit_url: null
---

[types](../modules/types.md).BotCommandScopeChatMember

Represents the scope of bot commands, covering a specific member of a group or
supergroup chat.

**`See`**

[https://core.telegram.org/bots/api#botcommandscopechatmember](https://core.telegram.org/bots/api#botcommandscopechatmember)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[types/bot-command-scope-chat-member.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/bot-command-scope-chat-member.interface.ts#L16)

___

### type

• **type**: ``"chat_member"``

Scope type, must be chat_member

#### Defined in

[types/bot-command-scope-chat-member.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/bot-command-scope-chat-member.interface.ts#L10)

___

### userId

• **userId**: `number`

Unique identifier of the target user

#### Defined in

[types/bot-command-scope-chat-member.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/bot-command-scope-chat-member.interface.ts#L21)
