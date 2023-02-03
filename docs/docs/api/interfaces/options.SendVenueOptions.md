---
id: "options.SendVenueOptions"
title: "Interface: SendVenueOptions"
sidebar_label: "SendVenueOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendVenueOptions

Use this method to send information about a venue. On success, the sent Message
is returned.

**`See`**

[https://core.telegram.org/bots/api#sendvenue](https://core.telegram.org/bots/api#sendvenue)

## Properties

### address

• **address**: `string`

Address of the venue

#### Defined in

[options/send-venue-options.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L42)

___

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-venue-options.interface.ts:84](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L84)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-venue-options.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L16)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-venue-options.interface.ts:68](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L68)

___

### foursquareId

• `Optional` **foursquareId**: `string`

Foursquare identifier of the venue

#### Defined in

[options/send-venue-options.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L47)

___

### foursquareType

• `Optional` **foursquareType**: `string`

Foursquare type of the venue, if known. (For example,
"arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)

#### Defined in

[options/send-venue-options.interface.ts:53](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L53)

___

### googlePlaceId

• `Optional` **googlePlaceId**: `string`

Google Places identifier of the venue

#### Defined in

[options/send-venue-options.interface.ts:58](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L58)

___

### googlePlaceType

• `Optional` **googlePlaceType**: `string`

Google Places type of the venue. (See supported types.)

#### Defined in

[options/send-venue-options.interface.ts:63](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L63)

___

### latitude

• **latitude**: `number`

Latitude of the venue

#### Defined in

[options/send-venue-options.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L27)

___

### longitude

• **longitude**: `number`

Longitude of the venue

#### Defined in

[options/send-venue-options.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L32)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-venue-options.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L22)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-venue-options.interface.ts:73](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L73)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-venue-options.interface.ts:91](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L91)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-venue-options.interface.ts:78](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L78)

___

### title

• **title**: `string`

Name of the venue

#### Defined in

[options/send-venue-options.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-venue-options.interface.ts#L37)
