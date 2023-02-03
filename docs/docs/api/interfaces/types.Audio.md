---
id: "types.Audio"
title: "Interface: Audio"
sidebar_label: "Audio"
custom_edit_url: null
---

[types](../modules/types.md).Audio

This object represents an audio file to be treated as music by the Telegram
clients.

**`See`**

[https://core.telegram.org/bots/api#audio](https://core.telegram.org/bots/api#audio)

## Properties

### duration

• **duration**: `number`

Duration of the audio in seconds as defined by sender

#### Defined in

[types/audio.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/audio.interface.ts#L23)

___

### fileId

• **fileId**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[types/audio.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/audio.interface.ts#L12)

___

### fileName

• `Optional` **fileName**: `string`

Original filename as defined by sender

#### Defined in

[types/audio.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/audio.interface.ts#L38)

___

### fileSize

• `Optional` **fileSize**: `number`

File size in bytes. It can be bigger than 2^31 and some programming languages
may have difficulty/silent defects in interpreting it. But it has at most 52
significant bits, so a signed 64-bit integer or double-precision float type are
safe for storing this value.

#### Defined in

[types/audio.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/audio.interface.ts#L51)

___

### fileUniqueId

• **fileUniqueId**: `string`

Unique identifier for this file, which is supposed to be the same over time and
for different bots. Can't be used to download or reuse the file.

#### Defined in

[types/audio.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/audio.interface.ts#L18)

___

### mimeType

• `Optional` **mimeType**: `string`

MIME type of the file as defined by sender

#### Defined in

[types/audio.interface.ts:43](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/audio.interface.ts#L43)

___

### performer

• `Optional` **performer**: `string`

Performer of the audio as defined by sender or by audio tags

#### Defined in

[types/audio.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/audio.interface.ts#L28)

___

### thumb

• `Optional` **thumb**: [`PhotoSize`](types.PhotoSize.md)

Thumbnail of the album cover to which the music file belongs

#### Defined in

[types/audio.interface.ts:56](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/audio.interface.ts#L56)

___

### title

• `Optional` **title**: `string`

Title of the audio as defined by sender or by audio tags

#### Defined in

[types/audio.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/audio.interface.ts#L33)
