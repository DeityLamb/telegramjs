---
id: "types.InlineQueryResultPhoto"
title: "Interface: InlineQueryResultPhoto"
sidebar_label: "InlineQueryResultPhoto"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultPhoto

Represents a link to a photo. By default, this photo will be sent by the user
with optional caption. Alternatively, you can use input_message_content to send
a message with the specified content instead of the photo.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultphoto](https://core.telegram.org/bots/api#inlinequeryresultphoto)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the photo to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-photo.interface.ts:56](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L56)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-photo.interface.ts:68](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L68)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[types/inline-query-result-photo.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L51)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-photo.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L20)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the photo

#### Defined in

[types/inline-query-result-photo.interface.ts:78](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L78)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the photo caption. See formatting options for more
details.

#### Defined in

[types/inline-query-result-photo.interface.ts:62](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L62)

___

### photoHeight

• `Optional` **photoHeight**: `number`

Height of the photo

#### Defined in

[types/inline-query-result-photo.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L41)

___

### photoUrl

• **photoUrl**: `string`

A valid URL of the photo. Photo must be in JPEG format. Photo size must not
exceed 5MB

#### Defined in

[types/inline-query-result-photo.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L26)

___

### photoWidth

• `Optional` **photoWidth**: `number`

Width of the photo

#### Defined in

[types/inline-query-result-photo.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L36)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-photo.interface.ts:73](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L73)

___

### thumbUrl

• **thumbUrl**: `string`

URL of the thumbnail for the photo

#### Defined in

[types/inline-query-result-photo.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L31)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[types/inline-query-result-photo.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L46)

___

### type

• **type**: ``"photo"``

Type of the result, must be photo

#### Defined in

[types/inline-query-result-photo.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-photo.interface.ts#L15)
