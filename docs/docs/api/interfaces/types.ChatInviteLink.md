---
id: "types.ChatInviteLink"
title: "Interface: ChatInviteLink"
sidebar_label: "ChatInviteLink"
custom_edit_url: null
---

[types](../modules/types.md).ChatInviteLink

Represents an invite link for a chat.

**`See`**

[https://core.telegram.org/bots/api#chatinvitelink](https://core.telegram.org/bots/api#chatinvitelink)

## Properties

### createsJoinRequest

• **createsJoinRequest**: `boolean`

True, if users joining the chat via the link need to be approved by chat
administrators

#### Defined in

[types/chat-invite-link.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-invite-link.interface.ts#L23)

___

### creator

• **creator**: [`User`](types.User.md)

Creator of the link

#### Defined in

[types/chat-invite-link.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-invite-link.interface.ts#L17)

___

### expireDate

• `Optional` **expireDate**: `number`

Point in time (Unix timestamp) when the link will expire or has been expired

#### Defined in

[types/chat-invite-link.interface.ts:43](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-invite-link.interface.ts#L43)

___

### inviteLink

• **inviteLink**: `string`

The invite link. If the link was created by another chat administrator, then the
second part of the link will be replaced with "...".

#### Defined in

[types/chat-invite-link.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-invite-link.interface.ts#L12)

___

### isPrimary

• **isPrimary**: `boolean`

True, if the link is primary

#### Defined in

[types/chat-invite-link.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-invite-link.interface.ts#L28)

___

### isRevoked

• **isRevoked**: `boolean`

True, if the link is revoked

#### Defined in

[types/chat-invite-link.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-invite-link.interface.ts#L33)

___

### memberLimit

• `Optional` **memberLimit**: `number`

The maximum number of users that can be members of the chat simultaneously
after joining the chat via this invite link; 1-99999

#### Defined in

[types/chat-invite-link.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-invite-link.interface.ts#L49)

___

### name

• `Optional` **name**: `string`

Invite link name

#### Defined in

[types/chat-invite-link.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-invite-link.interface.ts#L38)

___

### pendingJoinRequestCount

• `Optional` **pendingJoinRequestCount**: `number`

Number of pending join requests created using this link

#### Defined in

[types/chat-invite-link.interface.ts:54](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-invite-link.interface.ts#L54)
