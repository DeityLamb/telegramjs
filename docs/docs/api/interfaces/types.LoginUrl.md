---
id: "types.LoginUrl"
title: "Interface: LoginUrl"
sidebar_label: "LoginUrl"
custom_edit_url: null
---

[types](../modules/types.md).LoginUrl

This object represents a parameter of the inline keyboard button used to
automatically authorize a user. Serves as a great replacement for the Telegram
Login Widget when the user is coming from Telegram. All the user needs to do is
tap/click a button and confirm that they want to log in:
Telegram apps support these buttons as of version 5.7.

**`See`**

[https://core.telegram.org/bots/api#loginurl](https://core.telegram.org/bots/api#loginurl)

## Properties

### botUsername

• `Optional` **botUsername**: `string`

Username of a bot, which will be used for user authorization. See Setting up a
bot for more details. If not specified, the current bot's username will be
assumed. The url's domain must be the same as the domain linked with the bot.
See Linking your domain to the bot for more details.

#### Defined in

[types/login-url.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/login-url.interface.ts#L31)

___

### forwardText

• `Optional` **forwardText**: `string`

New text of the button in forwarded messages.

#### Defined in

[types/login-url.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/login-url.interface.ts#L23)

___

### requestWriteAccess

• `Optional` **requestWriteAccess**: `boolean`

Pass True to request the permission for your bot to send messages to the user.

#### Defined in

[types/login-url.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/login-url.interface.ts#L36)

___

### url

• **url**: `string`

An HTTPS URL to be opened with user authorization data added to the query string
when the button is pressed. If the user refuses to provide authorization data,
the original URL without information about the user will be opened. The data
added is the same as described in Receiving authorization data. NOTE: You must
always check the hash of the received data to verify the authentication and the
integrity of the data as described in Checking authorization.

#### Defined in

[types/login-url.interface.ts:18](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/login-url.interface.ts#L18)
