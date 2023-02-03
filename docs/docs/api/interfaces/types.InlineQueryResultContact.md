---
id: "types.InlineQueryResultContact"
title: "Interface: InlineQueryResultContact"
sidebar_label: "InlineQueryResultContact"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultContact

Represents a contact with a phone number. By default, this contact will be sent
by the user. Alternatively, you can use input_message_content to send a message
with the specified content instead of the contact.
Note: This will only work in Telegram versions released after 9 April, 2016.
Older clients will ignore them.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultcontact](https://core.telegram.org/bots/api#inlinequeryresultcontact)

## Properties

### firstName

• **firstName**: `string`

Contact's first name

#### Defined in

[types/inline-query-result-contact.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L31)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 Bytes

#### Defined in

[types/inline-query-result-contact.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L21)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the contact

#### Defined in

[types/inline-query-result-contact.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L51)

___

### lastName

• `Optional` **lastName**: `string`

Contact's last name

#### Defined in

[types/inline-query-result-contact.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L36)

___

### phoneNumber

• **phoneNumber**: `string`

Contact's phone number

#### Defined in

[types/inline-query-result-contact.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L26)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-contact.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L46)

___

### thumbHeight

• `Optional` **thumbHeight**: `number`

Thumbnail height

#### Defined in

[types/inline-query-result-contact.interface.ts:66](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L66)

___

### thumbUrl

• `Optional` **thumbUrl**: `string`

Url of the thumbnail for the result

#### Defined in

[types/inline-query-result-contact.interface.ts:56](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L56)

___

### thumbWidth

• `Optional` **thumbWidth**: `number`

Thumbnail width

#### Defined in

[types/inline-query-result-contact.interface.ts:61](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L61)

___

### type

• **type**: ``"contact"``

Type of the result, must be contact

#### Defined in

[types/inline-query-result-contact.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L16)

___

### vcard

• `Optional` **vcard**: `string`

Additional data about the contact in the form of a vCard, 0-2048 bytes

#### Defined in

[types/inline-query-result-contact.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-contact.interface.ts#L41)
