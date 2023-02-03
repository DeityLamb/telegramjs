---
id: "types.ChosenInlineResult"
title: "Interface: ChosenInlineResult"
sidebar_label: "ChosenInlineResult"
custom_edit_url: null
---

[types](../modules/types.md).ChosenInlineResult

Represents a result of an inline query that was chosen by the user and sent to
their chat partner.
Note: It is necessary to enable inline feedback via

**`Bot Father`**

in order to
receive these objects in updates.

**`See`**

[https://core.telegram.org/bots/api#choseninlineresult](https://core.telegram.org/bots/api#choseninlineresult)

## Properties

### from

• **from**: [`User`](types.User.md)

The user that chose the result

#### Defined in

[types/chosen-inline-result.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chosen-inline-result.interface.ts#L20)

___

### inlineMessageId

• `Optional` **inlineMessageId**: `string`

Identifier of the sent inline message. Available only if there is an inline
keyboard attached to the message. Will be also received in callback queries and
can be used to edit the message.

#### Defined in

[types/chosen-inline-result.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chosen-inline-result.interface.ts#L32)

___

### location

• `Optional` **location**: [`Location`](types.Location.md)

Sender location, only for bots that require user location

#### Defined in

[types/chosen-inline-result.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chosen-inline-result.interface.ts#L25)

___

### query

• **query**: `string`

The query that was used to obtain the result

#### Defined in

[types/chosen-inline-result.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chosen-inline-result.interface.ts#L37)

___

### resultId

• **resultId**: `string`

The unique identifier for the result that was chosen

#### Defined in

[types/chosen-inline-result.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chosen-inline-result.interface.ts#L15)
