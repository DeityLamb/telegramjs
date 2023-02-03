---
id: "types.PassportData"
title: "Interface: PassportData"
sidebar_label: "PassportData"
custom_edit_url: null
---

[types](../modules/types.md).PassportData

Describes Telegram Passport data shared with the bot by the user.

**`See`**

[https://core.telegram.org/bots/api#passportdata](https://core.telegram.org/bots/api#passportdata)

## Properties

### credentials

• **credentials**: [`EncryptedCredentials`](types.EncryptedCredentials.md)

Encrypted credentials required to decrypt the data

#### Defined in

[types/passport-data.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-data.interface.ts#L18)

___

### data

• **data**: [`EncryptedPassportElement`](types.EncryptedPassportElement.md)

Array with information about documents and other Telegram Passport elements that
was shared with the bot

#### Defined in

[types/passport-data.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-data.interface.ts#L13)
