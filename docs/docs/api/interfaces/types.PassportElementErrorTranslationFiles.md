---
id: "types.PassportElementErrorTranslationFiles"
title: "Interface: PassportElementErrorTranslationFiles"
sidebar_label: "PassportElementErrorTranslationFiles"
custom_edit_url: null
---

[types](../modules/types.md).PassportElementErrorTranslationFiles

Represents an issue with the translated version of a document. The error is
considered resolved when a file with the document translation change.

**`See`**

[https://core.telegram.org/bots/api#passportelementerrortranslationfiles](https://core.telegram.org/bots/api#passportelementerrortranslationfiles)

## Properties

### fileHashes

• **fileHashes**: `string`

List of base64-encoded file hashes

#### Defined in

[types/passport-element-error-translation-files.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-translation-files.interface.ts#L32)

___

### message

• **message**: `string`

Error message

#### Defined in

[types/passport-element-error-translation-files.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-translation-files.interface.ts#L37)

___

### source

• **source**: ``"translation_files"``

Error source, must be translation_files

#### Defined in

[types/passport-element-error-translation-files.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-translation-files.interface.ts#L10)

___

### type

• **type**: ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"`` \| ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"``

Type of element of the user's Telegram Passport which has the issue, one of
"passport", "driver_license", "identity_card", "internal_passport",
"utility_bill", "bank_statement", "rental_agreement", "passport_registration",
"temporary_registration"

#### Defined in

[types/passport-element-error-translation-files.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-translation-files.interface.ts#L18)
