---
id: "options.SendMessageOptions"
title: "Interface: SendMessageOptions"
sidebar_label: "SendMessageOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendMessageOptions

Use this method to send text messages. On success, the sent Message is returned.

**`See`**

[https://core.telegram.org/bots/api#sendmessage](https://core.telegram.org/bots/api#sendmessage)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-message-options.interface.ts:65](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L65)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-message-options.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L16)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-message-options.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L49)

___

### disableWebPagePreview

• `Optional` **disableWebPagePreview**: `boolean`

Disables link previews for links in this message

#### Defined in

[options/send-message-options.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L44)

___

### entities

• `Optional` **entities**: [`MessageEntity`](types.MessageEntity.md)

A JSON-serialized list of special entities that appear in message text, which
can be specified instead of parse_mode

#### Defined in

[options/send-message-options.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L39)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-message-options.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L22)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the message text. See formatting options for more
details.

#### Defined in

[options/send-message-options.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L33)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-message-options.interface.ts:54](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L54)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-message-options.interface.ts:72](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L72)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-message-options.interface.ts:59](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L59)

___

### text

• **text**: `string`

Text of the message to be sent, 1-4096 characters after entities parsing

#### Defined in

[options/send-message-options.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-message-options.interface.ts#L27)
