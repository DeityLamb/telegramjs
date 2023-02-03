---
id: "types.InputMediaVideo"
title: "Interface: InputMediaVideo"
sidebar_label: "InputMediaVideo"
custom_edit_url: null
---

[types](../modules/types.md).InputMediaVideo

Represents a video to be sent.

**`See`**

[https://core.telegram.org/bots/api#inputmediavideo](https://core.telegram.org/bots/api#inputmediavideo)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the video to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/input-media-video.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L38)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/input-media-video.interface.ts:50](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L50)

___

### duration

• `Optional` **duration**: `number`

Video duration in seconds

#### Defined in

[types/input-media-video.interface.ts:65](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L65)

___

### hasSpoiler

• `Optional` **hasSpoiler**: `boolean`

Pass True if the video needs to be covered with a spoiler animation

#### Defined in

[types/input-media-video.interface.ts:75](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L75)

___

### height

• `Optional` **height**: `number`

Video height

#### Defined in

[types/input-media-video.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L60)

___

### media

• **media**: `string`

File to send. Pass a file_id to send a file that exists on the Telegram servers
(recommended), pass an HTTP URL for Telegram to get a file from the Internet, or
pass "attach://<file_attach_name>" to upload a new one using multipart/form-data
under <file_attach_name> name. More information on Sending Files:
https://core.telegram.org/bots/api#sending-files

#### Defined in

[types/input-media-video.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L21)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the video caption. See formatting options for more
details.

#### Defined in

[types/input-media-video.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L44)

___

### supportsStreaming

• `Optional` **supportsStreaming**: `boolean`

Pass True if the uploaded video is suitable for streaming

#### Defined in

[types/input-media-video.interface.ts:70](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L70)

___

### thumb

• `Optional` **thumb**: `string` \| [`InputFile`](types.InputFile.md)

Thumbnail of the file sent; can be ignored if thumbnail generation for the file
is supported server-side. The thumbnail should be in JPEG format and less than
200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if
the file is not uploaded using multipart/form-data. Thumbnails can't be reused
and can be only uploaded as a new file, so you can pass
"attach://<file_attach_name>" if the thumbnail was uploaded using
multipart/form-data under <file_attach_name>. More information on Sending Files:
https://core.telegram.org/bots/api#sending-files

#### Defined in

[types/input-media-video.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L33)

___

### type

• **type**: ``"video"``

Type of the result, must be video

#### Defined in

[types/input-media-video.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L12)

___

### width

• `Optional` **width**: `number`

Video width

#### Defined in

[types/input-media-video.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-video.interface.ts#L55)
