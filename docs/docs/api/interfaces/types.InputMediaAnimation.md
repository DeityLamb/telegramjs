---
id: "types.InputMediaAnimation"
title: "Interface: InputMediaAnimation"
sidebar_label: "InputMediaAnimation"
custom_edit_url: null
---

[types](../modules/types.md).InputMediaAnimation

Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be
sent.

**`See`**

[https://core.telegram.org/bots/api#inputmediaanimation](https://core.telegram.org/bots/api#inputmediaanimation)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the animation to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/input-media-animation.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-animation.interface.ts#L39)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/input-media-animation.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-animation.interface.ts#L51)

___

### duration

• `Optional` **duration**: `number`

Animation duration in seconds

#### Defined in

[types/input-media-animation.interface.ts:66](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-animation.interface.ts#L66)

___

### hasSpoiler

• `Optional` **hasSpoiler**: `boolean`

Pass True if the animation needs to be covered with a spoiler animation

#### Defined in

[types/input-media-animation.interface.ts:71](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-animation.interface.ts#L71)

___

### height

• `Optional` **height**: `number`

Animation height

#### Defined in

[types/input-media-animation.interface.ts:61](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-animation.interface.ts#L61)

___

### media

• **media**: `string`

File to send. Pass a file_id to send a file that exists on the Telegram servers
(recommended), pass an HTTP URL for Telegram to get a file from the Internet, or
pass "attach://<file_attach_name>" to upload a new one using multipart/form-data
under <file_attach_name> name. More information on Sending Files:
https://core.telegram.org/bots/api#sending-files

#### Defined in

[types/input-media-animation.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-animation.interface.ts#L22)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the animation caption. See formatting options for
more details.

#### Defined in

[types/input-media-animation.interface.ts:45](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-animation.interface.ts#L45)

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

[types/input-media-animation.interface.ts:34](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-animation.interface.ts#L34)

___

### type

• **type**: ``"animation"``

Type of the result, must be animation

#### Defined in

[types/input-media-animation.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-animation.interface.ts#L13)

___

### width

• `Optional` **width**: `number`

Animation width

#### Defined in

[types/input-media-animation.interface.ts:56](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-animation.interface.ts#L56)
