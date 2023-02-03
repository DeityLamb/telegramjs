---
id: "types.ChatMemberUpdated"
title: "Interface: ChatMemberUpdated"
sidebar_label: "ChatMemberUpdated"
custom_edit_url: null
---

[types](../modules/types.md).ChatMemberUpdated

This object represents changes in the status of a chat member.

**`See`**

[https://core.telegram.org/bots/api#chatmemberupdated](https://core.telegram.org/bots/api#chatmemberupdated)

## Properties

### chat

• **chat**: [`Chat`](types.Chat.md)

Chat the user belongs to

#### Defined in

[types/chat-member-updated.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-updated.interface.ts#L14)

___

### date

• **date**: `number`

Date the change was done in Unix time

#### Defined in

[types/chat-member-updated.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-updated.interface.ts#L24)

___

### from

• **from**: [`User`](types.User.md)

Performer of the action, which resulted in the change

#### Defined in

[types/chat-member-updated.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-updated.interface.ts#L19)

___

### inviteLink

• `Optional` **inviteLink**: [`ChatInviteLink`](types.ChatInviteLink.md)

Chat invite link, which was used by the user to join the chat; for joining by
invite link events only.

#### Defined in

[types/chat-member-updated.interface.ts:40](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-updated.interface.ts#L40)

___

### newChatMember

• **newChatMember**: [`ChatMember`](../modules/types.md#chatmember)

New information about the chat member

#### Defined in

[types/chat-member-updated.interface.ts:34](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-updated.interface.ts#L34)

___

### oldChatMember

• **oldChatMember**: [`ChatMember`](../modules/types.md#chatmember)

Previous information about the chat member

#### Defined in

[types/chat-member-updated.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-updated.interface.ts#L29)
