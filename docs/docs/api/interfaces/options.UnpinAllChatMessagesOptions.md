---
id: "options.UnpinAllChatMessagesOptions"
title: "Interface: UnpinAllChatMessagesOptions"
sidebar_label: "UnpinAllChatMessagesOptions"
custom_edit_url: null
---

[options](../modules/options.md).UnpinAllChatMessagesOptions

Use this method to clear the list of pinned messages in a chat. If the chat is
not a private chat, the bot must be an administrator in the chat for this to
work and must have the 'can_pin_messages' administrator right in a supergroup or
'can_edit_messages' administrator right in a channel. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#unpinallchatmessages](https://core.telegram.org/bots/api#unpinallchatmessages)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/unpin-all-chat-messages-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/unpin-all-chat-messages-options.interface.ts#L13)
