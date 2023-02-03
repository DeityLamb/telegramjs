---
id: "options.SendVoiceOptions"
title: "Interface: SendVoiceOptions"
sidebar_label: "SendVoiceOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendVoiceOptions

Use this method to send audio files, if you want Telegram clients to display the
file as a playable voice message. For this to work, your audio must be in an
.OGG file encoded with OPUS (other formats may be sent as Audio or Document). On
success, the sent Message is returned. Bots can currently send voice messages of
up to 50 MB in size, this limit may be changed in the future.

**`See`**

[https://core.telegram.org/bots/api#sendvoice](https://core.telegram.org/bots/api#sendvoice)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-voice-options.interface.ts:78](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L78)

___

### caption

• `Optional` **caption**: `string`

Voice message caption, 0-1024 characters after entities parsing

#### Defined in

[options/send-voice-options.interface.ts:40](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L40)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

A JSON-serialized list of special entities that appear in the caption, which can
be specified instead of parse_mode

#### Defined in

[options/send-voice-options.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L52)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-voice-options.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L21)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-voice-options.interface.ts:62](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L62)

___

### duration

• `Optional` **duration**: `number`

Duration of the voice message in seconds

#### Defined in

[options/send-voice-options.interface.ts:57](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L57)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-voice-options.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L27)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the voice message caption. See formatting options
for more details.

#### Defined in

[options/send-voice-options.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L46)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-voice-options.interface.ts:67](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L67)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-voice-options.interface.ts:85](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L85)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-voice-options.interface.ts:72](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L72)

___

### voice

• **voice**: `string` \| [`InputFile`](types.InputFile.md)

Audio file to send. Pass a file_id as String to send a file that exists on the
Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get
a file from the Internet, or upload a new one using multipart/form-data. More
information on Sending Files: https://core.telegram.org/bots/api#sending-files

#### Defined in

[options/send-voice-options.interface.ts:35](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-voice-options.interface.ts#L35)
