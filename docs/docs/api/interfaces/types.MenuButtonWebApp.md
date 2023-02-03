---
id: "types.MenuButtonWebApp"
title: "Interface: MenuButtonWebApp"
sidebar_label: "MenuButtonWebApp"
custom_edit_url: null
---

[types](../modules/types.md).MenuButtonWebApp

Represents a menu button, which launches a Web App.

**`See`**

[https://core.telegram.org/bots/api#menubuttonwebapp](https://core.telegram.org/bots/api#menubuttonwebapp)

## Properties

### text

• **text**: `string`

Text on the button

#### Defined in

[types/menu-button-web-app.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/menu-button-web-app.interface.ts#L16)

___

### type

• **type**: ``"web_app"``

Type of the button, must be web_app

#### Defined in

[types/menu-button-web-app.interface.ts:11](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/menu-button-web-app.interface.ts#L11)

___

### webApp

• **webApp**: [`WebAppInfo`](types.WebAppInfo.md)

Description of the Web App that will be launched when the user presses the
button. The Web App will be able to send an arbitrary message on behalf of the
user using the method answerWebAppQuery.

#### Defined in

[types/menu-button-web-app.interface.ts:23](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/menu-button-web-app.interface.ts#L23)
