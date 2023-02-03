---
id: "types.Contact"
title: "Interface: Contact"
sidebar_label: "Contact"
custom_edit_url: null
---

[types](../modules/types.md).Contact

This object represents a phone contact.

**`See`**

[https://core.telegram.org/bots/api#contact](https://core.telegram.org/bots/api#contact)

## Properties

### firstName

• **firstName**: `string`

Contact's first name

#### Defined in

[types/contact.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/contact.interface.ts#L14)

___

### lastName

• `Optional` **lastName**: `string`

Contact's last name

#### Defined in

[types/contact.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/contact.interface.ts#L19)

___

### phoneNumber

• **phoneNumber**: `string`

Contact's phone number

#### Defined in

[types/contact.interface.ts:9](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/contact.interface.ts#L9)

___

### userId

• `Optional` **userId**: `number`

Contact's user identifier in Telegram. This number may have more than 32
significant bits and some programming languages may have difficulty/silent
defects in interpreting it. But it has at most 52 significant bits, so a 64-bit
integer or double-precision float type are safe for storing this identifier.

#### Defined in

[types/contact.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/contact.interface.ts#L27)

___

### vcard

• `Optional` **vcard**: `string`

Additional data about the contact in the form of a vCard

#### Defined in

[types/contact.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/contact.interface.ts#L32)
