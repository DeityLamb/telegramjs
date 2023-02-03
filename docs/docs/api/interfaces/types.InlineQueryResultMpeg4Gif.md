---
id: "types.InlineQueryResultMpeg4Gif"
title: "Interface: InlineQueryResultMpeg4Gif"
sidebar_label: "InlineQueryResultMpeg4Gif"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultMpeg4Gif

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound).
By default, this animated MPEG-4 file will be sent by the user with optional
caption. Alternatively, you can use input_message_content to send a message with
the specified content instead of the animation.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif](https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:62](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L62)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:74](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L74)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L21)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the video animation

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:84](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L84)

___

### mpeg4Duration

• `Optional` **mpeg4Duration**: `number`

Video duration in seconds

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L41)

___

### mpeg4Height

• `Optional` **mpeg4Height**: `number`

Video height

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L36)

___

### mpeg4Url

• **mpeg4Url**: `string`

A valid URL for the MPEG4 file. File size must not exceed 1MB

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L26)

___

### mpeg4Width

• `Optional` **mpeg4Width**: `number`

Video width

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L31)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the caption. See formatting options for more
details.

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:68](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L68)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:79](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L79)

___

### thumbMimeType

• `Optional` **thumbMimeType**: ``"one"``

MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or
"video/mp4". Defaults to "image/jpeg"

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L52)

___

### thumbUrl

• **thumbUrl**: `string`

URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L46)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:57](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L57)

___

### type

• **type**: ``"mpeg4_gif"``

Type of the result, must be mpeg4_gif

#### Defined in

[types/inline-query-result-mpeg-4-gif.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-mpeg-4-gif.interface.ts#L16)
