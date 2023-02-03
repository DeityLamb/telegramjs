---
id: "options.DeclineChatJoinRequestOptions"
title: "Interface: DeclineChatJoinRequestOptions"
sidebar_label: "DeclineChatJoinRequestOptions"
custom_edit_url: null
---

[options](../modules/options.md).DeclineChatJoinRequestOptions

Use this method to decline a chat join request. The bot must be an administrator
in the chat for this to work and must have the can_invite_users administrator
right. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#declinechatjoinrequest](https://core.telegram.org/bots/api#declinechatjoinrequest)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/decline-chat-join-request-options.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/decline-chat-join-request-options.interface.ts#L12)

___

### userId

• **userId**: `number`

Unique identifier of the target user

#### Defined in

[options/decline-chat-join-request-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/decline-chat-join-request-options.interface.ts#L17)
