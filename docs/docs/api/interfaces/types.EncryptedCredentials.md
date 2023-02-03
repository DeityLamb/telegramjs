---
id: "types.EncryptedCredentials"
title: "Interface: EncryptedCredentials"
sidebar_label: "EncryptedCredentials"
custom_edit_url: null
---

[types](../modules/types.md).EncryptedCredentials

Describes data required for decrypting and authenticating
EncryptedPassportElement. See the Telegram Passport Documentation for a complete
description of the data decryption and authentication processes.

**`See`**

[https://core.telegram.org/bots/api#encryptedcredentials](https://core.telegram.org/bots/api#encryptedcredentials)

## Properties

### data

• **data**: `string`

Base64-encoded encrypted JSON-serialized data with unique user's payload, data
hashes and secrets required for EncryptedPassportElement decryption and
authentication

#### Defined in

[types/encrypted-credentials.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-credentials.interface.ts#L13)

___

### hash

• **hash**: `string`

Base64-encoded data hash for data authentication

#### Defined in

[types/encrypted-credentials.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-credentials.interface.ts#L18)

___

### secret

• **secret**: `string`

Base64-encoded secret, encrypted with the bot's public RSA key, required for
data decryption

#### Defined in

[types/encrypted-credentials.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/encrypted-credentials.interface.ts#L24)
