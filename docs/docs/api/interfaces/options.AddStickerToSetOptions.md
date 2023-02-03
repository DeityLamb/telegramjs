---
id: "options.AddStickerToSetOptions"
title: "Interface: AddStickerToSetOptions"
sidebar_label: "AddStickerToSetOptions"
custom_edit_url: null
---

[options](../modules/options.md).AddStickerToSetOptions

Use this method to add a new sticker to a set created by the bot. You must use
exactly one of the fields png_sticker, tgs_sticker, or webm_sticker. Animated
stickers can be added to animated sticker sets and only to them. Animated
sticker sets can have up to 50 stickers. Static sticker sets can have up to 120
stickers. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#addstickertoset](https://core.telegram.org/bots/api#addstickertoset)

## Properties

### emojis

• **emojis**: `string`

One or more emoji corresponding to the sticker

#### Defined in

[options/add-sticker-to-set-options.interface.ts:50](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/add-sticker-to-set-options.interface.ts#L50)

___

### maskPosition

• `Optional` **maskPosition**: [`MaskPosition`](types.MaskPosition.md)

A JSON-serialized object for position where the mask should be placed on faces

#### Defined in

[options/add-sticker-to-set-options.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/add-sticker-to-set-options.interface.ts#L55)

___

### name

• **name**: `string`

Sticker set name

#### Defined in

[options/add-sticker-to-set-options.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/add-sticker-to-set-options.interface.ts#L21)

___

### pngSticker

• `Optional` **pngSticker**: ``"up"``

PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must
not exceed 512px, and either width or height must be exactly 512px. Pass a
file_id as a String to send a file that already exists on the Telegram servers,
pass an HTTP URL as a String for Telegram to get a file from the Internet, or
upload a new one using multipart/form-data. More information on Sending Files:
https://core.telegram.org/bots/api#sending-files

#### Defined in

[options/add-sticker-to-set-options.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/add-sticker-to-set-options.interface.ts#L31)

___

### tgsSticker

• `Optional` **tgsSticker**: [`InputFile`](types.InputFile.md)

TGS animation with the sticker, uploaded using multipart/form-data. See
https://core.telegram.org/stickers#animated-sticker-requirements for technical
requirements

#### Defined in

[options/add-sticker-to-set-options.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/add-sticker-to-set-options.interface.ts#L38)

___

### userId

• **userId**: `number`

User identifier of sticker set owner

#### Defined in

[options/add-sticker-to-set-options.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/add-sticker-to-set-options.interface.ts#L16)

___

### webmSticker

• `Optional` **webmSticker**: [`InputFile`](types.InputFile.md)

WEBM video with the sticker, uploaded using multipart/form-data. See
https://core.telegram.org/stickers#video-sticker-requirements for technical
requirements

#### Defined in

[options/add-sticker-to-set-options.interface.ts:45](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/add-sticker-to-set-options.interface.ts#L45)
