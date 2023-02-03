---
id: "options.SetGameScoreOptions"
title: "Interface: SetGameScoreOptions"
sidebar_label: "SetGameScoreOptions"
custom_edit_url: null
---

[options](../modules/options.md).SetGameScoreOptions

Use this method to set the score of the specified user in a game message. On
success, if the message is not an inline message, the Message is returned,
otherwise True is returned. Returns an error, if the new score is not greater
than the user's current score in the chat and force is False.

**`See`**

[https://core.telegram.org/bots/api#setgamescore](https://core.telegram.org/bots/api#setgamescore)

## Properties

### chatId

• `Optional` **chatId**: `number`

Required if inline_message_id is not specified. Unique identifier for the target
chat

#### Defined in

[options/set-game-score-options.interface.ts:35](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-game-score-options.interface.ts#L35)

___

### disableEditMessage

• `Optional` **disableEditMessage**: `boolean`

Pass True if the game message should not be automatically edited to include the
current scoreboard

#### Defined in

[options/set-game-score-options.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-game-score-options.interface.ts#L29)

___

### force

• `Optional` **force**: `boolean`

Pass True if the high score is allowed to decrease. This can be useful when
fixing mistakes or banning cheaters

#### Defined in

[options/set-game-score-options.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-game-score-options.interface.ts#L23)

___

### inlineMessageId

• `Optional` **inlineMessageId**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline
message

#### Defined in

[options/set-game-score-options.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-game-score-options.interface.ts#L46)

___

### messageId

• `Optional` **messageId**: `number`

Required if inline_message_id is not specified. Identifier of the sent message

#### Defined in

[options/set-game-score-options.interface.ts:40](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-game-score-options.interface.ts#L40)

___

### score

• **score**: ``"non"``

New score, must be non-negative

#### Defined in

[options/set-game-score-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-game-score-options.interface.ts#L17)

___

### userId

• **userId**: `number`

User identifier

#### Defined in

[options/set-game-score-options.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/set-game-score-options.interface.ts#L12)
