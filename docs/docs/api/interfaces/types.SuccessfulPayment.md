---
id: "types.SuccessfulPayment"
title: "Interface: SuccessfulPayment"
sidebar_label: "SuccessfulPayment"
custom_edit_url: null
---

[types](../modules/types.md).SuccessfulPayment

This object contains basic information about a successful payment.

**`See`**

[https://core.telegram.org/bots/api#successfulpayment](https://core.telegram.org/bots/api#successfulpayment)

## Properties

### currency

• **currency**: `string`

Three-letter ISO 4217 currency code

#### Defined in

[types/successful-payment.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/successful-payment.interface.ts#L11)

___

### invoicePayload

• **invoicePayload**: `string`

Bot specified invoice payload

#### Defined in

[types/successful-payment.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/successful-payment.interface.ts#L24)

___

### orderInfo

• `Optional` **orderInfo**: [`OrderInfo`](types.OrderInfo.md)

Order information provided by the user

#### Defined in

[types/successful-payment.interface.ts:34](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/successful-payment.interface.ts#L34)

___

### providerPaymentChargeId

• **providerPaymentChargeId**: `string`

Provider payment identifier

#### Defined in

[types/successful-payment.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/successful-payment.interface.ts#L44)

___

### shippingOptionId

• `Optional` **shippingOptionId**: `string`

Identifier of the shipping option chosen by the user

#### Defined in

[types/successful-payment.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/successful-payment.interface.ts#L29)

___

### telegramPaymentChargeId

• **telegramPaymentChargeId**: `string`

Telegram payment identifier

#### Defined in

[types/successful-payment.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/successful-payment.interface.ts#L39)

___

### totalAmount

• **totalAmount**: `number`

Total price in the smallest units of the currency (integer, not float/double).
For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in
currencies.json, it shows the number of digits past the decimal point for each
currency (2 for the majority of currencies).

#### Defined in

[types/successful-payment.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/successful-payment.interface.ts#L19)
