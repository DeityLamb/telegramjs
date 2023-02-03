---
id: "options.PinChatMessageOptions"
title: "Interface: PinChatMessageOptions"
sidebar_label: "PinChatMessageOptions"
custom_edit_url: null
---

[options](../modules/options.md).PinChatMessageOptions

Use this method to add a message to the list of pinned messages in a chat. If
the chat is not a private chat, the bot must be an administrator in the chat for
this to work and must have the 'can_pin_messages' administrator right in a
supergroup or 'can_edit_messages' administrator right in a channel. Returns True
on success.

**`See`**

[https://core.telegram.org/bots/api#pinchatmessage](https://core.telegram.org/bots/api#pinchatmessage)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/pin-chat-message-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/pin-chat-message-options.interface.ts#L14)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Pass True if it is not necessary to send a notification to all chat members
about the new pinned message. Notifications are always disabled in channels and
private chats.

#### Defined in

[options/pin-chat-message-options.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/pin-chat-message-options.interface.ts#L26)

___

### messageId

• **messageId**: `number`

Identifier of a message to pin

#### Defined in

[options/pin-chat-message-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/pin-chat-message-options.interface.ts#L19)
