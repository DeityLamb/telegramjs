---
id: "options.EditMessageReplyMarkupOptions"
title: "Interface: EditMessageReplyMarkupOptions"
sidebar_label: "EditMessageReplyMarkupOptions"
custom_edit_url: null
---

[options](../modules/options.md).EditMessageReplyMarkupOptions

Use this method to edit only the reply markup of messages. On success, if the
edited message is not an inline message, the edited Message is returned,
otherwise True is returned.

**`See`**

[https://core.telegram.org/bots/api#editmessagereplymarkup](https://core.telegram.org/bots/api#editmessagereplymarkup)

## Properties

### chatId

• `Optional` **chatId**: `string` \| `number`

Required if inline_message_id is not specified. Unique identifier for the target
chat or username of the target channel (in the format @channelusername)

#### Defined in

[options/edit-message-reply-markup-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-reply-markup-options.interface.ts#L14)

___

### inlineMessageId

• `Optional` **inlineMessageId**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline
message

#### Defined in

[options/edit-message-reply-markup-options.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-reply-markup-options.interface.ts#L26)

___

### messageId

• `Optional` **messageId**: `number`

Required if inline_message_id is not specified. Identifier of the message to
edit

#### Defined in

[options/edit-message-reply-markup-options.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-reply-markup-options.interface.ts#L20)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

A JSON-serialized object for an inline keyboard.

#### Defined in

[options/edit-message-reply-markup-options.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-reply-markup-options.interface.ts#L31)
