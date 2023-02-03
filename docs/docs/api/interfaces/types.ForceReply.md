---
id: "types.ForceReply"
title: "Interface: ForceReply"
sidebar_label: "ForceReply"
custom_edit_url: null
---

[types](../modules/types.md).ForceReply

Upon receiving a message with this object, Telegram clients will display a reply
interface to the user (act as if the user has selected the bot's message and
tapped 'Reply'). This can be extremely useful if you want to create
user-friendly step-by-step interfaces without having to sacrifice privacy mode.

**`See`**

[https://core.telegram.org/bots/api#forcereply](https://core.telegram.org/bots/api#forcereply)

## Properties

### forceReply

• **forceReply**: `boolean`

Shows reply interface to the user, as if they manually selected the bot's
message and tapped 'Reply'

#### Defined in

[types/force-reply.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/force-reply.interface.ts#L13)

___

### inputFieldPlaceholder

• `Optional` **inputFieldPlaceholder**: `string`

The placeholder to be shown in the input field when the reply is active; 1-64
characters

#### Defined in

[types/force-reply.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/force-reply.interface.ts#L19)

___

### selective

• `Optional` **selective**: `boolean`

Use this parameter if you want to force reply from specific users only.
Targets: 1) users that are

**`Mentioned`**

in the text of the Message object; 2) if
the bot's message is a reply (has reply_to_message_id), sender of the original
message.

#### Defined in

[types/force-reply.interface.ts:27](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/force-reply.interface.ts#L27)
