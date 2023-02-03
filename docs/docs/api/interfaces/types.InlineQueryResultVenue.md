---
id: "types.InlineQueryResultVenue"
title: "Interface: InlineQueryResultVenue"
sidebar_label: "InlineQueryResultVenue"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultVenue

Represents a venue. By default, the venue will be sent by the user.
Alternatively, you can use input_message_content to send a message with the
specified content instead of the venue.
Note: This will only work in Telegram versions released after 9 April, 2016.
Older clients will ignore them.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultvenue](https://core.telegram.org/bots/api#inlinequeryresultvenue)

## Properties

### address

• **address**: `string`

Address of the venue

#### Defined in

[types/inline-query-result-venue.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L41)

___

### foursquareId

• `Optional` **foursquareId**: `string`

Foursquare identifier of the venue if known

#### Defined in

[types/inline-query-result-venue.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L46)

___

### foursquareType

• `Optional` **foursquareType**: `string`

Foursquare type of the venue, if known. (For example,
"arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)

#### Defined in

[types/inline-query-result-venue.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L52)

___

### googlePlaceId

• `Optional` **googlePlaceId**: `string`

Google Places identifier of the venue

#### Defined in

[types/inline-query-result-venue.interface.ts:57](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L57)

___

### googlePlaceType

• `Optional` **googlePlaceType**: `string`

Google Places type of the venue. (See supported types.)

#### Defined in

[types/inline-query-result-venue.interface.ts:62](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L62)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 Bytes

#### Defined in

[types/inline-query-result-venue.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L21)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the venue

#### Defined in

[types/inline-query-result-venue.interface.ts:72](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L72)

___

### latitude

• **latitude**: `number`

Latitude of the venue location in degrees

#### Defined in

[types/inline-query-result-venue.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L26)

___

### longitude

• **longitude**: `number`

Longitude of the venue location in degrees

#### Defined in

[types/inline-query-result-venue.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L31)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-venue.interface.ts:67](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L67)

___

### thumbHeight

• `Optional` **thumbHeight**: `number`

Thumbnail height

#### Defined in

[types/inline-query-result-venue.interface.ts:87](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L87)

___

### thumbUrl

• `Optional` **thumbUrl**: `string`

Url of the thumbnail for the result

#### Defined in

[types/inline-query-result-venue.interface.ts:77](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L77)

___

### thumbWidth

• `Optional` **thumbWidth**: `number`

Thumbnail width

#### Defined in

[types/inline-query-result-venue.interface.ts:82](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L82)

___

### title

• **title**: `string`

Title of the venue

#### Defined in

[types/inline-query-result-venue.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L36)

___

### type

• **type**: ``"venue"``

Type of the result, must be venue

#### Defined in

[types/inline-query-result-venue.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-venue.interface.ts#L16)
