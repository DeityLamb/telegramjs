---
id: "types.InlineQueryResultCachedGif"
title: "Interface: InlineQueryResultCachedGif"
sidebar_label: "InlineQueryResultCachedGif"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultCachedGif

Represents a link to an animated GIF file stored on the Telegram servers. By
default, this animated GIF file will be sent by the user with an optional
caption. Alternatively, you can use input_message_content to send a message with
specified content instead of the animation.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultcachedgif](https://core.telegram.org/bots/api#inlinequeryresultcachedgif)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the GIF file to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-cached-gif.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-gif.interface.ts#L36)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-cached-gif.interface.ts:48](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-gif.interface.ts#L48)

___

### gifFileId

• **gifFileId**: `string`

A valid file identifier for the GIF file

#### Defined in

[types/inline-query-result-cached-gif.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-gif.interface.ts#L26)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-cached-gif.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-gif.interface.ts#L21)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the GIF animation

#### Defined in

[types/inline-query-result-cached-gif.interface.ts:58](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-gif.interface.ts#L58)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the caption. See formatting options for more
details.

#### Defined in

[types/inline-query-result-cached-gif.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-gif.interface.ts#L42)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-cached-gif.interface.ts:53](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-gif.interface.ts#L53)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[types/inline-query-result-cached-gif.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-gif.interface.ts#L31)

___

### type

• **type**: ``"gif"``

Type of the result, must be gif

#### Defined in

[types/inline-query-result-cached-gif.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-gif.interface.ts#L16)
