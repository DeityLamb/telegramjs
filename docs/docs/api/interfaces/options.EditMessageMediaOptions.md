---
id: "options.EditMessageMediaOptions"
title: "Interface: EditMessageMediaOptions"
sidebar_label: "EditMessageMediaOptions"
custom_edit_url: null
---

[options](../modules/options.md).EditMessageMediaOptions

Use this method to edit animation, audio, document, photo, or video messages. If
a message is part of a message album, then it can be edited only to an audio for
audio albums, only to a document for document albums and to a photo or a video
otherwise. When an inline message is edited, a new file can't be uploaded; use a
previously uploaded file via its file_id or specify a URL. On success, if the
edited message is not an inline message, the edited Message is returned,
otherwise True is returned.

**`See`**

[https://core.telegram.org/bots/api#editmessagemedia](https://core.telegram.org/bots/api#editmessagemedia)

## Properties

### chatId

• `Optional` **chatId**: `string` \| `number`

Required if inline_message_id is not specified. Unique identifier for the target
chat or username of the target channel (in the format @channelusername)

#### Defined in

[options/edit-message-media-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-media-options.interface.ts#L19)

___

### inlineMessageId

• `Optional` **inlineMessageId**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline
message

#### Defined in

[options/edit-message-media-options.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-media-options.interface.ts#L31)

___

### media

• **media**: [`InputMedia`](../modules/types.md#inputmedia)

A JSON-serialized object for a new media content of the message

#### Defined in

[options/edit-message-media-options.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-media-options.interface.ts#L36)

___

### messageId

• `Optional` **messageId**: `number`

Required if inline_message_id is not specified. Identifier of the message to
edit

#### Defined in

[options/edit-message-media-options.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-media-options.interface.ts#L25)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

A JSON-serialized object for a new inline keyboard.

#### Defined in

[options/edit-message-media-options.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-media-options.interface.ts#L41)
