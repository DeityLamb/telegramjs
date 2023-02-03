---
id: "options.SendChatActionOptions"
title: "Interface: SendChatActionOptions"
sidebar_label: "SendChatActionOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendChatActionOptions

Use this method when you need to tell the user that something is happening on
the bot's side. The status is set for 5 seconds or less (when a message arrives
from your bot, Telegram clients clear its typing status). Returns True on
success.
We only recommend using this method when a response from the bot will take a
noticeable amount of time to arrive.

**`See`**

[https://core.telegram.org/bots/api#sendchataction](https://core.telegram.org/bots/api#sendchataction)

## Properties

### action

• **action**: `string`

Type of action to broadcast. Choose one, depending on what the user is about to
receive: typing for text messages, upload_photo for photos, record_video or
upload_video for videos, record_voice or upload_voice for voice notes,
upload_document for general files, choose_sticker for stickers, find_location
for location data, record_video_note or upload_video_note for video notes.

#### Defined in

[options/send-chat-action-options.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-chat-action-options.interface.ts#L29)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-chat-action-options.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-chat-action-options.interface.ts#L15)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread; supergroups only

#### Defined in

[options/send-chat-action-options.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-chat-action-options.interface.ts#L20)
