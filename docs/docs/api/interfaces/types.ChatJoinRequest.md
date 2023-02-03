---
id: "types.ChatJoinRequest"
title: "Interface: ChatJoinRequest"
sidebar_label: "ChatJoinRequest"
custom_edit_url: null
---

[types](../modules/types.md).ChatJoinRequest

Represents a join request sent to a chat.

**`See`**

[https://core.telegram.org/bots/api#chatjoinrequest](https://core.telegram.org/bots/api#chatjoinrequest)

## Properties

### bio

• `Optional` **bio**: `string`

Bio of the user.

#### Defined in

[types/chat-join-request.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-join-request.interface.ts#L28)

___

### chat

• **chat**: [`Chat`](types.Chat.md)

Chat to which the request was sent

#### Defined in

[types/chat-join-request.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-join-request.interface.ts#L13)

___

### date

• **date**: `number`

Date the request was sent in Unix time

#### Defined in

[types/chat-join-request.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-join-request.interface.ts#L23)

___

### from

• **from**: [`User`](types.User.md)

User that sent the join request

#### Defined in

[types/chat-join-request.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-join-request.interface.ts#L18)

___

### inviteLink

• `Optional` **inviteLink**: [`ChatInviteLink`](types.ChatInviteLink.md)

Chat invite link that was used by the user to send the join request

#### Defined in

[types/chat-join-request.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-join-request.interface.ts#L33)
