---
id: "types.InlineQueryResultCachedDocument"
title: "Interface: InlineQueryResultCachedDocument"
sidebar_label: "InlineQueryResultCachedDocument"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultCachedDocument

Represents a link to a file stored on the Telegram servers. By default, this
file will be sent by the user with an optional caption. Alternatively, you can
use input_message_content to send a message with the specified content instead
of the file.
Note: This will only work in Telegram versions released after 9 April, 2016.
Older clients will ignore them.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultcacheddocument](https://core.telegram.org/bots/api#inlinequeryresultcacheddocument)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the document to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-cached-document.interface.ts:43](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-document.interface.ts#L43)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-cached-document.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-document.interface.ts#L55)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[types/inline-query-result-cached-document.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-document.interface.ts#L38)

___

### documentFileId

• **documentFileId**: `string`

A valid file identifier for the file

#### Defined in

[types/inline-query-result-cached-document.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-document.interface.ts#L33)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-cached-document.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-document.interface.ts#L23)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the file

#### Defined in

[types/inline-query-result-cached-document.interface.ts:65](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-document.interface.ts#L65)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the document caption. See formatting options for
more details.

#### Defined in

[types/inline-query-result-cached-document.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-document.interface.ts#L49)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-cached-document.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-document.interface.ts#L60)

___

### title

• **title**: `string`

Title for the result

#### Defined in

[types/inline-query-result-cached-document.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-document.interface.ts#L28)

___

### type

• **type**: ``"document"``

Type of the result, must be document

#### Defined in

[types/inline-query-result-cached-document.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-document.interface.ts#L18)
