---
id: "types.ShippingQuery"
title: "Interface: ShippingQuery"
sidebar_label: "ShippingQuery"
custom_edit_url: null
---

[types](../modules/types.md).ShippingQuery

This object contains information about an incoming shipping query.

**`See`**

[https://core.telegram.org/bots/api#shippingquery](https://core.telegram.org/bots/api#shippingquery)

## Properties

### from

• **from**: [`User`](types.User.md)

User who sent the query

#### Defined in

[types/shipping-query.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/shipping-query.interface.ts#L17)

___

### id

• **id**: `string`

Unique query identifier

#### Defined in

[types/shipping-query.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/shipping-query.interface.ts#L12)

___

### invoicePayload

• **invoicePayload**: `string`

Bot specified invoice payload

#### Defined in

[types/shipping-query.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/shipping-query.interface.ts#L22)

___

### shippingAddress

• **shippingAddress**: [`ShippingAddress`](types.ShippingAddress.md)

User specified shipping address

#### Defined in

[types/shipping-query.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/shipping-query.interface.ts#L27)
