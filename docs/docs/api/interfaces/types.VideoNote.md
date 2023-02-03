---
id: "types.VideoNote"
title: "Interface: VideoNote"
sidebar_label: "VideoNote"
custom_edit_url: null
---

[types](../modules/types.md).VideoNote

This object represents a video message (available in Telegram apps as of v.4.0).

**`See`**

[https://core.telegram.org/bots/api#videonote](https://core.telegram.org/bots/api#videonote)

## Properties

### duration

• **duration**: `number`

Duration of the video in seconds as defined by sender

#### Defined in

[types/video-note.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video-note.interface.ts#L27)

___

### fileId

• **fileId**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[types/video-note.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video-note.interface.ts#L11)

___

### fileSize

• `Optional` **fileSize**: `number`

File size in bytes

#### Defined in

[types/video-note.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video-note.interface.ts#L37)

___

### fileUniqueId

• **fileUniqueId**: `string`

Unique identifier for this file, which is supposed to be the same over time and
for different bots. Can't be used to download or reuse the file.

#### Defined in

[types/video-note.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video-note.interface.ts#L17)

___

### length

• **length**: `number`

Video width and height (diameter of the video message) as defined by sender

#### Defined in

[types/video-note.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video-note.interface.ts#L22)

___

### thumb

• `Optional` **thumb**: [`PhotoSize`](types.PhotoSize.md)

Video thumbnail

#### Defined in

[types/video-note.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/video-note.interface.ts#L32)
