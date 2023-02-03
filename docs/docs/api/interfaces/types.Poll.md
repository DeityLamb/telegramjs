---
id: "types.Poll"
title: "Interface: Poll"
sidebar_label: "Poll"
custom_edit_url: null
---

[types](../modules/types.md).Poll

This object contains information about a poll.

**`See`**

[https://core.telegram.org/bots/api#poll](https://core.telegram.org/bots/api#poll)

## Properties

### allowsMultipleAnswers

• **allowsMultipleAnswers**: `boolean`

True, if the poll allows multiple answers

#### Defined in

[types/poll.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L47)

___

### closeDate

• `Optional` **closeDate**: `number`

Point in time (Unix timestamp) when the poll will be automatically closed

#### Defined in

[types/poll.interface.ts:76](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L76)

___

### correctOptionId

• `Optional` **correctOptionId**: `number`

0-based identifier of the correct answer option. Available only for polls in
the quiz mode, which are closed, or was sent (not forwarded) by the bot or to
the private chat with the bot.

#### Defined in

[types/poll.interface.ts:54](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L54)

___

### explanation

• `Optional` **explanation**: `string`

Text that is shown when a user chooses an incorrect answer or taps on the lamp
icon in a quiz-style poll, 0-200 characters

#### Defined in

[types/poll.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L60)

___

### explanationEntities

• `Optional` **explanationEntities**: [`MessageEntity`](types.MessageEntity.md)

Special entities like usernames, URLs, bot commands, etc. that appear in the
explanation

#### Defined in

[types/poll.interface.ts:66](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L66)

___

### id

• **id**: `string`

Unique poll identifier

#### Defined in

[types/poll.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L12)

___

### isAnonymous

• **isAnonymous**: `boolean`

True, if the poll is anonymous

#### Defined in

[types/poll.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L37)

___

### isClosed

• **isClosed**: `boolean`

True, if the poll is closed

#### Defined in

[types/poll.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L32)

___

### openPeriod

• `Optional` **openPeriod**: `number`

Amount of time in seconds the poll will be active after creation

#### Defined in

[types/poll.interface.ts:71](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L71)

___

### options

• **options**: [`PollOption`](types.PollOption.md)

List of poll options

#### Defined in

[types/poll.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L22)

___

### question

• **question**: `string`

Poll question, 1-300 characters

#### Defined in

[types/poll.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L17)

___

### totalVoterCount

• **totalVoterCount**: `number`

Total number of users that voted in the poll

#### Defined in

[types/poll.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L27)

___

### type

• **type**: `string`

Poll type, currently can be "regular" or "quiz"

#### Defined in

[types/poll.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll.interface.ts#L42)
