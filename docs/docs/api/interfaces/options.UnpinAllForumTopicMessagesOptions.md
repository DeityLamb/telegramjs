---
id: "options.UnpinAllForumTopicMessagesOptions"
title: "Interface: UnpinAllForumTopicMessagesOptions"
sidebar_label: "UnpinAllForumTopicMessagesOptions"
custom_edit_url: null
---

[options](../modules/options.md).UnpinAllForumTopicMessagesOptions

Use this method to clear the list of pinned messages in a forum topic. The bot
must be an administrator in the chat for this to work and must have the
can_pin_messages administrator right in the supergroup. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#unpinallforumtopicmessages](https://core.telegram.org/bots/api#unpinallforumtopicmessages)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/unpin-all-forum-topic-messages-options.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/unpin-all-forum-topic-messages-options.interface.ts#L12)

___

### messageThreadId

• **messageThreadId**: `number`

Unique identifier for the target message thread of the forum topic

#### Defined in

[options/unpin-all-forum-topic-messages-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/unpin-all-forum-topic-messages-options.interface.ts#L17)
