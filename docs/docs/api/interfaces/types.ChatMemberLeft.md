---
id: "types.ChatMemberLeft"
title: "Interface: ChatMemberLeft"
sidebar_label: "ChatMemberLeft"
custom_edit_url: null
---

[types](../modules/types.md).ChatMemberLeft

Represents a chat member that isn't currently a member of the chat, but may join
it themselves.

**`See`**

[https://core.telegram.org/bots/api#chatmemberleft](https://core.telegram.org/bots/api#chatmemberleft)

## Properties

### status

• **status**: ``"left"``

The member's status in the chat, always "left"

#### Defined in

[types/chat-member-left.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-left.interface.ts#L12)

___

### user

• **user**: [`User`](types.User.md)

Information about the user

#### Defined in

[types/chat-member-left.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-left.interface.ts#L17)
