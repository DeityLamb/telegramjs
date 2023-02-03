---
id: "types.ReplyKeyboardMarkup"
title: "Interface: ReplyKeyboardMarkup"
sidebar_label: "ReplyKeyboardMarkup"
custom_edit_url: null
---

[types](../modules/types.md).ReplyKeyboardMarkup

This object represents a custom keyboard with reply options (see Introduction to
bots for details and examples).

**`See`**

[https://core.telegram.org/bots/api#replykeyboardmarkup](https://core.telegram.org/bots/api#replykeyboardmarkup)

## Properties

### inputFieldPlaceholder

• `Optional` **inputFieldPlaceholder**: `string`

The placeholder to be shown in the input field when the keyboard is active;
1-64 characters

#### Defined in

[types/reply-keyboard-markup.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/reply-keyboard-markup.interface.ts#L41)

___

### isPersistent

• `Optional` **isPersistent**: `boolean`

Requests clients to always show the keyboard when the regular keyboard is
hidden. Defaults to false, in which case the custom keyboard can be hidden and
opened with a keyboard icon.

#### Defined in

[types/reply-keyboard-markup.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/reply-keyboard-markup.interface.ts#L19)

___

### keyboard

• **keyboard**: [`KeyboardButton`](types.KeyboardButton.md)

Array of button rows, each represented by an Array of KeyboardButton objects

#### Defined in

[types/reply-keyboard-markup.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/reply-keyboard-markup.interface.ts#L12)

___

### oneTimeKeyboard

• `Optional` **oneTimeKeyboard**: `boolean`

Requests clients to hide the keyboard as soon as it's been used. The keyboard
will still be available, but clients will automatically display the usual
letter-keyboard in the chat - the user can press a special button in the input
field to see the custom keyboard again. Defaults to false.

#### Defined in

[types/reply-keyboard-markup.interface.ts:35](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/reply-keyboard-markup.interface.ts#L35)

___

### resizeKeyboard

• `Optional` **resizeKeyboard**: `boolean`

Requests clients to resize the keyboard vertically for optimal fit (e.g., make
the keyboard smaller if there are just two rows of buttons). Defaults to false,
in which case the custom keyboard is always of the same height as the app's
standard keyboard.

#### Defined in

[types/reply-keyboard-markup.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/reply-keyboard-markup.interface.ts#L27)

___

### selective

• `Optional` **selective**: `boolean`

Use this parameter if you want to show the keyboard to specific users only.
Targets: 1) users that are

**`Mentioned`**

in the text of the Message object; 2) if
the bot's message is a reply (has reply_to_message_id), sender of the original
message. Example: A user requests to change the bot's language, bot replies to
the request with a keyboard to select the new language. Other users in the group
don't see the keyboard.

#### Defined in

[types/reply-keyboard-markup.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/reply-keyboard-markup.interface.ts#L51)
