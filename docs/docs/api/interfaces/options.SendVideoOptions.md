---
id: "options.SendVideoOptions"
title: "Interface: SendVideoOptions"
sidebar_label: "SendVideoOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendVideoOptions

Use this method to send video files, Telegram clients support MPEG4 videos
(other formats may be sent as Document). On success, the sent Message is
returned. Bots can currently send video files of up to 50 MB in size, this limit
may be changed in the future.

**`See`**

[https://core.telegram.org/bots/api#sendvideo](https://core.telegram.org/bots/api#sendvideo)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-video-options.interface.ts:110](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L110)

___

### caption

• `Optional` **caption**: `string`

Video caption (may also be used when resending videos by file_id), 0-1024
characters after entities parsing

#### Defined in

[options/send-video-options.interface.ts:67](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L67)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

A JSON-serialized list of special entities that appear in the caption, which can
be specified instead of parse_mode

#### Defined in

[options/send-video-options.interface.ts:79](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L79)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-video-options.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L20)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-video-options.interface.ts:94](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L94)

___

### duration

• `Optional` **duration**: `number`

Duration of sent video in seconds

#### Defined in

[options/send-video-options.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L39)

___

### hasSpoiler

• `Optional` **hasSpoiler**: `boolean`

Pass True if the video needs to be covered with a spoiler animation

#### Defined in

[options/send-video-options.interface.ts:84](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L84)

___

### height

• `Optional` **height**: `number`

Video height

#### Defined in

[options/send-video-options.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L49)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-video-options.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L26)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the video caption. See formatting options for more
details.

#### Defined in

[options/send-video-options.interface.ts:73](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L73)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-video-options.interface.ts:99](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L99)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-video-options.interface.ts:117](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L117)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-video-options.interface.ts:104](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L104)

___

### supportsStreaming

• `Optional` **supportsStreaming**: `boolean`

Pass True if the uploaded video is suitable for streaming

#### Defined in

[options/send-video-options.interface.ts:89](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L89)

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

[options/send-video-options.interface.ts:61](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L61)

___

### video

• **video**: `string` \| [`InputFile`](types.InputFile.md)

Video to send. Pass a file_id as String to send a video that exists on the
Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get
a video from the Internet, or upload a new video using multipart/form-data. More
information on Sending Files: https://core.telegram.org/bots/api#sending-files

#### Defined in

[options/send-video-options.interface.ts:34](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L34)

___

### width

• `Optional` **width**: `number`

Video width

#### Defined in

[options/send-video-options.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-video-options.interface.ts#L44)
