---
id: "types.CallbackQuery"
title: "Interface: CallbackQuery"
sidebar_label: "CallbackQuery"
custom_edit_url: null
---

[types](../modules/types.md).CallbackQuery

This object represents an incoming callback query from a callback button in an
inline keyboard. If the button that originated the query was attached to a
message sent by the bot, the field message will be present. If the button was
attached to a message sent via the bot (in inline mode), the field
inline_message_id will be present. Exactly one of the fields data or
game_short_name will be present.

**`See`**

[https://core.telegram.org/bots/api#callbackquery](https://core.telegram.org/bots/api#callbackquery)

## Properties

### chatInstance

• **chatInstance**: `string`

Global identifier, uniquely corresponding to the chat to which the message with
the callback button was sent. Useful for high scores in games.

#### Defined in

[types/callback-query.interface.ts:40](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/callback-query.interface.ts#L40)

___

### data

• `Optional` **data**: `string`

Data associated with the callback button. Be aware that the message originated
the query can contain no callback buttons with this data.

#### Defined in

[types/callback-query.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/callback-query.interface.ts#L46)

___

### from

• **from**: [`User`](types.User.md)

Sender

#### Defined in

[types/callback-query.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/callback-query.interface.ts#L22)

___

### gameShortName

• `Optional` **gameShortName**: `string`

Short name of a Game to be returned, serves as the unique identifier for the
game

#### Defined in

[types/callback-query.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/callback-query.interface.ts#L52)

___

### id

• **id**: `string`

Unique identifier for this query

#### Defined in

[types/callback-query.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/callback-query.interface.ts#L17)

___

### inlineMessageId

• `Optional` **inlineMessageId**: `string`

Identifier of the message sent via the bot in inline mode, that originated the
query.

#### Defined in

[types/callback-query.interface.ts:34](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/callback-query.interface.ts#L34)

___

### message

• `Optional` **message**: [`Message`](types.Message.md)

Message with the callback button that originated the query. Note that message
content and message date will not be available if the message is too old

#### Defined in

[types/callback-query.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/callback-query.interface.ts#L28)
