---
id: "types.InlineQuery"
title: "Interface: InlineQuery"
sidebar_label: "InlineQuery"
custom_edit_url: null
---

[types](../modules/types.md).InlineQuery

This object represents an incoming inline query. When the user sends an empty
query, your bot could return some default or trending results.

**`See`**

[https://core.telegram.org/bots/api#inlinequery](https://core.telegram.org/bots/api#inlinequery)

## Properties

### chatType

• `Optional` **chatType**: `string`

Type of the chat from which the inline query was sent. Can be either "sender"
for a private chat with the inline query sender, "private", "group",
"supergroup", or "channel". The chat type should be always known for requests
sent from official clients and most third-party clients, unless the request was
sent from a secret chat

#### Defined in

[types/inline-query.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query.interface.ts#L37)

___

### from

• **from**: [`User`](types.User.md)

Sender

#### Defined in

[types/inline-query.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query.interface.ts#L18)

___

### id

• **id**: `string`

Unique identifier for this query

#### Defined in

[types/inline-query.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query.interface.ts#L13)

___

### location

• `Optional` **location**: [`Location`](types.Location.md)

Sender location, only for bots that request user location

#### Defined in

[types/inline-query.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query.interface.ts#L42)

___

### offset

• **offset**: `string`

Offset of the results to be returned, can be controlled by the bot

#### Defined in

[types/inline-query.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query.interface.ts#L28)

___

### query

• **query**: `string`

Text of the query (up to 256 characters)

#### Defined in

[types/inline-query.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query.interface.ts#L23)
