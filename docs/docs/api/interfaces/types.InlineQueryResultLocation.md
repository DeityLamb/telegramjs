---
id: "types.InlineQueryResultLocation"
title: "Interface: InlineQueryResultLocation"
sidebar_label: "InlineQueryResultLocation"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultLocation

Represents a location on a map. By default, the location will be sent by the
user. Alternatively, you can use input_message_content to send a message with
the specified content instead of the location.
Note: This will only work in Telegram versions released after 9 April, 2016.
Older clients will ignore them.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultlocation](https://core.telegram.org/bots/api#inlinequeryresultlocation)

## Properties

### heading

• `Optional` **heading**: `number`

For live locations, a direction in which the user is moving, in degrees. Must
be between 1 and 360 if specified.

#### Defined in

[types/inline-query-result-location.interface.ts:53](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L53)

___

### horizontalAccuracy

• `Optional` **horizontalAccuracy**: `number`

The radius of uncertainty for the location, measured in meters; 0-1500

#### Defined in

[types/inline-query-result-location.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L41)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 Bytes

#### Defined in

[types/inline-query-result-location.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L21)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the location

#### Defined in

[types/inline-query-result-location.interface.ts:69](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L69)

___

### latitude

• **latitude**: `number`

Location latitude in degrees

#### Defined in

[types/inline-query-result-location.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L26)

___

### livePeriod

• `Optional` **livePeriod**: `number`

Period in seconds for which the location can be updated, should be between 60
and 86400.

#### Defined in

[types/inline-query-result-location.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L47)

___

### longitude

• **longitude**: `number`

Location longitude in degrees

#### Defined in

[types/inline-query-result-location.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L31)

___

### proximityAlertRadius

• `Optional` **proximityAlertRadius**: `number`

For live locations, a maximum distance for proximity alerts about approaching
another chat member, in meters. Must be between 1 and 100000 if specified.

#### Defined in

[types/inline-query-result-location.interface.ts:59](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L59)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-location.interface.ts:64](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L64)

___

### thumbHeight

• `Optional` **thumbHeight**: `number`

Thumbnail height

#### Defined in

[types/inline-query-result-location.interface.ts:84](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L84)

___

### thumbUrl

• `Optional` **thumbUrl**: `string`

Url of the thumbnail for the result

#### Defined in

[types/inline-query-result-location.interface.ts:74](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L74)

___

### thumbWidth

• `Optional` **thumbWidth**: `number`

Thumbnail width

#### Defined in

[types/inline-query-result-location.interface.ts:79](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L79)

___

### title

• **title**: `string`

Location title

#### Defined in

[types/inline-query-result-location.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L36)

___

### type

• **type**: ``"location"``

Type of the result, must be location

#### Defined in

[types/inline-query-result-location.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-location.interface.ts#L16)
