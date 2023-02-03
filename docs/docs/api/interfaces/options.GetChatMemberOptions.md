---
id: "options.GetChatMemberOptions"
title: "Interface: GetChatMemberOptions"
sidebar_label: "GetChatMemberOptions"
custom_edit_url: null
---

[options](../modules/options.md).GetChatMemberOptions

Use this method to get information about a member of a chat. The method is
guaranteed to work for other users, only if the bot is an administrator in the
chat. Returns a ChatMember object on success.

**`See`**

[https://core.telegram.org/bots/api#getchatmember](https://core.telegram.org/bots/api#getchatmember)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup or
channel (in the format @channelusername)

#### Defined in

[options/get-chat-member-options.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-chat-member-options.interface.ts#L12)

___

### userId

• **userId**: `number`

Unique identifier of the target user

#### Defined in

[options/get-chat-member-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-chat-member-options.interface.ts#L17)
