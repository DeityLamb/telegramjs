---
id: "options.UnbanChatSenderChatOptions"
title: "Interface: UnbanChatSenderChatOptions"
sidebar_label: "UnbanChatSenderChatOptions"
custom_edit_url: null
---

[options](../modules/options.md).UnbanChatSenderChatOptions

Use this method to unban a previously banned channel chat in a supergroup or
channel. The bot must be an administrator for this to work and must have the
appropriate administrator rights. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#unbanchatsenderchat](https://core.telegram.org/bots/api#unbanchatsenderchat)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/unban-chat-sender-chat-options.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/unban-chat-sender-chat-options.interface.ts#L12)

___

### senderChatId

• **senderChatId**: `number`

Unique identifier of the target sender chat

#### Defined in

[options/unban-chat-sender-chat-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/unban-chat-sender-chat-options.interface.ts#L17)
