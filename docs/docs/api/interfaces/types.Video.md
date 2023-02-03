---
id: "types.Video"
title: "Interface: Video"
sidebar_label: "Video"
custom_edit_url: null
---

[types](../modules/types.md).Video

This object represents a video file.

**`See`**

[https://core.telegram.org/bots/api#video](https://core.telegram.org/bots/api#video)

## Properties

### duration

• **duration**: `number`

Duration of the video in seconds as defined by sender

#### Defined in

[types/video.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video.interface.ts#L32)

___

### fileId

• **fileId**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[types/video.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video.interface.ts#L11)

___

### fileName

• `Optional` **fileName**: `string`

Original filename as defined by sender

#### Defined in

[types/video.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video.interface.ts#L42)

___

### fileSize

• `Optional` **fileSize**: `number`

File size in bytes. It can be bigger than 2^31 and some programming languages
may have difficulty/silent defects in interpreting it. But it has at most 52
significant bits, so a signed 64-bit integer or double-precision float type are
safe for storing this value.

#### Defined in

[types/video.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video.interface.ts#L55)

___

### fileUniqueId

• **fileUniqueId**: `string`

Unique identifier for this file, which is supposed to be the same over time and
for different bots. Can't be used to download or reuse the file.

#### Defined in

[types/video.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video.interface.ts#L17)

___

### height

• **height**: `number`

Video height as defined by sender

#### Defined in

[types/video.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video.interface.ts#L27)

___

### mimeType

• `Optional` **mimeType**: `string`

MIME type of the file as defined by sender

#### Defined in

[types/video.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video.interface.ts#L47)

___

### thumb

• `Optional` **thumb**: [`PhotoSize`](types.PhotoSize.md)

Video thumbnail

#### Defined in

[types/video.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video.interface.ts#L37)

___

### width

• **width**: `number`

Video width as defined by sender

#### Defined in

[types/video.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video.interface.ts#L22)
