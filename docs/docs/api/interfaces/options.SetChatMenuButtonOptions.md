---
id: "options.SetChatMenuButtonOptions"
title: "Interface: SetChatMenuButtonOptions"
sidebar_label: "SetChatMenuButtonOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetChatMenuButtonOptions

Use this method to change the bot's menu button in a private chat, or the
default menu button. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#setchatmenubutton](https://core.telegram.org/bots/api#setchatmenubutton)

## Properties

### chatId

• `Optional` **chatId**: `number`

Unique identifier for the target private chat. If not specified, default bot's
menu button will be changed

#### Defined in

[options/set-chat-menu-button-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-menu-button-options.interface.ts#L13)

___

### menuButton

• `Optional` **menuButton**: [`MenuButton`](../modules/types.md#menubutton)

A JSON-serialized object for the bot's new menu button. Defaults to
MenuButtonDefault

#### Defined in

[options/set-chat-menu-button-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-chat-menu-button-options.interface.ts#L19)
