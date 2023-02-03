---
id: "types.PassportElementErrorDataField"
title: "Interface: PassportElementErrorDataField"
sidebar_label: "PassportElementErrorDataField"
custom_edit_url: null
---

[types](../modules/types.md).PassportElementErrorDataField

Represents an issue in one of the data fields that was provided by the user. The
error is considered resolved when the field's value changes.

**`See`**

[https://core.telegram.org/bots/api#passportelementerrordatafield](https://core.telegram.org/bots/api#passportelementerrordatafield)

## Properties

### dataHash

• **dataHash**: `string`

Base64-encoded data hash

#### Defined in

[types/passport-element-error-data-field.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-data-field.interface.ts#L33)

___

### fieldName

• **fieldName**: `string`

Name of the data field which has the error

#### Defined in

[types/passport-element-error-data-field.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-data-field.interface.ts#L28)

___

### message

• **message**: `string`

Error message

#### Defined in

[types/passport-element-error-data-field.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-data-field.interface.ts#L38)

___

### source

• **source**: ``"data"``

Error source, must be data

#### Defined in

[types/passport-element-error-data-field.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-data-field.interface.ts#L10)

___

### type

• **type**: ``"personal_details"`` \| ``"passport"`` \| ``"driver_license"`` \| ``"identity_card"`` \| ``"internal_passport"`` \| ``"address"``

The section of the user's Telegram Passport which has the error, one of
"personal_details", "passport", "driver_license", "identity_card",
"internal_passport", "address"

#### Defined in

[types/passport-element-error-data-field.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-element-error-data-field.interface.ts#L17)
