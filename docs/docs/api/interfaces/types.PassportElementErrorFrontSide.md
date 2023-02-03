---
id: "types.PassportElementErrorFrontSide"
title: "Interface: PassportElementErrorFrontSide"
sidebar_label: "PassportElementErrorFrontSide"
custom_edit_url: null
---

[types](../modules/types.md).PassportElementErrorFrontSide

Represents an issue with the front side of a document. The error is considered
resolved when the file with the front side of the document changes.

**`See`**

[https://core.telegram.org/bots/api#passportelementerrorfrontside](https://core.telegram.org/bots/api#passportelementerrorfrontside)

## Properties

### fileHash

• **fileHash**: `string`

Base64-encoded hash of the file with the front side of the document

#### Defined in

[types/passport-element-error-front-side.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-front-side.interface.ts#L21)

___

### message

• **message**: `string`

Error message

#### Defined in

[types/passport-element-error-front-side.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-front-side.interface.ts#L26)

___

### source

• **source**: ``"front_side"``

Error source, must be front_side

#### Defined in

[types/passport-element-error-front-side.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-front-side.interface.ts#L10)

___

### type

• **type**: ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"``

The section of the user's Telegram Passport which has the issue, one of
"passport", "driver_license", "identity_card", "internal_passport"

#### Defined in

[types/passport-element-error-front-side.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-front-side.interface.ts#L16)
