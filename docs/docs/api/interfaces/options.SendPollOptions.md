---
id: "options.SendPollOptions"
title: "Interface: SendPollOptions"
sidebar_label: "SendPollOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendPollOptions

Use this method to send a native poll. On success, the sent Message is returned.

**`See`**

[https://core.telegram.org/bots/api#sendpoll](https://core.telegram.org/bots/api#sendpoll)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-poll-options.interface.ts:112](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L112)

___

### allowsMultipleAnswers

• `Optional` **allowsMultipleAnswers**: `boolean`

True, if the poll allows multiple answers, ignored for polls in quiz mode,
defaults to False

#### Defined in

[options/send-poll-options.interface.ts:48](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L48)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-poll-options.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L16)

___

### closeDate

• `Optional` **closeDate**: `number`

Point in time (Unix timestamp) when the poll will be automatically closed. Must
be at least 5 and no more than 600 seconds in the future. Can't be used together
with open_period.

#### Defined in

[options/send-poll-options.interface.ts:85](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L85)

___

### correctOptionId

• `Optional` **correctOptionId**: `number`

0-based identifier of the correct answer option, required for polls in quiz mode

#### Defined in

[options/send-poll-options.interface.ts:53](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L53)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-poll-options.interface.ts:96](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L96)

___

### explanation

• `Optional` **explanation**: `string`

Text that is shown when a user chooses an incorrect answer or taps on the lamp
icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after
entities parsing

#### Defined in

[options/send-poll-options.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L60)

___

### explanationEntities

• `Optional` **explanationEntities**: [`MessageEntity`](types.MessageEntity.md)

A JSON-serialized list of special entities that appear in the poll explanation,
which can be specified instead of parse_mode

#### Defined in

[options/send-poll-options.interface.ts:72](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L72)

___

### explanationParseMode

• `Optional` **explanationParseMode**: `string`

Mode for parsing entities in the explanation. See formatting options for more
details.

#### Defined in

[options/send-poll-options.interface.ts:66](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L66)

___

### isAnonymous

• `Optional` **isAnonymous**: `boolean`

True, if the poll needs to be anonymous, defaults to True

#### Defined in

[options/send-poll-options.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L37)

___

### isClosed

• `Optional` **isClosed**: `boolean`

Pass True if the poll needs to be immediately closed. This can be useful for
poll preview.

#### Defined in

[options/send-poll-options.interface.ts:91](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L91)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-poll-options.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L22)

___

### openPeriod

• `Optional` **openPeriod**: `number`

Amount of time in seconds the poll will be active after creation, 5-600. Can't
be used together with close_date.

#### Defined in

[options/send-poll-options.interface.ts:78](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L78)

___

### options

• **options**: `string`

A JSON-serialized list of answer options, 2-10 strings 1-100 characters each

#### Defined in

[options/send-poll-options.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L32)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-poll-options.interface.ts:101](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L101)

___

### question

• **question**: `string`

Poll question, 1-300 characters

#### Defined in

[options/send-poll-options.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L27)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-poll-options.interface.ts:119](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L119)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-poll-options.interface.ts:106](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L106)

___

### type

• `Optional` **type**: `string`

Poll type, "quiz" or "regular", defaults to "regular"

#### Defined in

[options/send-poll-options.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-poll-options.interface.ts#L42)
