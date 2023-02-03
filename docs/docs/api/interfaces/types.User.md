---
id: "types.User"
title: "Interface: User"
sidebar_label: "User"
custom_edit_url: null
---

[types](../modules/types.md).User

This object represents a Telegram user or bot.

**`See`**

[https://core.telegram.org/bots/api#user](https://core.telegram.org/bots/api#user)

## Properties

### addedToAttachmentMenu

• `Optional` **addedToAttachmentMenu**: `boolean`

True, if this user added the bot to the attachment menu

#### Defined in

[types/user.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L47)

___

### canJoinGroups

• `Optional` **canJoinGroups**: `boolean`

True, if the bot can be invited to groups. Returned only in getMe.

#### Defined in

[types/user.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L52)

___

### canReadAllGroupMessages

• `Optional` **canReadAllGroupMessages**: `boolean`

True, if privacy mode is disabled for the bot. Returned only in getMe.

#### Defined in

[types/user.interface.ts:57](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L57)

___

### firstName

• **firstName**: `string`

User's or bot's first name

#### Defined in

[types/user.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L22)

___

### id

• **id**: `number`

Unique identifier for this user or bot. This number may have more than 32
significant bits and some programming languages may have difficulty/silent
defects in interpreting it. But it has at most 52 significant bits, so a 64-bit
integer or double-precision float type are safe for storing this identifier.

#### Defined in

[types/user.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L12)

___

### isBot

• **isBot**: `boolean`

True, if this user is a bot

#### Defined in

[types/user.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L17)

___

### isPremium

• `Optional` **isPremium**: `boolean`

True, if this user is a Telegram Premium user

#### Defined in

[types/user.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L42)

___

### languageCode

• `Optional` **languageCode**: `string`

IETF language tag of the user's language

#### Defined in

[types/user.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L37)

___

### lastName

• `Optional` **lastName**: `string`

User's or bot's last name

#### Defined in

[types/user.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L27)

___

### supportsInlineQueries

• `Optional` **supportsInlineQueries**: `boolean`

True, if the bot supports inline queries. Returned only in getMe.

#### Defined in

[types/user.interface.ts:62](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L62)

___

### username

• `Optional` **username**: `string`

User's or bot's username

#### Defined in

[types/user.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/user.interface.ts#L32)
