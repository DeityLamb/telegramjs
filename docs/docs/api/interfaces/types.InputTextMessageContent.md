---
id: "types.InputTextMessageContent"
title: "Interface: InputTextMessageContent"
sidebar_label: "InputTextMessageContent"
custom_edit_url: null
---

[types](../modules/types.md).InputTextMessageContent

Represents the content of a text message to be sent as the result of an inline
query.

**`See`**

[https://core.telegram.org/bots/api#inputtextmessagecontent](https://core.telegram.org/bots/api#inputtextmessagecontent)

## Properties

### disableWebPagePreview

• `Optional` **disableWebPagePreview**: `boolean`

Disables link previews for links in the sent message

#### Defined in

[types/input-text-message-content.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-text-message-content.interface.ts#L29)

___

### entities

• `Optional` **entities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in message text, which can be specified
instead of parse_mode

#### Defined in

[types/input-text-message-content.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-text-message-content.interface.ts#L24)

___

### messageText

• **messageText**: `string`

Text of the message to be sent, 1-4096 characters

#### Defined in

[types/input-text-message-content.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-text-message-content.interface.ts#L12)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the message text. See formatting options for more
details.

#### Defined in

[types/input-text-message-content.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-text-message-content.interface.ts#L18)
