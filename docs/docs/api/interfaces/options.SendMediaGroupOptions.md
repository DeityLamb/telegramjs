---
id: "options.SendMediaGroupOptions"
title: "Interface: SendMediaGroupOptions"
sidebar_label: "SendMediaGroupOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendMediaGroupOptions

Use this method to send a group of photos, videos, documents or audios as an
album. Documents and audio files can be only grouped in an album with messages
of the same type. On success, an array of Messages that were sent is returned.

**`See`**

[https://core.telegram.org/bots/api#sendmediagroup](https://core.telegram.org/bots/api#sendmediagroup)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-media-group-options.interface.ts:53](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-media-group-options.interface.ts#L53)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-media-group-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-media-group-options.interface.ts#L17)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends messages silently. Users will receive a notification with no sound.

#### Defined in

[options/send-media-group-options.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-media-group-options.interface.ts#L37)

___

### media

• **media**: [`InputMediaDocument`](types.InputMediaDocument.md) \| [`InputMediaAudio`](types.InputMediaAudio.md) \| [`InputMediaPhoto`](types.InputMediaPhoto.md) \| [`InputMediaVideo`](types.InputMediaVideo.md)

A JSON-serialized array describing messages to be sent, must include 2-10 items

#### Defined in

[options/send-media-group-options.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-media-group-options.interface.ts#L28)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-media-group-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-media-group-options.interface.ts#L23)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent messages from forwarding and saving

#### Defined in

[options/send-media-group-options.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-media-group-options.interface.ts#L42)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the messages are a reply, ID of the original message

#### Defined in

[options/send-media-group-options.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-media-group-options.interface.ts#L47)
