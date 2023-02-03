---
id: "options.ExportChatInviteLinkOptions"
title: "Interface: ExportChatInviteLinkOptions"
sidebar_label: "ExportChatInviteLinkOptions"
custom_edit_url: null
---

[options](../modules/options.md).ExportChatInviteLinkOptions

Use this method to generate a new primary invite link for a chat; any previously
generated primary link is revoked. The bot must be an administrator in the chat
for this to work and must have the appropriate administrator rights. Returns the
new invite link as String on success.

**`See`**

[https://core.telegram.org/bots/api#exportchatinvitelink](https://core.telegram.org/bots/api#exportchatinvitelink)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/export-chat-invite-link-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/export-chat-invite-link-options.interface.ts#L13)
