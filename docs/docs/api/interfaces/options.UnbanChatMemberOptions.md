---
id: "options.UnbanChatMemberOptions"
title: "Interface: UnbanChatMemberOptions"
sidebar_label: "UnbanChatMemberOptions"
custom_edit_url: null
---

[options](../modules/options.md).UnbanChatMemberOptions

Use this method to unban a previously banned user in a supergroup or channel.
The user will not return to the group or channel automatically, but will be able
to join via link, etc. The bot must be an administrator for this to work. By
default, this method guarantees that after the call the user is not a member of
the chat, but will be able to join it. So if the user is a member of the chat
they will also be removed from the chat. If you don't want this, use the
parameter only_if_banned. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#unbanchatmember](https://core.telegram.org/bots/api#unbanchatmember)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target group or username of the target supergroup or
channel (in the format @channelusername)

#### Defined in

[options/unban-chat-member-options.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/unban-chat-member-options.interface.ts#L16)

___

### onlyIfBanned

• `Optional` **onlyIfBanned**: `boolean`

Do nothing if the user is not banned

#### Defined in

[options/unban-chat-member-options.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/unban-chat-member-options.interface.ts#L26)

___

### userId

• **userId**: `number`

Unique identifier of the target user

#### Defined in

[options/unban-chat-member-options.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/unban-chat-member-options.interface.ts#L21)
