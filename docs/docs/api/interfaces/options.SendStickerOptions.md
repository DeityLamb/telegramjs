---
id: "options.SendStickerOptions"
title: "Interface: SendStickerOptions"
sidebar_label: "SendStickerOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendStickerOptions

Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On
success, the sent Message is returned.

**`See`**

[https://core.telegram.org/bots/api#sendsticker](https://core.telegram.org/bots/api#sendsticker)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-sticker-options.interface.ts:53](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-sticker-options.interface.ts#L53)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-sticker-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-sticker-options.interface.ts#L17)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-sticker-options.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-sticker-options.interface.ts#L37)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-sticker-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-sticker-options.interface.ts#L23)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-sticker-options.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-sticker-options.interface.ts#L42)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-sticker-options.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-sticker-options.interface.ts#L60)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-sticker-options.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-sticker-options.interface.ts#L47)

___

### sticker

• **sticker**: `string` \| [`InputFile`](types.InputFile.md)

Sticker to send. Pass a file_id as String to send a file that exists on the
Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get
a .WEBP file from the Internet, or upload a new one using multipart/form-data.
More information on Sending Files:
https://core.telegram.org/bots/api#sending-files

#### Defined in

[options/send-sticker-options.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-sticker-options.interface.ts#L32)
