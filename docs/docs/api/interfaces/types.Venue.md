---
id: "types.Venue"
title: "Interface: Venue"
sidebar_label: "Venue"
custom_edit_url: null
---

[types](../modules/types.md).Venue

This object represents a venue.

**`See`**

[https://core.telegram.org/bots/api#venue](https://core.telegram.org/bots/api#venue)

## Properties

### address

• **address**: `string`

Address of the venue

#### Defined in

[types/venue.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/venue.interface.ts#L21)

___

### foursquareId

• `Optional` **foursquareId**: `string`

Foursquare identifier of the venue

#### Defined in

[types/venue.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/venue.interface.ts#L26)

___

### foursquareType

• `Optional` **foursquareType**: `string`

Foursquare type of the venue. (For example, "arts_entertainment/default",
"arts_entertainment/aquarium" or "food/icecream".)

#### Defined in

[types/venue.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/venue.interface.ts#L32)

___

### googlePlaceId

• `Optional` **googlePlaceId**: `string`

Google Places identifier of the venue

#### Defined in

[types/venue.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/venue.interface.ts#L37)

___

### googlePlaceType

• `Optional` **googlePlaceType**: `string`

Google Places type of the venue. (See supported types.)

#### Defined in

[types/venue.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/venue.interface.ts#L42)

___

### location

• **location**: [`Location`](types.Location.md)

Venue location. Can't be a live location

#### Defined in

[types/venue.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/venue.interface.ts#L11)

___

### title

• **title**: `string`

Name of the venue

#### Defined in

[types/venue.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/venue.interface.ts#L16)
