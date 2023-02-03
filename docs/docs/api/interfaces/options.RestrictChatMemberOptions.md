---
id: "options.RestrictChatMemberOptions"
title: "Interface: RestrictChatMemberOptions"
sidebar_label: "RestrictChatMemberOptions"
custom_edit_url: null
---

[options](../modules/options.md).RestrictChatMemberOptions

Use this method to restrict a user in a supergroup. The bot must be an
administrator in the supergroup for this to work and must have the appropriate
administrator rights. Pass True for all permissions to lift restrictions from a
user. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#restrictchatmember](https://core.telegram.org/bots/api#restrictchatmember)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/restrict-chat-member-options.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/restrict-chat-member-options.interface.ts#L15)

___

### permissions

• **permissions**: [`ChatPermissions`](types.ChatPermissions.md)

A JSON-serialized object for new user permissions

#### Defined in

[options/restrict-chat-member-options.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/restrict-chat-member-options.interface.ts#L25)

___

### untilDate

• `Optional` **untilDate**: `number`

Date when restrictions will be lifted for the user, unix time. If user is
restricted for more than 366 days or less than 30 seconds from the current time,
they are considered to be restricted forever

#### Defined in

[options/restrict-chat-member-options.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/restrict-chat-member-options.interface.ts#L32)

___

### userId

• **userId**: `number`

Unique identifier of the target user

#### Defined in

[options/restrict-chat-member-options.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/restrict-chat-member-options.interface.ts#L20)
