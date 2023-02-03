---
id: "options.SetChatTitleOptions"
title: "Interface: SetChatTitleOptions"
sidebar_label: "SetChatTitleOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetChatTitleOptions

Use this method to change the title of a chat. Titles can't be changed for
private chats. The bot must be an administrator in the chat for this to work and
must have the appropriate administrator rights. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#setchattitle](https://core.telegram.org/bots/api#setchattitle)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/set-chat-title-options.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-title-options.interface.ts#L12)

___

### title

• **title**: `string`

New chat title, 1-128 characters

#### Defined in

[options/set-chat-title-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-title-options.interface.ts#L17)
