---
id: "options.CreateForumTopicOptions"
title: "Interface: CreateForumTopicOptions"
sidebar_label: "CreateForumTopicOptions"
custom_edit_url: null
---

[options](../modules/options.md).CreateForumTopicOptions

Use this method to create a topic in a forum supergroup chat. The bot must be an
administrator in the chat for this to work and must have the can_manage_topics
administrator rights. Returns information about the created topic as a
ForumTopic object.

**`See`**

[https://core.telegram.org/bots/api#createforumtopic](https://core.telegram.org/bots/api#createforumtopic)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in
the format @supergroupusername)

#### Defined in

[options/create-forum-topic-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-forum-topic-options.interface.ts#L13)

___

### iconColor

• `Optional` **iconColor**: ``"one"``

Color of the topic icon in RGB format. Currently, must be one of 7322096
(0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98),
16749490 (0xFF93B2), or 16478047 (0xFB6F5F)

#### Defined in

[options/create-forum-topic-options.interface.ts:25](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-forum-topic-options.interface.ts#L25)

___

### iconCustomEmojiId

• `Optional` **iconCustomEmojiId**: `string`

Unique identifier of the custom emoji shown as the topic icon. Use
getForumTopicIconStickers to get all allowed custom emoji identifiers.

#### Defined in

[options/create-forum-topic-options.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-forum-topic-options.interface.ts#L31)

___

### name

• **name**: `string`

Topic name, 1-128 characters

#### Defined in

[options/create-forum-topic-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/create-forum-topic-options.interface.ts#L18)
