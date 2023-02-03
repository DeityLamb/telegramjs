---
id: "types.InlineQueryResultCachedPhoto"
title: "Interface: InlineQueryResultCachedPhoto"
sidebar_label: "InlineQueryResultCachedPhoto"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultCachedPhoto

Represents a link to a photo stored on the Telegram servers. By default, this
photo will be sent by the user with an optional caption. Alternatively, you can
use input_message_content to send a message with the specified content instead
of the photo.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultcachedphoto](https://core.telegram.org/bots/api#inlinequeryresultcachedphoto)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the photo to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-cached-photo.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-photo.interface.ts#L41)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-cached-photo.interface.ts:53](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-photo.interface.ts#L53)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[types/inline-query-result-cached-photo.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-photo.interface.ts#L36)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-cached-photo.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-photo.interface.ts#L21)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the photo

#### Defined in

[types/inline-query-result-cached-photo.interface.ts:63](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-photo.interface.ts#L63)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the photo caption. See formatting options for more
details.

#### Defined in

[types/inline-query-result-cached-photo.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-photo.interface.ts#L47)

___

### photoFileId

• **photoFileId**: `string`

A valid file identifier of the photo

#### Defined in

[types/inline-query-result-cached-photo.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-photo.interface.ts#L26)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-cached-photo.interface.ts:58](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-photo.interface.ts#L58)

___

### title

• `Optional` **title**: `string`

Title for the result

#### Defined in

[types/inline-query-result-cached-photo.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-photo.interface.ts#L31)

___

### type

• **type**: ``"photo"``

Type of the result, must be photo

#### Defined in

[types/inline-query-result-cached-photo.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-photo.interface.ts#L16)
