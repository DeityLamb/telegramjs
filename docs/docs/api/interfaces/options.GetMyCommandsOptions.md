---
id: "options.GetMyCommandsOptions"
title: "Interface: GetMyCommandsOptions"
sidebar_label: "GetMyCommandsOptions"
custom_edit_url: null
---

[options](../modules/options.md).GetMyCommandsOptions

Use this method to get the current list of the bot's commands for the given
scope and user language. Returns an Array of BotCommand objects. If commands
aren't set, an empty list is returned.

**`See`**

[https://core.telegram.org/bots/api#getmycommands](https://core.telegram.org/bots/api#getmycommands)

## Properties

### languageCode

• `Optional` **languageCode**: `string`

A two-letter ISO 639-1 language code or an empty string

#### Defined in

[options/get-my-commands-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-my-commands-options.interface.ts#L19)

___

### scope

• `Optional` **scope**: [`BotCommandScope`](../modules/types.md#botcommandscope)

A JSON-serialized object, describing scope of users. Defaults to
BotCommandScopeDefault.

#### Defined in

[options/get-my-commands-options.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-my-commands-options.interface.ts#L14)
