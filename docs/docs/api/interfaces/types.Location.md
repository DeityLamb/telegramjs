---
id: "types.Location"
title: "Interface: Location"
sidebar_label: "Location"
custom_edit_url: null
---

[types](../modules/types.md).Location

This object represents a point on the map.

**`See`**

[https://core.telegram.org/bots/api#location](https://core.telegram.org/bots/api#location)

## Properties

### heading

• `Optional` **heading**: `number`

The direction in which user is moving, in degrees; 1-360. For active live
locations only.

#### Defined in

[types/location.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/location.interface.ts#L31)

___

### horizontalAccuracy

• `Optional` **horizontalAccuracy**: `number`

The radius of uncertainty for the location, measured in meters; 0-1500

#### Defined in

[types/location.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/location.interface.ts#L19)

___

### latitude

• **latitude**: `number`

Latitude as defined by sender

#### Defined in

[types/location.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/location.interface.ts#L14)

___

### livePeriod

• `Optional` **livePeriod**: `number`

Time relative to the message sending date, during which the location can be
updated; in seconds. For active live locations only.

#### Defined in

[types/location.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/location.interface.ts#L25)

___

### longitude

• **longitude**: `number`

Longitude as defined by sender

#### Defined in

[types/location.interface.ts:9](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/location.interface.ts#L9)

___

### proximityAlertRadius

• `Optional` **proximityAlertRadius**: `number`

The maximum distance for proximity alerts about approaching another chat
member, in meters. For sent live locations only.

#### Defined in

[types/location.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/location.interface.ts#L37)
