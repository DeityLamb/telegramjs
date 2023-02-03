---
id: "options.SetChatAdministratorCustomTitleOptions"
title: "Interface: SetChatAdministratorCustomTitleOptions"
sidebar_label: "SetChatAdministratorCustomTitleOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetChatAdministratorCustomTitleOptions

Use this method to set a custom title for an administrator in a supergroup
promoted by the bot. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#setchatadministratorcustomtitle](https://core.telegram.org/bots/api#setchatadministratorcustomtitle)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/set-chat-administrator-custom-title-options.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-administrator-custom-title-options.interface.ts#L11)

___

### customTitle

• **customTitle**: `string`

New custom title for the administrator; 0-16 characters, emoji are not allowed

#### Defined in

[options/set-chat-administrator-custom-title-options.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-administrator-custom-title-options.interface.ts#L21)

___

### userId

• **userId**: `number`

Unique identifier of the target user

#### Defined in

[options/set-chat-administrator-custom-title-options.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-administrator-custom-title-options.interface.ts#L16)
