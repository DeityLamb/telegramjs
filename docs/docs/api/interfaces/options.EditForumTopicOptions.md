---
id: "options.EditForumTopicOptions"
title: "Interface: EditForumTopicOptions"
sidebar_label: "EditForumTopicOptions"
custom_edit_url: null
---

[options](../modules/options.md).EditForumTopicOptions

Use this method to edit name and icon of a topic in a forum supergroup chat. The
bot must be an administrator in the chat for this to work and must have
can_manage_topics administrator rights, unless it is the creator of the topic.
Returns True on success.

**`See`**

[https://core.telegram.org/bots/api#editforumtopic](https://core.telegram.org/bots/api#editforumtopic)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/edit-forum-topic-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-forum-topic-options.interface.ts#L13)

___

### iconCustomEmojiId

• `Optional` **iconCustomEmojiId**: `string`

New unique identifier of the custom emoji shown as the topic icon. Use
getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an
empty string to remove the icon. If not specified, the current icon will be kept

#### Defined in

[options/edit-forum-topic-options.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-forum-topic-options.interface.ts#L31)

___

### messageThreadId

• **messageThreadId**: `number`

Unique identifier for the target message thread of the forum topic

#### Defined in

[options/edit-forum-topic-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-forum-topic-options.interface.ts#L18)

___

### name

• `Optional` **name**: `string`

New topic name, 0-128 characters. If not specified or empty, the current name of
the topic will be kept

#### Defined in

[options/edit-forum-topic-options.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/edit-forum-topic-options.interface.ts#L24)
