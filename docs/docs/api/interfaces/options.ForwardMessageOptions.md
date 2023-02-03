---
id: "options.ForwardMessageOptions"
title: "Interface: ForwardMessageOptions"
sidebar_label: "ForwardMessageOptions"
custom_edit_url: null
---

[options](../modules/options.md).ForwardMessageOptions

Use this method to forward messages of any kind. Service messages can't be
forwarded. On success, the sent Message is returned.

**`See`**

[https://core.telegram.org/bots/api#forwardmessage](https://core.telegram.org/bots/api#forwardmessage)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/forward-message-options.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/forward-message-options.interface.ts#L11)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/forward-message-options.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/forward-message-options.interface.ts#L28)

___

### fromChatId

• **fromChatId**: `string` \| `number`

Unique identifier for the chat where the original message was sent (or channel
username in the format @channelusername)

#### Defined in

[options/forward-message-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/forward-message-options.interface.ts#L23)

___

### messageId

• **messageId**: `number`

Message identifier in the chat specified in from_chat_id

#### Defined in

[options/forward-message-options.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/forward-message-options.interface.ts#L38)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/forward-message-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/forward-message-options.interface.ts#L17)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the forwarded message from forwarding and saving

#### Defined in

[options/forward-message-options.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/forward-message-options.interface.ts#L33)
