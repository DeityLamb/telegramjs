---
id: "types.PassportElementErrorSelfie"
title: "Interface: PassportElementErrorSelfie"
sidebar_label: "PassportElementErrorSelfie"
custom_edit_url: null
---

[types](../modules/types.md).PassportElementErrorSelfie

Represents an issue with the selfie with a document. The error is considered
resolved when the file with the selfie changes.

**`See`**

[https://core.telegram.org/bots/api#passportelementerrorselfie](https://core.telegram.org/bots/api#passportelementerrorselfie)

## Properties

### fileHash

• **fileHash**: `string`

Base64-encoded hash of the file with the selfie

#### Defined in

[types/passport-element-error-selfie.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-selfie.interface.ts#L21)

___

### message

• **message**: `string`

Error message

#### Defined in

[types/passport-element-error-selfie.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-selfie.interface.ts#L26)

___

### source

• **source**: ``"selfie"``

Error source, must be selfie

#### Defined in

[types/passport-element-error-selfie.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-selfie.interface.ts#L10)

___

### type

• **type**: ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"``

The section of the user's Telegram Passport which has the issue, one of
"passport", "driver_license", "identity_card", "internal_passport"

#### Defined in

[types/passport-element-error-selfie.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-selfie.interface.ts#L16)
