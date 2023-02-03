---
id: "options.BanChatSenderChatOptions"
title: "Interface: BanChatSenderChatOptions"
sidebar_label: "BanChatSenderChatOptions"
custom_edit_url: null
---

[options](../modules/options.md).BanChatSenderChatOptions

Use this method to ban a channel chat in a supergroup or a channel. Until the
chat is unbanned, the owner of the banned chat won't be able to send messages on
behalf of any of their channels. The bot must be an administrator in the
supergroup or channel for this to work and must have the appropriate
administrator rights. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#banchatsenderchat](https://core.telegram.org/bots/api#banchatsenderchat)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/ban-chat-sender-chat-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/ban-chat-sender-chat-options.interface.ts#L14)

___

### senderChatId

• **senderChatId**: `number`

Unique identifier of the target sender chat

#### Defined in

[options/ban-chat-sender-chat-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/ban-chat-sender-chat-options.interface.ts#L19)
