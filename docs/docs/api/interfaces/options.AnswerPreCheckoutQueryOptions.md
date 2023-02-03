---
id: "options.AnswerPreCheckoutQueryOptions"
title: "Interface: AnswerPreCheckoutQueryOptions"
sidebar_label: "AnswerPreCheckoutQueryOptions"
custom_edit_url: null
---

[options](../modules/options.md).AnswerPreCheckoutQueryOptions

Once the user has confirmed their payment and shipping details, the Bot API
sends the final confirmation in the form of an Update with the field
pre_checkout_query. Use this method to respond to such pre-checkout queries. On
success, True is returned. Note: The Bot API must receive an answer within 10
seconds after the pre-checkout query was sent.

**`See`**

[https://core.telegram.org/bots/api#answerprecheckoutquery](https://core.telegram.org/bots/api#answerprecheckoutquery)

## Properties

### errorMessage

• `Optional` **errorMessage**: `string`

Required if ok is False. Error message in human readable form that explains the
reason for failure to proceed with the checkout (e.g. "Sorry, somebody just
bought the last of our amazing black T-shirts while you were busy filling out
your payment details. Please choose a different color or garment!"). Telegram
will display this message to the user.

#### Defined in

[options/answer-pre-checkout-query-options.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-pre-checkout-query-options.interface.ts#L28)

___

### ok

• **ok**: `boolean`

Specify True if everything is alright (goods are available, etc.) and the bot is
ready to proceed with the order. Use False if there are any problems.

#### Defined in

[options/answer-pre-checkout-query-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-pre-checkout-query-options.interface.ts#L19)

___

### preCheckoutQueryId

• **preCheckoutQueryId**: `string`

Unique identifier for the query to be answered

#### Defined in

[options/answer-pre-checkout-query-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-pre-checkout-query-options.interface.ts#L13)
