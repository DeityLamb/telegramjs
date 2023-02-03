---
id: "options.GetUpdatesOptions"
title: "Interface: GetUpdatesOptions"
sidebar_label: "GetUpdatesOptions"
custom_edit_url: null
---

[options](../modules/options.md).GetUpdatesOptions

Use this method to receive incoming updates using long polling (wiki). Returns
an Array of Update objects.

**`See`**

[https://core.telegram.org/bots/api#getupdates](https://core.telegram.org/bots/api#getupdates)

## Properties

### allowedUpdates

• `Optional` **allowedUpdates**: `string`

A JSON-serialized list of the update types you want your bot to receive. For
example, specify ["message", "edited_channel_post", "callback_query"] to only
receive updates of these types. See Update for a complete list of available
update types. Specify an empty list to receive all update types except
chat_member (default). If not specified, the previous setting will be used.
Please note that this parameter doesn't affect updates created before the call
to the getUpdates, so unwanted updates may be received for a short period of
time.

#### Defined in

[options/get-updates-options.interface.ts:40](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-updates-options.interface.ts#L40)

___

### limit

• `Optional` **limit**: `number`

Limits the number of updates to be retrieved. Values between 1-100 are accepted.
Defaults to 100.

#### Defined in

[options/get-updates-options.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-updates-options.interface.ts#L22)

___

### offset

• `Optional` **offset**: `number`

Identifier of the first update to be returned. Must be greater by one than the
highest among the identifiers of previously received updates. By default,
updates starting with the earliest unconfirmed update are returned. An update is
considered confirmed as soon as getUpdates is called with an offset higher than
its update_id. The negative offset can be specified to retrieve updates starting
from -offset update from the end of the updates queue. All previous updates will
forgotten.

#### Defined in

[options/get-updates-options.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-updates-options.interface.ts#L16)

___

### timeout

• `Optional` **timeout**: `number`

Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling.
Should be positive, short polling should be used for testing purposes only.

#### Defined in

[options/get-updates-options.interface.ts:28](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-updates-options.interface.ts#L28)
