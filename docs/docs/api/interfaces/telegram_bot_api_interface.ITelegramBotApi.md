---
id: "telegram_bot_api_interface.ITelegramBotApi"
title: "Interface: ITelegramBotApi"
sidebar_label: "ITelegramBotApi"
custom_edit_url: null
---

[telegram-bot-api.interface](../modules/telegram_bot_api_interface.md).ITelegramBotApi

**`See`**

[https://core.telegram.org/bots/api](https://core.telegram.org/bots/api)

## Methods

### addStickerToSet

▸ **addStickerToSet**(`options`): `Promise`<`boolean`\>

if you pass FormData as parameter then all fields in snake_case

Use this method to add a new sticker to a set created by the bot.
You must use exactly one of the fields png_sticker, tgs_sticker, or webm_sticker.
Animated stickers can be added to animated sticker sets and only to them.
Animated sticker sets can have up to 50 stickers.
Static sticker sets can have up to 120 stickers.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#addstickertoset](https://core.telegram.org/bots/api#addstickertoset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AddStickerToSetOptions`](options.AddStickerToSetOptions.md) \| `FormData` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:918](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L918)

___

### answerCallbackQuery

▸ **answerCallbackQuery**(`options`): `Promise`<`boolean`\>

Use this method to send answers to callback queries sent from inline keyboards.
The answer will be displayed to the user as a notification at the top of the chat screen or as an alert.
On success, True is returned

**`See`**

[https://core.telegram.org/bots/api#answercallbackquery](https://core.telegram.org/bots/api#answercallbackquery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AnswerCallbackQueryOptions`](options.AnswerCallbackQueryOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:739](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L739)

___

### answerInlineQuery

▸ **answerInlineQuery**(`options`): `Promise`<`boolean`\>

Use this method to send answers to an inline query.
On success, True is returned.
No more than 50 results per query are allowed

**`See`**

[https://core.telegram.org/bots/api#answerinlinequery](https://core.telegram.org/bots/api#answerinlinequery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AnswerInlineQueryOptions`](options.AnswerInlineQueryOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:951](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L951)

___

### answerPreCheckoutQuery

▸ **answerPreCheckoutQuery**(`options`): `Promise`<`boolean`\>

Once the user has confirmed their payment and shipping details, the Bot API sends
the final confirmation in the form of an Update with the field pre_checkout_query.

Use this method to respond to such pre-checkout queries.
On success, True is returned.
Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent

**`See`**

[https://core.telegram.org/bots/api#answerprecheckoutquery](https://core.telegram.org/bots/api#answerprecheckoutquery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AnswerPreCheckoutQueryOptions`](options.AnswerPreCheckoutQueryOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:995](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L995)

___

### answerShippingQuery

▸ **answerShippingQuery**(`options`): `Promise`<`boolean`\>

If you sent an invoice requesting a shipping address andthe parameter is_flexible
was specified, the Bot API will send an Update with a shipping_query field to the bot.

Use this method to reply to shipping queries.
On success, True is returned

**`See`**

[https://core.telegram.org/bots/api#answershippingquery](https://core.telegram.org/bots/api#answershippingquery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AnswerShippingQueryOptions`](options.AnswerShippingQueryOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:984](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L984)

___

### answerWebAppQuery

▸ **answerWebAppQuery**(`options`): `Promise`<[`SentWebAppMessage`](types.SentWebAppMessage.md)\>

Use this method to set the result of an interaction with a Web App and send
a corresponding message on behalf of the user to the chat from which the query originated.

On success, a SentWebAppMessage object is returned

**`See`**

[https://core.telegram.org/bots/api#answerwebappquery](https://core.telegram.org/bots/api#answerwebappquery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AnswerWebAppQueryOptions`](options.AnswerWebAppQueryOptions.md) |

#### Returns

`Promise`<[`SentWebAppMessage`](types.SentWebAppMessage.md)\>

#### Defined in

[telegram-bot-api.interface.ts:960](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L960)

___

### approveChatJoinRequest

▸ **approveChatJoinRequest**(`options`): `Promise`<`boolean`\>

Use this method to approve a chat join request.
The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#approvechatjoinrequest](https://core.telegram.org/bots/api#approvechatjoinrequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ApproveChatJoinRequestOptions`](options.ApproveChatJoinRequestOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:470](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L470)

___

### banChatMember

▸ **banChatMember**(`options`): `Promise`<`boolean`\>

Use this method to ban a user in a group, a supergroup or a channel.

In the case of supergroups and channels,the user will not be able to return to
the chat on their own using invite links, etc., unless unbanned first.

The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#banchatmember](https://core.telegram.org/bots/api#banchatmember)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`BanChatMemberOptions`](options.BanChatMemberOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:354](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L354)

___

### banChatSenderChat

▸ **banChatSenderChat**(`options`): `Promise`<`boolean`\>

Use this method to ban a channel chat in a supergroup or a channel.

Until the chat is unbanned, the owner of the banned chat
won't be able to send messages on behalf of any of their channels.

The bot must be an administrator in the supergroup or channel for this
to work and must have the appropriate administrator rights.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#banchatsenderchat](https://core.telegram.org/bots/api#banchatsenderchat)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`BanChatSenderChatOptions`](options.BanChatSenderChatOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:405](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L405)

___

### close

▸ **close**(): `Promise`<`boolean`\>

Use this method to close the bot instance before moving it from one local server to another.
You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart.
The method will return error 429 in the first 10 minutes after the bot is launched.
Returns True on success.
Requires no parameters

**`See`**

[https://core.telegram.org/bots/api#close](https://core.telegram.org/bots/api#close)

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:135](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L135)

___

### closeForumTopic

▸ **closeForumTopic**(`options`): `Promise`<`boolean`\>

Use this method to close an open topic in a forum supergroup chat.

The bot must be an administrator in the chat for this to work and must have
the can_manage_topics administrator rights, unless it is the creator of the topic.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#closeforumtopic](https://core.telegram.org/bots/api#closeforumtopic)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CloseForumTopicOptions`](options.CloseForumTopicOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:644](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L644)

___

### closeGeneralForumTopic

▸ **closeGeneralForumTopic**(`options`): `Promise`<`boolean`\>

Use this method to close an open 'General' topic in a forum supergroup chat.

The bot must be an administrator in the chat for this to work and must have
the can_manage_topics administrator rights.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#closegeneralforumtopic](https://core.telegram.org/bots/api#closegeneralforumtopic)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CloseGeneralForumTopicOptions`](options.CloseGeneralForumTopicOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:696](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L696)

___

### copyMessage

▸ **copyMessage**(`options`): `Promise`<[`MessageId`](types.MessageId.md)\>

Use this method to copy messages of any kind.
Service messages and invoice messages can't be copied.
A quiz poll can be copied only if the value of the field correct_option_id is known to the bot.
The method is analogous to the method forwardMessage,
but the copied message doesn't have a link to the original message.
Returns the MessageId of the sent message on success

**`See`**

[https://core.telegram.org/bots/api#copymessage](https://core.telegram.org/bots/api#copymessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CopyMessageOptions`](options.CopyMessageOptions.md) |

#### Returns

`Promise`<[`MessageId`](types.MessageId.md)\>

#### Defined in

[telegram-bot-api.interface.ts:161](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L161)

___

### createChatInviteLink

▸ **createChatInviteLink**(`options`): `Promise`<[`ChatInviteLink`](types.ChatInviteLink.md)\>

Use this method to create an additional invite link for a chat.
The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
The link can be revoked using the method revokeChatInviteLink.
Returns the new invite link as ChatInviteLink object

**`See`**

[https://core.telegram.org/bots/api#createchatinvitelink](https://core.telegram.org/bots/api#createchatinvitelink)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateChatInviteLinkOptions`](options.CreateChatInviteLinkOptions.md) |

#### Returns

`Promise`<[`ChatInviteLink`](types.ChatInviteLink.md)\>

#### Defined in

[telegram-bot-api.interface.ts:445](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L445)

___

### createForumTopic

▸ **createForumTopic**(`options`): `Promise`<[`ForumTopic`](types.ForumTopic.md)\>

Use this method to create a topic in a forum supergroup chat.
The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights.
Returns information about the created topic as a ForumTopic object

**`See`**

[https://core.telegram.org/bots/api#createforumtopic](https://core.telegram.org/bots/api#createforumtopic)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateForumTopicOptions`](options.CreateForumTopicOptions.md) |

#### Returns

`Promise`<[`ForumTopic`](types.ForumTopic.md)\>

#### Defined in

[telegram-bot-api.interface.ts:622](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L622)

___

### createInvoiceLink

▸ **createInvoiceLink**(`options`): `Promise`<`string`\>

Use this method to create a link for an invoice.
Returns the created invoice link as String on success

**`See`**

[https://core.telegram.org/bots/api#createinvoicelink](https://core.telegram.org/bots/api#createinvoicelink)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateInvoiceLinkOptions`](options.CreateInvoiceLinkOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[telegram-bot-api.interface.ts:974](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L974)

___

### createNewStickerSet

▸ **createNewStickerSet**(`options`): `Promise`<`boolean`\>

if you pass FormData as parameter then all fields in snake_case

Use this method to create a new sticker set owned by a user.
The bot will be able to edit the sticker set thus created.
You must use exactly one of the fields png_sticker, tgs_sticker, or webm_sticker.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#createnewstickerset](https://core.telegram.org/bots/api#createnewstickerset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CreateNewStickerSetOptions`](options.CreateNewStickerSetOptions.md) \| `FormData` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:905](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L905)

___

### declineChatJoinRequest

▸ **declineChatJoinRequest**(`options`): `Promise`<`boolean`\>

Use this method to decline a chat join request.
The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#declinechatjoinrequest](https://core.telegram.org/bots/api#declinechatjoinrequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeclineChatJoinRequestOptions`](options.DeclineChatJoinRequestOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:478](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L478)

___

### deleteChatPhoto

▸ **deleteChatPhoto**(`options`): `Promise`<`boolean`\>

Use this method to delete a chat photo.
Photos can't be changed for private chats.
The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#deletechatphoto](https://core.telegram.org/bots/api#deletechatphoto)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteChatPhotoOptions`](options.DeleteChatPhotoOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:498](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L498)

___

### deleteChatStickerSet

▸ **deleteChatStickerSet**(`options`): `Promise`<`boolean`\>

Use this method to delete a group sticker set from a supergroup.
The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#deletechatstickerset](https://core.telegram.org/bots/api#deletechatstickerset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteChatStickerSetOptions`](options.DeleteChatStickerSetOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:606](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L606)

___

### deleteForumTopic

▸ **deleteForumTopic**(`options`): `Promise`<`boolean`\>

Use this method to delete a forum topic along with all its messages in a forum supergroup chat.
The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#deleteforumtopic](https://core.telegram.org/bots/api#deleteforumtopic)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteForumTopicOptions`](options.DeleteForumTopicOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:663](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L663)

___

### deleteMessage

▸ **deleteMessage**(`options`): `Promise`<`boolean`\>

Use this method to delete a message, including service messages, with the following limitations:
- A message can only be deleted if it was sent less than 48 hours ago.
- Service messages about a supergroup, channel, or forum topic creation can't be deleted.
- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
- Bots can delete outgoing messages in private chats, groups, and supergroups.
- Bots can delete incoming messages in private chats.
- Bots granted can_post_messages permissions can delete outgoing messages in channels.
- If the bot is an administrator of a group, it can delete any message there.
- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#deletemessage](https://core.telegram.org/bots/api#deletemessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteMessageOptions`](options.DeleteMessageOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:856](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L856)

___

### deleteMyCommands

▸ **deleteMyCommands**(`options`): `Promise`<`boolean`\>

Use this method to delete the list of the bot's commands for the given scope and user language.
After deletion, higher level commands will be shown to affected users.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#deletemycommands](https://core.telegram.org/bots/api#deletemycommands)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteMyCommandsOptions`](options.DeleteMyCommandsOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:755](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L755)

___

### deleteStickerFromSet

▸ **deleteStickerFromSet**(`options`): `Promise`<`boolean`\>

Use this method to delete a sticker from a set created by the bot.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#deletestickerfromset](https://core.telegram.org/bots/api#deletestickerfromset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteStickerFromSetOptions`](options.DeleteStickerFromSetOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:932](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L932)

___

### deleteWebhook

▸ **deleteWebhook**(`options`): `Promise`<`boolean`\>

Use this method to remove webhook integration if you decide to switch back to getUpdates.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#deletewebhook](https://core.telegram.org/bots/api#deletewebhook)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DeleteWebhookOptions`](options.DeleteWebhookOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:93](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L93)

___

### editChatInviteLink

▸ **editChatInviteLink**(`options`): `Promise`<[`ChatInviteLink`](types.ChatInviteLink.md)\>

Use this method to edit a non-primary invite link created by the bot.
The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
Returns the edited invite link as a ChatInviteLink object

**`See`**

[https://core.telegram.org/bots/api#editchatinvitelink](https://core.telegram.org/bots/api#editchatinvitelink)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EditChatInviteLinkOptions`](options.EditChatInviteLinkOptions.md) |

#### Returns

`Promise`<[`ChatInviteLink`](types.ChatInviteLink.md)\>

#### Defined in

[telegram-bot-api.interface.ts:453](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L453)

___

### editForumTopic

▸ **editForumTopic**(`options`): `Promise`<`boolean`\>

Use this method to edit name and icon of a topic in a forum supergroup chat.

The bot must be an administrator in the chat for this
to work and must have can_manage_topics administrator rights, unless it is the creator of the topic.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#editforumtopic](https://core.telegram.org/bots/api#editforumtopic)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EditForumTopicOptions`](options.EditForumTopicOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:633](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L633)

___

### editGeneralForumTopic

▸ **editGeneralForumTopic**(`options`): `Promise`<`boolean`\>

Use this method to edit the name of the 'General' topic in a forum supergroup chat.

The bot must be an administrator in the chat for this to work and must have
the can_manage_topics administrator rights.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#editgeneralforumtopic](https://core.telegram.org/bots/api#editgeneralforumtopic)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EditGeneralForumTopicOptions`](options.EditGeneralForumTopicOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:685](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L685)

___

### editMessageCaption

▸ **editMessageCaption**(`options`): `Promise`<`boolean` \| [`Message`](types.Message.md)\>

Use this method to edit captions of messages.
On success, if the edited message is not an inline message, the edited Message is returned,
otherwise True is returned

**`See`**

[https://core.telegram.org/bots/api#editmessagecaption](https://core.telegram.org/bots/api#editmessagecaption)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EditMessageCaptionOptions`](options.EditMessageCaptionOptions.md) |

#### Returns

`Promise`<`boolean` \| [`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:810](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L810)

___

### editMessageLiveLocation

▸ **editMessageLiveLocation**(`options`): `Promise`<`boolean` \| [`Message`](types.Message.md)\>

Use this method to edit live location messages.
A location can be edited until its live_period expires or editing
is explicitly disabled by a call to stopMessageLiveLocation.

On success, if the edited message is not an inline message,
the edited Message is returned, otherwise True is returned

**`See`**

[https://core.telegram.org/bots/api#editmessagelivelocation](https://core.telegram.org/bots/api#editmessagelivelocation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EditMessageLiveLocationOptions`](options.EditMessageLiveLocationOptions.md) |

#### Returns

`Promise`<`boolean` \| [`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:266](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L266)

___

### editMessageMedia

▸ **editMessageMedia**(`options`): `Promise`<`boolean` \| [`Message`](types.Message.md)\>

Use this method to edit animation, audio, document, photo, or video messages.

If a message is part of a message album, then it can be edited only to an audio for audio albums,
only to a document for document albums and to a photo or a video otherwise.

When an inline message is edited, a new file can't be uploaded;
use a previously uploaded file via its file_id or specify a URL.

On success, if the edited message is not an inline message,
the edited Message is returned, otherwise True is returned

**`See`**

[https://core.telegram.org/bots/api#editmessagemedia](https://core.telegram.org/bots/api#editmessagemedia)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EditMessageMediaOptions`](options.EditMessageMediaOptions.md) |

#### Returns

`Promise`<`boolean` \| [`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:825](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L825)

___

### editMessageReplyMarkup

▸ **editMessageReplyMarkup**(`options`): `Promise`<`boolean` \| [`Message`](types.Message.md)\>

Use this method to edit only the reply markup of messages.

On success, if the edited message is not an inline message,
the edited Message is returned, otherwise True is returned

**`See`**

[https://core.telegram.org/bots/api#editmessagereplymarkup](https://core.telegram.org/bots/api#editmessagereplymarkup)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EditMessageReplyMarkupOptions`](options.EditMessageReplyMarkupOptions.md) |

#### Returns

`Promise`<`boolean` \| [`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:834](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L834)

___

### editMessageText

▸ **editMessageText**(`options`): `Promise`<`boolean` \| [`Message`](types.Message.md)\>

Use this method to edit text and game messages.
On success, if the edited message is not an inline message, the edited Message is returned,
otherwise True is returned

**`See`**

[https://core.telegram.org/bots/api#editmessagetext](https://core.telegram.org/bots/api#editmessagetext)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EditMessageTextOptions`](options.EditMessageTextOptions.md) |

#### Returns

`Promise`<`boolean` \| [`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:802](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L802)

___

### exportChatInviteLink

▸ **exportChatInviteLink**(`options`): `Promise`<`string`\>

Use this method to generate a new primary invite link for a chat;
any previously generated primary link is revoked.

The bot must be an administrator in the chat for this to work
and must have the appropriate administrator rights.

Returns the new invite link as String on success

**`See`**

[https://core.telegram.org/bots/api#exportchatinvitelink](https://core.telegram.org/bots/api#exportchatinvitelink)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ExportChatInviteLinkOptions`](options.ExportChatInviteLinkOptions.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[telegram-bot-api.interface.ts:436](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L436)

___

### forwardMessage

▸ **forwardMessage**(`options`): `Promise`<[`Message`](types.Message.md)\>

Use this method to forward messages of any kind.
Service messages can't be forwarded.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#forwardmessage](https://core.telegram.org/bots/api#forwardmessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ForwardMessageOptions`](options.ForwardMessageOptions.md) |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:150](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L150)

___

### getChat

▸ **getChat**(`options`): `Promise`<[`Chat`](types.Chat.md)\>

Use this method to get up to date information about the chat
(current name of the user for one-on-one conversations, current username of a user, group or channel, etc.).
Returns a Chat object on success

**`See`**

[https://core.telegram.org/bots/api#getchat](https://core.telegram.org/bots/api#getchat)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetChatOptions`](options.GetChatOptions.md) |

#### Returns

`Promise`<[`Chat`](types.Chat.md)\>

#### Defined in

[telegram-bot-api.interface.ts:566](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L566)

___

### getChatAdministrators

▸ **getChatAdministrators**(`options`): `Promise`<[`ChatMember`](../modules/types.md#chatmember)[]\>

Use this method to get a list of administrators in a chat, which aren't bots.
Returns an Array of ChatMember objects

**`See`**

[https://core.telegram.org/bots/api#getchatadministrators](https://core.telegram.org/bots/api#getchatadministrators)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetChatAdministratorsOptions`](options.GetChatAdministratorsOptions.md) |

#### Returns

`Promise`<[`ChatMember`](../modules/types.md#chatmember)[]\>

#### Defined in

[telegram-bot-api.interface.ts:573](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L573)

___

### getChatMember

▸ **getChatMember**(`options`): `Promise`<[`ChatMember`](../modules/types.md#chatmember)\>

Use this method to get information about a member of a chat.
The method is guaranteed to work for other users, only if the bot is an administrator in the chat.
Returns a ChatMember object on success

**`See`**

[https://core.telegram.org/bots/api#getchatmember](https://core.telegram.org/bots/api#getchatmember)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetChatMemberOptions`](options.GetChatMemberOptions.md) |

#### Returns

`Promise`<[`ChatMember`](../modules/types.md#chatmember)\>

#### Defined in

[telegram-bot-api.interface.ts:588](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L588)

___

### getChatMemberCount

▸ **getChatMemberCount**(`options`): `Promise`<`number`\>

Use this method to get the number of members in a chat.
Returns Int on success

**`See`**

[https://core.telegram.org/bots/api#getchatmembercount](https://core.telegram.org/bots/api#getchatmembercount)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetChatMemberCountOptions`](options.GetChatMemberCountOptions.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

[telegram-bot-api.interface.ts:580](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L580)

___

### getChatMenuButton

▸ **getChatMenuButton**(`options`): `Promise`<[`MenuButton`](../modules/types.md#menubutton)\>

Use this method to get the current value of the bot's menu button in a private chat, or the default menu button.
Returns MenuButton on success

**`See`**

[https://core.telegram.org/bots/api#getchatmenubutton](https://core.telegram.org/bots/api#getchatmenubutton)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetChatMenuButtonOptions`](options.GetChatMenuButtonOptions.md) |

#### Returns

`Promise`<[`MenuButton`](../modules/types.md#menubutton)\>

#### Defined in

[telegram-bot-api.interface.ts:777](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L777)

___

### getCustomEmojiStickers

▸ **getCustomEmojiStickers**(`options`): `Promise`<[`Sticker`](types.Sticker.md)[]\>

Use this method to get information about custom emoji stickers by their identifiers.
Returns an Array of Sticker objects

**`See`**

[https://core.telegram.org/bots/api#getcustomemojistickers](https://core.telegram.org/bots/api#getcustomemojistickers)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetCustomEmojiStickersOptions`](options.GetCustomEmojiStickersOptions.md) |

#### Returns

`Promise`<[`Sticker`](types.Sticker.md)[]\>

#### Defined in

[telegram-bot-api.interface.ts:882](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L882)

___

### getFile

▸ **getFile**(`options`): `Promise`<[`File`](types.File.md)\>

Use this method to get basic information about a file and prepare it for downloading.
For the moment, bots can download files of up to 20MB in size.

On success, a File object is returned.

The file can then be downloaded via the link "https://api.telegram.org/file/bot[token];/[file_path]",
where [file_path]; is taken from the response.

It is guaranteed that the link will be valid for at least 1 hour.
When the link expires, a new one can be requested by calling getFile again.

Note: This function may not preserve the original file name and MIME type.
You should save the file's MIME type and name (if available) when the File object is received

**`See`**

[https://core.telegram.org/bots/api#getfile](https://core.telegram.org/bots/api#getfile)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetFileOptions`](options.GetFileOptions.md) |

#### Returns

`Promise`<[`File`](types.File.md)\>

#### Defined in

[telegram-bot-api.interface.ts:342](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L342)

___

### getForumTopicIconStickers

▸ **getForumTopicIconStickers**(): `Promise`<[`Sticker`](types.Sticker.md)[]\>

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user.
Requires no parameters.
Returns an Array of Sticker objects

**`See`**

[https://core.telegram.org/bots/api#getforumtopiciconstickers](https://core.telegram.org/bots/api#getforumtopiciconstickers)

#### Returns

`Promise`<[`Sticker`](types.Sticker.md)[]\>

#### Defined in

[telegram-bot-api.interface.ts:614](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L614)

___

### getGameHighScores

▸ **getGameHighScores**(`options`): `Promise`<[`GameHighScore`](types.GameHighScore.md)[]\>

if you pass FormData as parameter then all fields in snake_case

Use this method to get data for high score tables.
Will return the score of the specified user and several of their neighbors in a game.
Returns an Array of GameHighScore objects

**`See`**

[https://core.telegram.org/bots/api#getgamehighscores](https://core.telegram.org/bots/api#getgamehighscores)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetGameHighScoresOptions`](options.GetGameHighScoresOptions.md) |

#### Returns

`Promise`<[`GameHighScore`](types.GameHighScore.md)[]\>

#### Defined in

[telegram-bot-api.interface.ts:1034](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L1034)

___

### getMe

▸ **getMe**(): `Promise`<[`User`](types.User.md)\>

A simple method for testing your bot's authentication token.
Requires no parameters.
Returns basic information about the bot in form of a User object

**`See`**

[https://core.telegram.org/bots/api#getme](https://core.telegram.org/bots/api#getme)

#### Returns

`Promise`<[`User`](types.User.md)\>

#### Defined in

[telegram-bot-api.interface.ts:110](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L110)

___

### getMyCommands

▸ **getMyCommands**(`options`): `Promise`<[`BotCommand`](types.BotCommand.md)[]\>

Use this method to get the current list of the bot's commands for the given scope and user language.
Returns an Array of BotCommand objects.
If commands aren't set, an empty list is returned

**`See`**

[https://core.telegram.org/bots/api#getmycommands](https://core.telegram.org/bots/api#getmycommands)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetMyCommandsOptions`](options.GetMyCommandsOptions.md) |

#### Returns

`Promise`<[`BotCommand`](types.BotCommand.md)[]\>

#### Defined in

[telegram-bot-api.interface.ts:763](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L763)

___

### getMyDefaultAdministratorRights

▸ **getMyDefaultAdministratorRights**(`options`): `Promise`<[`ChatAdministratorRights`](types.ChatAdministratorRights.md)\>

Use this method to get the current default administrator rights of the bot.
Returns ChatAdministratorRights on success

**`See`**

[https://core.telegram.org/bots/api#getmydefaultadministratorrights](https://core.telegram.org/bots/api#getmydefaultadministratorrights)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetMyDefaultAdministratorRightsOptions`](options.GetMyDefaultAdministratorRightsOptions.md) |

#### Returns

`Promise`<[`ChatAdministratorRights`](types.ChatAdministratorRights.md)\>

#### Defined in

[telegram-bot-api.interface.ts:794](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L794)

___

### getStickerSet

▸ **getStickerSet**(`options`): `Promise`<[`StickerSet`](types.StickerSet.md)\>

Use this method to get a sticker set.
On success, a StickerSet object is returned

**`See`**

[https://core.telegram.org/bots/api#getstickerset](https://core.telegram.org/bots/api#getstickerset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetStickerSetOptions`](options.GetStickerSetOptions.md) |

#### Returns

`Promise`<[`StickerSet`](types.StickerSet.md)\>

#### Defined in

[telegram-bot-api.interface.ts:875](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L875)

___

### getUpdates

▸ **getUpdates**(`options`): `Promise`<[`Update`](types.Update.md)[]\>

Use this method to receive incoming updates using long polling (wiki).
Returns an Array of Update objects

**`See`**

[https://core.telegram.org/bots/api#getupdates](https://core.telegram.org/bots/api#getupdates)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetUpdatesOptions`](options.GetUpdatesOptions.md) |

#### Returns

`Promise`<[`Update`](types.Update.md)[]\>

#### Defined in

[telegram-bot-api.interface.ts:70](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L70)

___

### getUserProfilePhotos

▸ **getUserProfilePhotos**(`options`): `Promise`<[`UserProfilePhotos`](types.UserProfilePhotos.md)\>

Use this method to get a list of profile pictures for a user.
Returns a UserProfilePhotos object

**`See`**

[https://core.telegram.org/bots/api#getuserprofilephotos](https://core.telegram.org/bots/api#getuserprofilephotos)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`GetUserProfilePhotosOptions`](options.GetUserProfilePhotosOptions.md) |

#### Returns

`Promise`<[`UserProfilePhotos`](types.UserProfilePhotos.md)\>

#### Defined in

[telegram-bot-api.interface.ts:324](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L324)

___

### getWebhookInfo

▸ **getWebhookInfo**(): `Promise`<[`WebhookInfo`](types.WebhookInfo.md)\>

Use this method to get current webhook status.
Requires no parameters.
On success, returns a WebhookInfo object.
If the bot is using getUpdates, will return an object with the url field empty

**`See`**

[https://core.telegram.org/bots/api#getwebhookinfo](https://core.telegram.org/bots/api#getwebhookinfo)

#### Returns

`Promise`<[`WebhookInfo`](types.WebhookInfo.md)\>

#### Defined in

[telegram-bot-api.interface.ts:102](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L102)

___

### hideGeneralForumTopic

▸ **hideGeneralForumTopic**(`options`): `Promise`<`boolean`\>

Use this method to hide the 'General' topic in a forum supergroup chat.

The bot must be an administrator in the chat for this to work and must
have the can_manage_topics administrator rights.

The topic will be automatically closed if it was open.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#hidegeneralforumtopic](https://core.telegram.org/bots/api#hidegeneralforumtopic)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`HideGeneralForumTopicOptions`](options.HideGeneralForumTopicOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:720](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L720)

___

### leaveChat

▸ **leaveChat**(`options`): `Promise`<`boolean`\>

Use this method for your bot to leave a group, supergroup or channel.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#leavechat](https://core.telegram.org/bots/api#leavechat)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LeaveChatOptions`](options.LeaveChatOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:558](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L558)

___

### logOut

▸ **logOut**(): `Promise`<`boolean`\>

Use this method to log out from the cloud Bot API server before launching the bot locally.

You must log out the bot before running it locally,
otherwise there is no guarantee that the bot will receive updates.

After a successful call, you can immediately log in on a local server,
but will not be able to log in back to the cloud Bot API server for 10 minutes.

Returns True on success.
Requires no parameters

**`See`**

[https://core.telegram.org/bots/api#logout](https://core.telegram.org/bots/api#logout)

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:125](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L125)

___

### pinChatMessage

▸ **pinChatMessage**(`options`): `Promise`<`boolean`\>

Use this method to add a message to the list of pinned messages in a chat.

If the chat is not a private chat, the bot must be an administrator in the chat
for this to work and must have the 'can_pin_messages' administrator right
in a supergroup or 'can_edit_messages' administrator right in a channel.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#pinchatmessage](https://core.telegram.org/bots/api#pinchatmessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PinChatMessageOptions`](options.PinChatMessageOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:527](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L527)

___

### promoteChatMember

▸ **promoteChatMember**(`options`): `Promise`<`boolean`\>

Use this method to promote or demote a user in a supergroup or a channel.
The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
Pass False for all boolean parameters to demote a user.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#promotechatmember](https://core.telegram.org/bots/api#promotechatmember)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PromoteChatMemberOptions`](options.PromoteChatMemberOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:384](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L384)

___

### reopenForumTopic

▸ **reopenForumTopic**(`options`): `Promise`<`boolean`\>

Use this method to reopen a closed topic in a forum supergroup chat.

The bot must be an administrator in the chat for this to work and must have
the can_manage_topics administrator rights, unless it is the creator of the topic.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#reopenforumtopic](https://core.telegram.org/bots/api#reopenforumtopic)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ReopenForumTopicOptions`](options.ReopenForumTopicOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:655](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L655)

___

### reopenGeneralForumTopic

▸ **reopenGeneralForumTopic**(`options`): `Promise`<`boolean`\>

Use this method to reopen a closed 'General' topic in a forum supergroup chat.

The bot must be an administrator in the chat for this to work and must have
the can_manage_topics administrator rights.

The topic will be automatically unhidden if it was hidden.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#reopengeneralforumtopic](https://core.telegram.org/bots/api#reopengeneralforumtopic)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ReopenGeneralForumTopicOptions`](options.ReopenGeneralForumTopicOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:708](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L708)

___

### restrictChatMember

▸ **restrictChatMember**(`options`): `Promise`<`boolean`\>

Use this method to restrict a user in a supergroup.
The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights.
Pass True for all permissions to lift restrictions from a user.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#restrictchatmember](https://core.telegram.org/bots/api#restrictchatmember)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RestrictChatMemberOptions`](options.RestrictChatMemberOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:375](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L375)

___

### revokeChatInviteLink

▸ **revokeChatInviteLink**(`options`): `Promise`<[`ChatInviteLink`](types.ChatInviteLink.md)\>

Use this method to revoke an invite link created by the bot.
If the primary link is revoked, a new link is automatically generated.
The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
Returns the revoked invite link as ChatInviteLink object

**`See`**

[https://core.telegram.org/bots/api#revokechatinvitelink](https://core.telegram.org/bots/api#revokechatinvitelink)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RevokeChatInviteLinkOptions`](options.RevokeChatInviteLinkOptions.md) |

#### Returns

`Promise`<[`ChatInviteLink`](types.ChatInviteLink.md)\>

#### Defined in

[telegram-bot-api.interface.ts:462](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L462)

___

### sendAnimation

▸ **sendAnimation**(`options`): `Promise`<[`Message`](types.Message.md)\>

if you pass FormData as parameter then all fields in snake_case

Use this method to send animation files (GIF or H.
264/MPEG-4 AVC video without sound).
On success, the sent Message is returned.
Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future

**`See`**

[https://core.telegram.org/bots/api#sendanimation](https://core.telegram.org/bots/api#sendanimation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendAnimationOptions`](options.SendAnimationOptions.md) \| `FormData` |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:215](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L215)

___

### sendAudio

▸ **sendAudio**(`options`): `Promise`<[`Message`](types.Message.md)\>

if you pass FormData as parameter then all fields in snake_case

Use this method to send audio files, if you want Telegram clients to display them in the music player.
Your audio must be in the MP3 or M4A format.
On success, the sent Message is returned.
Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
For sending voice messages, use the sendVoice method instead

**`See`**

[https://core.telegram.org/bots/api#sendaudio](https://core.telegram.org/bots/api#sendaudio)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendAudioOptions`](options.SendAudioOptions.md) \| `FormData` |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:182](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L182)

___

### sendChatAction

▸ **sendChatAction**(`options`): `Promise`<`boolean`\>

Use this method when you need to tell the user that something is happening on the bot's side.

The status is set for 5 seconds or less
(when a message arrives from your bot, Telegram clients clear its typing status).

Returns True on success.

We only recommend using this method when a response
from the bot will take a noticeable amount of time to arrive

**`See`**

[https://core.telegram.org/bots/api#sendchataction](https://core.telegram.org/bots/api#sendchataction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendChatActionOptions`](options.SendChatActionOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:317](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L317)

___

### sendContact

▸ **sendContact**(`options`): `Promise`<[`Message`](types.Message.md)\>

Use this method to send phone contacts.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#sendcontact](https://core.telegram.org/bots/api#sendcontact)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendContactOptions`](options.SendContactOptions.md) |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:289](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L289)

___

### sendDice

▸ **sendDice**(`options`): `Promise`<[`Message`](types.Message.md)\>

Use this method to send an animated emoji that will display a random value.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#senddice](https://core.telegram.org/bots/api#senddice)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendDiceOptions`](options.SendDiceOptions.md) |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:303](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L303)

___

### sendDocument

▸ **sendDocument**(`options`): `Promise`<[`Message`](types.Message.md)\>

if you pass FormData as parameter then all fields in snake_case

Use this method to send general files.
On success, the sent Message is returned.
Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future

**`See`**

[https://core.telegram.org/bots/api#senddocument](https://core.telegram.org/bots/api#senddocument)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendDocumentOptions`](options.SendDocumentOptions.md) \| `FormData` |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:192](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L192)

___

### sendGame

▸ **sendGame**(`options`): `Promise`<[`Message`](types.Message.md)\>

Use this method to send a game.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#sendgame](https://core.telegram.org/bots/api#sendgame)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendGameOptions`](options.SendGameOptions.md) |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:1016](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L1016)

___

### sendInvoice

▸ **sendInvoice**(`options`): `Promise`<[`Message`](types.Message.md)\>

Use this method to send invoices.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#sendinvoice](https://core.telegram.org/bots/api#sendinvoice)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendInvoiceOptions`](options.SendInvoiceOptions.md) |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:967](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L967)

___

### sendLocation

▸ **sendLocation**(`options`): `Promise`<[`Message`](types.Message.md)\>

Use this method to send point on the map.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#sendlocation](https://core.telegram.org/bots/api#sendlocation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendLocationOptions`](options.SendLocationOptions.md) |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:255](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L255)

___

### sendMediaGroup

▸ **sendMediaGroup**(`options`): `Promise`<[`Message`](types.Message.md)\>

if you pass FormData as parameter then all fields in snake_case

Use this method to send a group of photos, videos, documents or audios as an album.
Documents and audio files can be only grouped in an album with messages of the same type.
On success, an array of Messages that were sent is returned

**`See`**

[https://core.telegram.org/bots/api#sendmediagroup](https://core.telegram.org/bots/api#sendmediagroup)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendMediaGroupOptions`](options.SendMediaGroupOptions.md) \| `FormData` |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:248](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L248)

___

### sendMessage

▸ **sendMessage**(`options`): `Promise`<[`Message`](types.Message.md)\>

Use this method to send text messages.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#sendmessage](https://core.telegram.org/bots/api#sendmessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendMessageOptions`](options.SendMessageOptions.md) |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:142](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L142)

___

### sendPhoto

▸ **sendPhoto**(`options`): `Promise`<[`Message`](types.Message.md)\>

if you pass FormData as parameter then all fields in snake_case

Use this method to send photos.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#sendphoto](https://core.telegram.org/bots/api#sendphoto)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendPhotoOptions`](options.SendPhotoOptions.md) \| `FormData` |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:170](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L170)

___

### sendPoll

▸ **sendPoll**(`options`): `Promise`<[`Message`](types.Message.md)\>

Use this method to send a native poll.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#sendpoll](https://core.telegram.org/bots/api#sendpoll)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendPollOptions`](options.SendPollOptions.md) |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:296](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L296)

___

### sendSticker

▸ **sendSticker**(`options`): `Promise`<[`Message`](types.Message.md)\>

if you pass FormData as parameter then all fields in snake_case

Use this method to send static.
WEBP, animated.
TGS, or video.
WEBM stickers.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#sendsticker](https://core.telegram.org/bots/api#sendsticker)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendStickerOptions`](options.SendStickerOptions.md) \| `FormData` |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:868](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L868)

___

### sendVenue

▸ **sendVenue**(`options`): `Promise`<[`Message`](types.Message.md)\>

Use this method to send information about a venue.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#sendvenue](https://core.telegram.org/bots/api#sendvenue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendVenueOptions`](options.SendVenueOptions.md) |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:282](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L282)

___

### sendVideo

▸ **sendVideo**(`options`): `Promise`<[`Message`](types.Message.md)\>

if you pass FormData as parameter then all fields in snake_case

Use this method to send video files,
Telegram clients support MPEG4 videos (other formats may be sent as Document).

On success, the sent Message is returned.
Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future

**`See`**

[https://core.telegram.org/bots/api#sendvideo](https://core.telegram.org/bots/api#sendvideo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendVideoOptions`](options.SendVideoOptions.md) \| `FormData` |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:204](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L204)

___

### sendVideoNote

▸ **sendVideoNote**(`options`): `Promise`<[`Message`](types.Message.md)\>

if you pass FormData as parameter then all fields in snake_case

As of [v4](https://telegram.org/blog/video-messages-and-telescope).
0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long.
Use this method to send video messages.
On success, the sent Message is returned

**`See`**

[https://core.telegram.org/bots/api#sendvideonote](https://core.telegram.org/bots/api#sendvideonote)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendVideoNoteOptions`](options.SendVideoNoteOptions.md) \| `FormData` |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:238](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L238)

___

### sendVoice

▸ **sendVoice**(`options`): `Promise`<[`Message`](types.Message.md)\>

if you pass FormData as parameter then all fields in snake_case

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message.
For this to work, your audio must be in an.
OGG file encoded with OPUS (other formats may be sent as Audio or Document).
On success, the sent Message is returned.
Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future

**`See`**

[https://core.telegram.org/bots/api#sendvoice](https://core.telegram.org/bots/api#sendvoice)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SendVoiceOptions`](options.SendVoiceOptions.md) \| `FormData` |

#### Returns

`Promise`<[`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:227](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L227)

___

### setChatAdministratorCustomTitle

▸ **setChatAdministratorCustomTitle**(`options`): `Promise`<`boolean`\>

Use this method to set a custom title for an administrator in a supergroup promoted by the bot.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setchatadministratorcustomtitle](https://core.telegram.org/bots/api#setchatadministratorcustomtitle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetChatAdministratorCustomTitleOptions`](options.SetChatAdministratorCustomTitleOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:391](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L391)

___

### setChatDescription

▸ **setChatDescription**(`options`): `Promise`<`boolean`\>

Use this method to change the description of a group, a supergroup or a channel.
The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setchatdescription](https://core.telegram.org/bots/api#setchatdescription)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetChatDescriptionOptions`](options.SetChatDescriptionOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:515](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L515)

___

### setChatMenuButton

▸ **setChatMenuButton**(`options`): `Promise`<`boolean`\>

Use this method to change the bot's menu button in a private chat, or the default menu button.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setchatmenubutton](https://core.telegram.org/bots/api#setchatmenubutton)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetChatMenuButtonOptions`](options.SetChatMenuButtonOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:770](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L770)

___

### setChatPermissions

▸ **setChatPermissions**(`options`): `Promise`<`boolean`\>

Use this method to set default chat permissions for all members.

The bot must be an administrator in the group or a supergroup
for this to work and must have the can_restrict_members administrator rights.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setchatpermissions](https://core.telegram.org/bots/api#setchatpermissions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetChatPermissionsOptions`](options.SetChatPermissionsOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:424](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L424)

___

### setChatPhoto

▸ **setChatPhoto**(`options`): `Promise`<`boolean`\>

if you pass FormData as parameter then all fields in snake_case

Use this method to set a new profile photo for the chat.
Photos can't be changed for private chats.
The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setchatphoto](https://core.telegram.org/bots/api#setchatphoto)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetChatPhotoOptions`](options.SetChatPhotoOptions.md) \| `FormData` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:489](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L489)

___

### setChatStickerSet

▸ **setChatStickerSet**(`options`): `Promise`<`boolean`\>

Use this method to set a new group sticker set for a supergroup.
The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setchatstickerset](https://core.telegram.org/bots/api#setchatstickerset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetChatStickerSetOptions`](options.SetChatStickerSetOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:597](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L597)

___

### setChatTitle

▸ **setChatTitle**(`options`): `Promise`<`boolean`\>

Use this method to change the title of a chat.
Titles can't be changed for private chats.
The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setchattitle](https://core.telegram.org/bots/api#setchattitle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetChatTitleOptions`](options.SetChatTitleOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:507](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L507)

___

### setGameScore

▸ **setGameScore**(`options`): `Promise`<`boolean` \| [`Message`](types.Message.md)\>

Use this method to set the score of the specified user in a game message.
On success, if the message is not an inline message, the Message is returned, otherwise True is returned.
Returns an error, if the new score is not greater than the user's current score in the chat and force is False

**`See`**

[https://core.telegram.org/bots/api#setgamescore](https://core.telegram.org/bots/api#setgamescore)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetGameScoreOptions`](options.SetGameScoreOptions.md) |

#### Returns

`Promise`<`boolean` \| [`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:1024](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L1024)

___

### setMyCommands

▸ **setMyCommands**(`options`): `Promise`<`boolean`\>

Use this method to change the list of the bot's commands.
See this manual for more details about bot commands.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setmycommands](https://core.telegram.org/bots/api#setmycommands)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetMyCommandsOptions`](options.SetMyCommandsOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:747](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L747)

___

### setMyDefaultAdministratorRights

▸ **setMyDefaultAdministratorRights**(`options`): `Promise`<`boolean`\>

Use this method to change the default administrator rights requested by
the bot when it's added as an administrator to groups or channels.

These rights will be suggested to users, but they are are free to modify the list before adding the bot.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setmydefaultadministratorrights](https://core.telegram.org/bots/api#setmydefaultadministratorrights)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetMyDefaultAdministratorRightsOptions`](options.SetMyDefaultAdministratorRightsOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:787](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L787)

___

### setPassportDataErrors

▸ **setPassportDataErrors**(`options`): `Promise`<`boolean`\>

Informs a user that some of the Telegram Passport elements they provided contains errors.

The user will not be able to re-submit their Passport to you until the errors are fixed
(the contents of the field for which you returned the error must change).

Returns True on success.
Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason.
For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc.
Supply some details in the error message to make sure the user knows how to correct the issues

**`See`**

[https://core.telegram.org/bots/api#setpassportdataerrors](https://core.telegram.org/bots/api#setpassportdataerrors)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetPassportDataErrorsOptions`](options.SetPassportDataErrorsOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:1009](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L1009)

___

### setStickerPositionInSet

▸ **setStickerPositionInSet**(`options`): `Promise`<`boolean`\>

Use this method to move a sticker in a set created by the bot to a specific position.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setstickerpositioninset](https://core.telegram.org/bots/api#setstickerpositioninset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetStickerPositionInSetOptions`](options.SetStickerPositionInSetOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:925](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L925)

___

### setStickerSetThumb

▸ **setStickerSetThumb**(`options`): `Promise`<`boolean`\>

if you pass FormData as parameter then all fields in snake_case

Use this method to set the thumbnail of a sticker set.
Animated thumbnails can be set for animated sticker sets only.
Video thumbnails can be set only for video sticker sets only.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#setstickersetthumb](https://core.telegram.org/bots/api#setstickersetthumb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetStickerSetThumbOptions`](options.SetStickerSetThumbOptions.md) \| `FormData` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:943](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L943)

___

### setWebhook

▸ **setWebhook**(`options`): `Promise`<`boolean`\>

Use this method to specify a URL and receive incoming updates via an outgoing webhook.

Whenever there is an update for the bot,
we will send an HTTPS POST request to the specified URL,
containing a JSON-serialized Update.

In case of an unsuccessful request, we will give up after a reasonable amount of attempts.
Returns True on success.

If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token.
If specified, the request will contain a header "X-Telegram-Bot-Api-Secret-Token" with the secret token as content

**`See`**

[https://core.telegram.org/bots/api#setwebhook](https://core.telegram.org/bots/api#setwebhook)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SetWebhookOptions`](options.SetWebhookOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:86](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L86)

___

### stopMessageLiveLocation

▸ **stopMessageLiveLocation**(`options`): `Promise`<`boolean` \| [`Message`](types.Message.md)\>

Use this method to stop updating a live location message before live_period expires.

On success, if the message is not an inline message,
the edited Message is returned, otherwise True is returned

**`See`**

[https://core.telegram.org/bots/api#stopmessagelivelocation](https://core.telegram.org/bots/api#stopmessagelivelocation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StopMessageLiveLocationOptions`](options.StopMessageLiveLocationOptions.md) |

#### Returns

`Promise`<`boolean` \| [`Message`](types.Message.md)\>

#### Defined in

[telegram-bot-api.interface.ts:275](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L275)

___

### stopPoll

▸ **stopPoll**(`options`): `Promise`<[`Poll`](types.Poll.md)\>

Use this method to stop a poll which was sent by the bot.
On success, the stopped Poll is returned

**`See`**

[https://core.telegram.org/bots/api#stoppoll](https://core.telegram.org/bots/api#stoppoll)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`StopPollOptions`](options.StopPollOptions.md) |

#### Returns

`Promise`<[`Poll`](types.Poll.md)\>

#### Defined in

[telegram-bot-api.interface.ts:841](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L841)

___

### unbanChatMember

▸ **unbanChatMember**(`options`): `Promise`<`boolean`\>

Use this method to unban a previously banned user in a supergroup or channel.
The user will not return to the group or channel automatically, but will be able to join via link, etc.
The bot must be an administrator for this to work.
By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it.
So if the user is a member of the chat they will also be removed from the chat.
If you don't want this, use the parameter only_if_banned.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#unbanchatmember](https://core.telegram.org/bots/api#unbanchatmember)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UnbanChatMemberOptions`](options.UnbanChatMemberOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:366](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L366)

___

### unbanChatSenderChat

▸ **unbanChatSenderChat**(`options`): `Promise`<`boolean`\>

Use this method to unban a previously banned channel chat in a supergroup or channel.
The bot must be an administrator for this to work and must have the appropriate administrator rights.
Returns True on success

**`See`**

[https://core.telegram.org/bots/api#unbanchatsenderchat](https://core.telegram.org/bots/api#unbanchatsenderchat)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UnbanChatSenderChatOptions`](options.UnbanChatSenderChatOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:413](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L413)

___

### unhideGeneralForumTopic

▸ **unhideGeneralForumTopic**(`options`): `Promise`<`boolean`\>

Use this method to unhide the 'General' topic in a forum supergroup chat.

The bot must be an administrator in the chat for this to work and must have
the can_manage_topics administrator rights.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#unhidegeneralforumtopic](https://core.telegram.org/bots/api#unhidegeneralforumtopic)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UnhideGeneralForumTopicOptions`](options.UnhideGeneralForumTopicOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:731](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L731)

___

### unpinAllChatMessages

▸ **unpinAllChatMessages**(`options`): `Promise`<`boolean`\>

Use this method to clear the list of pinned messages in a chat.

If the chat is not a private chat, the bot must be an administrator in
the chat for this to work and must have the 'can_pin_messages' administrator right
in a supergroup or 'can_edit_messages' administrator right in a channel.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#unpinallchatmessages](https://core.telegram.org/bots/api#unpinallchatmessages)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UnpinAllChatMessagesOptions`](options.UnpinAllChatMessagesOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:551](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L551)

___

### unpinAllForumTopicMessages

▸ **unpinAllForumTopicMessages**(`options`): `Promise`<`boolean`\>

Use this method to clear the list of pinned messages in a forum topic.

The bot must be an administrator in the chat for this to work and must have
the can_pin_messages administrator right in the supergroup.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#unpinallforumtopicmessages](https://core.telegram.org/bots/api#unpinallforumtopicmessages)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UnpinAllForumTopicMessagesOptions`](options.UnpinAllForumTopicMessagesOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:674](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L674)

___

### unpinChatMessage

▸ **unpinChatMessage**(`options`): `Promise`<`boolean`\>

Use this method to remove a message from the list of pinned messages in a chat.

If the chat is not a private chat, the bot must be an administrator in
the chat for this to work and must have the 'can_pin_messages' administrator right
in a supergroup or 'can_edit_messages' administrator right in a channel.

Returns True on success

**`See`**

[https://core.telegram.org/bots/api#unpinchatmessage](https://core.telegram.org/bots/api#unpinchatmessage)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UnpinChatMessageOptions`](options.UnpinChatMessageOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[telegram-bot-api.interface.ts:539](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L539)

___

### uploadStickerFile

▸ **uploadStickerFile**(`options`): `Promise`<[`File`](types.File.md)\>

if you pass FormData as parameter then all fields in snake_case

Use this method to upload a.
PNG file with a sticker for later use in createNewStickerSet and addStickerToSet methods
(can be used multiple times).

Returns the uploaded File on success

**`See`**

[https://core.telegram.org/bots/api#uploadstickerfile](https://core.telegram.org/bots/api#uploadstickerfile)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UploadStickerFileOptions`](options.UploadStickerFileOptions.md) \| `FormData` |

#### Returns

`Promise`<[`File`](types.File.md)\>

#### Defined in

[telegram-bot-api.interface.ts:894](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/telegram-bot-api.interface.ts#L894)
