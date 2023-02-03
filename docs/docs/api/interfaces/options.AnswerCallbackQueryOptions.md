---
id: "options.AnswerCallbackQueryOptions"
title: "Interface: AnswerCallbackQueryOptions"
sidebar_label: "AnswerCallbackQueryOptions"
custom_edit_url: null
---

[options](../modules/options.md).AnswerCallbackQueryOptions

Use this method to send answers to callback queries sent from inline keyboards.
The answer will be displayed to the user as a notification at the top of the
chat screen or as an alert. On success, True is returned.

**`See`**

[https://core.telegram.org/bots/api#answercallbackquery](https://core.telegram.org/bots/api#answercallbackquery)

## Properties

### cacheTime

• `Optional` **cacheTime**: `number`

The maximum amount of time in seconds that the result of the callback query may
be cached client-side. Telegram apps will support caching starting in version
3.14. Defaults to 0.

#### Defined in

[options/answer-callback-query-options.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-callback-query-options.interface.ts#L39)

___

### callbackQueryId

• **callbackQueryId**: `string`

Unique identifier for the query to be answered

#### Defined in

[options/answer-callback-query-options.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-callback-query-options.interface.ts#L11)

___

### showAlert

• `Optional` **showAlert**: `boolean`

If True, an alert will be shown by the client instead of a notification at the
top of the chat screen. Defaults to false.

#### Defined in

[options/answer-callback-query-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-callback-query-options.interface.ts#L23)

___

### text

• `Optional` **text**: `string`

Text of the notification. If not specified, nothing will be shown to the user,
0-200 characters

#### Defined in

[options/answer-callback-query-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-callback-query-options.interface.ts#L17)

___

### url

• `Optional` **url**: `string`

URL that will be opened by the user's client. If you have created a Game and
accepted the conditions via @BotFather, specify the URL that opens your game -
note that this will only work if the query comes from a callback_game button.
Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot
with a parameter.

#### Defined in

[options/answer-callback-query-options.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/answer-callback-query-options.interface.ts#L32)
