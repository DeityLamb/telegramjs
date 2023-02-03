---
id: "options.SetPassportDataErrorsOptions"
title: "Interface: SetPassportDataErrorsOptions"
sidebar_label: "SetPassportDataErrorsOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetPassportDataErrorsOptions

Informs a user that some of the Telegram Passport elements they provided
contains errors. The user will not be able to re-submit their Passport to you
until the errors are fixed (the contents of the field for which you returned the
error must change). Returns True on success.
Use this if the data submitted by the user doesn't satisfy the standards your
service requires for any reason. For example, if a birthday date seems invalid,
a submitted document is blurry, a scan shows evidence of tampering, etc. Supply
some details in the error message to make sure the user knows how to correct the
issues.

**`See`**

[https://core.telegram.org/bots/api#setpassportdataerrors](https://core.telegram.org/bots/api#setpassportdataerrors)

## Properties

### errors

• **errors**: [`PassportElementError`](../modules/types.md#passportelementerror)

A JSON-serialized array describing the errors

#### Defined in

[options/set-passport-data-errors-options.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-passport-data-errors-options.interface.ts#L24)

___

### userId

• **userId**: `number`

User identifier

#### Defined in

[options/set-passport-data-errors-options.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-passport-data-errors-options.interface.ts#L19)
