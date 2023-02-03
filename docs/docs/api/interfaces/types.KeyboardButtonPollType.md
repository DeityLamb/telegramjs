---
id: "types.KeyboardButtonPollType"
title: "Interface: KeyboardButtonPollType"
sidebar_label: "KeyboardButtonPollType"
custom_edit_url: null
---

[types](../modules/types.md).KeyboardButtonPollType

This object represents type of a poll, which is allowed to be created and sent
when the corresponding button is pressed.

**`See`**

[https://core.telegram.org/bots/api#keyboardbuttonpolltype](https://core.telegram.org/bots/api#keyboardbuttonpolltype)

## Properties

### type

• `Optional` **type**: `string`

If quiz is passed, the user will be allowed to create only polls in the quiz
mode. If regular is passed, only regular polls will be allowed. Otherwise, the
user will be allowed to create a poll of any type.

#### Defined in

[types/keyboard-button-poll-type.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/keyboard-button-poll-type.interface.ts#L12)
