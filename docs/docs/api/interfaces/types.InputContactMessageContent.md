---
id: "types.InputContactMessageContent"
title: "Interface: InputContactMessageContent"
sidebar_label: "InputContactMessageContent"
custom_edit_url: null
---

[types](../modules/types.md).InputContactMessageContent

Represents the content of a contact message to be sent as the result of an
inline query.

**`See`**

[https://core.telegram.org/bots/api#inputcontactmessagecontent](https://core.telegram.org/bots/api#inputcontactmessagecontent)

## Properties

### firstName

• **firstName**: `string`

Contact's first name

#### Defined in

[types/input-contact-message-content.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-contact-message-content.interface.ts#L15)

___

### lastName

• `Optional` **lastName**: `string`

Contact's last name

#### Defined in

[types/input-contact-message-content.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-contact-message-content.interface.ts#L20)

___

### phoneNumber

• **phoneNumber**: `string`

Contact's phone number

#### Defined in

[types/input-contact-message-content.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-contact-message-content.interface.ts#L10)

___

### vcard

• `Optional` **vcard**: `string`

Additional data about the contact in the form of a vCard, 0-2048 bytes

#### Defined in

[types/input-contact-message-content.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/input-contact-message-content.interface.ts#L25)
