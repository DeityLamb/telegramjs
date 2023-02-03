---
id: "options.SendAudioOptions"
title: "Interface: SendAudioOptions"
sidebar_label: "SendAudioOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendAudioOptions

Use this method to send audio files, if you want Telegram clients to display
them in the music player. Your audio must be in the .MP3 or .M4A format. On
success, the sent Message is returned. Bots can currently send audio files of up
to 50 MB in size, this limit may be changed in the future.
For sending voice messages, use the sendVoice method instead.

**`See`**

[https://core.telegram.org/bots/api#sendaudio](https://core.telegram.org/bots/api#sendaudio)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-audio-options.interface.ts:101](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L101)

___

### audio

• **audio**: `string` \| [`InputFile`](types.InputFile.md)

Audio file to send. Pass a file_id as String to send an audio file that exists
on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram
to get an audio file from the Internet, or upload a new one using
multipart/form-data. More information on Sending Files:
https://core.telegram.org/bots/api#sending-files

#### Defined in

[options/send-audio-options.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L36)

___

### caption

• `Optional` **caption**: `string`

Audio caption, 0-1024 characters after entities parsing

#### Defined in

[options/send-audio-options.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L41)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

A JSON-serialized list of special entities that appear in the caption, which can
be specified instead of parse_mode

#### Defined in

[options/send-audio-options.interface.ts:53](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L53)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-audio-options.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L21)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-audio-options.interface.ts:85](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L85)

___

### duration

• `Optional` **duration**: `number`

Duration of the audio in seconds

#### Defined in

[options/send-audio-options.interface.ts:58](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L58)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-audio-options.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L27)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the audio caption. See formatting options for more
details.

#### Defined in

[options/send-audio-options.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L47)

___

### performer

• `Optional` **performer**: `string`

Performer

#### Defined in

[options/send-audio-options.interface.ts:63](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L63)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-audio-options.interface.ts:90](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L90)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-audio-options.interface.ts:108](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L108)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-audio-options.interface.ts:95](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L95)

___

### thumb

• `Optional` **thumb**: `string` \| [`InputFile`](types.InputFile.md)

Thumbnail of the file sent; can be ignored if thumbnail generation for the file
is supported server-side. The thumbnail should be in JPEG format and less than
200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if
the file is not uploaded using multipart/form-data. Thumbnails can't be reused
and can be only uploaded as a new file, so you can pass
"attach://<file_attach_name>" if the thumbnail was uploaded using
multipart/form-data under <file_attach_name>. More information on Sending Files:
https://core.telegram.org/bots/api#sending-files

#### Defined in

[options/send-audio-options.interface.ts:80](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L80)

___

### title

• `Optional` **title**: `string`

Track name

#### Defined in

[options/send-audio-options.interface.ts:68](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-audio-options.interface.ts#L68)
