---
id: "types.ResponseParameters"
title: "Interface: ResponseParameters"
sidebar_label: "ResponseParameters"
custom_edit_url: null
---

[types](../modules/types.md).ResponseParameters

Describes why a request was unsuccessful.

**`See`**

[https://core.telegram.org/bots/api#responseparameters](https://core.telegram.org/bots/api#responseparameters)

## Properties

### migrateToChatId

• `Optional` **migrateToChatId**: `number`

The group has been migrated to a supergroup with the specified identifier. This
number may have more than 32 significant bits and some programming languages may
have difficulty/silent defects in interpreting it. But it has at most 52
significant bits, so a signed 64-bit integer or double-precision float type are
safe for storing this identifier.

#### Defined in

[types/response-parameters.interface.ts:13](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/response-parameters.interface.ts#L13)

___

### retryAfter

• `Optional` **retryAfter**: `number`

In case of exceeding flood control, the number of seconds left to wait before
the request can be repeated

#### Defined in

[types/response-parameters.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/response-parameters.interface.ts#L19)
