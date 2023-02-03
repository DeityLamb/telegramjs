---
id: "options.AnswerShippingQueryOptions"
title: "Interface: AnswerShippingQueryOptions"
sidebar_label: "AnswerShippingQueryOptions"
custom_edit_url: null
---

[options](../modules/options.md).AnswerShippingQueryOptions

If you sent an invoice requesting a shipping address and the parameter
is_flexible was specified, the Bot API will send an Update with a shipping_query
field to the bot. Use this method to reply to shipping queries. On success, True
is returned.

**`See`**

[https://core.telegram.org/bots/api#answershippingquery](https://core.telegram.org/bots/api#answershippingquery)

## Properties

### errorMessage

• `Optional` **errorMessage**: `string`

Required if ok is False. Error message in human readable form that explains why
it is impossible to complete the order (e.g. "Sorry, delivery to your desired
address is unavailable'). Telegram will display this message to the user.

#### Defined in

[options/answer-shipping-query-options.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-shipping-query-options.interface.ts#L33)

___

### ok

• **ok**: `boolean`

Pass True if delivery to the specified address is possible and False if there
are any problems (for example, if delivery to the specified address is not
possible)

#### Defined in

[options/answer-shipping-query-options.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-shipping-query-options.interface.ts#L21)

___

### shippingOptions

• `Optional` **shippingOptions**: [`ShippingOption`](types.ShippingOption.md)

Required if ok is True. A JSON-serialized array of available shipping options.

#### Defined in

[options/answer-shipping-query-options.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-shipping-query-options.interface.ts#L26)

___

### shippingQueryId

• **shippingQueryId**: `string`

Unique identifier for the query to be answered

#### Defined in

[options/answer-shipping-query-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-shipping-query-options.interface.ts#L14)
