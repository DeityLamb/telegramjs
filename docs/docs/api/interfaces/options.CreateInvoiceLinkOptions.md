---
id: "options.CreateInvoiceLinkOptions"
title: "Interface: CreateInvoiceLinkOptions"
sidebar_label: "CreateInvoiceLinkOptions"
custom_edit_url: null
---

[options](../modules/options.md).CreateInvoiceLinkOptions

Use this method to create a link for an invoice. Returns the created invoice
link as String on success.

**`See`**

[https://core.telegram.org/bots/api#createinvoicelink](https://core.telegram.org/bots/api#createinvoicelink)

## Properties

### currency

• **currency**: `string`

Three-letter ISO 4217 currency code, see more on currencies

#### Defined in

[options/create-invoice-link-options.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L33)

___

### description

• **description**: `string`

Product description, 1-255 characters

#### Defined in

[options/create-invoice-link-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L17)

___

### isFlexible

• `Optional` **isFlexible**: `boolean`

Pass True if the final price depends on the shipping method

#### Defined in

[options/create-invoice-link-options.interface.ts:119](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L119)

___

### maxTipAmount

• `Optional` **maxTipAmount**: `number`

The maximum accepted amount for tips in the smallest units of the currency
(integer, not float/double). For example, for a maximum tip of US$ 1.45 pass
max_tip_amount = 145. See the exp parameter in currencies.json, it shows the
number of digits past the decimal point for each currency (2 for the majority of
currencies). Defaults to 0

#### Defined in

[options/create-invoice-link-options.interface.ts:48](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L48)

___

### needEmail

• `Optional` **needEmail**: `boolean`

Pass True if you require the user's email address to complete the order

#### Defined in

[options/create-invoice-link-options.interface.ts:99](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L99)

___

### needName

• `Optional` **needName**: `boolean`

Pass True if you require the user's full name to complete the order

#### Defined in

[options/create-invoice-link-options.interface.ts:89](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L89)

___

### needPhoneNumber

• `Optional` **needPhoneNumber**: `boolean`

Pass True if you require the user's phone number to complete the order

#### Defined in

[options/create-invoice-link-options.interface.ts:94](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L94)

___

### needShippingAddress

• `Optional` **needShippingAddress**: `boolean`

Pass True if you require the user's shipping address to complete the order

#### Defined in

[options/create-invoice-link-options.interface.ts:104](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L104)

___

### payload

• **payload**: `string`

Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the
user, use for your internal processes.

#### Defined in

[options/create-invoice-link-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L23)

___

### photoHeight

• `Optional` **photoHeight**: `number`

Photo height

#### Defined in

[options/create-invoice-link-options.interface.ts:84](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L84)

___

### photoSize

• `Optional` **photoSize**: `number`

Photo size in bytes

#### Defined in

[options/create-invoice-link-options.interface.ts:74](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L74)

___

### photoUrl

• `Optional` **photoUrl**: `string`

URL of the product photo for the invoice. Can be a photo of the goods or a
marketing image for a service.

#### Defined in

[options/create-invoice-link-options.interface.ts:69](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L69)

___

### photoWidth

• `Optional` **photoWidth**: `number`

Photo width

#### Defined in

[options/create-invoice-link-options.interface.ts:79](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L79)

___

### prices

• **prices**: [`LabeledPrice`](types.LabeledPrice.md)

Price breakdown, a JSON-serialized list of components (e.g. product price, tax,
discount, delivery cost, delivery tax, bonus, etc.)

#### Defined in

[options/create-invoice-link-options.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L39)

___

### providerData

• `Optional` **providerData**: `string`

JSON-serialized data about the invoice, which will be shared with the payment
provider. A detailed description of required fields should be provided by the
payment provider.

#### Defined in

[options/create-invoice-link-options.interface.ts:63](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L63)

___

### providerToken

• **providerToken**: `string`

Payment provider token, obtained via BotFather

#### Defined in

[options/create-invoice-link-options.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L28)

___

### sendEmailToProvider

• `Optional` **sendEmailToProvider**: `boolean`

Pass True if the user's email address should be sent to the provider

#### Defined in

[options/create-invoice-link-options.interface.ts:114](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L114)

___

### sendPhoneNumberToProvider

• `Optional` **sendPhoneNumberToProvider**: `boolean`

Pass True if the user's phone number should be sent to the provider

#### Defined in

[options/create-invoice-link-options.interface.ts:109](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L109)

___

### suggestedTipAmounts

• `Optional` **suggestedTipAmounts**: `number`

A JSON-serialized array of suggested amounts of tips in the smallest units of
the currency (integer, not float/double). At most 4 suggested tip amounts can be
specified. The suggested tip amounts must be positive, passed in a strictly
increased order and must not exceed max_tip_amount.

#### Defined in

[options/create-invoice-link-options.interface.ts:56](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L56)

___

### title

• **title**: `string`

Product name, 1-32 characters

#### Defined in

[options/create-invoice-link-options.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-invoice-link-options.interface.ts#L12)
