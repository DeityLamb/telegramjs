---
id: "types.ChatPhoto"
title: "Interface: ChatPhoto"
sidebar_label: "ChatPhoto"
custom_edit_url: null
---

[types](../modules/types.md).ChatPhoto

This object represents a chat photo.

**`See`**

[https://core.telegram.org/bots/api#chatphoto](https://core.telegram.org/bots/api#chatphoto)

## Properties

### bigFileId

• **bigFileId**: `string`

File identifier of big (640x640) chat photo. This file_id can be used only for
photo download and only for as long as the photo is not changed.

#### Defined in

[types/chat-photo.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-photo.interface.ts#L23)

___

### bigFileUniqueId

• **bigFileUniqueId**: `string`

Unique file identifier of big (640x640) chat photo, which is supposed to be the
same over time and for different bots. Can't be used to download or reuse the
file.

#### Defined in

[types/chat-photo.interface.ts:30](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-photo.interface.ts#L30)

___

### smallFileId

• **smallFileId**: `string`

File identifier of small (160x160) chat photo. This file_id can be used only for
photo download and only for as long as the photo is not changed.

#### Defined in

[types/chat-photo.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-photo.interface.ts#L10)

___

### smallFileUniqueId

• **smallFileUniqueId**: `string`

Unique file identifier of small (160x160) chat photo, which is supposed to be
the same over time and for different bots. Can't be used to download or reuse
the file.

#### Defined in

[types/chat-photo.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/chat-photo.interface.ts#L17)
