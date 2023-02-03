---
id: "types.LabeledPrice"
title: "Interface: LabeledPrice"
sidebar_label: "LabeledPrice"
custom_edit_url: null
---

[types](../modules/types.md).LabeledPrice

This object represents a portion of the price for goods or services.

**`See`**

[https://core.telegram.org/bots/api#labeledprice](https://core.telegram.org/bots/api#labeledprice)

## Properties

### amount

• **amount**: `number`

Price of the product in the smallest units of the currency (integer, not
float/double). For example, for a price of US$ 1.45 pass amount = 145. See the
exp parameter in currencies.json, it shows the number of digits past the decimal
point for each currency (2 for the majority of currencies).

#### Defined in

[types/labeled-price.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/labeled-price.interface.ts#L17)

___

### label

• **label**: `string`

Portion label

#### Defined in

[types/labeled-price.interface.ts:9](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/labeled-price.interface.ts#L9)
