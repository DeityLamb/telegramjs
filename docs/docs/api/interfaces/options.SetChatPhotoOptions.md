---
id: "options.SetChatPhotoOptions"
title: "Interface: SetChatPhotoOptions"
sidebar_label: "SetChatPhotoOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetChatPhotoOptions

Use this method to set a new profile photo for the chat. Photos can't be changed
for private chats. The bot must be an administrator in the chat for this to work
and must have the appropriate administrator rights. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#setchatphoto](https://core.telegram.org/bots/api#setchatphoto)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/set-chat-photo-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-photo-options.interface.ts#L14)

___

### photo

• **photo**: [`InputFile`](types.InputFile.md)

New chat photo, uploaded using multipart/form-data

#### Defined in

[options/set-chat-photo-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-photo-options.interface.ts#L19)
