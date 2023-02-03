---
id: "options.BanChatMemberOptions"
title: "Interface: BanChatMemberOptions"
sidebar_label: "BanChatMemberOptions"
custom_edit_url: null
---

[options](../modules/options.md).BanChatMemberOptions

Use this method to ban a user in a group, a supergroup or a channel. In the case
of supergroups and channels, the user will not be able to return to the chat on
their own using invite links, etc., unless unbanned first. The bot must be an
administrator in the chat for this to work and must have the appropriate
administrator rights. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#banchatmember](https://core.telegram.org/bots/api#banchatmember)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target group or username of the target supergroup or
channel (in the format @channelusername)

#### Defined in

[options/ban-chat-member-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/ban-chat-member-options.interface.ts#L14)

___

### revokeMessages

• `Optional` **revokeMessages**: `boolean`

Pass True to delete all messages from the chat for the user that is being
removed. If False, the user will be able to see messages in the group that were
sent before the user was removed. Always True for supergroups and channels.

#### Defined in

[options/ban-chat-member-options.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/ban-chat-member-options.interface.ts#L33)

___

### untilDate

• `Optional` **untilDate**: `number`

Date when the user will be unbanned, unix time. If user is banned for more than
366 days or less than 30 seconds from the current time they are considered to be
banned forever. Applied for supergroups and channels only.

#### Defined in

[options/ban-chat-member-options.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/ban-chat-member-options.interface.ts#L26)

___

### userId

• **userId**: `number`

Unique identifier of the target user

#### Defined in

[options/ban-chat-member-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/ban-chat-member-options.interface.ts#L19)
