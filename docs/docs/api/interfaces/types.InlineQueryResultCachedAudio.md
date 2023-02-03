---
id: "types.InlineQueryResultCachedAudio"
title: "Interface: InlineQueryResultCachedAudio"
sidebar_label: "InlineQueryResultCachedAudio"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultCachedAudio

Represents a link to an MP3 audio file stored on the Telegram servers. By
default, this audio file will be sent by the user. Alternatively, you can use
input_message_content to send a message with the specified content instead of
the audio.
Note: This will only work in Telegram versions released after 9 April, 2016.
Older clients will ignore them.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultcachedaudio](https://core.telegram.org/bots/api#inlinequeryresultcachedaudio)

## Properties

### audioFileId

• **audioFileId**: `string`

A valid file identifier for the audio file

#### Defined in

[types/inline-query-result-cached-audio.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-audio.interface.ts#L28)

___

### caption

• `Optional` **caption**: `string`

Caption, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-cached-audio.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-audio.interface.ts#L33)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-cached-audio.interface.ts:45](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-audio.interface.ts#L45)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-cached-audio.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-audio.interface.ts#L23)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the audio

#### Defined in

[types/inline-query-result-cached-audio.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-audio.interface.ts#L55)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the audio caption. See formatting options for more
details.

#### Defined in

[types/inline-query-result-cached-audio.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-audio.interface.ts#L39)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-cached-audio.interface.ts:50](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-audio.interface.ts#L50)

___

### type

• **type**: ``"audio"``

Type of the result, must be audio

#### Defined in

[types/inline-query-result-cached-audio.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-audio.interface.ts#L18)
