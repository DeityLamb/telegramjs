---
id: "types.InlineQueryResultGame"
title: "Interface: InlineQueryResultGame"
sidebar_label: "InlineQueryResultGame"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultGame

Represents a Game.
Note: This will only work in Telegram versions released after October 1, 2016.
Older clients will not display any inline results if a game result is among
them.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultgame](https://core.telegram.org/bots/api#inlinequeryresultgame)

## Properties

### gameShortName

• **gameShortName**: `string`

Short name of the game

#### Defined in

[types/inline-query-result-game.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-game.interface.ts#L24)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-game.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-game.interface.ts#L19)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-game.interface.ts:29](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-game.interface.ts#L29)

___

### type

• **type**: ``"game"``

Type of the result, must be game

#### Defined in

[types/inline-query-result-game.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-game.interface.ts#L14)
