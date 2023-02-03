---
id: "types.PassportElementErrorTranslationFile"
title: "Interface: PassportElementErrorTranslationFile"
sidebar_label: "PassportElementErrorTranslationFile"
custom_edit_url: null
---

[types](../modules/types.md).PassportElementErrorTranslationFile

Represents an issue with one of the files that constitute the translation of a
document. The error is considered resolved when the file changes.

**`See`**

[https://core.telegram.org/bots/api#passportelementerrortranslationfile](https://core.telegram.org/bots/api#passportelementerrortranslationfile)

## Properties

### fileHash

• **fileHash**: `string`

Base64-encoded file hash

#### Defined in

[types/passport-element-error-translation-file.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-translation-file.interface.ts#L32)

___

### message

• **message**: `string`

Error message

#### Defined in

[types/passport-element-error-translation-file.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-translation-file.interface.ts#L37)

___

### source

• **source**: ``"translation_file"``

Error source, must be translation_file

#### Defined in

[types/passport-element-error-translation-file.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-translation-file.interface.ts#L10)

___

### type

• **type**: ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"`` \| ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"``

Type of element of the user's Telegram Passport which has the issue, one of
"passport", "driver_license", "identity_card", "internal_passport",
"utility_bill", "bank_statement", "rental_agreement", "passport_registration",
"temporary_registration"

#### Defined in

[types/passport-element-error-translation-file.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-translation-file.interface.ts#L18)
