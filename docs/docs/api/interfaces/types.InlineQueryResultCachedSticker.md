---
id: "types.InlineQueryResultCachedSticker"
title: "Interface: InlineQueryResultCachedSticker"
sidebar_label: "InlineQueryResultCachedSticker"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultCachedSticker

Represents a link to a sticker stored on the Telegram servers. By default, this
sticker will be sent by the user. Alternatively, you can use
input_message_content to send a message with the specified content instead of
the sticker.
Note: This will only work in Telegram versions released after 9 April, 2016 for
static stickers and after 06 July, 2019 for animated stickers. Older clients
will ignore them.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultcachedsticker](https://core.telegram.org/bots/api#inlinequeryresultcachedsticker)

## Properties

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-cached-sticker.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-sticker.interface.ts#L23)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the sticker

#### Defined in

[types/inline-query-result-cached-sticker.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-sticker.interface.ts#L38)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-cached-sticker.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-sticker.interface.ts#L33)

___

### stickerFileId

• **stickerFileId**: `string`

A valid file identifier of the sticker

#### Defined in

[types/inline-query-result-cached-sticker.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-sticker.interface.ts#L28)

___

### type

• **type**: ``"sticker"``

Type of the result, must be sticker

#### Defined in

[types/inline-query-result-cached-sticker.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-cached-sticker.interface.ts#L18)
