---
id: "options.GetGameHighScoresOptions"
title: "Interface: GetGameHighScoresOptions"
sidebar_label: "GetGameHighScoresOptions"
custom_edit_url: null
---

[options](../modules/options.md).GetGameHighScoresOptions

Use this method to get data for high score tables. Will return the score of the
specified user and several of their neighbors in a game. Returns an Array of
GameHighScore objects.

**`See`**

[https://core.telegram.org/bots/api#getgamehighscores](https://core.telegram.org/bots/api#getgamehighscores)

## Properties

### chatId

• `Optional` **chatId**: `number`

Required if inline_message_id is not specified. Unique identifier for the target
chat

#### Defined in

[options/get-game-high-scores-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-game-high-scores-options.interface.ts#L17)

___

### inlineMessageId

• `Optional` **inlineMessageId**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline
message

#### Defined in

[options/get-game-high-scores-options.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-game-high-scores-options.interface.ts#L28)

___

### messageId

• `Optional` **messageId**: `number`

Required if inline_message_id is not specified. Identifier of the sent message

#### Defined in

[options/get-game-high-scores-options.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-game-high-scores-options.interface.ts#L22)

___

### userId

• **userId**: `number`

Target user id

#### Defined in

[options/get-game-high-scores-options.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-game-high-scores-options.interface.ts#L11)
