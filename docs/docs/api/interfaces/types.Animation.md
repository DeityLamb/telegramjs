---
id: "types.Animation"
title: "Interface: Animation"
sidebar_label: "Animation"
custom_edit_url: null
---

[types](../modules/types.md).Animation

This object represents an animation file (GIF or H.264/MPEG-4 AVC video without
sound).

**`See`**

[https://core.telegram.org/bots/api#animation](https://core.telegram.org/bots/api#animation)

## Properties

### duration

• **duration**: `number`

Duration of the video in seconds as defined by sender

#### Defined in

[types/animation.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/animation.interface.ts#L33)

___

### fileId

• **fileId**: `string`

Identifier for this file, which can be used to download or reuse the file

#### Defined in

[types/animation.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/animation.interface.ts#L12)

___

### fileName

• `Optional` **fileName**: `string`

Original animation filename as defined by sender

#### Defined in

[types/animation.interface.ts:43](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/animation.interface.ts#L43)

___

### fileSize

• `Optional` **fileSize**: `number`

File size in bytes. It can be bigger than 2^31 and some programming languages
may have difficulty/silent defects in interpreting it. But it has at most 52
significant bits, so a signed 64-bit integer or double-precision float type are
safe for storing this value.

#### Defined in

[types/animation.interface.ts:56](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/animation.interface.ts#L56)

___

### fileUniqueId

• **fileUniqueId**: `string`

Unique identifier for this file, which is supposed to be the same over time and
for different bots. Can't be used to download or reuse the file.

#### Defined in

[types/animation.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/animation.interface.ts#L18)

___

### height

• **height**: `number`

Video height as defined by sender

#### Defined in

[types/animation.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/animation.interface.ts#L28)

___

### mimeType

• `Optional` **mimeType**: `string`

MIME type of the file as defined by sender

#### Defined in

[types/animation.interface.ts:48](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/animation.interface.ts#L48)

___

### thumb

• `Optional` **thumb**: [`PhotoSize`](types.PhotoSize.md)

Animation thumbnail as defined by sender

#### Defined in

[types/animation.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/animation.interface.ts#L38)

___

### width

• **width**: `number`

Video width as defined by sender

#### Defined in

[types/animation.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/animation.interface.ts#L23)
