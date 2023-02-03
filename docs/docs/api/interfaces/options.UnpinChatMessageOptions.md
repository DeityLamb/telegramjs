---
id: "options.UnpinChatMessageOptions"
title: "Interface: UnpinChatMessageOptions"
sidebar_label: "UnpinChatMessageOptions"
custom_edit_url: null
---

[options](../modules/options.md).UnpinChatMessageOptions

Use this method to remove a message from the list of pinned messages in a chat.
If the chat is not a private chat, the bot must be an administrator in the chat
for this to work and must have the 'can_pin_messages' administrator right in a
supergroup or 'can_edit_messages' administrator right in a channel. Returns True
on success.

**`See`**

[https://core.telegram.org/bots/api#unpinchatmessage](https://core.telegram.org/bots/api#unpinchatmessage)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/unpin-chat-message-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/unpin-chat-message-options.interface.ts#L14)

___

### messageId

• `Optional` **messageId**: `number`

Identifier of a message to unpin. If not specified, the most recent pinned
message (by sending date) will be unpinned.

#### Defined in

[options/unpin-chat-message-options.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/unpin-chat-message-options.interface.ts#L20)
