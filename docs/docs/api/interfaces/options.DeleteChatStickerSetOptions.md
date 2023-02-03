---
id: "options.DeleteChatStickerSetOptions"
title: "Interface: DeleteChatStickerSetOptions"
sidebar_label: "DeleteChatStickerSetOptions"
custom_edit_url: null
---

[options](../modules/options.md).DeleteChatStickerSetOptions

Use this method to delete a group sticker set from a supergroup. The bot must be
an administrator in the chat for this to work and must have the appropriate
administrator rights. Use the field can_set_sticker_set optionally returned in
getChat requests to check if the bot can use this method. Returns True on
success.

**`See`**

[https://core.telegram.org/bots/api#deletechatstickerset](https://core.telegram.org/bots/api#deletechatstickerset)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/delete-chat-sticker-set-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/delete-chat-sticker-set-options.interface.ts#L14)
