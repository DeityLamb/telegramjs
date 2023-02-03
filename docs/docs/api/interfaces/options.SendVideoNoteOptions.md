---
id: "options.SendVideoNoteOptions"
title: "Interface: SendVideoNoteOptions"
sidebar_label: "SendVideoNoteOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendVideoNoteOptions

As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1
minute long. Use this method to send video messages. On success, the sent
Message is returned.

**`See`**

[https://core.telegram.org/bots/api#sendvideonote](https://core.telegram.org/bots/api#sendvideonote)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-video-note-options.interface.ts:76](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L76)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-video-note-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L18)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-video-note-options.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L60)

___

### duration

• `Optional` **duration**: `number`

Duration of sent video in seconds

#### Defined in

[options/send-video-note-options.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L38)

___

### length

• `Optional` **length**: `number`

Video width and height, i.e. diameter of the video message

#### Defined in

[options/send-video-note-options.interface.ts:43](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L43)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-video-note-options.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L24)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-video-note-options.interface.ts:65](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L65)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-video-note-options.interface.ts:83](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L83)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-video-note-options.interface.ts:70](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L70)

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

[options/send-video-note-options.interface.ts:55](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L55)

___

### videoNote

• **videoNote**: `string` \| [`InputFile`](types.InputFile.md)

Video note to send. Pass a file_id as String to send a video note that exists on
the Telegram servers (recommended) or upload a new video using
multipart/form-data. More information on Sending Files:
https://core.telegram.org/bots/api#sending-files. Sending video notes by a URL
is currently unsupported

#### Defined in

[options/send-video-note-options.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-note-options.interface.ts#L33)
