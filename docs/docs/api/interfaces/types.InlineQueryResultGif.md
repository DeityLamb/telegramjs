---
id: "types.InlineQueryResultGif"
title: "Interface: InlineQueryResultGif"
sidebar_label: "InlineQueryResultGif"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultGif

Represents a link to an animated GIF file. By default, this animated GIF file
will be sent by the user with optional caption. Alternatively, you can use
input_message_content to send a message with the specified content instead of
the animation.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultgif](https://core.telegram.org/bots/api#inlinequeryresultgif)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the GIF file to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-gif.interface.ts:62](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L62)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-gif.interface.ts:74](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L74)

___

### gifDuration

• `Optional` **gifDuration**: `number`

Duration of the GIF in seconds

#### Defined in

[types/inline-query-result-gif.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L41)

___

### gifHeight

• `Optional` **gifHeight**: `number`

Height of the GIF

#### Defined in

[types/inline-query-result-gif.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L36)

___

### gifUrl

• **gifUrl**: `string`

A valid URL for the GIF file. File size must not exceed 1MB

#### Defined in

[types/inline-query-result-gif.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L26)

___

### gifWidth

• `Optional` **gifWidth**: `number`

Width of the GIF

#### Defined in

[types/inline-query-result-gif.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L31)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-gif.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L21)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the GIF animation

#### Defined in

[types/inline-query-result-gif.interface.ts:84](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L84)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the caption. See formatting options for more
details.

#### Defined in

[types/inline-query-result-gif.interface.ts:68](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L68)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-gif.interface.ts:79](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L79)

___

### thumbMimeType

• `Optional` **thumbMimeType**: ``"one"``

MIME type of the thumbnail, must be one of "image/jpeg", "image/gif", or
"video/mp4". Defaults to "image/jpeg"

#### Defined in

[types/inline-query-result-gif.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L52)

___

### thumbUrl

• **thumbUrl**: `string`

URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result

#### Defined in

[types/inline-query-result-gif.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L46)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[types/inline-query-result-gif.interface.ts:57](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L57)

___

### type

• **type**: ``"gif"``

Type of the result, must be gif

#### Defined in

[types/inline-query-result-gif.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-gif.interface.ts#L16)
