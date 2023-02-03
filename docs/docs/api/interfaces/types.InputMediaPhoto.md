---
id: "types.InputMediaPhoto"
title: "Interface: InputMediaPhoto"
sidebar_label: "InputMediaPhoto"
custom_edit_url: null
---

[types](../modules/types.md).InputMediaPhoto

Represents a photo to be sent.

**`See`**

[https://core.telegram.org/bots/api#inputmediaphoto](https://core.telegram.org/bots/api#inputmediaphoto)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the photo to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/input-media-photo.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-photo.interface.ts#L25)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/input-media-photo.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-photo.interface.ts#L37)

___

### hasSpoiler

• `Optional` **hasSpoiler**: `boolean`

Pass True if the photo needs to be covered with a spoiler animation

#### Defined in

[types/input-media-photo.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-photo.interface.ts#L42)

___

### media

• **media**: `string`

File to send. Pass a file_id to send a file that exists on the Telegram servers
(recommended), pass an HTTP URL for Telegram to get a file from the Internet, or
pass "attach://<file_attach_name>" to upload a new one using multipart/form-data
under <file_attach_name> name. More information on Sending Files:
https://core.telegram.org/bots/api#sending-files

#### Defined in

[types/input-media-photo.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-photo.interface.ts#L20)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the photo caption. See formatting options for more
details.

#### Defined in

[types/input-media-photo.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-photo.interface.ts#L31)

___

### type

• **type**: ``"photo"``

Type of the result, must be photo

#### Defined in

[types/input-media-photo.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-media-photo.interface.ts#L11)
