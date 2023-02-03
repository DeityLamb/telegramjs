---
id: "options.EditMessageCaptionOptions"
title: "Interface: EditMessageCaptionOptions"
sidebar_label: "EditMessageCaptionOptions"
custom_edit_url: null
---

[options](../modules/options.md).EditMessageCaptionOptions

Use this method to edit captions of messages. On success, if the edited message
is not an inline message, the edited Message is returned, otherwise True is
returned.

**`See`**

[https://core.telegram.org/bots/api#editmessagecaption](https://core.telegram.org/bots/api#editmessagecaption)

## Properties

### caption

• `Optional` **caption**: `string`

New caption of the message, 0-1024 characters after entities parsing

#### Defined in

[options/edit-message-caption-options.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-caption-options.interface.ts#L32)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

A JSON-serialized list of special entities that appear in the caption, which can
be specified instead of parse_mode

#### Defined in

[options/edit-message-caption-options.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-caption-options.interface.ts#L44)

___

### chatId

• `Optional` **chatId**: `string` \| `number`

Required if inline_message_id is not specified. Unique identifier for the target
chat or username of the target channel (in the format @channelusername)

#### Defined in

[options/edit-message-caption-options.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-caption-options.interface.ts#L15)

___

### inlineMessageId

• `Optional` **inlineMessageId**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline
message

#### Defined in

[options/edit-message-caption-options.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-caption-options.interface.ts#L27)

___

### messageId

• `Optional` **messageId**: `number`

Required if inline_message_id is not specified. Identifier of the message to
edit

#### Defined in

[options/edit-message-caption-options.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-caption-options.interface.ts#L21)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the message caption. See formatting options for
more details.

#### Defined in

[options/edit-message-caption-options.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-caption-options.interface.ts#L38)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

A JSON-serialized object for an inline keyboard.

#### Defined in

[options/edit-message-caption-options.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-caption-options.interface.ts#L49)
