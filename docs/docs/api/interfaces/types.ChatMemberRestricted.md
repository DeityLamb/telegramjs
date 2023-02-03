---
id: "types.ChatMemberRestricted"
title: "Interface: ChatMemberRestricted"
sidebar_label: "ChatMemberRestricted"
custom_edit_url: null
---

[types](../modules/types.md).ChatMemberRestricted

Represents a chat member that is under certain restrictions in the chat.
Supergroups only.

**`See`**

[https://core.telegram.org/bots/api#chatmemberrestricted](https://core.telegram.org/bots/api#chatmemberrestricted)

## Properties

### canAddWebPagePreviews

• **canAddWebPagePreviews**: `boolean`

True, if the user is allowed to add web page previews to their messages

#### Defined in

[types/chat-member-restricted.interface.ts:70](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L70)

___

### canChangeInfo

• **canChangeInfo**: `boolean`

True, if the user is allowed to change the chat title, photo and other settings

#### Defined in

[types/chat-member-restricted.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L27)

___

### canInviteUsers

• **canInviteUsers**: `boolean`

True, if the user is allowed to invite new users to the chat

#### Defined in

[types/chat-member-restricted.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L32)

___

### canManageTopics

• **canManageTopics**: `boolean`

True, if the user is allowed to create forum topics

#### Defined in

[types/chat-member-restricted.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L42)

___

### canPinMessages

• **canPinMessages**: `boolean`

True, if the user is allowed to pin messages

#### Defined in

[types/chat-member-restricted.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L37)

___

### canSendMediaMessages

• **canSendMediaMessages**: `boolean`

True, if the user is allowed to send audios, documents, photos, videos, video
notes and voice notes

#### Defined in

[types/chat-member-restricted.interface.ts:54](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L54)

___

### canSendMessages

• **canSendMessages**: `boolean`

True, if the user is allowed to send text messages, contacts, locations and
venues

#### Defined in

[types/chat-member-restricted.interface.ts:48](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L48)

___

### canSendOtherMessages

• **canSendOtherMessages**: `boolean`

True, if the user is allowed to send animations, games, stickers and use inline
bots

#### Defined in

[types/chat-member-restricted.interface.ts:65](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L65)

___

### canSendPolls

• **canSendPolls**: `boolean`

True, if the user is allowed to send polls

#### Defined in

[types/chat-member-restricted.interface.ts:59](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L59)

___

### isMember

• **isMember**: `boolean`

True, if the user is a member of the chat at the moment of the request

#### Defined in

[types/chat-member-restricted.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L22)

___

### status

• **status**: ``"restricted"``

The member's status in the chat, always "restricted"

#### Defined in

[types/chat-member-restricted.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L12)

___

### untilDate

• **untilDate**: `number`

Date when restrictions will be lifted for this user; unix time. If 0, then the
user is restricted forever

#### Defined in

[types/chat-member-restricted.interface.ts:76](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L76)

___

### user

• **user**: [`User`](types.User.md)

Information about the user

#### Defined in

[types/chat-member-restricted.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-restricted.interface.ts#L17)
