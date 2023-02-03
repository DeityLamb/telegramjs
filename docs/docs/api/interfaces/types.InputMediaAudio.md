---
id: "types.InputMediaAudio"
title: "Interface: InputMediaAudio"
sidebar_label: "InputMediaAudio"
custom_edit_url: null
---

[types](../modules/types.md).InputMediaAudio

Represents an audio file to be treated as music to be sent.

**`See`**

[https://core.telegram.org/bots/api#inputmediaaudio](https://core.telegram.org/bots/api#inputmediaaudio)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the audio to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/input-media-audio.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-audio.interface.ts#L38)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/input-media-audio.interface.ts:50](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-audio.interface.ts#L50)

___

### duration

• `Optional` **duration**: `number`

Duration of the audio in seconds

#### Defined in

[types/input-media-audio.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-audio.interface.ts#L55)

___

### media

• **media**: `string`

File to send. Pass a file_id to send a file that exists on the Telegram servers
(recommended), pass an HTTP URL for Telegram to get a file from the Internet, or
pass "attach://<file_attach_name>" to upload a new one using multipart/form-data
under <file_attach_name> name. More information on Sending Files:
https://core.telegram.org/bots/api#sending-files

#### Defined in

[types/input-media-audio.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-audio.interface.ts#L21)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the audio caption. See formatting options for more
details.

#### Defined in

[types/input-media-audio.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-audio.interface.ts#L44)

___

### performer

• `Optional` **performer**: `string`

Performer of the audio

#### Defined in

[types/input-media-audio.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-audio.interface.ts#L60)

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

[types/input-media-audio.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-audio.interface.ts#L33)

___

### title

• `Optional` **title**: `string`

Title of the audio

#### Defined in

[types/input-media-audio.interface.ts:65](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-audio.interface.ts#L65)

___

### type

• **type**: ``"audio"``

Type of the result, must be audio

#### Defined in

[types/input-media-audio.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-audio.interface.ts#L12)
