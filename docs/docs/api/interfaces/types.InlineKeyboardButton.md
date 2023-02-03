---
id: "types.InlineKeyboardButton"
title: "Interface: InlineKeyboardButton"
sidebar_label: "InlineKeyboardButton"
custom_edit_url: null
---

[types](../modules/types.md).InlineKeyboardButton

This object represents one button of an inline keyboard. You must use exactly
one of the optional fields.

**`See`**

[https://core.telegram.org/bots/api#inlinekeyboardbutton](https://core.telegram.org/bots/api#inlinekeyboardbutton)

## Properties

### callbackData

• `Optional` **callbackData**: `string`

Data to be sent in a callback query to the bot when button is pressed, 1-64
bytes

#### Defined in

[types/inline-keyboard-button.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-keyboard-button.interface.ts#L27)

___

### callbackGame

• `Optional` **callbackGame**: [`CallbackGame`](types.CallbackGame.md)

Description of the game that will be launched when the user presses the button.
NOTE: This type of button must always be the first button in the first row.

#### Defined in

[types/inline-keyboard-button.interface.ts:68](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-keyboard-button.interface.ts#L68)

___

### loginUrl

• `Optional` **loginUrl**: [`LoginUrl`](types.LoginUrl.md)

An HTTPS URL used to automatically authorize the user. Can be used as a
replacement for the Telegram Login Widget.

#### Defined in

[types/inline-keyboard-button.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-keyboard-button.interface.ts#L41)

___

### pay

• `Optional` **pay**: `boolean`

Specify True, to send a Pay button. NOTE: This type of button must always be
the first button in the first row and can only be used in invoice messages.

#### Defined in

[types/inline-keyboard-button.interface.ts:74](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-keyboard-button.interface.ts#L74)

___

### switchInlineQuery

• `Optional` **switchInlineQuery**: `string`

If set, pressing the button will prompt the user to select one of their chats,
open that chat and insert the bot's username and the specified inline query in
the input field. May be empty, in which case just the bot's username will be
inserted. Note: This offers an easy way for users to start using your bot in
inline mode when they are currently in a private chat with it. Especially useful
when combined with switch_pm... actions - in this case the user will be
automatically returned to the chat they switched from, skipping the chat
selection screen.

#### Defined in

[types/inline-keyboard-button.interface.ts:53](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-keyboard-button.interface.ts#L53)

___

### switchInlineQueryCurrentChat

• `Optional` **switchInlineQueryCurrentChat**: `string`

If set, pressing the button will insert the bot's username and the specified
inline query in the current chat's input field. May be empty, in which case only
the bot's username will be inserted. This offers a quick way for the user to
open your bot in inline mode in the same chat - good for selecting something
from multiple options.

#### Defined in

[types/inline-keyboard-button.interface.ts:62](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-keyboard-button.interface.ts#L62)

___

### text

• **text**: `string`

Label text on the button

#### Defined in

[types/inline-keyboard-button.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-keyboard-button.interface.ts#L14)

___

### url

• `Optional` **url**: `string`

HTTP or tg:// URL to be opened when the button is pressed. Links
tg://user?id=<user_id> can be used to mention a user by their ID without using a
username, if this is allowed by their privacy settings.

#### Defined in

[types/inline-keyboard-button.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-keyboard-button.interface.ts#L21)

___

### webApp

• `Optional` **webApp**: [`WebAppInfo`](types.WebAppInfo.md)

Description of the Web App that will be launched when the user presses the
button. The Web App will be able to send an arbitrary message on behalf of the
user using the method answerWebAppQuery. Available only in private chats between
a user and the bot.

#### Defined in

[types/inline-keyboard-button.interface.ts:35](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-keyboard-button.interface.ts#L35)
