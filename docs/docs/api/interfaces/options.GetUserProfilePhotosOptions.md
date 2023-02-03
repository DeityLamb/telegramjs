---
id: "options.GetUserProfilePhotosOptions"
title: "Interface: GetUserProfilePhotosOptions"
sidebar_label: "GetUserProfilePhotosOptions"
custom_edit_url: null
---

[options](../modules/options.md).GetUserProfilePhotosOptions

Use this method to get a list of profile pictures for a user. Returns a
UserProfilePhotos object.

**`See`**

[https://core.telegram.org/bots/api#getuserprofilephotos](https://core.telegram.org/bots/api#getuserprofilephotos)

## Properties

### limit

• `Optional` **limit**: `number`

Limits the number of photos to be retrieved. Values between 1-100 are accepted.
Defaults to 100.

#### Defined in

[options/get-user-profile-photos-options.interface.ts:22](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-user-profile-photos-options.interface.ts#L22)

___

### offset

• `Optional` **offset**: `number`

Sequential number of the first photo to be returned. By default, all photos are
returned.

#### Defined in

[options/get-user-profile-photos-options.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-user-profile-photos-options.interface.ts#L16)

___

### userId

• **userId**: `number`

Unique identifier of the target user

#### Defined in

[options/get-user-profile-photos-options.interface.ts:10](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/options/get-user-profile-photos-options.interface.ts#L10)
