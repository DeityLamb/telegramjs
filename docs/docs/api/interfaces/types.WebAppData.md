---
id: "types.WebAppData"
title: "Interface: WebAppData"
sidebar_label: "WebAppData"
custom_edit_url: null
---

[types](../modules/types.md).WebAppData

Describes data sent from a Web App to the bot.

**`See`**

[https://core.telegram.org/bots/api#webappdata](https://core.telegram.org/bots/api#webappdata)

## Properties

### buttonText

• **buttonText**: `string`

Text of the web_app keyboard button from which the Web App was opened. Be aware
that a bad client can send arbitrary data in this field.

#### Defined in

[types/web-app-data.interface.ts:15](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/web-app-data.interface.ts#L15)

___

### data

• **data**: `string`

The data. Be aware that a bad client can send arbitrary data in this field.

#### Defined in

[types/web-app-data.interface.ts:9](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/web-app-data.interface.ts#L9)
