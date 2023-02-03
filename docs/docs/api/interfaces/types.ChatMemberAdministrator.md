---
id: "types.ChatMemberAdministrator"
title: "Interface: ChatMemberAdministrator"
sidebar_label: "ChatMemberAdministrator"
custom_edit_url: null
---

[types](../modules/types.md).ChatMemberAdministrator

Represents a chat member that has some additional privileges.

**`See`**

[https://core.telegram.org/bots/api#chatmemberadministrator](https://core.telegram.org/bots/api#chatmemberadministrator)

## Properties

### canBeEdited

• **canBeEdited**: `boolean`

True, if the bot is allowed to edit administrator privileges of that user

#### Defined in

[types/chat-member-administrator.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L21)

___

### canChangeInfo

• **canChangeInfo**: `boolean`

True, if the user is allowed to change the chat title, photo and other settings

#### Defined in

[types/chat-member-administrator.interface.ts:61](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L61)

___

### canDeleteMessages

• **canDeleteMessages**: `boolean`

True, if the administrator can delete messages of other users

#### Defined in

[types/chat-member-administrator.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L39)

___

### canEditMessages

• `Optional` **canEditMessages**: `boolean`

True, if the administrator can edit messages of other users and can pin
messages; channels only

#### Defined in

[types/chat-member-administrator.interface.ts:77](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L77)

___

### canInviteUsers

• **canInviteUsers**: `boolean`

True, if the user is allowed to invite new users to the chat

#### Defined in

[types/chat-member-administrator.interface.ts:66](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L66)

___

### canManageChat

• **canManageChat**: `boolean`

True, if the administrator can access the chat event log, chat statistics,
message statistics in channels, see channel members, see anonymous
administrators in supergroups and ignore slow mode. Implied by any other
administrator privilege

#### Defined in

[types/chat-member-administrator.interface.ts:34](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L34)

___

### canManageTopics

• `Optional` **canManageTopics**: `boolean`

True, if the user is allowed to create, rename, close, and reopen forum topics;
supergroups only

#### Defined in

[types/chat-member-administrator.interface.ts:88](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L88)

___

### canManageVideoChats

• **canManageVideoChats**: `boolean`

True, if the administrator can manage video chats

#### Defined in

[types/chat-member-administrator.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L44)

___

### canPinMessages

• `Optional` **canPinMessages**: `boolean`

True, if the user is allowed to pin messages; groups and supergroups only

#### Defined in

[types/chat-member-administrator.interface.ts:82](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L82)

___

### canPostMessages

• `Optional` **canPostMessages**: `boolean`

True, if the administrator can post in the channel; channels only

#### Defined in

[types/chat-member-administrator.interface.ts:71](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L71)

___

### canPromoteMembers

• **canPromoteMembers**: `boolean`

True, if the administrator can add new administrators with a subset of their own
privileges or demote administrators that they have promoted, directly or
indirectly (promoted by administrators that were appointed by the user)

#### Defined in

[types/chat-member-administrator.interface.ts:56](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L56)

___

### canRestrictMembers

• **canRestrictMembers**: `boolean`

True, if the administrator can restrict, ban or unban chat members

#### Defined in

[types/chat-member-administrator.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L49)

___

### customTitle

• `Optional` **customTitle**: `string`

Custom title for this user

#### Defined in

[types/chat-member-administrator.interface.ts:93](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L93)

___

### isAnonymous

• **isAnonymous**: `boolean`

True, if the user's presence in the chat is hidden

#### Defined in

[types/chat-member-administrator.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L26)

___

### status

• **status**: ``"administrator"``

The member's status in the chat, always "administrator"

#### Defined in

[types/chat-member-administrator.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L11)

___

### user

• **user**: [`User`](types.User.md)

Information about the user

#### Defined in

[types/chat-member-administrator.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-member-administrator.interface.ts#L16)
