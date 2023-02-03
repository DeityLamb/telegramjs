---
id: "options.CopyMessageOptions"
title: "Interface: CopyMessageOptions"
sidebar_label: "CopyMessageOptions"
custom_edit_url: null
---

[options](../modules/options.md).CopyMessageOptions

Use this method to copy messages of any kind. Service messages and invoice
messages can't be copied. A quiz poll can be copied only if the value of the
field correct_option_id is known to the bot. The method is analogous to the
method forwardMessage, but the copied message doesn't have a link to the
original message. Returns the MessageId of the sent message on success.

**`See`**

[https://core.telegram.org/bots/api#copymessage](https://core.telegram.org/bots/api#copymessage)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/copy-message-options.interface.ts:76](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L76)

___

### caption

• `Optional` **caption**: `string`

New caption for media, 0-1024 characters after entities parsing. If not
specified, the original caption is kept

#### Defined in

[options/copy-message-options.interface.ts:43](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L43)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

A JSON-serialized list of special entities that appear in the new caption, which
can be specified instead of parse_mode

#### Defined in

[options/copy-message-options.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L55)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/copy-message-options.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L20)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/copy-message-options.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L60)

___

### fromChatId

• **fromChatId**: `string` \| `number`

Unique identifier for the chat where the original message was sent (or channel
username in the format @channelusername)

#### Defined in

[options/copy-message-options.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L32)

___

### messageId

• **messageId**: `number`

Message identifier in the chat specified in from_chat_id

#### Defined in

[options/copy-message-options.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L37)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/copy-message-options.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L26)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the new caption. See formatting options for more
details.

#### Defined in

[options/copy-message-options.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L49)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/copy-message-options.interface.ts:65](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L65)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/copy-message-options.interface.ts:83](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L83)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/copy-message-options.interface.ts:70](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/copy-message-options.interface.ts#L70)
