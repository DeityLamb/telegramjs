---
id: "types.Voice"
title: "Interface: Voice"
sidebar_label: "Voice"
custom_edit_url: null
---

[types](../modules/types.md).Voice

This object represents a voice note.

**`See`**

[https://core.telegram.org/bots/api#voice](https://core.telegram.org/bots/api#voice)

## Properties

### duration

• **duration**: `number`

Duration of the audio in seconds as defined by sender

#### Defined in

[types/voice.interface.ts:20](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/voice.interface.ts#L20)

___

### fileId

• **fileId**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[types/voice.interface.ts:9](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/voice.interface.ts#L9)

___

### fileSize

• `Optional` **fileSize**: `number`

File size in bytes. It can be bigger than 2^31 and some programming languages
may have difficulty/silent defects in interpreting it. But it has at most 52
significant bits, so a signed 64-bit integer or double-precision float type are
safe for storing this value.

#### Defined in

[types/voice.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/voice.interface.ts#L33)

___

### fileUniqueId

• **fileUniqueId**: `string`

Unique identifier for this file, which is supposed to be the same over time and
for different bots. Can't be used to download or reuse the file.

#### Defined in

[types/voice.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/voice.interface.ts#L15)

___

### mimeType

• `Optional` **mimeType**: `string`

MIME type of the file as defined by sender

#### Defined in

[types/voice.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/voice.interface.ts#L25)
