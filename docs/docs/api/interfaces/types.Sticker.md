---
id: "types.Sticker"
title: "Interface: Sticker"
sidebar_label: "Sticker"
custom_edit_url: null
---

[types](../modules/types.md).Sticker

This object represents a sticker.

**`See`**

[https://core.telegram.org/bots/api#sticker](https://core.telegram.org/bots/api#sticker)

## Properties

### customEmojiId

• `Optional` **customEmojiId**: `string`

For custom emoji stickers, unique identifier of the custom emoji

#### Defined in

[types/sticker.interface.ts:76](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L76)

___

### emoji

• `Optional` **emoji**: `string`

Emoji associated with the sticker

#### Defined in

[types/sticker.interface.ts:56](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L56)

___

### fileId

• **fileId**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[types/sticker.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L13)

___

### fileSize

• `Optional` **fileSize**: `number`

File size in bytes

#### Defined in

[types/sticker.interface.ts:81](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L81)

___

### fileUniqueId

• **fileUniqueId**: `string`

Unique identifier for this file, which is supposed to be the same over time and
for different bots. Can't be used to download or reuse the file.

#### Defined in

[types/sticker.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L19)

___

### height

• **height**: `number`

Sticker height

#### Defined in

[types/sticker.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L36)

___

### isAnimated

• **isAnimated**: `boolean`

True, if the sticker is animated

#### Defined in

[types/sticker.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L41)

___

### isVideo

• **isVideo**: `boolean`

True, if the sticker is a video sticker

#### Defined in

[types/sticker.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L46)

___

### maskPosition

• `Optional` **maskPosition**: [`MaskPosition`](types.MaskPosition.md)

For mask stickers, the position where the mask should be placed

#### Defined in

[types/sticker.interface.ts:71](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L71)

___

### premiumAnimation

• `Optional` **premiumAnimation**: [`File`](types.File.md)

For premium regular stickers, premium animation for the sticker

#### Defined in

[types/sticker.interface.ts:66](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L66)

___

### setName

• `Optional` **setName**: `string`

Name of the sticker set to which the sticker belongs

#### Defined in

[types/sticker.interface.ts:61](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L61)

___

### thumb

• `Optional` **thumb**: [`PhotoSize`](types.PhotoSize.md)

Sticker thumbnail in the .WEBP or .JPG format

#### Defined in

[types/sticker.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L51)

___

### type

• **type**: `string`

Type of the sticker, currently one of "regular", "mask", "custom_emoji". The
type of the sticker is independent from its format, which is determined by the
fields is_animated and is_video.

#### Defined in

[types/sticker.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L26)

___

### width

• **width**: `number`

Sticker width

#### Defined in

[types/sticker.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker.interface.ts#L31)
