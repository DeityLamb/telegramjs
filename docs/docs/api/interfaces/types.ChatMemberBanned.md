---
id: "types.ChatMemberBanned"
title: "Interface: ChatMemberBanned"
sidebar_label: "ChatMemberBanned"
custom_edit_url: null
---

[types](../modules/types.md).ChatMemberBanned

Represents a chat member that was banned in the chat and can't return to the
chat or view chat messages.

**`See`**

[https://core.telegram.org/bots/api#chatmemberbanned](https://core.telegram.org/bots/api#chatmemberbanned)

## Properties

### status

• **status**: ``"kicked"``

The member's status in the chat, always "kicked"

#### Defined in

[types/chat-member-banned.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-banned.interface.ts#L12)

___

### untilDate

• **untilDate**: `number`

Date when restrictions will be lifted for this user; unix time. If 0, then the
user is banned forever

#### Defined in

[types/chat-member-banned.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-banned.interface.ts#L23)

___

### user

• **user**: [`User`](types.User.md)

Information about the user

#### Defined in

[types/chat-member-banned.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-banned.interface.ts#L17)
