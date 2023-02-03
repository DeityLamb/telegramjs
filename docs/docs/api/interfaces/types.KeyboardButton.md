---
id: "types.KeyboardButton"
title: "Interface: KeyboardButton"
sidebar_label: "KeyboardButton"
custom_edit_url: null
---

[types](../modules/types.md).KeyboardButton

This object represents one button of the reply keyboard. For simple text buttons
String can be used instead of this object to specify text of the button.
Optional fields web_app, request_contact, request_location, and request_poll are
mutually exclusive.
Note: request_contact and request_location options will only work in Telegram
versions released after 9 April, 2016. Older clients will display unsupported
message.
Note: request_poll option will only work in Telegram versions released after 23
January, 2020. Older clients will display unsupported message.
Note: web_app option will only work in Telegram versions released after 16
April, 2022. Older clients will display unsupported message.

**`See`**

[https://core.telegram.org/bots/api#keyboardbutton](https://core.telegram.org/bots/api#keyboardbutton)

## Properties

### requestContact

• `Optional` **requestContact**: `boolean`

If True, the user's phone number will be sent as a contact when the button is
pressed. Available in private chats only.

#### Defined in

[types/keyboard-button.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/keyboard-button.interface.ts#L29)

___

### requestLocation

• `Optional` **requestLocation**: `boolean`

If True, the user's current location will be sent when the button is pressed.
Available in private chats only.

#### Defined in

[types/keyboard-button.interface.ts:35](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/keyboard-button.interface.ts#L35)

___

### requestPoll

• `Optional` **requestPoll**: [`KeyboardButtonPollType`](types.KeyboardButtonPollType.md)

If specified, the user will be asked to create a poll and send it to the bot
when the button is pressed. Available in private chats only.

#### Defined in

[types/keyboard-button.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/keyboard-button.interface.ts#L41)

___

### text

• **text**: `string`

Text of the button. If none of the optional fields are used, it will be sent as
a message when the button is pressed

#### Defined in

[types/keyboard-button.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/keyboard-button.interface.ts#L23)

___

### webApp

• `Optional` **webApp**: [`WebAppInfo`](types.WebAppInfo.md)

If specified, the described Web App will be launched when the button is
pressed. The Web App will be able to send a "web_app_data" service message.
Available in private chats only.

#### Defined in

[types/keyboard-button.interface.ts:48](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/keyboard-button.interface.ts#L48)
