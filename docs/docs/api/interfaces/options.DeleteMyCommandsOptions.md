---
id: "options.DeleteMyCommandsOptions"
title: "Interface: DeleteMyCommandsOptions"
sidebar_label: "DeleteMyCommandsOptions"
custom_edit_url: null
---

[options](../modules/options.md).DeleteMyCommandsOptions

Use this method to delete the list of the bot's commands for the given scope and
user language. After deletion, higher level commands will be shown to affected
users. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#deletemycommands](https://core.telegram.org/bots/api#deletemycommands)

## Properties

### languageCode

• `Optional` **languageCode**: `string`

A two-letter ISO 639-1 language code. If empty, commands will be applied to all
users from the given scope, for whose language there are no dedicated commands

#### Defined in

[options/delete-my-commands-options.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/delete-my-commands-options.interface.ts#L20)

___

### scope

• `Optional` **scope**: [`BotCommandScope`](../modules/types.md#botcommandscope)

A JSON-serialized object, describing scope of users for which the commands are
relevant. Defaults to BotCommandScopeDefault.

#### Defined in

[options/delete-my-commands-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/delete-my-commands-options.interface.ts#L14)
