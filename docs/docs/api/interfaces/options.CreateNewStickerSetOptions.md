---
id: "options.CreateNewStickerSetOptions"
title: "Interface: CreateNewStickerSetOptions"
sidebar_label: "CreateNewStickerSetOptions"
custom_edit_url: null
---

[options](../modules/options.md).CreateNewStickerSetOptions

Use this method to create a new sticker set owned by a user. The bot will be
able to edit the sticker set thus created. You must use exactly one of the
fields png_sticker, tgs_sticker, or webm_sticker. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#createnewstickerset](https://core.telegram.org/bots/api#createnewstickerset)

## Properties

### emojis

• **emojis**: `string`

One or more emoji corresponding to the sticker

#### Defined in

[options/create-new-sticker-set-options.interface.ts:63](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-new-sticker-set-options.interface.ts#L63)

___

### maskPosition

• `Optional` **maskPosition**: [`MaskPosition`](types.MaskPosition.md)

A JSON-serialized object for position where the mask should be placed on faces

#### Defined in

[options/create-new-sticker-set-options.interface.ts:68](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-new-sticker-set-options.interface.ts#L68)

___

### name

• **name**: `string`

Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals).
Can contain only English letters, digits and underscores. Must begin with a
letter, can't contain consecutive underscores and must end in
"_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.

#### Defined in

[options/create-new-sticker-set-options.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-new-sticker-set-options.interface.ts#L22)

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

[options/create-new-sticker-set-options.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-new-sticker-set-options.interface.ts#L37)

___

### stickerType

• `Optional` **stickerType**: `string`

Type of stickers in the set, pass "regular" or "mask". Custom emoji sticker sets
can't be created via the Bot API at the moment. By default, a regular sticker
set is created.

#### Defined in

[options/create-new-sticker-set-options.interface.ts:58](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-new-sticker-set-options.interface.ts#L58)

___

### tgsSticker

• `Optional` **tgsSticker**: [`InputFile`](types.InputFile.md)

TGS animation with the sticker, uploaded using multipart/form-data. See
https://core.telegram.org/stickers#animated-sticker-requirements for technical
requirements

#### Defined in

[options/create-new-sticker-set-options.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-new-sticker-set-options.interface.ts#L44)

___

### title

• **title**: `string`

Sticker set title, 1-64 characters

#### Defined in

[options/create-new-sticker-set-options.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-new-sticker-set-options.interface.ts#L27)

___

### userId

• **userId**: `number`

User identifier of created sticker set owner

#### Defined in

[options/create-new-sticker-set-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-new-sticker-set-options.interface.ts#L14)

___

### webmSticker

• `Optional` **webmSticker**: [`InputFile`](types.InputFile.md)

WEBM video with the sticker, uploaded using multipart/form-data. See
https://core.telegram.org/stickers#video-sticker-requirements for technical
requirements

#### Defined in

[options/create-new-sticker-set-options.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-new-sticker-set-options.interface.ts#L51)
