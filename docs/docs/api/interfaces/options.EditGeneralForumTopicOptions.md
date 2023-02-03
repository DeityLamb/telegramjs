---
id: "options.EditGeneralForumTopicOptions"
title: "Interface: EditGeneralForumTopicOptions"
sidebar_label: "EditGeneralForumTopicOptions"
custom_edit_url: null
---

[options](../modules/options.md).EditGeneralForumTopicOptions

Use this method to edit the name of the 'General' topic in a forum supergroup
chat. The bot must be an administrator in the chat for this to work and must
have can_manage_topics administrator rights. Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#editgeneralforumtopic](https://core.telegram.org/bots/api#editgeneralforumtopic)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/edit-general-forum-topic-options.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-general-forum-topic-options.interface.ts#L12)

___

### name

• **name**: `string`

New topic name, 1-128 characters

#### Defined in

[options/edit-general-forum-topic-options.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-general-forum-topic-options.interface.ts#L17)
