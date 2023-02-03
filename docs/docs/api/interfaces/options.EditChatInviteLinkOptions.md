---
id: "options.EditChatInviteLinkOptions"
title: "Interface: EditChatInviteLinkOptions"
sidebar_label: "EditChatInviteLinkOptions"
custom_edit_url: null
---

[options](../modules/options.md).EditChatInviteLinkOptions

Use this method to edit a non-primary invite link created by the bot. The bot
must be an administrator in the chat for this to work and must have the
appropriate administrator rights. Returns the edited invite link as a
ChatInviteLink object.

**`See`**

[https://core.telegram.org/bots/api#editchatinvitelink](https://core.telegram.org/bots/api#editchatinvitelink)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/edit-chat-invite-link-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-chat-invite-link-options.interface.ts#L13)

___

### createsJoinRequest

• `Optional` **createsJoinRequest**: `boolean`

True, if users joining the chat via the link need to be approved by chat
administrators. If True, member_limit can't be specified

#### Defined in

[options/edit-chat-invite-link-options.interface.ts:40](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-chat-invite-link-options.interface.ts#L40)

___

### expireDate

• `Optional` **expireDate**: `number`

Point in time (Unix timestamp) when the link will expire

#### Defined in

[options/edit-chat-invite-link-options.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-chat-invite-link-options.interface.ts#L28)

___

### inviteLink

• **inviteLink**: `string`

The invite link to edit

#### Defined in

[options/edit-chat-invite-link-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-chat-invite-link-options.interface.ts#L18)

___

### memberLimit

• `Optional` **memberLimit**: `number`

The maximum number of users that can be members of the chat simultaneously after
joining the chat via this invite link; 1-99999

#### Defined in

[options/edit-chat-invite-link-options.interface.ts:34](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-chat-invite-link-options.interface.ts#L34)

___

### name

• `Optional` **name**: `string`

Invite link name; 0-32 characters

#### Defined in

[options/edit-chat-invite-link-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-chat-invite-link-options.interface.ts#L23)
