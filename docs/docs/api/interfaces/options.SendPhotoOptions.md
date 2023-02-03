---
id: "options.SendPhotoOptions"
title: "Interface: SendPhotoOptions"
sidebar_label: "SendPhotoOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendPhotoOptions

Use this method to send photos. On success, the sent Message is returned.

**`See`**

[https://core.telegram.org/bots/api#sendphoto](https://core.telegram.org/bots/api#sendphoto)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-photo-options.interface.ts:77](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L77)

___

### caption

• `Optional` **caption**: `string`

Photo caption (may also be used when resending photos by file_id), 0-1024
characters after entities parsing

#### Defined in

[options/send-photo-options.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L39)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

A JSON-serialized list of special entities that appear in the caption, which can
be specified instead of parse_mode

#### Defined in

[options/send-photo-options.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L51)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-photo-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L17)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-photo-options.interface.ts:61](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L61)

___

### hasSpoiler

• `Optional` **hasSpoiler**: `boolean`

Pass True if the photo needs to be covered with a spoiler animation

#### Defined in

[options/send-photo-options.interface.ts:56](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L56)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-photo-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L23)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the photo caption. See formatting options for more
details.

#### Defined in

[options/send-photo-options.interface.ts:45](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L45)

___

### photo

• **photo**: `string` \| [`InputFile`](types.InputFile.md)

Photo to send. Pass a file_id as String to send a photo that exists on the
Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get
a photo from the Internet, or upload a new photo using multipart/form-data. The
photo must be at most 10 MB in size. The photo's width and height must not
exceed 10000 in total. Width and height ratio must be at most 20. More
information on Sending Files: https://core.telegram.org/bots/api#sending-files

#### Defined in

[options/send-photo-options.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L33)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-photo-options.interface.ts:66](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L66)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-photo-options.interface.ts:84](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L84)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-photo-options.interface.ts:71](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-photo-options.interface.ts#L71)
