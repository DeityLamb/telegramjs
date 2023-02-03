---
id: "options.EditMessageLiveLocationOptions"
title: "Interface: EditMessageLiveLocationOptions"
sidebar_label: "EditMessageLiveLocationOptions"
custom_edit_url: null
---

[options](../modules/options.md).EditMessageLiveLocationOptions

Use this method to edit live location messages. A location can be edited until
its live_period expires or editing is explicitly disabled by a call to
stopMessageLiveLocation. On success, if the edited message is not an inline
message, the edited Message is returned, otherwise True is returned.

**`See`**

[https://core.telegram.org/bots/api#editmessagelivelocation](https://core.telegram.org/bots/api#editmessagelivelocation)

## Properties

### chatId

• `Optional` **chatId**: `string` \| `number`

Required if inline_message_id is not specified. Unique identifier for the target
chat or username of the target channel (in the format @channelusername)

#### Defined in

[options/edit-message-live-location-options.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-live-location-options.interface.ts#L15)

___

### heading

• `Optional` **heading**: `number`

Direction in which the user is moving, in degrees. Must be between 1 and 360 if
specified.

#### Defined in

[options/edit-message-live-location-options.interface.ts:48](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-live-location-options.interface.ts#L48)

___

### horizontalAccuracy

• `Optional` **horizontalAccuracy**: `number`

The radius of uncertainty for the location, measured in meters; 0-1500

#### Defined in

[options/edit-message-live-location-options.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-live-location-options.interface.ts#L42)

___

### inlineMessageId

• `Optional` **inlineMessageId**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline
message

#### Defined in

[options/edit-message-live-location-options.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-live-location-options.interface.ts#L27)

___

### latitude

• **latitude**: `number`

Latitude of new location

#### Defined in

[options/edit-message-live-location-options.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-live-location-options.interface.ts#L32)

___

### longitude

• **longitude**: `number`

Longitude of new location

#### Defined in

[options/edit-message-live-location-options.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-live-location-options.interface.ts#L37)

___

### messageId

• `Optional` **messageId**: `number`

Required if inline_message_id is not specified. Identifier of the message to
edit

#### Defined in

[options/edit-message-live-location-options.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-live-location-options.interface.ts#L21)

___

### proximityAlertRadius

• `Optional` **proximityAlertRadius**: `number`

The maximum distance for proximity alerts about approaching another chat member,
in meters. Must be between 1 and 100000 if specified.

#### Defined in

[options/edit-message-live-location-options.interface.ts:54](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-live-location-options.interface.ts#L54)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

A JSON-serialized object for a new inline keyboard.

#### Defined in

[options/edit-message-live-location-options.interface.ts:59](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-message-live-location-options.interface.ts#L59)
