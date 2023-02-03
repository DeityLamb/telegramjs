---
id: "types.ChatMemberOwner"
title: "Interface: ChatMemberOwner"
sidebar_label: "ChatMemberOwner"
custom_edit_url: null
---

[types](../modules/types.md).ChatMemberOwner

Represents a chat member that owns the chat and has all administrator
privileges.

**`See`**

[https://core.telegram.org/bots/api#chatmemberowner](https://core.telegram.org/bots/api#chatmemberowner)

## Properties

### customTitle

• `Optional` **customTitle**: `string`

Custom title for this user

#### Defined in

[types/chat-member-owner.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-owner.interface.ts#L27)

___

### isAnonymous

• **isAnonymous**: `boolean`

True, if the user's presence in the chat is hidden

#### Defined in

[types/chat-member-owner.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-owner.interface.ts#L22)

___

### status

• **status**: ``"creator"``

The member's status in the chat, always "creator"

#### Defined in

[types/chat-member-owner.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-owner.interface.ts#L12)

___

### user

• **user**: [`User`](types.User.md)

Information about the user

#### Defined in

[types/chat-member-owner.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-owner.interface.ts#L17)
