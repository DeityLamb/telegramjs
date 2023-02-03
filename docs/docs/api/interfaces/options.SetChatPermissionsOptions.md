---
id: "options.SetChatPermissionsOptions"
title: "Interface: SetChatPermissionsOptions"
sidebar_label: "SetChatPermissionsOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetChatPermissionsOptions

Use this method to set default chat permissions for all members. The bot must be
an administrator in the group or a supergroup for this to work and must have the
can_restrict_members administrator rights. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#setchatpermissions](https://core.telegram.org/bots/api#setchatpermissions)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/set-chat-permissions-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-permissions-options.interface.ts#L14)

___

### permissions

• **permissions**: [`ChatPermissions`](types.ChatPermissions.md)

A JSON-serialized object for new default chat permissions

#### Defined in

[options/set-chat-permissions-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-permissions-options.interface.ts#L19)
