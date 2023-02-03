---
id: "options.HideGeneralForumTopicOptions"
title: "Interface: HideGeneralForumTopicOptions"
sidebar_label: "HideGeneralForumTopicOptions"
custom_edit_url: null
---

[options](../modules/options.md).HideGeneralForumTopicOptions

Use this method to hide the 'General' topic in a forum supergroup chat. The bot
must be an administrator in the chat for this to work and must have the
can_manage_topics administrator rights. The topic will be automatically closed
if it was open. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#hidegeneralforumtopic](https://core.telegram.org/bots/api#hidegeneralforumtopic)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/hide-general-forum-topic-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/hide-general-forum-topic-options.interface.ts#L13)
