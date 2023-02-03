---
id: "options.GetMyDefaultAdministratorRightsOptions"
title: "Interface: GetMyDefaultAdministratorRightsOptions"
sidebar_label: "GetMyDefaultAdministratorRightsOptions"
custom_edit_url: null
---

[options](../modules/options.md).GetMyDefaultAdministratorRightsOptions

Use this method to get the current default administrator rights of the bot.
Returns ChatAdministratorRights on success.

**`See`**

[https://core.telegram.org/bots/api#getmydefaultadministratorrights](https://core.telegram.org/bots/api#getmydefaultadministratorrights)

## Properties

### forChannels

• `Optional` **forChannels**: `boolean`

Pass True to get default administrator rights of the bot in channels. Otherwise,
default administrator rights of the bot for groups and supergroups will be
returned.

#### Defined in

[options/get-my-default-administrator-rights-options.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-my-default-administrator-rights-options.interface.ts#L12)
