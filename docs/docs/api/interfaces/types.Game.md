---
id: "types.Game"
title: "Interface: Game"
sidebar_label: "Game"
custom_edit_url: null
---

[types](../modules/types.md).Game

This object represents a game. Use BotFather to create and edit games, their
short names will act as unique identifiers.

**`See`**

[https://core.telegram.org/bots/api#game](https://core.telegram.org/bots/api#game)

## Properties

### animation

• `Optional` **animation**: [`Animation`](types.Animation.md)

Animation that will be displayed in the game message in chats. Upload via
BotFather

#### Defined in

[types/game.interface.ts:43](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/game.interface.ts#L43)

___

### description

• **description**: `string`

Description of the game

#### Defined in

[types/game.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/game.interface.ts#L19)

___

### photo

• **photo**: [`PhotoSize`](types.PhotoSize.md)

Photo that will be displayed in the game message in chats.

#### Defined in

[types/game.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/game.interface.ts#L24)

___

### text

• `Optional` **text**: `string`

Brief description of the game or high scores included in the game message. Can
be automatically edited to include current high scores for the game when the bot
calls setGameScore, or manually edited using editMessageText. 0-4096 characters.

#### Defined in

[types/game.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/game.interface.ts#L31)

___

### textEntities

• `Optional` **textEntities**: [`MessageEntity`](types.MessageEntity.md)

Special entities that appear in text, such as usernames, URLs, bot commands,
etc.

#### Defined in

[types/game.interface.ts:37](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/game.interface.ts#L37)

___

### title

• **title**: `string`

Title of the game

#### Defined in

[types/game.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/game.interface.ts#L14)
