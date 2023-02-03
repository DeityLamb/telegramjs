---
id: "types.Update"
title: "Interface: Update"
sidebar_label: "Update"
custom_edit_url: null
---

[types](../modules/types.md).Update

This object represents an incoming update.
At most one of the optional parameters can be present in any given update.

**`See`**

[https://core.telegram.org/bots/api#update](https://core.telegram.org/bots/api#update)

## Properties

### callbackQuery

• `Optional` **callbackQuery**: [`CallbackQuery`](types.CallbackQuery.md)

New incoming callback query

#### Defined in

[types/update.interface.ts:63](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L63)

___

### channelPost

• `Optional` **channelPost**: [`Message`](types.Message.md)

New incoming channel post of any kind - text, photo, sticker, etc.

#### Defined in

[types/update.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L41)

___

### chatJoinRequest

• `Optional` **chatJoinRequest**: [`ChatJoinRequest`](types.ChatJoinRequest.md)

A request to join the chat has been sent. The bot must have the
can_invite_users administrator right in the chat to receive these updates.

#### Defined in

[types/update.interface.ts:104](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L104)

___

### chatMember

• `Optional` **chatMember**: [`ChatMemberUpdated`](types.ChatMemberUpdated.md)

A chat member's status was updated in a chat. The bot must be an administrator
in the chat and must explicitly specify "chat_member" in the list of
allowed_updates to receive these updates.

#### Defined in

[types/update.interface.ts:98](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L98)

___

### chosenInlineResult

• `Optional` **chosenInlineResult**: [`ChosenInlineResult`](types.ChosenInlineResult.md)

The result of an inline query that was chosen by a user and sent to their chat
partner. Please see our documentation on the feedback collecting for details on
how to enable these updates for your bot.

#### Defined in

[types/update.interface.ts:58](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L58)

___

### editedChannelPost

• `Optional` **editedChannelPost**: [`Message`](types.Message.md)

New version of a channel post that is known to the bot and was edited

#### Defined in

[types/update.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L46)

___

### editedMessage

• `Optional` **editedMessage**: [`Message`](types.Message.md)

New version of a message that is known to the bot and was edited

#### Defined in

[types/update.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L36)

___

### inlineQuery

• `Optional` **inlineQuery**: [`InlineQuery`](types.InlineQuery.md)

New incoming inline query

#### Defined in

[types/update.interface.ts:51](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L51)

___

### message

• `Optional` **message**: [`Message`](types.Message.md)

New incoming message of any kind - text, photo, sticker, etc.

#### Defined in

[types/update.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L31)

___

### myChatMember

• `Optional` **myChatMember**: [`ChatMemberUpdated`](types.ChatMemberUpdated.md)

The bot's chat member status was updated in a chat. For private chats, this
update is received only when the bot is blocked or unblocked by the user.

#### Defined in

[types/update.interface.ts:91](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L91)

___

### poll

• `Optional` **poll**: [`Poll`](types.Poll.md)

New poll state. Bots receive only updates about stopped polls and polls, which
are sent by the bot

#### Defined in

[types/update.interface.ts:79](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L79)

___

### pollAnswer

• `Optional` **pollAnswer**: [`PollAnswer`](types.PollAnswer.md)

A user changed their answer in a non-anonymous poll. Bots receive new votes
only in polls that were sent by the bot itself.

#### Defined in

[types/update.interface.ts:85](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L85)

___

### preCheckoutQuery

• `Optional` **preCheckoutQuery**: [`PreCheckoutQuery`](types.PreCheckoutQuery.md)

New incoming pre-checkout query. Contains full information about checkout

#### Defined in

[types/update.interface.ts:73](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L73)

___

### shippingQuery

• `Optional` **shippingQuery**: [`ShippingQuery`](types.ShippingQuery.md)

New incoming shipping query. Only for invoices with flexible price

#### Defined in

[types/update.interface.ts:68](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L68)

___

### updateId

• **updateId**: `number`

The update's unique identifier. Update identifiers start from a certain positive
number and increase sequentially. This ID becomes especially handy if you're
using webhooks, since it allows you to ignore repeated updates or to restore the
correct update sequence, should they get out of order. If there are no new
updates for at least a week, then identifier of the next update will be chosen
randomly instead of sequentially.

#### Defined in

[types/update.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/update.interface.ts#L26)
