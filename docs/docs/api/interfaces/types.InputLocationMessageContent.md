---
id: "types.InputLocationMessageContent"
title: "Interface: InputLocationMessageContent"
sidebar_label: "InputLocationMessageContent"
custom_edit_url: null
---

[types](../modules/types.md).InputLocationMessageContent

Represents the content of a location message to be sent as the result of an
inline query.

**`See`**

[https://core.telegram.org/bots/api#inputlocationmessagecontent](https://core.telegram.org/bots/api#inputlocationmessagecontent)

## Properties

### heading

• `Optional` **heading**: `number`

For live locations, a direction in which the user is moving, in degrees. Must
be between 1 and 360 if specified.

#### Defined in

[types/input-location-message-content.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-location-message-content.interface.ts#L32)

___

### horizontalAccuracy

• `Optional` **horizontalAccuracy**: `number`

The radius of uncertainty for the location, measured in meters; 0-1500

#### Defined in

[types/input-location-message-content.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-location-message-content.interface.ts#L20)

___

### latitude

• **latitude**: `number`

Latitude of the location in degrees

#### Defined in

[types/input-location-message-content.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-location-message-content.interface.ts#L10)

___

### livePeriod

• `Optional` **livePeriod**: `number`

Period in seconds for which the location can be updated, should be between 60
and 86400.

#### Defined in

[types/input-location-message-content.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-location-message-content.interface.ts#L26)

___

### longitude

• **longitude**: `number`

Longitude of the location in degrees

#### Defined in

[types/input-location-message-content.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-location-message-content.interface.ts#L15)

___

### proximityAlertRadius

• `Optional` **proximityAlertRadius**: `number`

For live locations, a maximum distance for proximity alerts about approaching
another chat member, in meters. Must be between 1 and 100000 if specified.

#### Defined in

[types/input-location-message-content.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-location-message-content.interface.ts#L38)
