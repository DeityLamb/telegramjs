---
id: "options.PromoteChatMemberOptions"
title: "Interface: PromoteChatMemberOptions"
sidebar_label: "PromoteChatMemberOptions"
custom_edit_url: null
---

[options](../modules/options.md).PromoteChatMemberOptions

Use this method to promote or demote a user in a supergroup or a channel. The
bot must be an administrator in the chat for this to work and must have the
appropriate administrator rights. Pass False for all boolean parameters to
demote a user. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#promotechatmember](https://core.telegram.org/bots/api#promotechatmember)

## Properties

### canChangeInfo

• `Optional` **canChangeInfo**: `boolean`

Pass True if the administrator can change chat title, photo and other settings

#### Defined in

[options/promote-chat-member-options.interface.ts:69](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L69)

___

### canDeleteMessages

• `Optional` **canDeleteMessages**: `boolean`

Pass True if the administrator can delete messages of other users

#### Defined in

[options/promote-chat-member-options.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L47)

___

### canEditMessages

• `Optional` **canEditMessages**: `boolean`

Pass True if the administrator can edit messages of other users and can pin
messages, channels only

#### Defined in

[options/promote-chat-member-options.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L42)

___

### canInviteUsers

• `Optional` **canInviteUsers**: `boolean`

Pass True if the administrator can invite new users to the chat

#### Defined in

[options/promote-chat-member-options.interface.ts:74](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L74)

___

### canManageChat

• `Optional` **canManageChat**: `boolean`

Pass True if the administrator can access the chat event log, chat statistics,
message statistics in channels, see channel members, see anonymous
administrators in supergroups and ignore slow mode. Implied by any other
administrator privilege

#### Defined in

[options/promote-chat-member-options.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L31)

___

### canManageTopics

• `Optional` **canManageTopics**: `boolean`

Pass True if the user is allowed to create, rename, close, and reopen forum
topics, supergroups only

#### Defined in

[options/promote-chat-member-options.interface.ts:85](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L85)

___

### canManageVideoChats

• `Optional` **canManageVideoChats**: `boolean`

Pass True if the administrator can manage video chats

#### Defined in

[options/promote-chat-member-options.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L52)

___

### canPinMessages

• `Optional` **canPinMessages**: `boolean`

Pass True if the administrator can pin messages, supergroups only

#### Defined in

[options/promote-chat-member-options.interface.ts:79](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L79)

___

### canPostMessages

• `Optional` **canPostMessages**: `boolean`

Pass True if the administrator can create channel posts, channels only

#### Defined in

[options/promote-chat-member-options.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L36)

___

### canPromoteMembers

• `Optional` **canPromoteMembers**: `boolean`

Pass True if the administrator can add new administrators with a subset of their
own privileges or demote administrators that they have promoted, directly or
indirectly (promoted by administrators that were appointed by him)

#### Defined in

[options/promote-chat-member-options.interface.ts:64](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L64)

___

### canRestrictMembers

• `Optional` **canRestrictMembers**: `boolean`

Pass True if the administrator can restrict, ban or unban chat members

#### Defined in

[options/promote-chat-member-options.interface.ts:57](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L57)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/promote-chat-member-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L13)

___

### isAnonymous

• `Optional` **isAnonymous**: `boolean`

Pass True if the administrator's presence in the chat is hidden

#### Defined in

[options/promote-chat-member-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L23)

___

### userId

• **userId**: `number`

Unique identifier of the target user

#### Defined in

[options/promote-chat-member-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/promote-chat-member-options.interface.ts#L18)
