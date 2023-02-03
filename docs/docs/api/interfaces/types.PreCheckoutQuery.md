---
id: "types.PreCheckoutQuery"
title: "Interface: PreCheckoutQuery"
sidebar_label: "PreCheckoutQuery"
custom_edit_url: null
---

[types](../modules/types.md).PreCheckoutQuery

This object contains information about an incoming pre-checkout query.

**`See`**

[https://core.telegram.org/bots/api#precheckoutquery](https://core.telegram.org/bots/api#precheckoutquery)

## Properties

### currency

• **currency**: `string`

Three-letter ISO 4217 currency code

#### Defined in

[types/pre-checkout-query.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/pre-checkout-query.interface.ts#L22)

___

### from

• **from**: [`User`](types.User.md)

User who sent the query

#### Defined in

[types/pre-checkout-query.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/pre-checkout-query.interface.ts#L17)

___

### id

• **id**: `string`

Unique query identifier

#### Defined in

[types/pre-checkout-query.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/pre-checkout-query.interface.ts#L12)

___

### invoicePayload

• **invoicePayload**: `string`

Bot specified invoice payload

#### Defined in

[types/pre-checkout-query.interface.ts:35](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/pre-checkout-query.interface.ts#L35)

___

### orderInfo

• `Optional` **orderInfo**: [`OrderInfo`](types.OrderInfo.md)

Order information provided by the user

#### Defined in

[types/pre-checkout-query.interface.ts:45](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/pre-checkout-query.interface.ts#L45)

___

### shippingOptionId

• `Optional` **shippingOptionId**: `string`

Identifier of the shipping option chosen by the user

#### Defined in

[types/pre-checkout-query.interface.ts:40](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/pre-checkout-query.interface.ts#L40)

___

### totalAmount

• **totalAmount**: `number`

Total price in the smallest units of the currency (integer, not float/double).
For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in
currencies.json, it shows the number of digits past the decimal point for each
currency (2 for the majority of currencies).

#### Defined in

[types/pre-checkout-query.interface.ts:30](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/pre-checkout-query.interface.ts#L30)
