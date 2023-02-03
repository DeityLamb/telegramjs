---
id: "types.File"
title: "Interface: File"
sidebar_label: "File"
custom_edit_url: null
---

[types](../modules/types.md).File

This object represents a file ready to be downloaded. The file can be downloaded
via the link https://api.telegram.org/file/bot[token]/[file_path]. It is
guaranteed that the link will be valid for at least 1 hour. When the link
expires, a new one can be requested by calling getFile.

**`See`**

[https://core.telegram.org/bots/api#file](https://core.telegram.org/bots/api#file)

## Properties

### fileId

• **fileId**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[types/file.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/file.interface.ts#L12)

___

### filePath

• `Optional` **filePath**: `string`

File path. Use https://api.telegram.org/file/bot[token]/[file_path] to get the
file.

#### Defined in

[types/file.interface.ts:32](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/file.interface.ts#L32)

___

### fileSize

• `Optional` **fileSize**: `number`

File size in bytes. It can be bigger than 2^31 and some programming languages
may have difficulty/silent defects in interpreting it. But it has at most 52
significant bits, so a signed 64-bit integer or double-precision float type are
safe for storing this value.

#### Defined in

[types/file.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/file.interface.ts#L26)

___

### fileUniqueId

• **fileUniqueId**: `string`

Unique identifier for this file, which is supposed to be the same over time and
for different bots. Can't be used to download or reuse the file.

#### Defined in

[types/file.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/file.interface.ts#L18)
