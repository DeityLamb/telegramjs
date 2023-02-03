---
id: "types.EncryptedPassportElement"
title: "Interface: EncryptedPassportElement"
sidebar_label: "EncryptedPassportElement"
custom_edit_url: null
---

[types](../modules/types.md).EncryptedPassportElement

Describes documents or other Telegram Passport elements shared with the bot by
the user.

**`See`**

[https://core.telegram.org/bots/api#encryptedpassportelement](https://core.telegram.org/bots/api#encryptedpassportelement)

## Properties

### data

• `Optional` **data**: `string`

Base64-encoded encrypted Telegram Passport element data provided by the user,
available for "personal_details", "passport", "driver_license", "identity_card",
"internal_passport" and "address" types. Can be decrypted and verified using the
accompanying EncryptedCredentials.

#### Defined in

[types/encrypted-passport-element.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-passport-element.interface.ts#L36)

___

### email

• `Optional` **email**: `string`

User's verified email address, available only for "email" type

#### Defined in

[types/encrypted-passport-element.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-passport-element.interface.ts#L46)

___

### files

• `Optional` **files**: [`PassportFile`](types.PassportFile.md)

Array of encrypted files with documents provided by the user, available for
"utility_bill", "bank_statement", "rental_agreement", "passport_registration"
and "temporary_registration" types. Files can be decrypted and verified using
the accompanying EncryptedCredentials.

#### Defined in

[types/encrypted-passport-element.interface.ts:54](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-passport-element.interface.ts#L54)

___

### frontSide

• `Optional` **frontSide**: [`PassportFile`](types.PassportFile.md)

Encrypted file with the front side of the document, provided by the user.
Available for "passport", "driver_license", "identity_card" and
"internal_passport". The file can be decrypted and verified using the
accompanying EncryptedCredentials.

#### Defined in

[types/encrypted-passport-element.interface.ts:62](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-passport-element.interface.ts#L62)

___

### hash

• **hash**: `string`

Base64-encoded element hash for using in PassportElementErrorUnspecified

#### Defined in

[types/encrypted-passport-element.interface.ts:91](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-passport-element.interface.ts#L91)

___

### phoneNumber

• `Optional` **phoneNumber**: `string`

User's verified phone number, available only for "phone_number" type

#### Defined in

[types/encrypted-passport-element.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-passport-element.interface.ts#L41)

___

### reverseSide

• `Optional` **reverseSide**: [`PassportFile`](types.PassportFile.md)

Encrypted file with the reverse side of the document, provided by the user.
Available for "driver_license" and "identity_card". The file can be decrypted
and verified using the accompanying EncryptedCredentials.

#### Defined in

[types/encrypted-passport-element.interface.ts:69](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-passport-element.interface.ts#L69)

___

### selfie

• `Optional` **selfie**: [`PassportFile`](types.PassportFile.md)

Encrypted file with the selfie of the user holding a document, provided by the
user; available for "passport", "driver_license", "identity_card" and
"internal_passport". The file can be decrypted and verified using the
accompanying EncryptedCredentials.

#### Defined in

[types/encrypted-passport-element.interface.ts:77](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-passport-element.interface.ts#L77)

___

### translation

• `Optional` **translation**: [`PassportFile`](types.PassportFile.md)

Array of encrypted files with translated versions of documents provided by the
user. Available if requested for "passport", "driver_license", "identity_card",
"internal_passport", "utility_bill", "bank_statement", "rental_agreement",
"passport_registration" and "temporary_registration" types. Files can be
decrypted and verified using the accompanying EncryptedCredentials.

#### Defined in

[types/encrypted-passport-element.interface.ts:86](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-passport-element.interface.ts#L86)

___

### type

• **type**: ``"personal_details"`` \| ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"`` \| ``"address"`` \| ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"`` \| ``"phone_number"`` \| ``"email"``

Element type. One of "personal_details", "passport", "driver_license",
"identity_card", "internal_passport", "address", "utility_bill",
"bank_statement", "rental_agreement", "passport_registration",
"temporary_registration", "phone_number", "email".

#### Defined in

[types/encrypted-passport-element.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-passport-element.interface.ts#L15)
