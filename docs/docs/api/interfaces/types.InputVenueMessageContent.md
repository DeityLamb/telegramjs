---
id: "types.InputVenueMessageContent"
title: "Interface: InputVenueMessageContent"
sidebar_label: "InputVenueMessageContent"
custom_edit_url: null
---

[types](../modules/types.md).InputVenueMessageContent

Represents the content of a venue message to be sent as the result of an inline
query.

**`See`**

[https://core.telegram.org/bots/api#inputvenuemessagecontent](https://core.telegram.org/bots/api#inputvenuemessagecontent)

## Properties

### address

• **address**: `string`

Address of the venue

#### Defined in

[types/input-venue-message-content.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-venue-message-content.interface.ts#L25)

___

### foursquareId

• `Optional` **foursquareId**: `string`

Foursquare identifier of the venue, if known

#### Defined in

[types/input-venue-message-content.interface.ts:30](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-venue-message-content.interface.ts#L30)

___

### foursquareType

• `Optional` **foursquareType**: `string`

Foursquare type of the venue, if known. (For example,
"arts_entertainment/default", "arts_entertainment/aquarium" or "food/icecream".)

#### Defined in

[types/input-venue-message-content.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-venue-message-content.interface.ts#L36)

___

### googlePlaceId

• `Optional` **googlePlaceId**: `string`

Google Places identifier of the venue

#### Defined in

[types/input-venue-message-content.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-venue-message-content.interface.ts#L41)

___

### googlePlaceType

• `Optional` **googlePlaceType**: `string`

Google Places type of the venue. (See supported types.)

#### Defined in

[types/input-venue-message-content.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-venue-message-content.interface.ts#L46)

___

### latitude

• **latitude**: `number`

Latitude of the venue in degrees

#### Defined in

[types/input-venue-message-content.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-venue-message-content.interface.ts#L10)

___

### longitude

• **longitude**: `number`

Longitude of the venue in degrees

#### Defined in

[types/input-venue-message-content.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-venue-message-content.interface.ts#L15)

___

### title

• **title**: `string`

Name of the venue

#### Defined in

[types/input-venue-message-content.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-venue-message-content.interface.ts#L20)
