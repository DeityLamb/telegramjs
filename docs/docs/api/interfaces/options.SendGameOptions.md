---
id: "options.SendGameOptions"
title: "Interface: SendGameOptions"
sidebar_label: "SendGameOptions"
custom_edit_url: null
---

[options](../modules/options.md).SendGameOptions

Use this method to send a game. On success, the sent Message is returned.

**`See`**

[https://core.telegram.org/bots/api#sendgame](https://core.telegram.org/bots/api#sendgame)

## Properties

### allowSendingWithoutReply

• `Optional` **allowSendingWithoutReply**: `boolean`

Pass True if the message should be sent even if the specified replied-to message
is not found

#### Defined in

[options/send-game-options.interface.ts:44](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-game-options.interface.ts#L44)

___

### chatId

• **chatId**: `number`

Unique identifier for the target chat

#### Defined in

[options/send-game-options.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-game-options.interface.ts#L11)

___

### disableNotification

• `Optional` **disableNotification**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

#### Defined in

[options/send-game-options.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-game-options.interface.ts#L28)

___

### gameShortName

• **gameShortName**: `string`

Short name of the game, serves as the unique identifier for the game. Set up
your games via @BotFather.

#### Defined in

[options/send-game-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-game-options.interface.ts#L23)

___

### messageThreadId

• `Optional` **messageThreadId**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum
supergroups only

#### Defined in

[options/send-game-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-game-options.interface.ts#L17)

___

### protectContent

• `Optional` **protectContent**: `boolean`

Protects the contents of the sent message from forwarding and saving

#### Defined in

[options/send-game-options.interface.ts:33](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-game-options.interface.ts#L33)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title'
button will be shown. If not empty, the first button must launch the game.

#### Defined in

[options/send-game-options.interface.ts:50](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-game-options.interface.ts#L50)

___

### replyToMessageId

• `Optional` **replyToMessageId**: `number`

If the message is a reply, ID of the original message

#### Defined in

[options/send-game-options.interface.ts:38](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/send-game-options.interface.ts#L38)
