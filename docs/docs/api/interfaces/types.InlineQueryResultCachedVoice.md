---
id: "types.InlineQueryResultCachedVoice"
title: "Interface: InlineQueryResultCachedVoice"
sidebar_label: "InlineQueryResultCachedVoice"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultCachedVoice

Represents a link to a voice message stored on the Telegram servers. By default,
this voice message will be sent by the user. Alternatively, you can use
input_message_content to send a message with the specified content instead of
the voice message.
Note: This will only work in Telegram versions released after 9 April, 2016.
Older clients will ignore them.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultcachedvoice](https://core.telegram.org/bots/api#inlinequeryresultcachedvoice)

## Properties

### caption

• `Optional` **caption**: `string`

Caption, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-cached-voice.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-voice.interface.ts#L38)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-cached-voice.interface.ts:50](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-voice.interface.ts#L50)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-cached-voice.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-voice.interface.ts#L23)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the voice message

#### Defined in

[types/inline-query-result-cached-voice.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-voice.interface.ts#L60)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the voice message caption. See formatting options
for more details.

#### Defined in

[types/inline-query-result-cached-voice.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-voice.interface.ts#L44)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-cached-voice.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-voice.interface.ts#L55)

___

### title

• **title**: `string`

Voice message title

#### Defined in

[types/inline-query-result-cached-voice.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-voice.interface.ts#L33)

___

### type

• **type**: ``"voice"``

Type of the result, must be voice

#### Defined in

[types/inline-query-result-cached-voice.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-voice.interface.ts#L18)

___

### voiceFileId

• **voiceFileId**: `string`

A valid file identifier for the voice message

#### Defined in

[types/inline-query-result-cached-voice.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-voice.interface.ts#L28)
