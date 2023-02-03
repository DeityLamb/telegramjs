---
id: "options.StopPollOptions"
title: "Interface: StopPollOptions"
sidebar_label: "StopPollOptions"
custom_edit_url: null
---

[options](../modules/options.md).StopPollOptions

Use this method to stop a poll which was sent by the bot. On success, the
stopped Poll is returned.

**`See`**

[https://core.telegram.org/bots/api#stoppoll](https://core.telegram.org/bots/api#stoppoll)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/stop-poll-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/stop-poll-options.interface.ts#L13)

___

### messageId

• **messageId**: `number`

Identifier of the original message with the poll

#### Defined in

[options/stop-poll-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/stop-poll-options.interface.ts#L18)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

A JSON-serialized object for a new message inline keyboard.

#### Defined in

[options/stop-poll-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/stop-poll-options.interface.ts#L23)
