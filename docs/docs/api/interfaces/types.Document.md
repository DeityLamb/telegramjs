---
id: "types.Document"
title: "Interface: Document"
sidebar_label: "Document"
custom_edit_url: null
---

[types](../modules/types.md).Document

This object represents a general file (as opposed to photos, voice messages and
audio files).

**`See`**

[https://core.telegram.org/bots/api#document](https://core.telegram.org/bots/api#document)

## Properties

### fileId

• **fileId**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[types/document.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/document.interface.ts#L12)

___

### fileName

• `Optional` **fileName**: `string`

Original filename as defined by sender

#### Defined in

[types/document.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/document.interface.ts#L28)

___

### fileSize

• `Optional` **fileSize**: `number`

File size in bytes. It can be bigger than 2^31 and some programming languages
may have difficulty/silent defects in interpreting it. But it has at most 52
significant bits, so a signed 64-bit integer or double-precision float type are
safe for storing this value.

#### Defined in

[types/document.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/document.interface.ts#L41)

___

### fileUniqueId

• **fileUniqueId**: `string`

Unique identifier for this file, which is supposed to be the same over time and
for different bots. Can't be used to download or reuse the file.

#### Defined in

[types/document.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/document.interface.ts#L18)

___

### mimeType

• `Optional` **mimeType**: `string`

MIME type of the file as defined by sender

#### Defined in

[types/document.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/document.interface.ts#L33)

___

### thumb

• `Optional` **thumb**: [`PhotoSize`](types.PhotoSize.md)

Document thumbnail as defined by sender

#### Defined in

[types/document.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/document.interface.ts#L23)
