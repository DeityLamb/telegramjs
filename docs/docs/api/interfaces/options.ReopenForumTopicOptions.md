---
id: "options.ReopenForumTopicOptions"
title: "Interface: ReopenForumTopicOptions"
sidebar_label: "ReopenForumTopicOptions"
custom_edit_url: null
---

[options](../modules/options.md).ReopenForumTopicOptions

Use this method to reopen a closed topic in a forum supergroup chat. The bot
must be an administrator in the chat for this to work and must have the
can_manage_topics administrator rights, unless it is the creator of the topic.
Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#reopenforumtopic](https://core.telegram.org/bots/api#reopenforumtopic)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/reopen-forum-topic-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/reopen-forum-topic-options.interface.ts#L13)

___

### messageThreadId

• **messageThreadId**: `number`

Unique identifier for the target message thread of the forum topic

#### Defined in

[options/reopen-forum-topic-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/reopen-forum-topic-options.interface.ts#L18)
