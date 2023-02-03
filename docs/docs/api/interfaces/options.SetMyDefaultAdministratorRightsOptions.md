---
id: "options.SetMyDefaultAdministratorRightsOptions"
title: "Interface: SetMyDefaultAdministratorRightsOptions"
sidebar_label: "SetMyDefaultAdministratorRightsOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetMyDefaultAdministratorRightsOptions

Use this method to change the default administrator rights requested by the bot
when it's added as an administrator to groups or channels. These rights will be
suggested to users, but they are are free to modify the list before adding the
bot. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#setmydefaultadministratorrights](https://core.telegram.org/bots/api#setmydefaultadministratorrights)

## Properties

### forChannels

• `Optional` **forChannels**: `boolean`

Pass True to change the default administrator rights of the bot in channels.
Otherwise, the default administrator rights of the bot for groups and
supergroups will be changed.

#### Defined in

[options/set-my-default-administrator-rights-options.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-my-default-administrator-rights-options.interface.ts#L22)

___

### rights

• `Optional` **rights**: [`ChatAdministratorRights`](types.ChatAdministratorRights.md)

A JSON-serialized object describing new default administrator rights. If not
specified, the default administrator rights will be cleared.

#### Defined in

[options/set-my-default-administrator-rights-options.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-my-default-administrator-rights-options.interface.ts#L15)
