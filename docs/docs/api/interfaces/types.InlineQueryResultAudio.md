---
id: "types.InlineQueryResultAudio"
title: "Interface: InlineQueryResultAudio"
sidebar_label: "InlineQueryResultAudio"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultAudio

Represents a link to an MP3 audio file. By default, this audio file will be sent
by the user. Alternatively, you can use input_message_content to send a message
with the specified content instead of the audio.
Note: This will only work in Telegram versions released after 9 April, 2016.
Older clients will ignore them.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultaudio](https://core.telegram.org/bots/api#inlinequeryresultaudio)

## Properties

### audioDuration

• `Optional` **audioDuration**: `number`

Audio duration in seconds

#### Defined in

[types/inline-query-result-audio.interface.ts:59](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L59)

___

### audioUrl

• **audioUrl**: `string`

A valid URL for the audio file

#### Defined in

[types/inline-query-result-audio.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L27)

___

### caption

• `Optional` **caption**: `string`

Caption, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-audio.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L37)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-audio.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L49)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-audio.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L22)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the audio

#### Defined in

[types/inline-query-result-audio.interface.ts:69](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L69)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the audio caption. See formatting options for more
details.

#### Defined in

[types/inline-query-result-audio.interface.ts:43](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L43)

___

### performer

• `Optional` **performer**: `string`

Performer

#### Defined in

[types/inline-query-result-audio.interface.ts:54](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L54)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-audio.interface.ts:64](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L64)

___

### title

• **title**: `string`

Title

#### Defined in

[types/inline-query-result-audio.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L32)

___

### type

• **type**: ``"audio"``

Type of the result, must be audio

#### Defined in

[types/inline-query-result-audio.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-audio.interface.ts#L17)
