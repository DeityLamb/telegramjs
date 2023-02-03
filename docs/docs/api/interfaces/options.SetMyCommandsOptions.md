---
id: "options.SetMyCommandsOptions"
title: "Interface: SetMyCommandsOptions"
sidebar_label: "SetMyCommandsOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetMyCommandsOptions

Use this method to change the list of the bot's commands. See this manual for
more details about bot commands. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#setmycommands](https://core.telegram.org/bots/api#setmycommands)

## Properties

### commands

• **commands**: [`BotCommand`](types.BotCommand.md)

A JSON-serialized list of bot commands to be set as the list of the bot's
commands. At most 100 commands can be specified.

#### Defined in

[options/set-my-commands-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-my-commands-options.interface.ts#L14)

___

### languageCode

• `Optional` **languageCode**: `string`

A two-letter ISO 639-1 language code. If empty, commands will be applied to all
users from the given scope, for whose language there are no dedicated commands

#### Defined in

[options/set-my-commands-options.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-my-commands-options.interface.ts#L26)

___

### scope

• `Optional` **scope**: [`BotCommandScope`](../modules/types.md#botcommandscope)

A JSON-serialized object, describing scope of users for which the commands are
relevant. Defaults to BotCommandScopeDefault.

#### Defined in

[options/set-my-commands-options.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-my-commands-options.interface.ts#L20)
