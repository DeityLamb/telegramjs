---
id: "types.PassportFile"
title: "Interface: PassportFile"
sidebar_label: "PassportFile"
custom_edit_url: null
---

[types](../modules/types.md).PassportFile

This object represents a file uploaded to Telegram Passport. Currently all
Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.

**`See`**

[https://core.telegram.org/bots/api#passportfile](https://core.telegram.org/bots/api#passportfile)

## Properties

### fileDate

• **fileDate**: `number`

Unix time when the file was uploaded

#### Defined in

[types/passport-file.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-file.interface.ts#L26)

___

### fileId

• **fileId**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[types/passport-file.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-file.interface.ts#L10)

___

### fileSize

• **fileSize**: `number`

File size in bytes

#### Defined in

[types/passport-file.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-file.interface.ts#L21)

___

### fileUniqueId

• **fileUniqueId**: `string`

Unique identifier for this file, which is supposed to be the same over time and
for different bots. Can't be used to download or reuse the file.

#### Defined in

[types/passport-file.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/passport-file.interface.ts#L16)
