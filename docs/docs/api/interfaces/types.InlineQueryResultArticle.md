---
id: "types.InlineQueryResultArticle"
title: "Interface: InlineQueryResultArticle"
sidebar_label: "InlineQueryResultArticle"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultArticle

Represents a link to an article or web page.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultarticle](https://core.telegram.org/bots/api#inlinequeryresultarticle)

## Properties

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[types/inline-query-result-article.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L47)

___

### hideUrl

• `Optional` **hideUrl**: `boolean`

Pass True if you don't want the URL to be shown in the message

#### Defined in

[types/inline-query-result-article.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L42)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 Bytes

#### Defined in

[types/inline-query-result-article.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L17)

___

### inputMessageContent

• **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent

#### Defined in

[types/inline-query-result-article.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L27)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-article.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L32)

___

### thumbHeight

• `Optional` **thumbHeight**: `number`

Thumbnail height

#### Defined in

[types/inline-query-result-article.interface.ts:62](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L62)

___

### thumbUrl

• `Optional` **thumbUrl**: `string`

Url of the thumbnail for the result

#### Defined in

[types/inline-query-result-article.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L52)

___

### thumbWidth

• `Optional` **thumbWidth**: `number`

Thumbnail width

#### Defined in

[types/inline-query-result-article.interface.ts:57](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L57)

___

### title

• **title**: `string`

Title of the result

#### Defined in

[types/inline-query-result-article.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L22)

___

### type

• **type**: ``"article"``

Type of the result, must be article

#### Defined in

[types/inline-query-result-article.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L12)

___

### url

• `Optional` **url**: `string`

URL of the result

#### Defined in

[types/inline-query-result-article.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-article.interface.ts#L37)
