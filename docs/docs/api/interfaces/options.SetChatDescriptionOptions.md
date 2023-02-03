---
id: "options.SetChatDescriptionOptions"
title: "Interface: SetChatDescriptionOptions"
sidebar_label: "SetChatDescriptionOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetChatDescriptionOptions

Use this method to change the description of a group, a supergroup or a channel.
The bot must be an administrator in the chat for this to work and must have the
appropriate administrator rights. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#setchatdescription](https://core.telegram.org/bots/api#setchatdescription)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/set-chat-description-options.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-description-options.interface.ts#L12)

___

### description

• `Optional` **description**: `string`

New chat description, 0-255 characters

#### Defined in

[options/set-chat-description-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-description-options.interface.ts#L17)
