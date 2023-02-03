---
id: "options.SetChatStickerSetOptions"
title: "Interface: SetChatStickerSetOptions"
sidebar_label: "SetChatStickerSetOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetChatStickerSetOptions

Use this method to set a new group sticker set for a supergroup. The bot must be
an administrator in the chat for this to work and must have the appropriate
administrator rights. Use the field can_set_sticker_set optionally returned in
getChat requests to check if the bot can use this method. Returns True on
success.

**`See`**

[https://core.telegram.org/bots/api#setchatstickerset](https://core.telegram.org/bots/api#setchatstickerset)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/set-chat-sticker-set-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-sticker-set-options.interface.ts#L14)

___

### stickerSetName

• **stickerSetName**: `string`

Name of the sticker set to be set as the group sticker set

#### Defined in

[options/set-chat-sticker-set-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-sticker-set-options.interface.ts#L19)
