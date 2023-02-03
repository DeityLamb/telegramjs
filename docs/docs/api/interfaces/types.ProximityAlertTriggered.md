---
id: "types.ProximityAlertTriggered"
title: "Interface: ProximityAlertTriggered"
sidebar_label: "ProximityAlertTriggered"
custom_edit_url: null
---

[types](../modules/types.md).ProximityAlertTriggered

This object represents the content of a service message, sent whenever a user in
the chat triggers a proximity alert set by another user.

**`See`**

[https://core.telegram.org/bots/api#proximityalerttriggered](https://core.telegram.org/bots/api#proximityalerttriggered)

## Properties

### distance

• **distance**: `number`

The distance between the users

#### Defined in

[types/proximity-alert-triggered.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/proximity-alert-triggered.interface.ts#L22)

___

### traveler

• **traveler**: [`User`](types.User.md)

User that triggered the alert

#### Defined in

[types/proximity-alert-triggered.interface.ts:12](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/proximity-alert-triggered.interface.ts#L12)

___

### watcher

• **watcher**: [`User`](types.User.md)

User that set the alert

#### Defined in

[types/proximity-alert-triggered.interface.ts:17](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/proximity-alert-triggered.interface.ts#L17)
