---
id: "types.Invoice"
title: "Interface: Invoice"
sidebar_label: "Invoice"
custom_edit_url: null
---

[types](../modules/types.md).Invoice

This object contains basic information about an invoice.

**`See`**

[https://core.telegram.org/bots/api#invoice](https://core.telegram.org/bots/api#invoice)

## Properties

### currency

• **currency**: `string`

Three-letter ISO 4217 currency code

#### Defined in

[types/invoice.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/invoice.interface.ts#L24)

___

### description

• **description**: `string`

Product description

#### Defined in

[types/invoice.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/invoice.interface.ts#L14)

___

### startParameter

• **startParameter**: `string`

Unique bot deep-linking parameter that can be used to generate this invoice

#### Defined in

[types/invoice.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/invoice.interface.ts#L19)

___

### title

• **title**: `string`

Product name

#### Defined in

[types/invoice.interface.ts:9](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/invoice.interface.ts#L9)

___

### totalAmount

• **totalAmount**: `number`

Total price in the smallest units of the currency (integer, not float/double).
For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in
currencies.json, it shows the number of digits past the decimal point for each
currency (2 for the majority of currencies).

#### Defined in

[types/invoice.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/invoice.interface.ts#L32)
