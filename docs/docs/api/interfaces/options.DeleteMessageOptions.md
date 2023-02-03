---
id: "options.DeleteMessageOptions"
title: "Interface: DeleteMessageOptions"
sidebar_label: "DeleteMessageOptions"
custom_edit_url: null
---

[options](../modules/options.md).DeleteMessageOptions

Use this method to delete a message, including service messages, with the
following limitations:
- A message can only be deleted if it was sent less than 48 hours ago.
- Service messages about a supergroup, channel, or forum topic creation can't be
deleted.
- A dice message in a private chat can only be deleted if it was sent more than
24 hours ago.
- Bots can delete outgoing messages in private chats, groups, and supergroups.
- Bots can delete incoming messages in private chats.
- Bots granted can_post_messages permissions can delete outgoing messages in
channels.
- If the bot is an administrator of a group, it can delete any message there.
- If the bot has can_delete_messages permission in a supergroup or a channel, it
can delete any message there.
Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#deletemessage](https://core.telegram.org/bots/api#deletemessage)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/delete-message-options.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/delete-message-options.interface.ts#L24)

___

### messageId

• **messageId**: `number`

Identifier of the message to delete

#### Defined in

[options/delete-message-options.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/delete-message-options.interface.ts#L29)
