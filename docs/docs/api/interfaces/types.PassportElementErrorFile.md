---
id: "types.PassportElementErrorFile"
title: "Interface: PassportElementErrorFile"
sidebar_label: "PassportElementErrorFile"
custom_edit_url: null
---

[types](../modules/types.md).PassportElementErrorFile

Represents an issue with a document scan. The error is considered resolved when
the file with the document scan changes.

**`See`**

[https://core.telegram.org/bots/api#passportelementerrorfile](https://core.telegram.org/bots/api#passportelementerrorfile)

## Properties

### fileHash

• **fileHash**: `string`

Base64-encoded file hash

#### Defined in

[types/passport-element-error-file.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-file.interface.ts#L27)

___

### message

• **message**: `string`

Error message

#### Defined in

[types/passport-element-error-file.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-file.interface.ts#L32)

___

### source

• **source**: ``"file"``

Error source, must be file

#### Defined in

[types/passport-element-error-file.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-file.interface.ts#L10)

___

### type

• **type**: ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"``

The section of the user's Telegram Passport which has the issue, one of
"utility_bill", "bank_statement", "rental_agreement", "passport_registration",
"temporary_registration"

#### Defined in

[types/passport-element-error-file.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-file.interface.ts#L17)
