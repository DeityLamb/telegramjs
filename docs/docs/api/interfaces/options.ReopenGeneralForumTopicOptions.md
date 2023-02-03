---
id: "options.ReopenGeneralForumTopicOptions"
title: "Interface: ReopenGeneralForumTopicOptions"
sidebar_label: "ReopenGeneralForumTopicOptions"
custom_edit_url: null
---

[options](../modules/options.md).ReopenGeneralForumTopicOptions

Use this method to reopen a closed 'General' topic in a forum supergroup chat.
The bot must be an administrator in the chat for this to work and must have the
can_manage_topics administrator rights. The topic will be automatically unhidden
if it was hidden. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#reopengeneralforumtopic](https://core.telegram.org/bots/api#reopengeneralforumtopic)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/reopen-general-forum-topic-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/reopen-general-forum-topic-options.interface.ts#L13)
