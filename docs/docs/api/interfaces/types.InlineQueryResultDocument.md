---
id: "types.InlineQueryResultDocument"
title: "Interface: InlineQueryResultDocument"
sidebar_label: "InlineQueryResultDocument"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultDocument

Represents a link to a file. By default, this file will be sent by the user with
an optional caption. Alternatively, you can use input_message_content to send a
message with the specified content instead of the file. Currently, only .PDF and
.ZIP files can be sent using this method.
Note: This will only work in Telegram versions released after 9 April, 2016.
Older clients will ignore them.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultdocument](https://core.telegram.org/bots/api#inlinequeryresultdocument)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the document to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-document.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L33)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-document.interface.ts:45](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L45)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[types/inline-query-result-document.interface.ts:61](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L61)

___

### documentUrl

• **documentUrl**: `string`

A valid URL for the file

#### Defined in

[types/inline-query-result-document.interface.ts:50](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L50)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-document.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L23)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the file

#### Defined in

[types/inline-query-result-document.interface.ts:71](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L71)

___

### mimeType

• **mimeType**: `string`

MIME type of the content of the file, either "application/pdf" or
"application/zip"

#### Defined in

[types/inline-query-result-document.interface.ts:56](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L56)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the document caption. See formatting options for
more details.

#### Defined in

[types/inline-query-result-document.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L39)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-document.interface.ts:66](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L66)

___

### thumbHeight

• `Optional` **thumbHeight**: `number`

Thumbnail height

#### Defined in

[types/inline-query-result-document.interface.ts:86](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L86)

___

### thumbUrl

• `Optional` **thumbUrl**: `string`

URL of the thumbnail (JPEG only) for the file

#### Defined in

[types/inline-query-result-document.interface.ts:76](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L76)

___

### thumbWidth

• `Optional` **thumbWidth**: `number`

Thumbnail width

#### Defined in

[types/inline-query-result-document.interface.ts:81](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L81)

___

### title

• **title**: `string`

Title for the result

#### Defined in

[types/inline-query-result-document.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L28)

___

### type

• **type**: ``"document"``

Type of the result, must be document

#### Defined in

[types/inline-query-result-document.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-document.interface.ts#L18)
