---
id: "types.MaskPosition"
title: "Interface: MaskPosition"
sidebar_label: "MaskPosition"
custom_edit_url: null
---

[types](../modules/types.md).MaskPosition

This object describes the position on faces where a mask should be placed by
default.

**`See`**

[https://core.telegram.org/bots/api#maskposition](https://core.telegram.org/bots/api#maskposition)

## Properties

### point

• **point**: ``"forehead"`` \| ``"eyes"`` \| ``"mouth"`` \| ``"chin"``

The part of the face relative to which the mask should be placed. One of
"forehead", "eyes", "mouth", or "chin".

#### Defined in

[types/mask-position.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/mask-position.interface.ts#L11)

___

### scale

• **scale**: `number`

Mask scaling coefficient. For example, 2.0 means double size.

#### Defined in

[types/mask-position.interface.ts:30](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/mask-position.interface.ts#L30)

___

### xShift

• **xShift**: `number`

Shift by X-axis measured in widths of the mask scaled to the face size, from
left to right. For example, choosing -1.0 will place mask just to the left of
the default mask position.

#### Defined in

[types/mask-position.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/mask-position.interface.ts#L18)

___

### yShift

• **yShift**: `number`

Shift by Y-axis measured in heights of the mask scaled to the face size, from
top to bottom. For example, 1.0 will place the mask just below the default mask
position.

#### Defined in

[types/mask-position.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/mask-position.interface.ts#L25)
