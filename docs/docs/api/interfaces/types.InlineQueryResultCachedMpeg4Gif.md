---
id: "types.InlineQueryResultCachedMpeg4Gif"
title: "Interface: InlineQueryResultCachedMpeg4Gif"
sidebar_label: "InlineQueryResultCachedMpeg4Gif"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultCachedMpeg4Gif

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound)
stored on the Telegram servers. By default, this animated MPEG-4 file will be
sent by the user with an optional caption. Alternatively, you can use
input_message_content to send a message with the specified content instead of
the animation.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif](https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-cached-mpeg-4-gif.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-mpeg-4-gif.interface.ts#L37)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-cached-mpeg-4-gif.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-mpeg-4-gif.interface.ts#L49)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-cached-mpeg-4-gif.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-mpeg-4-gif.interface.ts#L22)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the video animation

#### Defined in

[types/inline-query-result-cached-mpeg-4-gif.interface.ts:59](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-mpeg-4-gif.interface.ts#L59)

___

### mpeg4FileId

• **mpeg4FileId**: `string`

A valid file identifier for the MPEG4 file

#### Defined in

[types/inline-query-result-cached-mpeg-4-gif.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-mpeg-4-gif.interface.ts#L27)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the caption. See formatting options for more
details.

#### Defined in

[types/inline-query-result-cached-mpeg-4-gif.interface.ts:43](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-mpeg-4-gif.interface.ts#L43)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-cached-mpeg-4-gif.interface.ts:54](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-mpeg-4-gif.interface.ts#L54)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[types/inline-query-result-cached-mpeg-4-gif.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-mpeg-4-gif.interface.ts#L32)

___

### type

• **type**: ``"mpeg4_gif"``

Type of the result, must be mpeg4_gif

#### Defined in

[types/inline-query-result-cached-mpeg-4-gif.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-mpeg-4-gif.interface.ts#L17)
