---
id: "types.MessageEntity"
title: "Interface: MessageEntity"
sidebar_label: "MessageEntity"
custom_edit_url: null
---

[types](../modules/types.md).MessageEntity

This object represents one special entity in a text message. For example,
hashtags, usernames, URLs, etc.

**`See`**

[https://core.telegram.org/bots/api#messageentity](https://core.telegram.org/bots/api#messageentity)

## Properties

### customEmojiId

• `Optional` **customEmojiId**: `string`

For "custom_emoji" only, unique identifier of the custom emoji. Use
getCustomEmojiStickers to get full information about the sticker

#### Defined in

[types/message-entity.interface.ts:50](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message-entity.interface.ts#L50)

___

### language

• `Optional` **language**: `string`

For "pre" only, the programming language of the entity text

#### Defined in

[types/message-entity.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message-entity.interface.ts#L44)

___

### length

• **length**: `number`

Length of the entity in UTF-16 code units

#### Defined in

[types/message-entity.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message-entity.interface.ts#L29)

___

### offset

• **offset**: `number`

Offset in UTF-16 code units to the start of the entity

#### Defined in

[types/message-entity.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message-entity.interface.ts#L24)

___

### type

• **type**: `string`

Type of the entity. Currently, can be "mention" (@username), "hashtag"
(#hashtag), "cashtag" ($USD), "bot_command" (/start@jobs_bot), "url"
(https://telegram.org), "email" (do-not-reply@telegram.org), "phone_number"
(+1-212-555-0123), "bold" (bold text), "italic" (italic text), "underline"
(underlined text), "strikethrough" (strikethrough text), "spoiler" (spoiler
message), "code" (monowidth string), "pre" (monowidth block), "text_link" (for
clickable text URLs), "text_mention" (for users without usernames),
"custom_emoji" (for inline custom emoji stickers)

#### Defined in

[types/message-entity.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message-entity.interface.ts#L19)

___

### url

• `Optional` **url**: `string`

For "text_link" only, URL that will be opened after user taps on the text

#### Defined in

[types/message-entity.interface.ts:34](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message-entity.interface.ts#L34)

___

### user

• `Optional` **user**: [`User`](types.User.md)

For "text_mention" only, the mentioned user

#### Defined in

[types/message-entity.interface.ts:39](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/message-entity.interface.ts#L39)
