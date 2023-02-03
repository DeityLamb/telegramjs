---
id: "types.Chat"
title: "Interface: Chat"
sidebar_label: "Chat"
custom_edit_url: null
---

[types](../modules/types.md).Chat

This object represents a chat.

**`See`**

[https://core.telegram.org/bots/api#chat](https://core.telegram.org/bots/api#chat)

## Properties

### activeUsernames

• `Optional` **activeUsernames**: `string`

If non-empty, the list of all active chat usernames; for private chats,
supergroups and channels. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:58](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L58)

___

### bio

• `Optional` **bio**: `string`

Bio of the other party in a private chat. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:69](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L69)

___

### canSetStickerSet

• `Optional` **canSetStickerSet**: `boolean`

True, if the bot can change the group sticker set. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:157](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L157)

___

### description

• `Optional` **description**: `string`

Description, for groups, supergroups and channel chats. Returned only in
getChat.

#### Defined in

[types/chat.interface.ts:100](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L100)

___

### emojiStatusCustomEmojiId

• `Optional` **emojiStatusCustomEmojiId**: `string`

Custom emoji identifier of emoji status of the other party in a private chat.
Returned only in getChat.

#### Defined in

[types/chat.interface.ts:64](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L64)

___

### firstName

• `Optional` **firstName**: `string`

First name of the other party in a private chat

#### Defined in

[types/chat.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L37)

___

### hasAggressiveAntiSpamEnabled

• `Optional` **hasAggressiveAntiSpamEnabled**: `boolean`

True, if aggressive anti-spam checks are enabled in the supergroup. The field
is only available to chat administrators. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:135](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L135)

___

### hasHiddenMembers

• `Optional` **hasHiddenMembers**: `boolean`

True, if non-administrators can only get the list of bots and administrators in
the chat. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:141](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L141)

___

### hasPrivateForwards

• `Optional` **hasPrivateForwards**: `boolean`

True, if privacy settings of the other party in the private chat allows to use
tg://user?id=<user_id> links only in chats with the user. Returned only in
getChat.

#### Defined in

[types/chat.interface.ts:76](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L76)

___

### hasProtectedContent

• `Optional` **hasProtectedContent**: `boolean`

True, if messages from the chat can't be forwarded to other chats. Returned
only in getChat.

#### Defined in

[types/chat.interface.ts:147](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L147)

___

### hasRestrictedVoiceAndVideoMessages

• `Optional` **hasRestrictedVoiceAndVideoMessages**: `boolean`

True, if the privacy settings of the other party restrict sending voice and
video note messages in the private chat. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:82](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L82)

___

### id

• **id**: `number`

Unique identifier for this chat. This number may have more than 32 significant
bits and some programming languages may have difficulty/silent defects in
interpreting it. But it has at most 52 significant bits, so a signed 64-bit
integer or double-precision float type are safe for storing this identifier.

#### Defined in

[types/chat.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L17)

___

### inviteLink

• `Optional` **inviteLink**: `string`

Primary invite link, for groups, supergroups and channel chats. Returned only
in getChat.

#### Defined in

[types/chat.interface.ts:106](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L106)

___

### isForum

• `Optional` **isForum**: `boolean`

True, if the supergroup chat is a forum (has topics enabled)

#### Defined in

[types/chat.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L47)

___

### joinByRequest

• `Optional` **joinByRequest**: `boolean`

True, if all users directly joining the supergroup need to be approved by
supergroup administrators. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:94](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L94)

___

### joinToSendMessages

• `Optional` **joinToSendMessages**: `boolean`

True, if users need to join the supergroup before they can send messages.
Returned only in getChat.

#### Defined in

[types/chat.interface.ts:88](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L88)

___

### lastName

• `Optional` **lastName**: `string`

Last name of the other party in a private chat

#### Defined in

[types/chat.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L42)

___

### linkedChatId

• `Optional` **linkedChatId**: `number`

Unique identifier for the linked chat, i.e. the discussion group identifier for
a channel and vice versa; for supergroups and channel chats. This identifier may
be greater than 32 bits and some programming languages may have
difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so
a signed 64 bit integer or double-precision float type are safe for storing this
identifier. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:167](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L167)

___

### location

• `Optional` **location**: [`ChatLocation`](types.ChatLocation.md)

For supergroups, the location to which the supergroup is connected. Returned
only in getChat.

#### Defined in

[types/chat.interface.ts:173](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L173)

___

### messageAutoDeleteTime

• `Optional` **messageAutoDeleteTime**: `number`

The time after which all messages sent to the chat will be automatically
deleted; in seconds. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:129](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L129)

___

### permissions

• `Optional` **permissions**: [`ChatPermissions`](types.ChatPermissions.md)

Default chat member permissions, for groups and supergroups. Returned only in
getChat.

#### Defined in

[types/chat.interface.ts:117](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L117)

___

### photo

• `Optional` **photo**: [`ChatPhoto`](types.ChatPhoto.md)

Chat photo. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L52)

___

### pinnedMessage

• `Optional` **pinnedMessage**: [`Message`](types.Message.md)

The most recent pinned message (by sending date). Returned only in getChat.

#### Defined in

[types/chat.interface.ts:111](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L111)

___

### slowModeDelay

• `Optional` **slowModeDelay**: `number`

For supergroups, the minimum allowed delay between consecutive messages sent by
each unpriviledged user; in seconds. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:123](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L123)

___

### stickerSetName

• `Optional` **stickerSetName**: `string`

For supergroups, name of group sticker set. Returned only in getChat.

#### Defined in

[types/chat.interface.ts:152](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L152)

___

### title

• `Optional` **title**: `string`

Title, for supergroups, channels and group chats

#### Defined in

[types/chat.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L27)

___

### type

• **type**: `string`

Type of chat, can be either "private", "group", "supergroup" or "channel"

#### Defined in

[types/chat.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L22)

___

### username

• `Optional` **username**: `string`

Username, for private chats, supergroups and channels if available

#### Defined in

[types/chat.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat.interface.ts#L32)
