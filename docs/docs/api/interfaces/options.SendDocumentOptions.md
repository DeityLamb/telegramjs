---
id: "options.SendDocumentOptions"
title: "Interface: SendDocumentOptions"
sidebar_label: "SendDocumentOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendDocumentOptions

Use this method to send general files. On success, the sent Message is returned.
Bots can currently send files of any type of up to 50 MB in size, this limit may
be changed in the future.

**`See`**

[https://core.telegram.org/bots/api#senddocument](https://core.telegram.org/bots/api#senddocument)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-document-options.interface.ts:90](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L90)

___

### caption

• `Optional` **caption**: `string`

Document caption (may also be used when resending documents by file_id), 0-1024
characters after entities parsing

#### Defined in

[options/send-document-options.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L51)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

A JSON-serialized list of special entities that appear in the caption, which can
be specified instead of parse_mode

#### Defined in

[options/send-document-options.interface.ts:63](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L63)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-document-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L19)

___

### disableContentTypeDetection

• `Optional` **disableContentTypeDetection**: `boolean`

Disables automatic server-side content type detection for files uploaded using
multipart/form-data

#### Defined in

[options/send-document-options.interface.ts:69](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L69)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-document-options.interface.ts:74](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L74)

___

### document

• **document**: `string` \| [`InputFile`](types.InputFile.md)

File to send. Pass a file_id as String to send a file that exists on the
Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get
a file from the Internet, or upload a new one using multipart/form-data. More
information on Sending Files: https://core.telegram.org/bots/api#sending-files

#### Defined in

[options/send-document-options.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L33)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-document-options.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L25)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the document caption. See formatting options for
more details.

#### Defined in

[options/send-document-options.interface.ts:57](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L57)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-document-options.interface.ts:79](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L79)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-document-options.interface.ts:97](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L97)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-document-options.interface.ts:84](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L84)

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

[options/send-document-options.interface.ts:45](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-document-options.interface.ts#L45)
