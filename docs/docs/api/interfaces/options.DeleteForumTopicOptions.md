---
id: "options.DeleteForumTopicOptions"
title: "Interface: DeleteForumTopicOptions"
sidebar_label: "DeleteForumTopicOptions"
custom_edit_url: null
---

[options](../modules/options.md).DeleteForumTopicOptions

Use this method to delete a forum topic along with all its messages in a forum
supergroup chat. The bot must be an administrator in the chat for this to work
and must have the can_delete_messages administrator rights. Returns True on
success.

**`See`**

[https://core.telegram.org/bots/api#deleteforumtopic](https://core.telegram.org/bots/api#deleteforumtopic)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/delete-forum-topic-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/delete-forum-topic-options.interface.ts#L13)

___

### messageThreadId

• **messageThreadId**: `number`

Unique identifier for the target message thread of the forum topic

#### Defined in

[options/delete-forum-topic-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/delete-forum-topic-options.interface.ts#L18)
