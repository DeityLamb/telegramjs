---
id: "options.SendInvoiceOptions"
title: "Interface: SendInvoiceOptions"
sidebar_label: "SendInvoiceOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendInvoiceOptions

Use this method to send invoices. On success, the sent Message is returned.

**`See`**

[https://core.telegram.org/bots/api#sendinvoice](https://core.telegram.org/bots/api#sendinvoice)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-invoice-options.interface.ts:162](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L162)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-invoice-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L13)

___

### currency

• **currency**: `string`

Three-letter ISO 4217 currency code, see more on currencies

#### Defined in

[options/send-invoice-options.interface.ts:45](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L45)

___

### description

• **description**: `string`

Product description, 1-255 characters

#### Defined in

[options/send-invoice-options.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L29)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-invoice-options.interface.ts:146](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L146)

___

### isFlexible

• `Optional` **isFlexible**: `boolean`

Pass True if the final price depends on the shipping method

#### Defined in

[options/send-invoice-options.interface.ts:141](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L141)

___

### maxTipAmount

• `Optional` **maxTipAmount**: `number`

The maximum accepted amount for tips in the smallest units of the currency
(integer, not float/double). For example, for a maximum tip of US$ 1.45 pass
max_tip_amount = 145. See the exp parameter in currencies.json, it shows the
number of digits past the decimal point for each currency (2 for the majority of
currencies). Defaults to 0

#### Defined in

[options/send-invoice-options.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L60)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-invoice-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L19)

___

### needEmail

• `Optional` **needEmail**: `boolean`

Pass True if you require the user's email address to complete the order

#### Defined in

[options/send-invoice-options.interface.ts:121](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L121)

___

### needName

• `Optional` **needName**: `boolean`

Pass True if you require the user's full name to complete the order

#### Defined in

[options/send-invoice-options.interface.ts:111](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L111)

___

### needPhoneNumber

• `Optional` **needPhoneNumber**: `boolean`

Pass True if you require the user's phone number to complete the order

#### Defined in

[options/send-invoice-options.interface.ts:116](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L116)

___

### needShippingAddress

• `Optional` **needShippingAddress**: `boolean`

Pass True if you require the user's shipping address to complete the order

#### Defined in

[options/send-invoice-options.interface.ts:126](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L126)

___

### payload

• **payload**: `string`

Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the
user, use for your internal processes.

#### Defined in

[options/send-invoice-options.interface.ts:35](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L35)

___

### photoHeight

• `Optional` **photoHeight**: `number`

Photo height

#### Defined in

[options/send-invoice-options.interface.ts:106](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L106)

___

### photoSize

• `Optional` **photoSize**: `number`

Photo size in bytes

#### Defined in

[options/send-invoice-options.interface.ts:96](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L96)

___

### photoUrl

• `Optional` **photoUrl**: `string`

URL of the product photo for the invoice. Can be a photo of the goods or a
marketing image for a service. People like it better when they see what they are
paying for.

#### Defined in

[options/send-invoice-options.interface.ts:91](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L91)

___

### photoWidth

• `Optional` **photoWidth**: `number`

Photo width

#### Defined in

[options/send-invoice-options.interface.ts:101](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L101)

___

### prices

• **prices**: [`LabeledPrice`](types.LabeledPrice.md)

Price breakdown, a JSON-serialized list of components (e.g. product price, tax,
discount, delivery cost, delivery tax, bonus, etc.)

#### Defined in

[options/send-invoice-options.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L51)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-invoice-options.interface.ts:151](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L151)

___

### providerData

• `Optional` **providerData**: `string`

JSON-serialized data about the invoice, which will be shared with the payment
provider. A detailed description of required fields should be provided by the
payment provider.

#### Defined in

[options/send-invoice-options.interface.ts:84](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L84)

___

### providerToken

• **providerToken**: `string`

Payment provider token, obtained via

**`Bot Father`**

#### Defined in

[options/send-invoice-options.interface.ts:40](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L40)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price'
button will be shown. If not empty, the first button must be a Pay button.

#### Defined in

[options/send-invoice-options.interface.ts:168](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L168)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-invoice-options.interface.ts:156](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L156)

___

### sendEmailToProvider

• `Optional` **sendEmailToProvider**: `boolean`

Pass True if the user's email address should be sent to provider

#### Defined in

[options/send-invoice-options.interface.ts:136](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L136)

___

### sendPhoneNumberToProvider

• `Optional` **sendPhoneNumberToProvider**: `boolean`

Pass True if the user's phone number should be sent to provider

#### Defined in

[options/send-invoice-options.interface.ts:131](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L131)

___

### startParameter

• `Optional` **startParameter**: `string`

Unique deep-linking parameter. If left empty, forwarded copies of the sent
message will have a Pay button, allowing multiple users to pay directly from the
forwarded message, using the same invoice. If non-empty, forwarded copies of the
sent message will have a URL button with a deep link to the bot (instead of a
Pay button), with the value used as the start parameter

#### Defined in

[options/send-invoice-options.interface.ts:77](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L77)

___

### suggestedTipAmounts

• `Optional` **suggestedTipAmounts**: `number`

A JSON-serialized array of suggested amounts of tips in the smallest units of
the currency (integer, not float/double). At most 4 suggested tip amounts can be
specified. The suggested tip amounts must be positive, passed in a strictly
increased order and must not exceed max_tip_amount.

#### Defined in

[options/send-invoice-options.interface.ts:68](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L68)

___

### title

• **title**: `string`

Product name, 1-32 characters

#### Defined in

[options/send-invoice-options.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-invoice-options.interface.ts#L24)
