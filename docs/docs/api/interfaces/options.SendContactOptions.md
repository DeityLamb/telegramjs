---
id: "options.SendContactOptions"
title: "Interface: SendContactOptions"
sidebar_label: "SendContactOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendContactOptions

Use this method to send phone contacts. On success, the sent Message is
returned.

**`See`**

[https://core.telegram.org/bots/api#sendcontact](https://core.telegram.org/bots/api#sendcontact)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-contact-options.interface.ts:63](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L63)

___

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/send-contact-options.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L16)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-contact-options.interface.ts:47](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L47)

___

### firstName

• **firstName**: `string`

Contact's first name

#### Defined in

[options/send-contact-options.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L32)

___

### lastName

• `Optional` **lastName**: `string`

Contact's last name

#### Defined in

[options/send-contact-options.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L37)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-contact-options.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L22)

___

### phoneNumber

• **phoneNumber**: `string`

Contact's phone number

#### Defined in

[options/send-contact-options.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L27)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-contact-options.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L52)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md) \| [`ReplyKeyboardMarkup`](types.ReplyKeyboardMarkup.md) \| [`ReplyKeyboardRemove`](types.ReplyKeyboardRemove.md) \| [`ForceReply`](types.ForceReply.md)

Additional interface options. A JSON-serialized object for an inline keyboard,
custom reply keyboard, instructions to remove reply keyboard or to force a reply
from the user.

#### Defined in

[options/send-contact-options.interface.ts:70](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L70)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-contact-options.interface.ts:57](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L57)

___

### vcard

• `Optional` **vcard**: `string`

Additional data about the contact in the form of a vCard, 0-2048 bytes

#### Defined in

[options/send-contact-options.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-contact-options.interface.ts#L42)
