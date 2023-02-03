---
id: "types.ChatPermissions"
title: "Interface: ChatPermissions"
sidebar_label: "ChatPermissions"
custom_edit_url: null
---

[types](../modules/types.md).ChatPermissions

Describes actions that a non-administrator user is allowed to take in a chat.

**`See`**

[https://core.telegram.org/bots/api#chatpermissions](https://core.telegram.org/bots/api#chatpermissions)

## Properties

### canAddWebPagePreviews

• `Optional` **canAddWebPagePreviews**: `boolean`

True, if the user is allowed to add web page previews to their messages,
implies can_send_media_messages

#### Defined in

[types/chat-permissions.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-permissions.interface.ts#L33)

___

### canChangeInfo

• `Optional` **canChangeInfo**: `boolean`

True, if the user is allowed to change the chat title, photo and other
settings. Ignored in public supergroups

#### Defined in

[types/chat-permissions.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-permissions.interface.ts#L39)

___

### canInviteUsers

• `Optional` **canInviteUsers**: `boolean`

True, if the user is allowed to invite new users to the chat

#### Defined in

[types/chat-permissions.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-permissions.interface.ts#L44)

___

### canManageTopics

• `Optional` **canManageTopics**: `boolean`

True, if the user is allowed to create forum topics. If omitted defaults to the
value of can_pin_messages

#### Defined in

[types/chat-permissions.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-permissions.interface.ts#L55)

___

### canPinMessages

• `Optional` **canPinMessages**: `boolean`

True, if the user is allowed to pin messages. Ignored in public supergroups

#### Defined in

[types/chat-permissions.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-permissions.interface.ts#L49)

___

### canSendMediaMessages

• `Optional` **canSendMediaMessages**: `boolean`

True, if the user is allowed to send audios, documents, photos, videos, video
notes and voice notes, implies can_send_messages

#### Defined in

[types/chat-permissions.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-permissions.interface.ts#L16)

___

### canSendMessages

• `Optional` **canSendMessages**: `boolean`

True, if the user is allowed to send text messages, contacts, locations and
venues

#### Defined in

[types/chat-permissions.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-permissions.interface.ts#L10)

___

### canSendOtherMessages

• `Optional` **canSendOtherMessages**: `boolean`

True, if the user is allowed to send animations, games, stickers and use inline
bots, implies can_send_media_messages

#### Defined in

[types/chat-permissions.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-permissions.interface.ts#L27)

___

### canSendPolls

• `Optional` **canSendPolls**: `boolean`

True, if the user is allowed to send polls, implies can_send_messages

#### Defined in

[types/chat-permissions.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-permissions.interface.ts#L21)
