---
id: "types.InlineQueryResultVideo"
title: "Interface: InlineQueryResultVideo"
sidebar_label: "InlineQueryResultVideo"
custom_edit_url: null
---

[types](../modules/types.md).InlineQueryResultVideo

Represents a link to a page containing an embedded video player or a video file.
By default, this video file will be sent by the user with an optional caption.
Alternatively, you can use input_message_content to send a message with the
specified content instead of the video.

**`See`**

[https://core.telegram.org/bots/api#inlinequeryresultvideo](https://core.telegram.org/bots/api#inlinequeryresultvideo)

## Properties

### caption

• `Optional` **caption**: `string`

Caption of the video to be sent, 0-1024 characters after entities parsing

#### Defined in

[types/inline-query-result-video.interface.ts:46](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L46)

___

### captionEntities

• `Optional` **captionEntities**: [`MessageEntity`](types.MessageEntity.md)

List of special entities that appear in the caption, which can be specified
instead of parse_mode

#### Defined in

[types/inline-query-result-video.interface.ts:58](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L58)

___

### description

• `Optional` **description**: `string`

Short description of the result

#### Defined in

[types/inline-query-result-video.interface.ts:78](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L78)

___

### id

• **id**: `string`

Unique identifier for this result, 1-64 bytes

#### Defined in

[types/inline-query-result-video.interface.ts:21](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L21)

___

### inputMessageContent

• `Optional` **inputMessageContent**: [`InputMessageContent`](../modules/types.md#inputmessagecontent)

Content of the message to be sent instead of the video. This field is required
if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a
YouTube video).

#### Defined in

[types/inline-query-result-video.interface.ts:90](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L90)

___

### mimeType

• **mimeType**: `string`

MIME type of the content of the video URL, "text/html" or "video/mp4"

#### Defined in

[types/inline-query-result-video.interface.ts:31](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L31)

___

### parseMode

• `Optional` **parseMode**: `string`

Mode for parsing entities in the video caption. See formatting options for more
details.

#### Defined in

[types/inline-query-result-video.interface.ts:52](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L52)

___

### replyMarkup

• `Optional` **replyMarkup**: [`InlineKeyboardMarkup`](types.InlineKeyboardMarkup.md)

Inline keyboard attached to the message

#### Defined in

[types/inline-query-result-video.interface.ts:83](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L83)

___

### thumbUrl

• **thumbUrl**: `string`

URL of the thumbnail (JPEG only) for the video

#### Defined in

[types/inline-query-result-video.interface.ts:36](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L36)

___

### title

• **title**: `string`

Title for the result

#### Defined in

[types/inline-query-result-video.interface.ts:41](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L41)

___

### type

• **type**: ``"video"``

Type of the result, must be video

#### Defined in

[types/inline-query-result-video.interface.ts:16](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L16)

___

### videoDuration

• `Optional` **videoDuration**: `number`

Video duration in seconds

#### Defined in

[types/inline-query-result-video.interface.ts:73](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L73)

___

### videoHeight

• `Optional` **videoHeight**: `number`

Video height

#### Defined in

[types/inline-query-result-video.interface.ts:68](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L68)

___

### videoUrl

• **videoUrl**: `string`

A valid URL for the embedded video player or video file

#### Defined in

[types/inline-query-result-video.interface.ts:26](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L26)

___

### videoWidth

• `Optional` **videoWidth**: `number`

Video width

#### Defined in

[types/inline-query-result-video.interface.ts:63](https://github.com/DeityLamb/telegramjs/blob/32b4cca/packages/common/lib/interfaces/types/inline-query-result-video.interface.ts#L63)
