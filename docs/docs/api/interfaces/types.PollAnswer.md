---
id: "types.PollAnswer"
title: "Interface: PollAnswer"
sidebar_label: "PollAnswer"
custom_edit_url: null
---

[types](../modules/types.md).PollAnswer

This object represents an answer of a user in a non-anonymous poll.

**`See`**

[https://core.telegram.org/bots/api#pollanswer](https://core.telegram.org/bots/api#pollanswer)

## Properties

### optionIds

• **optionIds**: `number`

0-based identifiers of answer options, chosen by the user. May be empty if the
user retracted their vote.

#### Defined in

[types/poll-answer.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll-answer.interface.ts#L22)

___

### pollId

• **pollId**: `string`

Unique poll identifier

#### Defined in

[types/poll-answer.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll-answer.interface.ts#L11)

___

### user

• **user**: [`User`](types.User.md)

The user, who changed the answer to the poll

#### Defined in

[types/poll-answer.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/poll-answer.interface.ts#L16)
