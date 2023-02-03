---
id: "options.SetStickerSetThumbOptions"
title: "Interface: SetStickerSetThumbOptions"
sidebar_label: "SetStickerSetThumbOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetStickerSetThumbOptions

Use this method to set the thumbnail of a sticker set. Animated thumbnails can
be set for animated sticker sets only. Video thumbnails can be set only for
video sticker sets only. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#setstickersetthumb](https://core.telegram.org/bots/api#setstickersetthumb)

## Properties

### name

• **name**: `string`

Sticker set name

#### Defined in

[options/set-sticker-set-thumb-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-sticker-set-thumb-options.interface.ts#L13)

___

### thumb

• `Optional` **thumb**: [`InputFile`](types.InputFile.md)

A PNG image with the thumbnail, must be up to 128 kilobytes in size and have
width and height exactly 100px, or a TGS animation with the thumbnail up to 32
kilobytes in size; see
https://core.telegram.org/stickers#animated-sticker-requirements for animated
sticker technical requirements, or a WEBM video with the thumbnail up to 32
kilobytes in size; see
https://core.telegram.org/stickers#video-sticker-requirements for video sticker
technical requirements. Pass a file_id as a String to send a file that already
exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get
a file from the Internet, or upload a new one using multipart/form-data. More
information on Sending Files: https://core.telegram.org/bots/api#sending-files.
Animated sticker set thumbnails can't be uploaded via HTTP URL.

#### Defined in

[options/set-sticker-set-thumb-options.interface.ts:34](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-sticker-set-thumb-options.interface.ts#L34)

___

### userId

• **userId**: `number`

User identifier of the sticker set owner

#### Defined in

[options/set-sticker-set-thumb-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-sticker-set-thumb-options.interface.ts#L18)
