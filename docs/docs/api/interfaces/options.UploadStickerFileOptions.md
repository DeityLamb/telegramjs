---
id: "options.UploadStickerFileOptions"
title: "Interface: UploadStickerFileOptions"
sidebar_label: "UploadStickerFileOptions"
custom_edit_url: null
---

[options](../modules/options.md).UploadStickerFileOptions

Use this method to upload a .PNG file with a sticker for later use in
createNewStickerSet and addStickerToSet methods (can be used multiple times).
Returns the uploaded File on success.

**`See`**

[https://core.telegram.org/bots/api#uploadstickerfile](https://core.telegram.org/bots/api#uploadstickerfile)

## Properties

### pngSticker

• **pngSticker**: [`InputFile`](types.InputFile.md)

PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must
not exceed 512px, and either width or height must be exactly 512px. More
information on Sending Files: https://core.telegram.org/bots/api#sending-files

#### Defined in

[options/upload-sticker-file-options.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/upload-sticker-file-options.interface.ts#L20)

___

### userId

• **userId**: `number`

User identifier of sticker file owner

#### Defined in

[options/upload-sticker-file-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/upload-sticker-file-options.interface.ts#L13)
