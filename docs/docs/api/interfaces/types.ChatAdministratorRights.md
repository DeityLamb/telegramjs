---
id: "types.ChatAdministratorRights"
title: "Interface: ChatAdministratorRights"
sidebar_label: "ChatAdministratorRights"
custom_edit_url: null
---

[types](../modules/types.md).ChatAdministratorRights

Represents the rights of an administrator in a chat.

**`See`**

[https://core.telegram.org/bots/api#chatadministratorrights](https://core.telegram.org/bots/api#chatadministratorrights)

## Properties

### canChangeInfo

• **canChangeInfo**: `boolean`

True, if the user is allowed to change the chat title, photo and other settings

#### Defined in

[types/chat-administrator-rights.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L44)

___

### canDeleteMessages

• **canDeleteMessages**: `boolean`

True, if the administrator can delete messages of other users

#### Defined in

[types/chat-administrator-rights.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L22)

___

### canEditMessages

• `Optional` **canEditMessages**: `boolean`

True, if the administrator can edit messages of other users and can pin
messages; channels only

#### Defined in

[types/chat-administrator-rights.interface.ts:60](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L60)

___

### canInviteUsers

• **canInviteUsers**: `boolean`

True, if the user is allowed to invite new users to the chat

#### Defined in

[types/chat-administrator-rights.interface.ts:49](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L49)

___

### canManageChat

• **canManageChat**: `boolean`

True, if the administrator can access the chat event log, chat statistics,
message statistics in channels, see channel members, see anonymous
administrators in supergroups and ignore slow mode. Implied by any other
administrator privilege

#### Defined in

[types/chat-administrator-rights.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L17)

___

### canManageTopics

• `Optional` **canManageTopics**: `boolean`

True, if the user is allowed to create, rename, close, and reopen forum topics;
supergroups only

#### Defined in

[types/chat-administrator-rights.interface.ts:71](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L71)

___

### canManageVideoChats

• **canManageVideoChats**: `boolean`

True, if the administrator can manage video chats

#### Defined in

[types/chat-administrator-rights.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L27)

___

### canPinMessages

• `Optional` **canPinMessages**: `boolean`

True, if the user is allowed to pin messages; groups and supergroups only

#### Defined in

[types/chat-administrator-rights.interface.ts:65](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L65)

___

### canPostMessages

• `Optional` **canPostMessages**: `boolean`

True, if the administrator can post in the channel; channels only

#### Defined in

[types/chat-administrator-rights.interface.ts:54](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L54)

___

### canPromoteMembers

• **canPromoteMembers**: `boolean`

True, if the administrator can add new administrators with a subset of their own
privileges or demote administrators that they have promoted, directly or
indirectly (promoted by administrators that were appointed by the user)

#### Defined in

[types/chat-administrator-rights.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L39)

___

### canRestrictMembers

• **canRestrictMembers**: `boolean`

True, if the administrator can restrict, ban or unban chat members

#### Defined in

[types/chat-administrator-rights.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L32)

___

### isAnonymous

• **isAnonymous**: `boolean`

True, if the user's presence in the chat is hidden

#### Defined in

[types/chat-administrator-rights.interface.ts:9](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-administrator-rights.interface.ts#L9)
