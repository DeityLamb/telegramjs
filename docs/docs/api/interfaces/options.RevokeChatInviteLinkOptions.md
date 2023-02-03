---
id: "options.RevokeChatInviteLinkOptions"
title: "Interface: RevokeChatInviteLinkOptions"
sidebar_label: "RevokeChatInviteLinkOptions"
custom_edit_url: null
---

[options](../modules/options.md).RevokeChatInviteLinkOptions

Use this method to revoke an invite link created by the bot. If the primary link
is revoked, a new link is automatically generated. The bot must be an
administrator in the chat for this to work and must have the appropriate
administrator rights. Returns the revoked invite link as ChatInviteLink object.

**`See`**

[https://core.telegram.org/bots/api#revokechatinvitelink](https://core.telegram.org/bots/api#revokechatinvitelink)

## Properties

### chatId

• **chatId**: `string` \| `number`

Unique identifier of the target chat or username of the target channel (in the
format @channelusername)

#### Defined in

[options/revoke-chat-invite-link-options.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/revoke-chat-invite-link-options.interface.ts#L13)

___

### inviteLink

• **inviteLink**: `string`

The invite link to revoke

#### Defined in

[options/revoke-chat-invite-link-options.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/revoke-chat-invite-link-options.interface.ts#L18)
