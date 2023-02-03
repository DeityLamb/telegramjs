---
id: "types.WebhookInfo"
title: "Interface: WebhookInfo"
sidebar_label: "WebhookInfo"
custom_edit_url: null
---

[types](../modules/types.md).WebhookInfo

Describes the current status of a webhook.

**`See`**

[https://core.telegram.org/bots/api#webhookinfo](https://core.telegram.org/bots/api#webhookinfo)

## Properties

### allowedUpdates

• `Optional` **allowedUpdates**: `string`

A list of update types the bot is subscribed to. Defaults to all update types
except chat_member

#### Defined in

[types/webhook-info.interface.ts:54](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/webhook-info.interface.ts#L54)

___

### hasCustomCertificate

• **hasCustomCertificate**: `boolean`

True, if a custom certificate was provided for webhook certificate checks

#### Defined in

[types/webhook-info.interface.ts:14](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/webhook-info.interface.ts#L14)

___

### ipAddress

• `Optional` **ipAddress**: `string`

Currently used webhook IP address

#### Defined in

[types/webhook-info.interface.ts:24](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/webhook-info.interface.ts#L24)

___

### lastErrorDate

• `Optional` **lastErrorDate**: `number`

Unix time for the most recent error that happened when trying to deliver an
update via webhook

#### Defined in

[types/webhook-info.interface.ts:30](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/webhook-info.interface.ts#L30)

___

### lastErrorMessage

• `Optional` **lastErrorMessage**: `string`

Error message in human-readable format for the most recent error that happened
when trying to deliver an update via webhook

#### Defined in

[types/webhook-info.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/webhook-info.interface.ts#L36)

___

### lastSynchronizationErrorDate

• `Optional` **lastSynchronizationErrorDate**: `number`

Unix time of the most recent error that happened when trying to synchronize
available updates with Telegram datacenters

#### Defined in

[types/webhook-info.interface.ts:42](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/webhook-info.interface.ts#L42)

___

### maxConnections

• `Optional` **maxConnections**: `number`

The maximum allowed number of simultaneous HTTPS connections to the webhook for
update delivery

#### Defined in

[types/webhook-info.interface.ts:48](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/webhook-info.interface.ts#L48)

___

### pendingUpdateCount

• **pendingUpdateCount**: `number`

Number of updates awaiting delivery

#### Defined in

[types/webhook-info.interface.ts:19](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/webhook-info.interface.ts#L19)

___

### url

• **url**: `string`

Webhook URL, may be empty if webhook is not set up

#### Defined in

[types/webhook-info.interface.ts:9](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/webhook-info.interface.ts#L9)
