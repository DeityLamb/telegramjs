---
id: "types.StickerSet"
title: "Interface: StickerSet"
sidebar_label: "StickerSet"
custom_edit_url: null
---

[types](../modules/types.md).StickerSet

This object represents a sticker set.

**`See`**

[https://core.telegram.org/bots/api#stickerset](https://core.telegram.org/bots/api#stickerset)

## Properties

### isAnimated

• **isAnimated**: `boolean`

True, if the sticker set contains animated stickers

#### Defined in

[types/sticker-set.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker-set.interface.ts#L27)

___

### isVideo

• **isVideo**: `boolean`

True, if the sticker set contains video stickers

#### Defined in

[types/sticker-set.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker-set.interface.ts#L32)

___

### name

• **name**: `string`

Sticker set name

#### Defined in

[types/sticker-set.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker-set.interface.ts#L12)

___

### stickerType

• **stickerType**: `string`

Type of stickers in the set, currently one of "regular", "mask", "custom_emoji"

#### Defined in

[types/sticker-set.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker-set.interface.ts#L22)

___

### stickers

• **stickers**: [`Sticker`](types.Sticker.md)

List of all set stickers

#### Defined in

[types/sticker-set.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker-set.interface.ts#L37)

___

### thumb

• `Optional` **thumb**: [`PhotoSize`](types.PhotoSize.md)

Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format

#### Defined in

[types/sticker-set.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker-set.interface.ts#L42)

___

### title

• **title**: `string`

Sticker set title

#### Defined in

[types/sticker-set.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/sticker-set.interface.ts#L17)
