---
id: "options.SendLocationOptions"
title: "Interface: SendLocationOptions"
sidebar_label: "SendLocationOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendLocationOptions

Use this method to send point on the map. On success, the sent Message is
returned.

**`See`**

[https://core.telegram.org/bots/api#sendlocation](https://core.telegram.org/bots/api#sendlocation)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-location-options.interface.ts:76](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L76)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-location-options.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L16)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-location-options.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L60)

___

### heading

• `Optional` **heading**: `number`

For live locations, a direction in which the user is moving, in degrees. Must be
between 1 and 360 if specified.

#### Defined in

[options/send-location-options.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L49)

___

### horizontalAccuracy

• `Optional` **horizontalAccuracy**: `number`

The radius of uncertainty for the location, measured in meters; 0-1500

#### Defined in

[options/send-location-options.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L37)

___

### latitude

• **latitude**: `number`

Latitude of the location

#### Defined in

[options/send-location-options.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L27)

___

### livePeriod

• `Optional` **livePeriod**: `number`

Period in seconds for which the location will be updated (see Live Locations,
should be between 60 and 86400.

#### Defined in

[options/send-location-options.interface.ts:43](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L43)

___

### longitude

• **longitude**: `number`

Longitude of the location

#### Defined in

[options/send-location-options.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L32)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-location-options.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L22)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-location-options.interface.ts:65](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L65)

___

### proximityAlertRadius

• `Optional` **proximityAlertRadius**: `number`

For live locations, a maximum distance for proximity alerts about approaching
another chat member, in meters. Must be between 1 and 100000 if specified.

#### Defined in

[options/send-location-options.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L55)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-location-options.interface.ts:83](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L83)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-location-options.interface.ts:70](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-location-options.interface.ts#L70)
