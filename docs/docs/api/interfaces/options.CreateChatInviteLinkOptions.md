---
id: "options.CreateChatInviteLinkOptions"
title: "Interface: CreateChatInviteLinkOptions"
sidebar_label: "CreateChatInviteLinkOptions"
custom_edit_url: null
---

[options](../modules/options.md).CreateChatInviteLinkOptions

Use this method to create an additional invite link for a chat. The bot must be
an administrator in the chat for this to work and must have the appropriate
administrator rights. The link can be revoked using the method
revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.

**`See`**

[https://core.telegram.org/bots/api#createchatinvitelink](https://core.telegram.org/bots/api#createchatinvitelink)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/create-chat-invite-link-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-chat-invite-link-options.interface.ts#L13)

___

### createsJoinRequest

• `Optional` **createsJoinRequest**: `boolean`

True, if users joining the chat via the link need to be approved by chat
administrators. If True, member_limit can't be specified

#### Defined in

[options/create-chat-invite-link-options.interface.ts:35](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-chat-invite-link-options.interface.ts#L35)

___

### expireDate

• `Optional` **expireDate**: `number`

Point in time (Unix timestamp) when the link will expire

#### Defined in

[options/create-chat-invite-link-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-chat-invite-link-options.interface.ts#L23)

___

### memberLimit

• `Optional` **memberLimit**: `number`

The maximum number of users that can be members of the chat simultaneously after
joining the chat via this invite link; 1-99999

#### Defined in

[options/create-chat-invite-link-options.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-chat-invite-link-options.interface.ts#L29)

___

### name

• `Optional` **name**: `string`

Invite link name; 0-32 characters

#### Defined in

[options/create-chat-invite-link-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-chat-invite-link-options.interface.ts#L18)
