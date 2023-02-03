---
id: "types.PassportElementErrorFiles"
title: "Interface: PassportElementErrorFiles"
sidebar_label: "PassportElementErrorFiles"
custom_edit_url: null
---

[types](../modules/types.md).PassportElementErrorFiles

Represents an issue with a list of scans. The error is considered resolved when
the list of files containing the scans changes.

**`See`**

[https://core.telegram.org/bots/api#passportelementerrorfiles](https://core.telegram.org/bots/api#passportelementerrorfiles)

## Properties

### fileHashes

• **fileHashes**: `string`

List of base64-encoded file hashes

#### Defined in

[types/passport-element-error-files.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-files.interface.ts#L27)

___

### message

• **message**: `string`

Error message

#### Defined in

[types/passport-element-error-files.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-files.interface.ts#L32)

___

### source

• **source**: ``"files"``

Error source, must be files

#### Defined in

[types/passport-element-error-files.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-files.interface.ts#L10)

___

### type

• **type**: ``"utility_bill"`` \| ``"bank_statement"`` \| ``"rental_agreement"`` \| ``"passport_registration"`` \| ``"temporary_registration"``

The section of the user's Telegram Passport which has the issue, one of
"utility_bill", "bank_statement", "rental_agreement", "passport_registration",
"temporary_registration"

#### Defined in

[types/passport-element-error-files.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-files.interface.ts#L17)
